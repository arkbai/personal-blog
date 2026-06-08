/**
 * Obsidian → Blog 批量导入脚本
 *
 * 用法：
 *   node scripts/import-obsidian.mjs <源路径> <目标路径> [图片目录...]
 *
 * 示例：
 *   node scripts/import-obsidian.mjs "F:/Obsidian/408/计网" cs-notes/计算机网络
 *   node scripts/import-obsidian.mjs "F:/Obsidian/408/计网" cs-notes/计算机网络 "F:/附件" "F:/图片"
 *   node scripts/import-obsidian.mjs "F:/Obsidian/随笔" essays "F:/附件"
 */

import { readFileSync, writeFileSync, copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join, basename, relative, dirname, isAbsolute } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const CONTENT_DIR = join(ROOT, 'src', 'content')
const IMAGES_DIR = join(ROOT, 'public', 'images', 'obsidian')

// ── Parse CLI args ──
const args = process.argv.slice(2)
if (args.length < 2) {
  console.log('用法: node scripts/import-obsidian.mjs <源路径> <目标路径> [图片目录...]')
  console.log('')
  console.log('  源路径    Obsidian 仓库中笔记的文件夹绝对路径')
  console.log('  目标路径  博客中的目标位置，可以是:')
  console.log('             - 相对路径 (相对于 src/content/)，如 cs-notes/计算机网络')
  console.log('             - 绝对路径，如 D:/blog/src/content/cs-notes/计算机网络')
  console.log('  图片目录  额外的附件文件夹路径 (可多个)，用于搜索 ![[图片]] 引用的文件')
  console.log('')
  console.log('示例:')
  console.log('  node scripts/import-obsidian.mjs "F:/Obsidian/408/计网" cs-notes/计算机网络')
  console.log('  node scripts/import-obsidian.mjs "F:/Obsidian/408/计网" cs-notes/计算机网络 "F:/附件" "F:/图片"')
  process.exit(1)
}

const sourcePath = args[0]
const targetArg = args[1]

// Target: if absolute path, use as-is; otherwise relative to CONTENT_DIR
const targetDir = isAbsolute(targetArg) ? targetArg : join(CONTENT_DIR, targetArg)

// Extra image directories: remaining args that are paths (contain drive letter or /)
const extraDirs = args.slice(2).filter(a => /[:\/]/.test(a))

// Target name for display
const targetDisplay = targetDir.startsWith(CONTENT_DIR)
  ? relative(CONTENT_DIR, targetDir).replace(/\\/g, '/')
  : targetDir

// Ensure directories exist
mkdirSync(targetDir, { recursive: true })
mkdirSync(IMAGES_DIR, { recursive: true })

// ── Scan images ──
const imageMap = new Map()

function scanImages(dir, depth = 0) {
  if (depth > 5) return
  let entries
  try { entries = readdirSync(dir) } catch { return }
  for (const entry of entries) {
    const full = join(dir, entry)
    if (entry.startsWith('.')) continue
    try {
      const st = statSync(full)
      if (st.isDirectory()) { scanImages(full, depth + 1) }
      else if (/\.(png|jpg|jpeg|gif|svg|webp|bmp)$/i.test(entry)) {
        if (!imageMap.has(entry)) imageMap.set(entry, full)
      }
    } catch {}
  }
}

console.log('正在扫描图片文件...')
scanImages(sourcePath)
for (const dir of extraDirs) {
  console.log(`  附件目录: ${dir}`)
  scanImages(dir)
}
console.log(`  共找到 ${imageMap.size} 个图片`)

// ── Convert content ──
function convertObsidian(content) {
  // ![[image.png|size]] → Markdown image, copy to obsidian folder
  content = content.replace(/!\[\[([^\]]+)\]\]/g, (match, ref) => {
    const cleanRef = ref.split('|')[0].trim()
    const imageName = basename(cleanRef)
    const safeName = imageName.replace(/\s+/g, '-')
    if (imageMap.has(imageName)) {
      try { copyFileSync(imageMap.get(imageName), join(IMAGES_DIR, safeName)) } catch {}
    } else if (imageMap.has(cleanRef)) {
      try { copyFileSync(imageMap.get(cleanRef), join(IMAGES_DIR, safeName)) } catch {}
    }
    return `![${imageName}](/personal-blog/images/obsidian/${encodeURIComponent(safeName)})`
  })

  // [[Page]] or [[Page|alias]] → markdown link
  content = content.replace(/\[\[([^\]|!]+?)(?:\|([^\]]+?))?\]\]/g, (match, page, alias) => {
    const label = alias || page
    const slug = page.trim().replace(/\s+/g, '-')
    return `[${label}](./${slug})`
  })

  // > [!note] → > **NOTE**
  const calloutMap = {
    note: 'NOTE', warning: 'WARNING', tip: 'TIP', info: 'INFO',
    danger: 'DANGER', example: 'EXAMPLE', abstract: 'ABSTRACT',
    todo: 'TODO', success: 'SUCCESS', question: 'QUESTION',
    failure: 'FAILURE', bug: 'BUG', quote: 'QUOTE',
  }
  content = content.replace(/^\s*>\s*\[!(\w+)\]\s*(.*)$/gm, (_, type, rest) => {
    const label = calloutMap[type.toLowerCase()] || type.toUpperCase()
    return `> **${label}** ${rest}`
  })

  content = content.replace(/%%%.*?%%%/gs, '')
  content = content.replace(/%%.*?%%/gs, '')

  return content
}

// ── Process files ──
function processDirectory(dir, depth = 0) {
  let entries
  try { entries = readdirSync(dir) } catch { return }
  for (const entry of entries) {
    const full = join(dir, entry)
    if (entry.startsWith('.')) continue
    try {
      const st = statSync(full)
      if (st.isDirectory() && depth < 4) { processDirectory(full, depth + 1) }
      else if (entry.endsWith('.md')) {
        console.log(`处理: ${relative(sourcePath, full)}`)
        const content = convertObsidian(readFileSync(full, 'utf-8'))
        writeFileSync(join(targetDir, entry), content, 'utf-8')
        console.log(`  → ${targetDisplay}/${entry}`)
      }
    } catch (err) {
      console.error(`  跳过 ${entry}: ${err.message}`)
    }
  }
}

console.log(`\n正在从 "${sourcePath}" 导入到 ${targetDisplay} ...`)
processDirectory(sourcePath)

console.log('\n✅ 导入完成！')
console.log(`  内容 → ${targetDisplay}`)
console.log('  图片 → public/images/obsidian/')

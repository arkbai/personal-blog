/**
 * Obsidian → Blog 批量导入脚本
 *
 * 功能：
 *   1. 转换 ![[图片]] 为 Markdown 图片语法，并复制图片到 public/images/obsidian/
 *   2. 转换 [[Wiki链接]] 为 Markdown 链接
 *   3. 转换 Obsidian callout (> [!note]) 为标准 blockquote
 *   4. 支持指定额外的附件目录来搜索图片
 *   5. 支持指定子文件夹，分类归档
 *
 * 用法：
 *   node scripts/import-obsidian.mjs <Obsidian路径> <目标分类> [子文件夹名] [附件目录...]
 *
 * 示例：
 *   node scripts/import-obsidian.mjs "D:/Obsidian/计网" cs-notes 计算机网络
 *   node scripts/import-obsidian.mjs "D:/Obsidian/计网" cs-notes 计算机网络 "D:/附件" "D:/图片"
 */

import { readFileSync, writeFileSync, copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join, basename, relative, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const CONTENT_DIR = join(ROOT, 'src', 'content')
const IMAGES_DIR = join(ROOT, 'public', 'images', 'obsidian')

// ── Parse CLI args ──
const args = process.argv.slice(2)
if (args.length < 2) {
  console.log('用法: node scripts/import-obsidian.mjs <Obsidian路径> <目标分类> [子文件夹名] [附件目录...]')
  console.log('分类: essays | cs-notes | oc-settings')
  console.log('示例: node scripts/import-obsidian.mjs "D:/Obsidian/计网" cs-notes 计算机网络 "D:/附件"')
  process.exit(1)
}

const [vaultPath, category] = args
const subfolder = args[2] && !args[2].includes(':') ? args[2] : null
const extraDirs = args.slice(subfolder ? 3 : 2).filter(a => a.includes(':'))

const validCategories = ['essays', 'cs-notes', 'oc-settings']
if (!validCategories.includes(category)) {
  console.error(`错误: 分类必须是 ${validCategories.join(' | ')} 之一`)
  process.exit(1)
}

// Ensure target directories exist
const targetDir = subfolder ? join(CONTENT_DIR, category, subfolder) : join(CONTENT_DIR, category)
mkdirSync(targetDir, { recursive: true })
mkdirSync(IMAGES_DIR, { recursive: true })

// ── Scan image files from vault + extra attachment dirs ──
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
      if (st.isDirectory()) {
        scanImages(full, depth + 1)
      } else if (/\.(png|jpg|jpeg|gif|svg|webp|bmp)$/i.test(entry)) {
        if (!imageMap.has(entry)) {
          imageMap.set(entry, full)
        }
      }
    } catch {}
  }
}

console.log('正在扫描图片文件...')
scanImages(vaultPath)
for (const dir of extraDirs) {
  console.log(`  扫描附件目录: ${dir}`)
  scanImages(dir)
}
console.log(`  共找到 ${imageMap.size} 个图片文件`)

// ── Convert Obsidian content ──
function convertObsidian(content) {
  // 1. Convert image embeds: ![[image.png]] → ![](/images/obsidian/image.png)
  content = content.replace(/!\[\[([^\]]+)\]\]/g, (match, ref) => {
    const cleanRef = ref.split('|')[0].trim()
    let imageName = basename(cleanRef)
    // Sanitize: replace spaces with hyphens
    const safeName = imageName.replace(/\s+/g, '-')
    if (imageMap.has(imageName)) {
      try { copyFileSync(imageMap.get(imageName), join(IMAGES_DIR, safeName)) } catch {}
    } else if (imageMap.has(cleanRef)) {
      try { copyFileSync(imageMap.get(cleanRef), join(IMAGES_DIR, safeName)) } catch {}
    }
    return `![${imageName}](/personal-blog/images/obsidian/${encodeURIComponent(safeName)})`
  })

  // 2. Convert wiki links: [[Page]] or [[Page|alias]]
  content = content.replace(/\[\[([^\]|!]+?)(?:\|([^\]]+?))?\]\]/g, (match, page, alias) => {
    const label = alias || page
    const slug = page.trim().replace(/\s+/g, '-')
    return `[${label}](./${slug})`
  })

  // 3. Convert callouts
  const calloutMap = {
    note: 'NOTE', warning: 'WARNING', tip: 'TIP', info: 'INFO',
    danger: 'DANGER', example: 'EXAMPLE', abstract: 'ABSTRACT',
    todo: 'TODO', success: 'SUCCESS', question: 'QUESTION',
    failure: 'FAILURE', bug: 'BUG', quote: 'QUOTE',
  }
  content = content.replace(/^\s*>\s*\[!(\w+)\]\s*(.*)$/gm, (match, type, rest) => {
    const label = calloutMap[type.toLowerCase()] || type.toUpperCase()
    return `> **${label}** ${rest}`
  })

  // 4. Remove Obsidian comments
  content = content.replace(/%%%.*?%%%/gs, '')
  content = content.replace(/%%.*?%%/gs, '')

  return content
}

// ── Process markdown files ──
function processDirectory(dir, depth = 0) {
  let entries
  try { entries = readdirSync(dir) } catch { return }
  for (const entry of entries) {
    const full = join(dir, entry)
    if (entry.startsWith('.')) continue
    try {
      const st = statSync(full)
      if (st.isDirectory() && depth < 4) {
        processDirectory(full, depth + 1)
      } else if (entry.endsWith('.md')) {
        console.log(`处理: ${relative(vaultPath, full)}`)
        let content = readFileSync(full, 'utf-8')
        content = convertObsidian(content)
        const targetPath = join(targetDir, entry)
        writeFileSync(targetPath, content, 'utf-8')
        console.log(`  → src/content/${category}/${subfolder ? subfolder + '/' : ''}${entry}`)
      }
    } catch (err) {
      console.error(`  跳过 ${entry}: ${err.message}`)
    }
  }
}

console.log(`\n正在从 "${vaultPath}" 导入到 src/content/${category}/${subfolder ? subfolder + '/' : ''}...`)
processDirectory(vaultPath)

console.log('\n✅ 导入完成！')
console.log(`  内容 → src/content/${category}/${subfolder ? subfolder + '/' : ''}`)
console.log('  图片 → public/images/obsidian/')

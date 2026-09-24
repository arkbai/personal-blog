/**
 * 408 考研复习笔记批量导入脚本
 *
 * 将 Obsidian 仓库中 4 个带 "-408" 后缀的笔记库导入博客 cs-notes：
 *   - 复制图片到 public/images/obsidian/ 并把相对地址改写为 images/obsidian/...
 *   - 转换 Obsidian 特有语法（callout、图片宽度、frontmatter 等）
 *
 * 用法：
 *   node scripts/import-408.mjs
 */

import {
  readFileSync, writeFileSync, copyFileSync, mkdirSync,
  readdirSync, statSync, existsSync, rmSync,
} from 'fs'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const CONTENT_DIR = join(ROOT, 'src', 'content', 'cs-notes')
const IMAGES_DIR = join(ROOT, 'public', 'images', 'obsidian')

const VAULT = 'F:/Obsidian files/MyDomain'
const SRC_ROOT = join(VAULT, '408考研复习')
const VAULT_IMAGES = join(VAULT, 'A一次元', 'images')

// 4 个 -408 笔记库 → 目标文件夹名（去掉 -408 后缀）
const MAPPINGS = [
  ['操作系统-408', '操作系统'],
  ['数据结构-408', '数据结构'],
  ['计算机网络-408', '计算机网络'],
  ['计组原理-408', '计组原理'],
]

const IMG_RE = /\.(png|jpe?g|gif|svg|webp|bmp|ico)$/i

// ── 扫描图片，建立 basename → 完整路径 的索引 ──
const imageIndex = new Map() // basename -> full path

function scanImages(dir, depth = 0) {
  if (depth > 6 || !existsSync(dir)) return
  let entries
  try { entries = readdirSync(dir) } catch { return }
  for (const entry of entries) {
    if (entry.startsWith('.')) continue
    const full = join(dir, entry)
    let st
    try { st = statSync(full) } catch { continue }
    if (st.isDirectory()) {
      scanImages(full, depth + 1)
    } else if (IMG_RE.test(entry)) {
      if (!imageIndex.has(entry)) imageIndex.set(entry, full)
    }
  }
}

console.log('正在扫描图片...')
scanImages(VAULT_IMAGES)
for (const [srcName] of MAPPINGS) {
  scanImages(join(SRC_ROOT, srcName))
}
console.log(`  共索引 ${imageIndex.size} 张图片\n`)

// ── 图片引用转换 ──
const missingImages = new Set()
let copiedCount = 0

function safeName(name) {
  return name.replace(/\s+/g, '-')
}

function resolveAndRewrite(ref) {
  // ref 是 ![...](...) 里 () 内的路径
  let decoded = ref
  try { decoded = decodeURIComponent(ref) } catch {}
  decoded = decoded.replace(/\\/g, '/')

  const name = basename(decoded)
  if (!name || !IMG_RE.test(name)) return null

  const src = imageIndex.get(name)
  if (!src) {
    missingImages.add(name)
    return null
  }

  const finalName = safeName(name)
  const dest = join(IMAGES_DIR, finalName)
  if (!existsSync(dest)) {
    copyFileSync(src, dest)
    copiedCount++
  }
  return `images/obsidian/${encodeURIComponent(finalName)}`
}

function convertContent(content) {
  // 1) 去除 YAML frontmatter
  content = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')

  // 2) 图片引用 ![...](...)（含宽度语法、空 alt、../ 前缀）
  content = content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, ref) => {
    const url = resolveAndRewrite(ref)
    const altTrim = alt.trim()

    if (!url) return match // 找不到图片，保持原样

    // 处理宽度：![300](...) 或 ![说明|300](...)
    const pipeIdx = altTrim.indexOf('|')
    let label = altTrim
    let width = null
    if (pipeIdx >= 0) {
      label = altTrim.slice(0, pipeIdx).trim()
      width = altTrim.slice(pipeIdx + 1).trim()
    } else if (/^\d+$/.test(altTrim)) {
      width = altTrim
      label = ''
    }

    if (width && /^\d+$/.test(width)) {
      const altAttr = label ? ` alt="${label.replace(/"/g, '&quot;')}"` : ''
      return `<img src="${url}" width="${width}"${altAttr}>`
    }
    return `![${label}](${url})`
  })

  // 3) Wiki 图片嵌入 ![[image.png|size]]（防御性处理，本项目当前未使用）
  content = content.replace(/!\[\[([^\]]+)\]\]/g, (match, inner) => {
    const clean = inner.split('|')[0].trim()
    const url = resolveAndRewrite(clean)
    if (!url) return match
    return `![](${url})`
  })

  // 4) Callout：> [!NOTE] → > **NOTE**
  const calloutMap = {
    note: 'NOTE', warning: 'WARNING', tip: 'TIP', info: 'INFO',
    danger: 'DANGER', example: 'EXAMPLE', abstract: 'ABSTRACT',
    todo: 'TODO', success: 'SUCCESS', question: 'QUESTION',
    failure: 'FAILURE', bug: 'BUG', quote: 'QUOTE',
  }
  content = content.replace(/^(\s*)>\s*\[!(\w+)\]\s*(.*)$/gm, (_, indent, type, rest) => {
    const label = calloutMap[type.toLowerCase()] || type.toUpperCase()
    return `${indent}> **${label}** ${rest}`
  })

  // 5) 去除 Obsidian 注释
  content = content.replace(/%%%.*?%%%/gs, '')
  content = content.replace(/%%.*?%%/gs, '')

  return content
}

// ── 清空旧内容并导入 ──
console.log('正在清空旧内容...')
if (existsSync(CONTENT_DIR)) {
  rmSync(CONTENT_DIR, { recursive: true, force: true })
}
mkdirSync(CONTENT_DIR, { recursive: true })
mkdirSync(IMAGES_DIR, { recursive: true })

let totalFiles = 0
for (const [srcName, targetName] of MAPPINGS) {
  const srcDir = join(SRC_ROOT, srcName)
  const targetDir = join(CONTENT_DIR, targetName)
  if (!existsSync(srcDir)) {
    console.log(`  ⚠ 源目录不存在: ${srcDir}`)
    continue
  }
  mkdirSync(targetDir, { recursive: true })

  let entries
  try { entries = readdirSync(srcDir) } catch { continue }
  for (const entry of entries) {
    if (!entry.endsWith('.md')) continue
    const full = join(srcDir, entry)
    const content = convertContent(readFileSync(full, 'utf-8'))
    writeFileSync(join(targetDir, entry), content, 'utf-8')
    console.log(`  ${targetName}/${entry}`)
    totalFiles++
  }
}

console.log(`\n✅ 导入完成：${totalFiles} 个笔记文件`)
console.log(`  复制图片 ${copiedCount} 张`)
if (missingImages.size > 0) {
  console.log(`\n⚠ 以下 ${missingImages.size} 张图片未找到（笔记中引用但仓库里不存在）：`)
  for (const name of missingImages) console.log(`   - ${name}`)
}

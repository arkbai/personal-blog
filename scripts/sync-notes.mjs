#!/usr/bin/env node
/**
 * Obsidian → 博客 增量同步脚本（内容哈希 + 清单）
 *
 * 只处理"变了"的文件，而不是每次全量重导：
 *   - 笔记：对源 .md 算内容哈希，与清单比对，只重写「新增/改动」的笔记，删除源里已消失的
 *   - 图片：对引用到的图片算哈希，只在「首次出现 / 内容变化」时转 webp，删除不再被引用的
 *
 * 用法：
 *   node scripts/sync-notes.mjs             # 增量同步
 *   node scripts/sync-notes.mjs --dry-run   # 只报告将改动什么，不写文件
 *   node scripts/sync-notes.mjs --force     # 忽略清单，全量重转（含重新编码所有图片）
 *
 * 说明：
 *   - 清单 scripts/.sync-manifest.json 记录每个源文件的哈希，是增量判断的依据
 *   - 首次运行（无清单）会建立基线：已存在的 webp 视为已同步、只补缺失的图片；
 *     若首次运行前就已经改动过图片内容，请用 --force 强制重转一次
 */

import {
  readFileSync, writeFileSync, copyFileSync, mkdirSync,
  readdirSync, statSync, existsSync, rmSync,
} from 'fs'
import { createHash } from 'crypto'
import { join, basename, extname, relative, resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const CONTENT_DIR = join(ROOT, 'src', 'content')
const IMAGES_DIR = join(ROOT, 'public', 'images')
const MANIFEST_PATH = join(__dirname, '.sync-manifest.json')

// ═══════════════════ 配置（按需修改）═══════════════════
const VAULT = 'F:/Obsidian files/MyDomain'
// 源库文件夹 → 博客内容文件夹（相对 src/content/）
const MAPPINGS = [
  { src: '408考研复习/操作系统-408', target: 'cs-notes/操作系统' },
  { src: '408考研复习/数据结构-408', target: 'cs-notes/数据结构' },
  { src: '408考研复习/计算机网络-408', target: 'cs-notes/计算机网络' },
  { src: '408考研复习/计组原理-408', target: 'cs-notes/计组原理' },
]
// 附件目录（相对 VAULT），用于解析 ![[图片]] 和相对路径
const IMAGE_DIRS = ['A一次元/images']

const WEBP_EXT = /\.(png|jpe?g|bmp)$/i // 这些转 webp
const IMG_EXT = /\.(png|jpe?g|gif|svg|webp|bmp)$/i
// ═════════════════════════════════════════════════════

const DRY_RUN = process.argv.includes('--dry-run')
const FORCE = process.argv.includes('--force')

// ── 工具 ──
const md5 = (buf) => createHash('md5').update(buf).digest('hex')
const hashFile = (p) => md5(readFileSync(p))

function* walk(dir) {
  let entries
  try { entries = readdirSync(dir, { withFileTypes: true }) } catch { return }
  for (const e of entries) {
    if (e.name.startsWith('.')) continue
    const full = join(dir, e.name)
    if (e.isDirectory()) yield* walk(full)
    else yield full
  }
}

// ── 清单 ──
const manifest = existsSync(MANIFEST_PATH) && !FORCE
  ? JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8'))
  : { notes: {}, images: {} }

// ── 图片 basename 索引（解析 ![[x.png]] / 相对路径）──
const imageIndex = new Map()
function buildImageIndex() {
  const roots = [
    ...IMAGE_DIRS.map((d) => join(VAULT, d)),
    ...MAPPINGS.map((m) => join(VAULT, m.src)),
  ]
  for (const r of roots) {
    for (const f of walk(r)) {
      if (IMG_EXT.test(f) && !imageIndex.has(basename(f))) imageIndex.set(basename(f), f)
    }
  }
}

function resolveImageRef(ref, noteAbsDir) {
  let d = ref
  try { d = decodeURIComponent(d) } catch {}
  d = d.replace(/\\/g, '/').trim()
  if (!d) return null
  const asVault = join(VAULT, d)
  if (existsSync(asVault) && statSync(asVault).isFile()) return asVault
  const asNote = resolve(noteAbsDir, d)
  if (existsSync(asNote) && statSync(asNote).isFile()) return asNote
  const name = basename(d)
  if (imageIndex.has(name)) return imageIndex.get(name)
  return null
}

// 源图片 → 目标文件名：xxx.png → xxx.webp；gif/svg/webp 原样保留
function targetNameFor(srcAbs) {
  const ext = extname(srcAbs).toLowerCase()
  const base = basename(srcAbs, ext)
  return base + (WEBP_EXT.test(ext) ? '.webp' : ext)
}

// ── 内容转换（对齐仓库已提交格式）──
const CALLOUT = {
  note: 'NOTE', warning: 'WARNING', tip: 'TIP', info: 'INFO',
  danger: 'DANGER', example: 'EXAMPLE', abstract: 'ABSTRACT',
  todo: 'TODO', success: 'SUCCESS', question: 'QUESTION',
  failure: 'FAILURE', bug: 'BUG', quote: 'QUOTE',
}

function convertContent(raw, noteAbsDir) {
  let c = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')

  // 图片：![159](路径) / ![说明|159](路径) → <img width>；![说明](路径) → 常规
  c = c.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (m, alt, ref) => {
    const src = resolveImageRef(ref, noteAbsDir)
    if (!src) return m
    const url = `images/${encodeURIComponent(targetNameFor(src))}`
    const a = alt.trim()
    let label = a, width = null
    const pipe = a.indexOf('|')
    if (pipe >= 0) { label = a.slice(0, pipe).trim(); width = a.slice(pipe + 1).trim() }
    else if (/^\d+$/.test(a)) { width = a; label = '' }
    if (width && /^\d+$/.test(width)) {
      const aa = label ? ` alt="${label.replace(/"/g, '&quot;')}"` : ''
      return `<img src="${url}" width="${width}"${aa}>`
    }
    return `![${label}](${url})`
  })

  // 图片：![[x.png|size]]
  c = c.replace(/!\[\[([^\]]+)\]\]/g, (m, inner) => {
    const src = resolveImageRef(inner.split('|')[0].trim(), noteAbsDir)
    if (!src) return m
    return `![](${`images/${encodeURIComponent(targetNameFor(src))}`})`
  })

  // 标注：> [!note] → > **NOTE**
  c = c.replace(/^(\s*)>\s*\[!(\w+)\]\s*(.*)$/gm, (_, ind, type, rest) => {
    const label = CALLOUT[type.toLowerCase()] || type.toUpperCase()
    return `${ind}> **${label}** ${rest}`
  })

  // Obsidian 注释
  c = c.replace(/%%%.*?%%%/gs, '').replace(/%%.*?%%/gs, '')
  return c
}

// ── 主流程 ──
async function main() {
  buildImageIndex()

  // 1) 扫描源笔记 + 收集引用图片
  const srcNotes = new Map() // srcRel -> { hash, target }
  const referencedImages = new Set() // srcAbs

  for (const { src, target } of MAPPINGS) {
    const srcDir = join(VAULT, src)
    if (!existsSync(srcDir)) { console.warn(`⚠ 源目录不存在: ${srcDir}`); continue }
    for (const f of walk(srcDir)) {
      if (!f.endsWith('.md')) continue
      const srcRel = relative(VAULT, f).replace(/\\/g, '/')
      const raw = readFileSync(f, 'utf-8')
      srcNotes.set(srcRel, { hash: md5(raw), target: `${target}/${basename(f)}` })
      const noteDir = dirname(f)
      raw.replace(/!\[[^\]]*\]\(([^)]+)\)/g, (m, ref) => {
        const s = resolveImageRef(ref, noteDir); if (s) referencedImages.add(s); return m
      })
      raw.replace(/!\[\[([^\]]+)\]\]/g, (m, inner) => {
        const s = resolveImageRef(inner.split('|')[0].trim(), noteDir); if (s) referencedImages.add(s); return m
      })
    }
  }

  // 2) 笔记 diff
  let noteWrite = 0, noteSkip = 0, noteDel = 0
  const newNotes = {}
  for (const [srcRel, info] of srcNotes) {
    newNotes[srcRel] = info
    const prev = manifest.notes[srcRel]
    if (prev && prev.hash === info.hash) { noteSkip++; continue }
    const srcAbs = join(VAULT, srcRel)
    const content = convertContent(readFileSync(srcAbs, 'utf-8'), dirname(srcAbs))
    const targetAbs = join(CONTENT_DIR, info.target)
    const identical = existsSync(targetAbs) && readFileSync(targetAbs, 'utf-8') === content
    if (!identical) {
      console.log(`${DRY_RUN ? '[dry]' : '写'}笔记  ${info.target}`)
      if (!DRY_RUN) { mkdirSync(dirname(targetAbs), { recursive: true }); writeFileSync(targetAbs, content, 'utf-8') }
    }
    noteWrite++
  }
  for (const [srcRel, info] of Object.entries(manifest.notes)) {
    if (srcNotes.has(srcRel)) continue
    const targetAbs = join(CONTENT_DIR, info.target)
    if (existsSync(targetAbs)) {
      console.log(`${DRY_RUN ? '[dry]' : '删'}笔记  ${info.target}`)
      if (!DRY_RUN) rmSync(targetAbs)
    }
    noteDel++
  }

  // 3) 图片 diff
  let imgConv = 0, imgSkip = 0, imgSeed = 0, imgDel = 0
  const newImages = {}
  for (const srcAbs of referencedImages) {
    const srcRel = relative(VAULT, srcAbs).replace(/\\/g, '/')
    const targetName = targetNameFor(srcAbs)
    const hash = hashFile(srcAbs)
    newImages[srcRel] = { hash, target: targetName }
    const prev = manifest.images[srcRel]
    const targetAbs = join(IMAGES_DIR, targetName)
    const targetExists = existsSync(targetAbs)

    if (prev && prev.hash === hash && targetExists) { imgSkip++; continue }
    if (!prev && targetExists) { imgSeed++; continue } // 首次运行：已存在的视为已同步

    console.log(`${DRY_RUN ? '[dry]' : '转'}图片  ${targetName}`)
    if (!DRY_RUN) {
      mkdirSync(IMAGES_DIR, { recursive: true })
      const ext = extname(srcAbs).toLowerCase()
      if (WEBP_EXT.test(ext)) {
        const quality = /\.(jpe?g)$/i.test(ext) ? 78 : 85
        await sharp(srcAbs).resize({ width: 1600, withoutEnlargement: true }).webp({ quality }).toFile(targetAbs)
      } else {
        copyFileSync(srcAbs, targetAbs)
      }
    }
    imgConv++
  }
  for (const [srcRel, info] of Object.entries(manifest.images)) {
    if (newImages[srcRel]) continue
    const targetAbs = join(IMAGES_DIR, info.target)
    if (existsSync(targetAbs)) {
      console.log(`${DRY_RUN ? '[dry]' : '删'}图片  ${info.target}`)
      if (!DRY_RUN) rmSync(targetAbs)
    }
    imgDel++
  }

  // 4) 写清单
  if (!DRY_RUN) {
    writeFileSync(MANIFEST_PATH, JSON.stringify({ notes: newNotes, images: newImages }, null, 2) + '\n')
  }

  console.log(`\n笔记：改 ${noteWrite} / 跳过 ${noteSkip} / 删 ${noteDel}`)
  console.log(`图片：转 ${imgConv} / 跳过 ${imgSkip} / 沿用 ${imgSeed} / 删 ${imgDel}`)
  console.log(`${DRY_RUN ? '（dry-run，未写任何文件）' : '✅ 同步完成'}`)
}

main().catch((e) => { console.error(e); process.exit(1) })

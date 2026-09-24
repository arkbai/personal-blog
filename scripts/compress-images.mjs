/**
 * 批量压缩 public/images 下的图片：
 *   - .png/.jpg/.jpeg/.bmp 统一转为 .webp
 *   - 宽度超过 1600px 的等比缩到 1600px
 *   - 照片类（.jpg/.jpeg）quality 78，截图类（.png）quality 85
 * 用法：node scripts/compress-images.mjs
 */
import { readdirSync, statSync, unlinkSync, existsSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const IMAGES = join(__dirname, '..', 'public', 'images')

const TARGET_EXTS = new Set(['.png', '.jpg', '.jpeg', '.bmp'])
const MAX_WIDTH = 1600

let converted = 0, skipped = 0, failed = 0
let totalBefore = 0, totalAfter = 0

function* walk(dir) {
  let entries
  try { entries = readdirSync(dir, { withFileTypes: true }) } catch { return }
  for (const e of entries) {
    const p = join(dir, e.name)
    if (e.isDirectory()) yield* walk(p)
    else yield p
  }
}

async function main() {
  for (const file of walk(IMAGES)) {
    const ext = extname(file).toLowerCase()
    if (!TARGET_EXTS.has(ext)) continue

    const before = statSync(file).size
    const isPhoto = ext === '.jpg' || ext === '.jpeg'
    const quality = isPhoto ? 78 : 85
    const out = file.slice(0, -ext.length) + '.webp'

    try {
      const img = sharp(file)
      const meta = await img.metadata()
      let pipeline = img
      if (meta.width > MAX_WIDTH) {
        pipeline = pipeline.resize({ width: MAX_WIDTH })
      }
      await pipeline.webp({ quality }).toFile(out)

      const after = statSync(out).size
      totalBefore += before
      totalAfter += after
      converted++
      unlinkSync(file)

      if (converted % 100 === 0) console.log(`  ...已处理 ${converted} 张`)
    } catch (err) {
      failed++
      console.error(`  ✗ 失败: ${file} — ${err.message}`)
    }
  }

  console.log('\n=== 压缩完成 ===')
  console.log(`转换 ${converted} 张，跳过 ${skipped} 张，失败 ${failed} 张`)
  console.log(`体积: ${(totalBefore / 1048576).toFixed(1)} MB → ${(totalAfter / 1048576).toFixed(1)} MB (${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}% 缩减)`)
}

main().catch((e) => { console.error(e); process.exit(1) })

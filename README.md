# arkbai-page（个人博客）

基于 Vue 3 + Vite + Tailwind CSS v4 的个人博客。正文以 Markdown 形式存放在 `src/content/`，构建时打包，部署到 GitHub Pages（gh-pages 分支）。

## 技术栈

- Vue 3（`<script setup>`）+ vue-router
- Vite 8 + @vitejs/plugin-vue
- Tailwind CSS v4
- marked（Markdown 渲染）+ KaTeX（数学公式）
- sharp（图片转 webp，仅脚本用）

## 常用命令

```bash
npm install        # 安装依赖
npm run dev        # 本地开发 http://localhost:5173
npm run build      # 构建到 dist/
npm run preview    # 本地预览构建产物
npm run deploy     # 构建 + 发布到 GitHub Pages
npm run sync       # 增量同步 Obsidian 笔记（见下）
```

## 目录结构

```
src/
  content/          # 博客正文（Markdown），按栏目分目录
    cs-notes/       # 计算机笔记（操作系统 / 数据结构 / 计算机网络 / 计组原理）
    essays/         # 随笔
    oc-settings/    # OC 设定
  pages/            # 页面组件
  components/       # 通用组件（NavBar / LayoutWithSidebar / FocusMode 等）
  composables/      # 组合式函数（useMarkdown 渲染核心）
  assets/fonts/     # 字体（含子集化后的 ZhouFang-subset.woff2）
public/
  images/           # 图片（笔记图片压缩后放这里，直接 images/xxx.webp 引用）
  music/ gif/ fonts/ icons.svg favicon.svg ...
scripts/            # 同步 / 导入 / 压缩脚本（见下）
```

## 内容同步：Obsidian → 博客

笔记的唯一真源是本地 Obsidian 仓库 `F:/Obsidian files/MyDomain`。博客只读 `src/content/**/*.md`，因此 Obsidian 笔记需转换后同步进来。

### 推荐：增量同步 `sync-notes.mjs`

`scripts/sync-notes.mjs` 用「内容哈希 + 清单」做增量同步，**只处理变了的文件**：

- 笔记：对源 `.md` 算 MD5，与 `scripts/.sync-manifest.json` 记录的哈希比对，只重写「新增/改动」的笔记，删除源里已消失的；
- 图片：只对被笔记引用的图片算哈希，仅在首次出现或内容变化时转 webp，删除不再被引用的。

```bash
npm run sync                            # 增量同步
node scripts/sync-notes.mjs --dry-run   # 只预览将改动什么，不写文件
node scripts/sync-notes.mjs --force     # 忽略清单，全量重转（含重新编码所有图片）
```

**配置**：改脚本顶部的 `VAULT`（vault 路径）、`MAPPINGS`（源文件夹 → 博客栏目）、`IMAGE_DIRS`（附件目录）。

**转换规则**（对齐博客已提交格式）：
- `![[图片.png|宽]]` / `![宽](路径)` → `<img src="images/xxx.webp" width="宽">`
- `> [!note]` → `> **NOTE**`
- 去掉 YAML frontmatter、`%%注释%%`
- 图片统一转 webp（png/jpg/bmp），gif/svg 原样保留

> 首次运行无清单会建立基线：已存在的 webp 视为已同步、只补缺失图片。若首次运行前就已改动过图片内容，用 `--force` 强制重转一次。

### 旧脚本（全量重导，仍可用）

| 脚本 | 作用 |
|---|---|
| `scripts/import-408.mjs` | 全量重导 cs-notes（408 四个 `-408` 文件夹），vault 路径硬编码在脚本内 |
| `scripts/import-obsidian.mjs` | 通用全量导入：`node scripts/import-obsidian.mjs <源路径> <目标路径> [图片目录...]` |

## 其他脚本

| 脚本 | 作用 |
|---|---|
| `scripts/compress-images.mjs` | 把 `public/images/` 下 png/jpg 批量转 webp（**会删原图**，注意笔记引用需同步改） |
| `scripts/consolidate-images.mjs` | 在 Obsidian 仓库内按内容哈希去重合并图片 |
| `scripts/fix-asset-paths.sh` | 修正资源路径（历史遗留） |

## Markdown 扩展语法（渲染端 `useMarkdown.js`）

- `$...$` / `$$...$$` → KaTeX 行内 / 块级公式
- `==高亮==` → `<mark>` 高亮
- 图片宽度：`![300](...)` 或 `<img width>`
- 图片后紧跟列表/引用（无空行）会自动补空行，避免渲染粘连
- `---`（≥3 个连字符）→ `<hr>`，避免被识别为 Setext 标题
- 笔记按最浅标题层级自动拆成「章节目录」小节

## 特殊功能

- **专注模式**：首页「🧘 专注」卡片 → 全屏时钟（桌面/Android 走 Fullscreen API，iOS 回退 CSS 遮罩），组件在 `src/components/FocusMode.vue`，背景图 `public/images/background/149087630_p0.webp`
- **章节目录 / 标题目录**：右侧侧栏自动生成（`LayoutWithSidebar.vue`）
- **首页背景**：`public/images/background/pic-1-....webp`，在 `index.html` 里 `<link rel="preload">` 预加载

## 部署

`npm run deploy` = `vite build && gh-pages -d dist`，发布到 `gh-pages` 分支（GitHub Pages 已配好）。`vite.config.js` 里 `base: './'` 保证相对路径可用。

## 体积优化备忘

- 首页「Welcome」用周昉斜体，已子集化为 `src/assets/fonts/ZhouFang-subset.woff2`（仅 6 个字母，1.1KB）；完整字体 `ZhouFangRiMingTiXieTi-2.ttf`（9.4MB）已不再被引用，可删。
- 专注背景 `public/images/background/149087630_p0.webp`（0.44MB）由 8.9MB 的 PNG 转换而来，原 PNG `149087630_p0.png` 可删。

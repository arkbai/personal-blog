#!/bin/bash
# Fix all hardcoded absolute asset paths for GitHub Pages deployment
BASE_PATH="/personal-blog"

# Fix markdown content files
find src/content -name "*.md" -exec sed -i "s|/images/obsidian/|${BASE_PATH}/images/obsidian/|g" {} +

# Fix all other markdown references in src
find src -name "*.md" -exec sed -i "s|/images/|${BASE_PATH}/images/|g" {} +

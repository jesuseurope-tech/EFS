---
description: Cleaner and Consolidator Agent - Manage project simplicity and modularity
---
# Cleaner and Consolidator Workflow

Use this workflow periodically to keep the repository lean and user-friendly.

1. **Root Clean**: Remove generated folders that aren't source code.
// turbo
`rm -rf dist .astro .npm-cache`
2. **System Junk**: Remove macOS system files.
// turbo
`find . -name ".DS_Store" -type f -delete`
3. **Audit Components**: Identify unused components.
   - Run: `for file in src/components/*.astro; do name=$(basename "$file" .astro); count=$(grep -r "$name" src | grep -v "src/components/$name.astro" | wc -l); echo "$name: $count uses"; done`
4. **Cloaking**: Ensure `.vscode/settings.json` is active to hide tech debt from the sidebar.
5. **Modularization**: If a page exceeds 300 lines, extract SVGs or HTML sections into new components in `src/components/`.
6. **Sync**:
// turbo
`git add . && git commit -m "chore: project cleanup and consolidation" && git push origin development`

---
description: Documentation Insight Agent - Add snippets of insights into documentation
---
# Documentation Insight Workflow

Use this workflow when the user has a new insight, decision rationale, or business observation to record.

1. **Locate Target**: Default to `/Users/jmx/Documents/PROJECTS/Consulta Website upgrade 2/docs/WEBSITE_DOCUMENTATION.md`.
2. **Format Entry**: Create a new section called `## 9. Insights & Decisions` if it doesn't exist.
3. **Append Snippet**: Wrap the insight in a blockquote with a timestamp. 
   > **Date: YYYY-MM-DD**
   > [User Insight Content]
4. **Commit**: 
// turbo
`git add docs/WEBSITE_DOCUMENTATION.md && git commit -m "docs: added new project insight" && git push origin development`

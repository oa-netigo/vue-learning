# jsconfig.json Explained

This file configures JavaScript tooling for your project. Here’s what each part does:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "exclude": ["node_modules", "dist"],
  "vueCompilerOptions": {
    "globalTypesPath": "./node_modules/vue/volar.d.ts"
  }
}
```

## Sections

- **compilerOptions**: Settings for JavaScript/TypeScript tools.
  - **paths**: Defines path aliases. `@/*` lets you import from `src` using `@/`.
- **exclude**: Folders ignored by tooling (like autocompletion and error checking).
- **vueCompilerOptions**: Vue-specific settings.
  - **globalTypesPath**: Points to Vue’s global type definitions for better editor support.

---
You cannot add comments directly to JSON files, so use this Markdown file for explanations.

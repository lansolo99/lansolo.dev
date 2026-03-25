# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Requirements

Node 14 is required. Use `nvm use 14` before running commands.

## Commands

```bash
yarn run dev          # Start dev server
yarn run generate     # Build static site (use this for production)
yarn run start        # Serve built output locally
yarn run lint         # Run ESLint + StyleLint
yarn run lint:js      # JS/Vue lint only
yarn run lint:style   # CSS/Vue style lint only
yarn run test         # Run Jest unit tests
yarn run cy:open      # Open Cypress test runner (requires server running)
yarn run test:e2e:dev # Start server + open Cypress
npm run cdySyncPosts  # Sync local cloudinary/ folder to Cloudinary CDN
```

## Stack

- **Nuxt 2** (Vue 2) with static site generation (`target: 'static'`)
- **@nuxt/content** for markdown-based blog posts
- **Tailwind CSS 2** with Typography plugin
- **Vuex** for global state (tag filtering, cursor state, post count)
- **Cloudinary** CDN for image delivery
- **Prism.js** for syntax highlighting in posts

## Architecture

### Content System

Posts live in `/content/posts/` as markdown files with YAML frontmatter:

```yaml
---
title: string
type: 'article' | 'design'
description: string
imgCover: string        # Cloudinary path (e.g. lansolo.dev/posts/my-img)
tags: array             # type is auto-appended via nuxt.config hook
createdAt: ISO date
embed:
  vimeo: string         # Optional Vimeo video ID
---
```

The `type` field is automatically added to `tags` by a hook in `nuxt.config.js`.

### Routing

File-based Nuxt routing:
- `/pages/index.vue` — homepage with paginated grid (16 posts/page) and tag filtering
- `/pages/posts/_slug.vue` — dynamic post detail page
- `/pages/about.vue` — about page

### Component Organization

- `components/app/` — layout-level (TheHeader, nav items)
- `components/partials/` — page-specific (prefixed: `Hp*` for homepage, etc.)
- `components/shared/` — reusable primitives (`V*` prefix: VPost, VCursor, VImageLoader, etc.)
- `components/global/` — auto-imported cross-page utilities

### State (Vuex)

`store/index.js` manages:
- `selectedTags` — active tag filters for homepage
- `isCustomCursorVisible` — toggles custom animated cursor
- `currentPostsCounter` — filtered post count

### Images

Images are served from Cloudinary with the `dpr.js` mixin for retina detection. The URL pattern uses `c_fit,dpr_auto,q_auto,w_auto` transform params. Local assets for posts are kept in `/cloudinary/posts/` and synced to CDN with `cdySyncPosts`.

### Plugins

`vue-js-modal` and `vue-vimeo-player` are loaded client-side only (`ssr: false`). Vimeo embeds open in a modal triggered from post pages.

### Styling

Tailwind with `important: true`. Custom fonts: Karla (body) and Neue Machina (headings). PostCSS nested syntax is supported. No semicolons, single quotes (Prettier config).

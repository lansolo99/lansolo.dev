# lansolo.dev

## Dev/Build

```bash
nvm use 14/16
npm run dev
```

## Netlify Build Process

**Note: Alway build and deploy locally, never from Netlify platform.**
**Note: build locally with node 16 && npm run generate.**
**Note: deploy with node latest && ntl deploy --prod --dir=dist**

```bash
nvm use 14/16
ntl build
ntl deploy
```

---
title: 'Building a documentation site with Docusaurus'
type: 'article'
description: My journey using Docusaurus, the React documentation framework
imgCover: 'building-a-documentation-site-with-docusaurus'
tags: [react, docusaurus, tailwind, mdx, devs]
createdAt: 2021-07-31
---

Note: This post is not a tutorial on how to use Docusaurus. Head to their [documentation](https://docusaurus.io/) instead.

## Context

My React experience is reaching 6 months, mostly building landing pages using Next.js.

Last month, I had the opportunity to build and maintain my first documentation site, the [Xpollens banking APIs](http://docs.xpollens.com/).

Obviously I reached for the most adequate solution, with a preference on React-based tool. I evaluated Vuepress, Docz, Next.js, and [Docusaurus.js](https://docusaurus.io/).

The last one was the retained solution as it seems to be the most used documentation framework, but especially encompasses a lot of the features asked for this project.

Among these are :

- Git based site, as contributors will edit markdown files
- Static site built with Netlify
- Common sidebar-based layout containing the organised document list
- Static search feature
- Future internationalisation possible
- Light/dark theme switcher
- Codeblocks with highlighted syntax
- Automatic table of contents

Docusaurus is backed by Facebook.

## What I liked

As just mentionned before, Docusaurus is full-fledged regarding useful features. It has pretty much all we can expect to be part of a typical documentation site.

Beside of the base features, we can take advantage of additional plugins such as [optimized images](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image) in document, [Analytics](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-analytics), [a blog part](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog), multiple search solutions and so on...

The documentation is neat, though, the way the main parts are structured can be confusing sometimes.

The markdown experience can be adapted to pretty much any use cases thanks to [mdx](https://mdxjs.com/), that allow us to take advantage of JSX within markdown, and therefore offering custom component to use within md files.

On the overall, it has a very active community and development. We can easily find answers that will inevitably occur.

## What I struggled with

Finding the right styling strategy was not an easy one. Docusaurus use [Infima](https://infima.dev/) out of the box with custom CSS variables. I managed to get Tailwind on the game, but it was a bit hacky.

The goal of using a tool like this is to use the built-in components without modifying their structures. So the recomended way is to add our layer style on top of it, which is often a pain in the ass.

To get a sense of control over the component structure, we have to "[swizzle](https://docusaurus.io/docs/using-themes#swizzling-theme-components)" the Docusaurus components, which is another word for internal forks. Then we can tweak what we want.

However, doing this, we kind of lock ourselves to the current Docusaurus version as it has high risk of break if we ever migrate it in the future. I tried to limit the amount of components I swizzled to do so. The result is a messy mix with base and tweaked components, but I suppose it's the way to go.

## Tools and discoveries on the way

### Figma

I finally got my hands into the famous UI design tool: [Figma](https://www.figma.com/).

Indeed, I had to hand-off a custom design toolbox so that contributors can develop schemes images by themselves.

It had to be a web-based solution.
Sketch was out of the equation being a closed and proprietary Mac app only.

I'm pretty much enthousiast to deepen my knowledge as a lot of features are a bit better designed than Sketch in my personal opinion, but it's a bit early to adopt it as my main production tool.

### React-query

Half of the documents will make "GET" API calls to retrieve Open API definitions located externally. I quickly realized I could take advantage of [React-Query](https://react-query.tanstack.com/), the new kid on the block regarding async requests management. I barely scratched its surface so far but It almost immediatly shrinked the volume of code within React component using the "useQuery" hook. It also has a convenient custom devtools. It might not necessary replace React Contexts but remains very interesting to use it, regarding API calls management.

### Rapidoc

One of the major task was to integrate an open API documentation within the site. I learned along the way what is an open API definition and that we need tools to generate a documentation based on its content (a json file). The demand was also to be able to directly test these APIs with a console feature.

I reviewed some of the most used ones (Redoc, Swagger UI, Slate, Rapidoc). The latest is the one I found the easiest to customize and embed into a website.

[Rapidoc](https://mrin9.github.io/RapiDoc/) is an open-source spec documentation generation solution.

Following some interests I had about code implementation, I prepared a [Github Gist](https://gist.github.com/lansolo99/7ef719b4758b3d02fc710b9b3a993537) if you want to have a look at the code (Rapidoc theme component only + integration in a markdown document).

## Deployment pipeline

[Netlify](https://www.netlify.com/) is officially in the game for this project (I usally deploy on Apache shared hosting for every other partners). The continuous deployment is based on a Git repo, and I'm confident this will offer a robust deployment pipeline between me and contributors.

## Next

Site is [live](http://docs.xpollens.com/), I now have the charge to help maintain it for future developments.

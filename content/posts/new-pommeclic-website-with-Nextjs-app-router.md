---
title: 'New Pommeclic site with Nextjs app router'
type: 'article'
description: Experimenting with new Next App Router
imgCover: 'new-pommeclic-website-with-Nextjs-app-router-2-2'
tags: [vercel, next, devs, framer-motion]
createdAt: 2023-08-24
---

## Context

Following the [Pommeclic showreel](/posts/2023-pommeclic-showreel) released last month, we decided to upgrade the homepage to mirror the video content with additional shots and details regarding each work showcased.

Here is the site link (unofficial pre-release version until its done) [pommeclic.com](https://pommeclic-i49xo6vm7-lansolo99.vercel.app/).

Next.js recently brought the new [App router](https://nextjs.org/docs/app) in the game (spring of 2023) and it is now considered as stable and as the recommended approach.

## Differences with the Page router

- The folder is now called _app_ instead of _pages_
- We can colocate any file type without them being interpreted as a route
- Layout and Pages have to be named _layout_ and _page_ respectively (one per folder), same as the Svelte.js paradygm
- Each file is a server component first. We must add the _use client_ string at the beginning of file to take advantage of client-side hydration if necessary, and insert/compose with client components inside a server component when needed
- getStaticProps is replaced with a simple fetch request within components
- getStaticPath is replaced with the simpler generateStaticParams function

## Struggles

The main tricky point for me was to deal with the server component first approach.

Indeed, we can't mindlessly placing useState or useEffect hooks anymore as our file has to be client component.

However, using _use client_ everywhere is not the clever approch neither as server component are generaly quicker rendered and a more performant solution.

So, we have to better architecture our app, and dispatch the client-side code in their proper client components as much as possible.

## Framer Motion

I kept using Framer Motion to handle the works entries on-scroll reveals using clip-paths.

Client components must be used, as Framer Motion is a client side library.

### Page transitions

I used a new technique to handle page transitions, as the one used whith the Pages Router didn't work anymore.

It'a matter of dedicating a specific transition component in the root layout, that accept a children (dynamic routes relayed).

Then, the transition component is encompassed within an _AnimatePresence_ Framer Motion tag, itself taking a keyed motion.div, itself taking a FrozenRouter context component that leverage the _useLayoutRouterContext_ Next component. The workaround is a bit messy as of now, I took this working solution from [Imatteis demo repo](https://github.com/lmatteis/next-13-page-transitions).

Edit: this solution doesn't work anymore since 13.5 Next.js versions and above.

## First impressions so far

Next App Router undoublty enhance the developer experience, since it provides a way to organize an app by feature within a single app folder. It brings some brillant designs from Svelte and simplify the way we fetch data.

However, thinking in terms of server components is not the easiest thing to do. I have to say that official doc is very well written and I didn't have to rely on many external ressource to make my way.

I plan to keep using Next.js solely as my framework of choice, as it seems to suits my needs in every situation.

---
title: 'Building an ecommerce with Nextjs, Strapi and Snipcart'
type: 'article'
description: Process and stack used to build a small ecommerce shop
imgCover: 'building-a-2d-runner-game-with-nextjs'
tags: [next, framer-motion, Tailwind, devs, strapi, snipcart, fly.io]
createdAt: 2024-10-10
---

This article talks about the process and stack used on the website [labourgognecacogne.fr](https://labourgognecacogne.fr/).

## Context

Two years ago (2021), I had the opportunity to start creating an e-commerce site for a budding brand called "La Bourgogne ça cogne !", a regional clothing brand launched by my working partner.

At that time, I was already using my current stack. I built the whole website, but my friend never took the time to handle the content feed, and the site never launched.

We recently decided to resume development and launch the site by the end of 2024.

## Design

The design was originally made with Sketch.

It consists of a very contrasted layout with a bright orange as the accent color.

<!-- Here some shots -->

It's very classic, with lots of clever micro-interactions.

The main feature that sets this site apart is the customizer module for products.

The products exist in many colors, with a custom logo color and position as well.

We didn't want to involve ourselves in taking dozens of pictures for those variations.

I used some sort of colorable hand-drawn shape, overlapping a white product version.

Picking a color from the customizer then changes its color.

## Stack choice

- Next.js (a no-brainer as of now for front-end)
- Tailwind (also a no-brainer for styling)
- Strapi (my go-to choice for a headless CMS, open-source and versatile)
- Snipcart (to bring the e-commerce layer with ease)
- Fly.io (the new backend hosting choice, a consequence of Heroku having revamped its basic offer)
- Vercel (a no-brainer to host any Next front-end as it is tailored for it)

## Backend migration to Fly.io

I use Strapi as a CMS to feed the whole website (products, blog articles, pages content...).

The first Strapi instance was hosted on Heroku, which was a good option until they completely revamped their offering in 2023. I should have migrated my PostgreSQL database outside and taken a paid plan.

I heard about [Fly.io](https://fly.io/) a while back, and decided to give it a try.

The platform offers similar services, and I found the process even simpler and quicker than Heroku.

Especially, the deployment using the Fly.io CLI is way faster.

The deployed instance also has default cold boot, but it's not a concern, as we only need it to feed content and regenerate the site periodically using webhooks.

It's a pay-as-you-go solution, so it has to be evaluated on a per-use-case basis, but it seems like a cheaper option than Heroku anyway.

### Datas migration

As the original deployed Strapi instance has never been really used, the only challenge was to migrate the local Strapi data to Fly.io.

I used Strapi V4 and discovered the [data Transfer](https://docs.strapi.io/dev-docs/data-management/transfer) feature which has been a huge time-saver.

Two resources helped me with having the proper backend and migration settings:

- [The Fly.io deployment process](https://forum.strapi.io/t/fly-io-deployment/22438)
- [The dev.to topic on Strapi migration](https://dev.to/candidosales/migrate-strapi-from-render-to-flyio-lbi)

## Wrapping-up

Three years later, I still find this stack pleasant to work with.

I didn't migrate Next.js with the latest app router, but it works well enough like this, providing a nice browsing experience in my opinion.

At the time of publishing, [La Bourgogne ça cogne] is not quite ready, leading to a maintenance page.

I will update this post once it's done.

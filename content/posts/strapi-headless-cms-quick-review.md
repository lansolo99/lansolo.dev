---
title: 'Strapi headless CMS quick review'
type: 'article'
description: Personal experience using Strapi for the first time.
imgCover: 'manage-SVG-colors-with-nextjs'
tags: [strapi, next, tailwindcss, heroku, vercel]
createdAt: 2021-09-26
---

## Context

I have been busy these last weeks designing and building an e-commerce fashion website. I only handled this kind of project once for an outdoor assets shop, back in 2011 using Prestashop.

A lot of time has passed, and my preferred stack has completely changed since then and I though it was a good opportunity to experiment on using a jamstack approach as the shop is quite small and won't be updated that often.

## Stack

### Front-end

I use Next.js as I decided to settle with this one as it's very versatile, popular, with a very active development.

### Back-end

Strapi comes in the game. This one was on my radar since a long time. I experimented a very bugged version 2 years ago but the project has become stable enough these days.

### UI

I still use TailwindCSS, that had been working perfectly for all my past projects. The recently shipped [Just in time mode](https://tailwindcss.com/docs/just-in-time-mode) make it a lot easier to work with!

### Front-end hosting

This time I try [Vercel](https://vercel.com/) instead of [Netlify](https://netlify.com/) as I plan to use [next/image](https://nextjs.org/docs/api-reference/next/image) for efficient remote image optimization. I struggled a lot with next/image in the past. My conclusion is it's a breeze to handle optimized image with it, but only if deployed using Vercel, that is designed to work with.

### Back-end hosting

I use [Heroku](https://www.heroku.com/) as it's the easiest platform to push a Node.js application from my experience. We need this hosting to host Strapi, as it's an open-source self-hosted CMS.

### Payment solution

[Snipcart](https://snipcart.com/) comes in the game, as I want to offload all the ecommerce development work at most, but still want an elegant integration with my front-end.

### Image optimization

I use once again [Cloudinary](https://cloudinary.com/) for 2 main reasons:

- Have a read-made image optimization feature for all uploaded images coming from Strapi
- Leverage advanced images transformations to get colored version within the product template.

## Why choosing Strapi?

This project will be managed by a non-technical user, so we need a GUI.

I don't know how it will scale in the future and I don't want to be stuck with priced plans. Strapi is free as it's an open-source and self-hosted solution. Its popularity is growing and I would easily find answers if I find myself stuck somewhere.

## What I liked

- Free solution

- Interface is pretty clear, as it might be a bit older, but the upcoming v4 version will bring a whole new UI. The v3 one is still pleasant to my mind. The

- All the develpment work is handled locally using a node server with a local database, so we don't need to query an hosted API all the time. We also have a great control over the logic under the hood as all files are within a node project.

- Documentation is great

- Community is big

- It's French, so prowd of supporting a local promising startup 👍

## What I struggled with

- It's still buggy despite everything. Some saving mechanics acts weirdly in many ways and we have to find hacks to handle some changes.

- We have to handle all the production deployment pipeline (database sync, Heroku deployment). Having a git monorepo for both frontend and backend is strongly advised, and additional hosting configurations needed by the way...

- No preview feature out of the box, we have to glue things in both front and back code to make it work.

- No conditional fields out of the box, we need to put additionnal piece of logic within backend controllers, which is not very convenient.

## My experience with other headless CMS

I tried other solutions in the past, some of them with great satisfaction:

- [Prismic](https://prismic.io/): proprietary hosted solution with a nice GUI and handy I18n feature. API easy to work with. Building document models is a bit confusing to me. I used it for the [Marketpay micro-site](https://lansolo99.netlify.app/projects/market-pay/).

- [Storyblok](https://www.storyblok.com/): proprietary hosted solution with a very nice GUI. The key feature is the visual editor that. It also has its own image optimization service. I prefered it over Prismic. I used it for the [Marcellino online restaurant menu](https://lansolo99.netlify.app/projects/marcellino/).

- [Netlify CMS](https://www.netlifycms.org/): GIT based solution, only tryed in a development context as it was not needed afterward. Really easy to deploy, but very limited in features.

- [Forestry](https://forestry.io/): GIT based solution, also only tried in a development context. It's like Netlify CMS with a better UI. I think I will go toward this one if I ever need a GIT based CMS.

- [Headless Wordpress](https://wordpress.org/): it's Wordpress but I only used it's API. Querying the API is quite easy. But we still have to handle wordpress theme development and I don't want to invest time using PHP anymore as want to focus on JS language.

## Next

So far, I enjoyed using Strapi despite annoying bug and lacking feature, but at the end, it's the same story whatever the tool we using. The [upcoming v4 release](https://strapi.io/v4) will hopefully fix most of these drawbacks. I feel it's the most promising headless solution that fits my needs and I'm eager to stick and invest time to have a good grasp over it.

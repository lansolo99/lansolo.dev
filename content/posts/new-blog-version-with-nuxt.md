---
title: New blog version with Nuxt
type: 'article'
description: Why I migrated my blog from Wordpress to Nuxt
imgCover: 'new-blog-version-with-nuxt'
tags: [nuxt, vue, cypress]
createdAt: 2021-01-30
---

## Reasons to migrate from Wordpress to Nuxt

It's been 2 years I made the switch to Vue.js as my go-to solution to build websites and I decided it was time to migrate my wordpress blog to the stack I'm using on a daily basis. 

Wordpress has made a great job so far, but I found the latency between page queries annoying, and I didn't enjoy using the clutered Wordpress admin as well as maintaining a bunch of always outdated plugins.

Regarding the stack, [Gridsome](https://gridsome.org/) has been my favorite meta-framework to build static sites for a while, but I moved my focus on [Nuxt](https://nuxtjs.org/) for the last few months, as I think it's more versatile, has a bigger community, and also has a faster development pace.

## Nuxt-content as CMS

This migration has been the opportunity to deep-dive into the relatively young [nuxt/content](https://content.nuxtjs.org/) module as a content management solution. It self describes as a git-based headless CMS. Though, we have to make a distinction between solutions offering an UI for contributors (Prismic, Contentful, Wordpress...), and nuxt/content as it's really aimed for developers who want to edit markdown files locally.

I then rolled up my sleeves and proceeded to manually migrate all content into a new set of markdown files. The writing experience is just about writing regular markdown, but with additional features such as adding vue components in the middle of our body content, even pass props inside. There's a lot of possibilities like creating an auto generated table of content, description, or using other file types (json, yml..).

Nuxt/content offers a really [simple API](https://content.nuxtjs.org/fetching) to fetch data, sort, filter, limit, or perform a query. I took advantage of these features to easily build a post filter feature.

## Images

If one thing is still missing in Nuxt to my opinion, it's a convenient image component to offer responsive sizes on the fly + progressive behavior. Gridsome has the &lt;g-image&gt; component for this. Nuxt has a new [nuxt/image](https://image.nuxtjs.org/) module but it's not production ready. I attempted to use this at first, but it completely messed up at build. I look forward for a stable release as it seems very promising!

So at the end, I used [Cloudinary](https://cloudinary.com/) as CDN solution to deliver optimized images on the fly. I used Cloudinary multiple times, it's a powerful solution, though the documentation is a bit overwhelming to me as paramaters are endless... I don't fancy that much relying on a CDN to display a bunch of images I could host along the app, but this is the most performant solution I found so far for this use-case.

## Cypress

This refactoring has also been the opportunity to give a try to [Cypress](https://www.cypress.io/), the famous end-to-end test framework. 

Though using this tool on such a project can be considered a bit over-engeneering, I think it's the perfect sandbox to explore its inner workflow. The goal is to give confidence regarding releases. I started with a bunch of simple assertions with very simple scenarios, as well as testing the filter feature to make sure it works properly. 

I really like the visual [test-runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview), which is part of the Cypress toolkit. The documentation is very complete and user-friendly. 

From now on, I will implement E2E tests into every project including cumbersome smoke tests such as form testing.

## Stack & repo

To sum up, here is the stack/services I used for this project :

* Nuxt as Vue static site generator
* Nuxt/content as headless CMS
* Tailwind CSS as CSS framework
* Vue-infinite loading as infinite scroll handler
* Nuxt/svg as SVG handler
* Cypress as end-to-end testing framework
* Cloudinary as images hosting platform
* Netlify as hosting plateform

I setup the codebase as a [public git repo](https://github.com/lansolo99/lansolo.dev) if you ever interested to take a glance.

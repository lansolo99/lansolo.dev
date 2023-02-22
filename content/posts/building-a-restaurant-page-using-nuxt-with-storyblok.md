---
title: Building a restaurant page using Nuxt with Storyblok
type: 'article'
imgCover: 'building-a-restaurant-page-using-nuxt-with-storyblok'
tags: [nuxt, vue, headless CMS, devs]
createdAt: 2020-10-07
---

This post is about my first experience using Storyblok headless CMS coupled with Nuxt.
<!--more-->

## Genesis

I have a brother who owns of small [pizzeria](http://marcellino.net) in Libourne, west of France. I did built a small webpage containing contact details back in time, but he had the need to publicly expose its restaurant’s menu and be able to update himself on a regular basis. It was a perfect opportunity to go with a static site powered by a headless CMS following the [Jamstack](https://jamstack.org/) approach, as the site would only be updated a few times a month. 

## The choice of Storyblok

Previously, I only experimented [Prismic](https://prismic.io/) as headless CMS, and even though I was quite happy, I felt like the UI lacked a bit of intuitiveness, especially on the editor side. I heard about [Storyblok](https://www.storyblok.com/) as a headless solution that is frequently coupled with Nuxt. Indeed, there is multiples tutorials and Nuxt boilerplates into their documentation. It seems Storyblok people have made Nuxt their beloved front-end solution. I was convinced to try it out after I’ve seen a few tutorial showing a neat and appealing admin UI. The free tiers is also quite generous and encompasses all the features I would need (content documents can be organized in a folder-like structure, very simple forms, web hooks ..)

## The highlights of Storyblok

The feature I found the most interesting is the one Storyblok showcases : [the visual editor](https://www.storyblok.com/docs/the-editor) that offers us to directly click on page elements that display the right edition form on the side. I think it speed up the editor’s work and help him to quickly preview all the changes made before publishing. Prismic has a [preview feature](https://user-guides.prismic.io/en/articles/781294-how-to-set-up-a-preview) but we should open the page in an external window and should go back and forth.

## The Storyblok’s Nuxt boilerplate

From the developer side, the [Nuxt Storyblok SDK](https://github.com/storyblok/storyblok-nuxt) is pretty straightforward to setup and querying the API is very simple. The team responsible for the [Nuxt boilerplate](https://github.com/storyblok/storyblok-nuxt) has made an interesting architecture choice : every page/component is made using a dynamic component calling the one using the reference name retrieved from the API, and pass it all the data in a "blok" prop. All the components are referenced in a single components.js file called within plugin property within nuxt.config.js. This way, it’s almost always the same code we can reuse across pages and components.

## Problem encountered

The Storyblok experience has been fluid on the whole process, though, I struggled a bit on the deployment phase. I couldn’t take advantage on the dynamic visual editor onto the deployed static site (on [Netlify](http://netlify.com/)), pretty annoying.  It may be fixed in a near future but the only workaround I found is to deploy another parallel app, either SPA or SSR, and call this one on the visual editor.

## Wrapping up

This stack is simple. Storyblok is neat and offers a great editor experience. I’m eager to improve my Storyblok knowledge across upcoming projects regarding this positive first impression. Here is the restaurant site by the way, called [Marcellino](http://marcellino.net).
---
title: 'Testing a headless architecture with Nuxt + Prismic'
type: 'article'
imgCover: '/img/posts/testing-a-headless-architecture-with-nuxt-prismic.jpg'
tags: [netlify, prismic, nuxt]
createdAt: 2020-04-02
---

This last month, I had the opportunity to finally test a headless architecture for a B2B single page website [marketpay.eu](https://marketpay.eu).
The page content should be editable by external contributors using a content management system.
<!--more-->
So far, I only used Wordpress to deploy website with editing capabilities. But times are changing and my tool of choice to build website has become Vue. The solution is to couple the Vue front-end with what is called a "headless CMS".

## Prismic as headless CMS

With the rise of javascript frameworks, a lot of headless CMS have popped out to replace traditional monolith CMS such as Drupal or Wordpress. The website [headlesscms.org](https://headlesscms.org/) list all those tools classified by trend usages.

In the past, I’ve quickly boot-started [Strapi](https://strapi.io/) but I gave up considering the numerous bugs I’ve encountered (mostly bugs during deploys but within the CMS experience as well). Strapi is an open source solution, it’s a bit difficult to setup because we have the responsibility of a Mongo database management on top of it.

[Prismic](https://prismic.io/) is a french tech company providing an API-based headless CMS as a SaaS platform. It has an intuitive and a neat interface that offers a smooth experience while setting up content for our project. The free-tiers offers more than enough to get started, and the first paid plan is very affordable.

I found their documentation is very clear and covers all the features in a clear manner. This CMS is also very versatile and can be coupled with various techs. In my case, I used a Nuxt.js starter that is a great help to understand all things work without headaches. The documentation also offers videos and user-guides to help us get started.

The project I've been working on should also supports both EN+FR languages. The Prismic multi-language feature is well designed, and directly available from the Prismic top-bar while editing a document. The colors play a huge role in the Prismic admin UI as its toggle from green to yellow everytime we make a change.

At the end, I’m very satisfied of the experience Prismic has to offer.

## Server-side rendering with Nuxt

So far, I used Nuxt.js on top of Vue because of the pleasant abstraction it offers in terms of directory structure, configuration file and so on.. But I only used it for SPA or static generated site. This time, we have a site that might be updated frequently by external contributors and should also be crawlable by search engines for SEO. I had to use the SSR capabilities to respond to this need. The Prismic Nuxt starter encompasses a preview feature that require SSR to work with.

Switching to SSR development is not that different from a SPA usage, the main difference is that the page are server-render at first load, so we have to use the terminal to show our debug logs instead of the browser console. We should also care about plugins which have to render on the client-side only, not a big deal with the &lg;client-only&gt; tag or suffix our plugin files with ".client".

The main concern is also the hosting platform on which our app will live, as we will need a node server. The easier deployment solution is to use Heroku which is a PaaS cloud platform with a neat interface. We can use its CLI that offers a convenient deployment pipeline.

However and for my case, the client wanted to manage the hosting himself so I deployed on a Gitlab repo, and the client care about deploying the app on a Google engine instance, which is another cloud platform.

## Mastering complex forms using php/node

Before this project, I had to deal with several pages including complex contact forms. These forms includes conditional display, advanced components and re-captcha test. As things progress, I improved the way I build form. I started to "componentize" each input and deal with implementing Vue v-model to child components.

I always use [Vuelidate](https://vuelidate.js.org/) as a validation tool and have experienced a lot of use-cases (basic input, input types, checkbox, radio, select, conditional validations, custom validations..)

Lately, I read a very helpful book about [building form in Vue.js](https://www.amazon.fr/Building-Forms-Vue-js-Patterns-building-ebook/dp/B07YY7MGDD). It helped me to have a better grasp of how v-model works and how to use Vuelidate in a nested component hierarchy. It also has an interesting part about building an api-driven form, which will be my next code improvement.

The form submission to the server is handed with the [Axios](https://github.com/axios/axios) library. I implemented the server-side processing in both PHP and Node.js according to the hosting environment. There is two use-cases :

* The re-captcha validation (the server-side verification to handle a response)
* The form submission itself. For the latest, I use [Send In Blue](https://fr.sendinblue.com/) as a mail sender, from which we can leverage their mail templating system handling dynamic variables.

The Node.js implementation of the server-side form processing has been the opportunity to learn the basics of [Express.js](https://expressjs.com/), and how the app.post method handle routes. Not a big deal so far. I advise the concise [Express Handbook from Flavio](https://flaviocopes.com/page/express-handbook/), available as e-book, a perfect resource to start with Express.js.

## Vue library round-up

With every project comes a lot of third-party tools and here is some of them I used and approved along the way :

* [AOS](https://michalsnik.github.io/aos/) : A complete and simple on-scroll-reveal tool
* [I18n](https://kazupon.github.io/vue-i18n/) : The official package to serve translations from locales
* [v-lazy-image](https://github.com/alexjoverm/v-lazy-image) : A simple package to automatically handle lazy-loaded images
* [vue-js-modal](https://github.com/euvl/vue-js-modal) : my package of choice to implement modals in vue
* [nuxt-tailwind](https://github.com/nuxt-community/tailwindcss-module) : Since I discovered it : my go-to tool regarding handling UI

## To sum up

This project has been an excellent opportunity to experience a headless CMS and Server-side rendering. Prismic is an excellent service and I will use it again. Nuxt.js is still the best versatile framework to build website on top of Vue (though I also think [Gridsome](https://gridsome.org/) is an excellent option for static sites). Forms is always something complex to implement but I found a pattern that helps me deal with such complexity.

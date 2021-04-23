---
title: 'Nuxt.js puzzle game development - WIP#1'
type: 'article'
imgCover: 'nuxt-js-puzzle-game-development-wip1'
tags: [nuxt, cordova]
createdAt: 2019-06-07
---

This post is part of a full walkthrough of building an android app using Nuxt + Cordova
<!--more-->
The proof of concept of [Weekx](https://weekx-landing-page.netlify.app/) is now barely finished. As I said previously, I plan to create some tests for it but have to get a better overall comprehension of unit tests in Vue.js first.

I built this first app from my own, and it was the greatest exercice to get the big picture of Vue.js. I might push Weekx further more later but decided to put it aside for the time being.

This post is a part of a miniserie where I explain my journey and what I learned through building an Android application with Nuxt.js, and wrapped with Cordova.

1. [Part 1](/posts/nuxt-js-puzzle-game-development-wip1)
2. [Part 2](/posts/nuxt-js-puzzle-game-development-wip2)
3. [Part 3](/posts/nuxt-js-puzzle-game-development-wip3)
4. [Part 4](/posts/nuxt-js-puzzle-game-development-wip4)
5. [Part 5](/posts/nuxt-js-puzzle-game-development-wip5)

## Context

A friend of mine offered me to create a puzzle game based on my recent knowledge. He’s in charge of the game concepts and I care about all the tech part and a bit of layout as well. I’m not sure I’ll be showing some screenshots because this time, it’s really about pushing this app on Google Play as an Android hybrid app (Apple seems to be too much demanding about publication rules, and someone has to pay the 99$/a year to get the right to do so).

## Development

I already started a few weeks ago and chose to use Nuxt.js as a development framework. I used it once for the Weekx landing page, and found it better regarding several things it offers out of the box :

* No need to configure routes : the directory structure create the views
* Clear nuxt.config.js file
* Layouts
* Can choose to serve it either as a SPA or SSR or static site in case of
* Handy hooks in single file components (async data, fetch)
* Middlewares to better organize code that executes before page load

## Middlewares to better organize code that executes before page load

Each project is the opportunity to learn new things. I finally dove into CSS Grid, as I’m not sure using [Vuetify.js](https://vuetifyjs.com/). The layouts are generally very uniques in the sense of it’s not built with classic UI components.
Working with Grid is a real pleasure as I have this feeling of control overall the layout, especially on the browser side when inspecting the grid, we have this nice dashed structure that helps with understanding how it works.

I also played with drag & drops for the first time, using a library called [Draggable](https://shopify.github.io/draggable/) which offers a large range of possibilities.

## Follow up

Otherwise, a lot of conditional structures and loop written as usual. I tend to better organize code in a more functional way, but still have a long road to be where I would like to in terms of JS mastering.

I will follow up in the next weeks talking about concepts of the game itself rather than just the tech side.
We would expect getting something ready to ship at the beginning of 2020 as there’s a lot of work!
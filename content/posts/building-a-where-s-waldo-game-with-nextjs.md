---
title: 'Building a Where's Waldo game with Next.js'
type: 'article'
description: Process I used to build this mini-game based on the Google Playground game.
imgCover: 'building-a-mini-casual-game-with-nextjs'
tags: [game, next, framer-motion, Tailwind, Figma, devs, cinema 4D]
createdAt: 2024-03-31
---

As a quick reminder: this post is not a step-by-step tutorial on how I built this game, but just a review of how I approached this project during this journey.

## The game

First and foremost, here is the [playable live game](https://paques-2024.pommeclic.com/) this post is about.

## Context

Back in december 2023, Google released a mini-game base one the Where's Waldo concept. The goal was to celebrate its 25 years by giving people the challenge to find items based on the most search terms.

I immediatly wanted to build my own version one day. 

As a coincidence, I had the opportunity to work on such a game 2 month later for Banque Populaire. They wanted something on the Easter theme for April, linked to a contest for their internal teams, as they use to do on a regular basis.

## Stack

As usual, I went with the efficient couple Next/Tailwind and a spark of Framer-Motion.

## Design

Same here too: the good old Cinema 4D helped me building a set showing an aerial fantasy and simplified version of a Paris, centered around the Eiffel Tower. Style is low poly is an almost-isometric view.

### Generative image

I used generative image tools for the first time to give me guidance on what I wanted to design. The results were too good actually, beyond of what I dreamed of. Here is some shots based on my prompts.

/// shots here

To be honest, it was frustrating not to be able to get a 3D meshed version to directly edit those results. I learned it's a bit too early now to get it. Sure thing we'll be provided with such tools in a near future!

So I used these shots as a guidance to rebuild from scratch the whole set.
It's absolutely needed, as I have no choice than editing the result to exactly fit with my proposal. 

### UI

Usual process here too: Figma screens, almost entirely based on the Google Playground layout as it's already perfeclty crafted.

/// shots of items and UI

<!-- <img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-mini-casual-game-with-nextjs-figma
.jpg" alt="Figma screens" class="w-full"> -->

## Coding

### Migration from Svelte

I undertook to migrate the most of my previous Svelte codebase into a NextJs one, using the now established app router. Most of the time, it was just a matter of mirroring structure, replace with the proper framework attributes syntax (`class=` becomes `className=`).

Though a lot of functional programing could stay the same, I had to reorganize how the data flows. Stores become separated contexts, and useState enter the game.

I intended to experiment a lot with RSC and server actions, but, I almost any time gave up using the `"use-client"` directive to be able to use freely all the UI mutation patterns I was used to. I really have to take the mental shift to de-correlate RSCs and CSCs.

I guess it's no big deal as this app is mostly a client side with heavy reactive UI.

### Gameboard

I used a single rendered image for the countryside background, and set the vehicles individually into their own components.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-mini-casual-game-c4d-desktop-env.jpg" alt="Desktop c4d environment" class="w-full">

The main game logic consist on generating on the fly vehicles components based on an interval increasing in speed. Each vehicles take some props that define its vehicle's version to pick as well as a lane to run on.

Vehicles animations are handled with Framer-Motion.

I handled the vehicles masking (when entering tunnels) using a single css image-mask.

For the rest, it's a matter of vehicles triggering their situation to a global game context.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-mini-casual-game-context.jpg" alt="Fin de chantier React context" class="w-full">

This context is in charge of rendering the whole game status ('ready', 'gameover', 'in progress'...).

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-mini-casual-game-gameboard-component.jpg" alt="Fin de chantier Gameboard component" class="w-full">

### Next auth and Firebase

I decided to go with Next Auth and found pretty easy to set it, but I didn't make the Firestore adapter work properly (to get the user data part of the Next Auth context).

Instead, I juggled with both Next Auth and FireStore hooks to retrieve bound data given a user auth, when necessary, that is ugly and I'm well aware of it 🙁.

## Github Copilot

I didn't regret to get the Copilot subscription, that helped me in many ways. Sometimes, it misled me, especially providing obsolete import paths (from the Nextjs page router).

## Deployment

Not that much to say with Vercel that do an excellent job and eases the process, be it the subdomain binding, preview deployments, error logs...

## Wrapping up

To conclude, and as always, working on this kind of side project has been very fun and enriching. Seeing the ideas come to life is very satisfying, while being able to deliver it within a limited time frame.

It also help to underline which part of the process have to be improved, because I consider my codebase as pretty messy at the time, and that gives me a roadmap on what would be interesting to dig in.

## Demo

Here is the [playable game](https://findechantier.pommeclic.com/) of "Fin de chantier" (french version only). The contest run until next February 12th. I will then reopen the game without the contest part.

If interested, you can also play the still playable previous Svelte game called [Blackout](https://blackout.pommeclic.com/).

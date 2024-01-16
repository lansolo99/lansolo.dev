---
title: 'Building a mini casual game with Next.js'
type: 'article'
description: Process I used to build this new casual mini-game.
imgCover: 'building-a-mini-casual-game-with-nextjs'
tags: [game, next, framer-motion, Tailwind, Figma, devs, cinema 4D]
createdAt: 2024-01-13
---

As a quick reminder: this post is not a step-by-step tutorial on how I built this game, but just a review of how I approached this project during this journey.

## The game

First and foremost, here is the [live game](https://findechantier.pommeclic.com/) we will talk about.

## Goal

I took this game as an opportunity to improve on my technical skill and some creative processes.
We (with [Pommeclic](https://pommeclic.com/)) decided to communicate early as a way to celebrate the new year by publicly offering a game contest with prizes to win.

## Previously

I didn't start from scratch. I previously released a pretty similar game one year ago called [Blackout](/posts/first-sveltkit-project-with-blackout).

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/first-sveltkit-project-with-blackout.jpg" alt="Blackout game" class="w-full">

The theme was the deep energy concern that occurs in Europe with the Ukrainian/Russian confict.

It takes the "whac a mole" concept and adapt it to electrical units to turn off as soon as they turn on.

I decided to reuse most of the layout and principles in order to save time and focus more on the design and game logic.

## New Concept

I kept the same isometric gameboard to support the action. After a bit, I was inspired by the story of the controversial A69 highway construction.

The idea is to prevent vehicle to arrive on site, to postpone the start as much as possible, so that I can keep the "whac a mole" principle, with moving target this time.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-mini-casual-game-with-nextjs-zone-central.jpg" alt="Fin de chantier game - zone centrale" class="w-full">

## Stack

I used Sveltekit for Blackout. Though I enjoyed its light syntax, I struggled with lacking feature, especially having dynamic optimized assets. I also wanted to refocus on React through Nextjs, to avoid having overly dispersed knowledge.

I decided to go with the same stack regarding the rest:

- Firebase as backend (auth + user data)
- Tailwind as UI framework
- Vercel as hosting

## Design

### Environment

I kept modeling using Cinema 4D to get the same low poly look & feel, this time designing a hilly countryside crossed by main roads, as well as tunnels. Those lanes will be the interactive part of the map.

I then adapted predesigned construction vehicles, simplified and uniformized their styles. I render them in the 4 perspectives for which they will be used.

I defined the animated flags and smokes and rendered then as GIFs through After Effects.

### UI

As usual, I started with some Figma screen, based on the previously designed Blackout ui, and replace the environments. Overall, the UI stays the same. Some light improvments have been made here and there.

## Coding

### Migration from Svelte

I undertook to migrate the most of my previous Svelte codebase into a NextJs one, using the now etablished app router. Most of the time, it was just a matter of mirroring structure, replace with the proper framework attributes syntax (`class=` becomes `className=`).

Though a lot of functional programing could stay the same, I had to reorganize how the data flows. Stores become separated contexts, and useState enter the game.

I intended to experiment a lot with RSC and server actions, but, I almost any time gave up using the `"use-client"` directive to be able to use freely all the UI mutation patterns I was used to. I really have to take the mental shift to decorallate RSCs and CSCs.

I guess it's no big deal as this app is mostly a client side with heavy reactive UI.

### Next auth and Firebase

I decided to go with Next Auth and found pretty easy to set it, but I didn't make the Firestore adapter work properly (to get the user datas part of the Next Auth context).

Instead, I juggled with both Next Auth and FireStore hooks to retrieve binded data given an auth when necessary, and that is Ugly and I'm well aware of it 🙁.

## Github Copilot

I didn't regret to get the Copilot subscription, that helped me in many ways. Sometimes, it misled me, especially provinding obsolete import paths (from the Nextjs page router).

## Deployment

Not that much to say with Vercel that do an excellent job and eases the process, be it the subdomain binding, preview deployments, error logs...

## Wrapping up

To conclude, and as always, working on this kind of side project has been very fun and enriching. Seeing the ideas come to life is very satisfying, and also within a limited time frame, so that it's never boring.

It also help to underline which part of the process have to be improved, because I consider my codebase as pretty messy at the time, and I that gives a roadmap on what would be interesting to dig in.

## Demo

Here is the [playable game](https://findechantier.pommeclic.com/) of "Fin de chantier" (french version only). The contest run until next February 12th. I will then reopen the game without the contest part.

If interested, you can also play the still playable previous Svelte game called [Blackout](https://blackout.pommeclic.com/).

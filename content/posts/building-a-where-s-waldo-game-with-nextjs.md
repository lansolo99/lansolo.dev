---
title: "Building a Where's Waldo game with Next.js"
type: 'article'
description: Process I used to build this mini-game based on the Google Playground game.
imgCover: 'building-a-where-s-waldo-game-with-nextjs'
tags: [game, next, framer-motion, Tailwind, Figma, devs, cinema 4D]
createdAt: 2024-04-01
---

As a quick reminder: this post is not a step-by-step tutorial on how I built this game, but just a review of how I approached this project during this journey.

## The game

First and foremost, here is the [playable live game](https://jeu-pommeclic-paques-2024.vercel.app/) this post is about.

## Context

Back in december 2023, Google released a mini-game based on the Where's Waldo concept. The goal was to celebrate its 25 years by giving people the challenge to find items based on the most search terms.

I immediatly wanted to build my own version one day. 

As a coincidence, I had the opportunity to work on such a game 2 month later for Banque Populaire. They wanted something on the mixed Easter + Olympic games themes for April, linked to a contest for their internal teams, as they use to do on a regular basis.

## Stack

As usual, I went with the efficient couple Next/Tailwind and a spark of Framer-Motion.

## Design

Same here too: the good old Cinema 4D helped me building a set showing an aerial fantasy and simplified version of Paris, centered around the Eiffel Tower. Style is low poly is an almost-isometric view.

### Generative image

I used generative image tools for the first time to give me guidance on what I wanted to design. The results were too good actually, beyond of what I dreamed of. Here is some shots based on my prompts:

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-where-s-waldo-game-with-nextjs-ai.jpg" alt="initial intention draft and generated image set" class="w-full">

To be honest, it was frustrating not to be able to get a 3D meshed version to directly edit those results. I learned it's a bit too early now to get it. Sure thing we'll be provided with such tools in a near future!

So I used these shots as a guidance to rebuild from scratch the whole set.
It's absolutely needed, as I have no choice than editing the result to exactly fit with my proposal. 

### UI

Usual process here too: Figma screens, almost entirely based on the Google Playground layout as it's already perfectly crafted.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-where-s-waldo-game-with-nextjs-figma.jpg" alt="Figma screens of waldo's game" class="w-full">

### Gameboard

Items are scattared on the whole set. I used a mapped coordinates set to detect when user click onto an elligible area.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-where-s-waldo-game-with-nextjs-gameboard.jpg" alt="Gameboard of waldo's game" class="w-full">

I used the [react-quick-pinch-zoom](https://github.com/retyui/react-quick-pinch-zoom) library to handle the draggable and pinchable map. The main struggle has been to centered the map while it takes the whole canvas, like an object-cover would do. 

After way too much time spent on this, I ended up with a stinky forced refresh to force the map being centered and takes the whole space according to the device dimensions.

## Github Copilot

I won't repeat myself on this topic because it has been obvious now that Copilot is henceforth an essential in my developer toolkit. It really speed-up the process to generate functions dealing with the datas, or acting as an advisor regarding how to organize code taking the context into account.

## Deployment

Static export needed, because the constraint is to work on an Apache server; nerdy stack comes with large companies...

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-where-s-waldo-game-with-nextjs-mobile.jpg" alt="Game on a mobile device" class="w-full">

## Wrapping up

I would have loved working on a much more detailed and fine-tuned 3D set, but I had to deal with tight deadlines. I'm pretty sure I will work on personal variant in the future.

This kind of project mixing 3D art and experimental coding is the one that give me the most fullfilment as a creative developer.


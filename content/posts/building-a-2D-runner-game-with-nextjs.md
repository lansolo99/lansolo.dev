---
title: 'Building a 2D runner game with Next.js'
type: 'article'
description: Process I used to build this 2D runner game.
imgCover: 'building-a-2d-runner-game-with-nextjs'
tags: [games, next, framer-motion, Tailwind, Figma, devs, cinema 4D]
createdAt: 2024-08-17
---

As a quick reminder: this post is not a step-by-step tutorial on how I built this game, but just a review of how I approached this project during this journey.

## The game

This is the fourth game we've developed with Pommeclic, and as always, here is the [playable live game](https://vendangesmaster.pommeclic.com/).

As the URL suggests, we leveraged the theme of seasonal grape harvesting to create a new game called "Vendanges Master," which means "Master of Grape Harvesting" (in French).

## Goal

Our previous games were all built with a static 3D isometric gameboard.

This time, we opted for a 2D endless runner game, which is better suited for the concept of grape harvesting along a row.

The objective is simple: pick grapes from a moving set and harvest as many as possible within a limited time.

## Sets

As usual, I built the environment using Cinema 4D, rendered as a flat front projection to avoid strange perspectives as the sets move horizontally.

I then rendered the planes separately, added some post-processing using After Effects, and exported them as optimized PNGs.

<img src="https://res.cloudinary.com/lansolo99/image/upload/v1723901084/lansolo.dev/posts/building-a-2d-runner-game-with-nextjs-sets.jpg" alt="Vendanges Masters exported sets" class="w-full">

## Development

### Stack

It's Next.js with the app router.

- Next.js with the app router
- TailwindCSS for UI
- ShadCn for some headless components
- Firebase for authentication and user data
- Maizzle for marketing emails
- Vercel for hosting

The entire codebase was carried over from the previous games, with some refactoring.

### Gameboard

I used repeated pieces of the set to provide enough material to sustain a 60-second horizontal pan.

I had to create a convincing parallax effect and carefully adjusted the speed of the sets to avoid choppy panning.

## Notes

I used the app router and server-side rendering for the highscore page, utilizing the new React Suspense feature along with a loading skeleton UI.

In my opinion, this provides a better user experience.

## Wrapping up

This post is much shorter than the [previous game post](/posts/building-a-mini-casual-game-with-nextjs), but it still involved a lot of work..

The main challenge was handling the passwordless authentication flow, which is always tricky and time-consuming to simulate properly.

_Would you be interested in having a public Git codebase available? If so, let me know in the comments._

## Demo

Here is the [playable game](https://findechantier.pommeclic.com/) of "Vendanges Master" (french version only).

If interested, you can also play our other mini-games:

- [Pommeclic puzzle](https://drag-and-drop-puzzle-with-framer-motion.vercel.app/)
- [Backout](https://blackout.pommeclic.com/)
- [Fin de chantier](https://findechantier.pommeclic.com/)

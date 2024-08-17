---
title: 'Building a 2D runner game with Next.js'
type: 'article'
description: Process I used to build this 2D runner game.
imgCover: 'building-a-2d-runner-game-with-nextjs'
tags: [game, next, framer-motion, Tailwind, Figma, devs, cinema 4D]
createdAt: 2024-08-17
---

As a quick reminder: this post is not a step-by-step tutorial on how I built this game, but just a review of how I approached this project during this journey.

## The game

It's been our fourth game developed with Pommeclic, and as always, here is the [playable live game](https://vendangesmaster.pommeclic.com/).

As stated in the url, we leveraged the seasonal grape harvesting to create a new game, called "Vendanges master", meaning "master of grapes harvesting" (in french).

## Goal

Our previous games were all built with a static 3D isometric gameboard.

We decided to go here with a 2D endless runner game, better suited for grape harvesting on a row.

It's just a matter of picking grapes on a moving set, and harvest the most of them in a limited time.

## Sets

As always, I built the environment using cinema 4D, rendered as a flat front projection, to avoid weird perspectives as sets are translating horizontally.

I then rendered the planes separately, added some post-processing using After Effects, and exported them as optimized pngs.

## Development

### Stack

It's Next.js with the app router.

- TailwindCSS for UI
- ShadCn for some headless components
- Firebase for auth and user datas
- Maizzle for marketing emails
- Vercel for hosting

The whole codebase was taken back from the previous games, with some refactorings.

### Gameboard

I used repeated pieces of set to have enough matters to sustain a 60s horizontal pan.

I had to render a convincing parallax effect, and adjusted carrefully the speed of the sets to avoid having a choppy panning.

## Notes

I used the app router, and a server side highscore page render, with the new React Suspense feature, along with a loading skeleton UI.

This provides better UX to my opinion.

## Wrapping up

Way shorter than the [previous game post](/posts/building-a-mini-casual-game-with-nextjs), but still a lot of work.

The main struggle was to handle back the passwordless authentication flow, always tricky and time-consuming to simulate properly.

_Would you be interested to get a public Git codebase available? If so, let me know in the comments._

## Demo

Here is the [playable game](https://findechantier.pommeclic.com/) of "Vendanges Master" (french version only).

If interested, you can also play our other mini-games:

- [Pommeclic puzzle](https://drag-and-drop-puzzle-with-framer-motion.vercel.app/)
- [Backout](https://blackout.pommeclic.com/)
- [Fin de chantier](https://findechantier.pommeclic.com/)

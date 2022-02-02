---
title: 'Drag and drop puzzle game with Framer-Motion'
type: 'article'
description: Walkthrough about building a drag and drop puzzle game using Framer-motion.
imgCover: 'drag-and-drop-puzzle-game-with-framer-motion.png'
tags: [game, next, framer-motion, Tailwind, Figma]
createdAt: 2022-01-04
---

## Stack used

- Next.js + Typescript
- Tailwind
- Framer Motion

## Context

<a href="https://drag-and-drop-puzzle-with-framer-motion.vercel.app/" target="_blank">
<img src="https://res.cloudinary.com/lansolo99/image/upload/v1641307358/lansolo.dev/posts/drag-and-drop-puzzle-game-with-framer-motion_puzzle_start.png" alt="Puzzle start">
</a>

I'm a big fan of the [Framer-motion](https://www.framer.com/motion/) animation library since I started playing with it a couple of months ago.

It comes in handy when I have to deal with high effect interaction designs.

I decided to dig a little deep more by using it for a simple drag and drop puzzle in a side-project.

I stumbled upon [this Dribble design](https://dribbble.com/shots/13373054-Dogzzle) from Dwi Ash, and decided to implement&nbsp;it.

Here are the [live demo](https://drag-and-drop-puzzle-with-framer-motion.vercel.app/) and the [public repo](https://github.com/lansolo99/drag-and-drop-puzzle-with-framer-motion).

## Design

First, I chose a pixelated and personified version of an apple, as the main puzzle picture.

This choice was made as a visual representation of the company I'm working with called [Pommeclic](https://pommeclic.com) (appleclic in French).

It's more complex than the original dog design, and I had to subdivide it into smaller grid cells.

<img src="https://res.cloudinary.com/lansolo99/image/upload/v1641302857/lansolo.dev/posts/drag-and-drop-puzzle-game-with-framer-motion_apple_subdivided.png" alt="Subdivided apple">

Then I had to break the character into multiple pieces and add a grid system and pieces IDs to translate the whole thing as React components.

I have done that using Figma.

<img src="https://res.cloudinary.com/lansolo99/image/upload/v1641303532/lansolo.dev/posts/drag-and-drop-puzzle-game-with-framer-motion_apple_pieces-logic.png" alt="Pieces logic">

## Design implementation

I decided to go with full css implementation using a data objects to compute both empty slot zones and floating pieces around.

[Slots](https://github.com/lansolo99/drag-and-drop-puzzle-with-framer-motion/blob/develop/datas/puzzleSlots.ts) are rows of squared units, each containing utility classes that I defined using Tailwind and based on css variables.

[Pieces](https://github.com/lansolo99/drag-and-drop-puzzle-with-framer-motion/blob/develop/datas/puzzlePieces.ts) are grouped squared units, using the same system of utility classes, this is mandatory to be able to render proprer bevel effect with light and shadow bevels at the right place.

Then, render the markup is only a matter of looping over these datas into the [jsx part](https://github.com/lansolo99/drag-and-drop-puzzle-with-framer-motion/blob/develop/pages/index.tsx).

The index page contains of course lot of additionnal logic that I can't explain in detail (to keep this article concise), but the whole architecture is based on this [showcased CodeSandbox](https://codesandbox.io/s/5trtt) from Matt Perry.

This CodeSandbox is a simple demo of a Framer Motion shared layout used within a drag and drop feature between 2 zones.

My project is much more complex as I have to handle multiple start and end zones (pieces and slots).

## Framer Motion drag

Framer Motion has a built-in [drag and drop feature](https://www.framer.com/docs/examples/#drag) that can be easily implemented on any HTML tags (set as motion.div), using specific attributes and methods (drag, onDrag, onDragStart, onDragEnd, dragElastic, dragTransition..).

## Framer Motion shared layout

I think Framer Motion shines when dealing with [shared layouts](https://www.framer.com/docs/animation/#shared-layout-animations). It means we can use two different components, but keep only one displayed and animate it smoothly between one and another.

This what is done between a dragged piece and a positionned piece : both are defined at their final positions in their proprer containers.

## Other utilities

I used multiple third party packages that I found useful along the way:

- [div100vh](https://github.com/mvasin/react-div-100vh): as it's a responsive and centered design, this help to deal with real viewport size on mobile
- [Lottie React Player](https://github.com/mifi/react-lottie-player): to implement [Lottie](https://lottiefiles.com/what-is-lottie) Json animations (the firework at puzzle completion)
- [clsx](https://github.com/lukeed/clsx): my go-to package to help dealing with complex conditional classes
- [usehooks-ts](https://usehooks-ts.com/): A very convenient collection of utility hooks written in Typescript

## Helper

Completing the puzzle display a reward message, and a reset button.

I added a helper on the top-left corner of the screen to trigger the completion, that is useful during the development phase.

Here is how the final stage looks like:

<img src="https://res.cloudinary.com/lansolo99/image/upload/v1641307541/lansolo.dev/posts/drag-and-drop-puzzle-game-with-framer-motion_puzzle_end.png" alt="Puzzle end">

## To go deeper..

I intend to dig more on this lib as I barely scratched the surface of what is achievable.

Beside the [official doc](https://www.framer.com/docs/), I found a lot of [examples animations](https://framerbook.com/animation/example-animations/) exposed in the [Framer book](https://framerbook.com/) that is focused toward [Framer](https://www.framer.com/), the original prototyping tool Framer Motion is based on.

I personally didn't use Framer so far but maybe should I?

Don't hesitate to tell me if you identify code smells within the [prototype](https://github.com/lansolo99/drag-and-drop-puzzle-with-framer-motion), as I started using React since a bit less than a year and Typescript for a couple of months.

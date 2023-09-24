---
title: 'A Tinder-like card game with Framer-Motion'
type: 'article'
description: Walkthrough about building a Tinder-like card game using Framer-motion.
imgCover: 'drag-and-drop-puzzle-game-with-framer-motion.png'
tags: [game, next, framer-motion, Tailwind, Figma, devs]
createdAt: 2023-09-25
---

## Stack used

- Next.js + Typescript
- Tailwind
- Framer Motion

## Side note

This post is not a tutorial on building this module from scratch, but a recap of the process and things I wanted to share. I invite you to take a look at the repo if you are interested on examining or pulling the [whole code](https://github.com/lansolo99/tinder-card-game-with-framer-motion).

## Context

<a href="https://drag-and-drop-puzzle-with-framer-motion.vercel.app/" target="_blank">
<img src="https://res.cloudinary.com/lansolo99/image/upload/v1641307358/lansolo.dev/posts/drag-and-drop-puzzle-game-with-framer-motion_puzzle_start.png" alt="Puzzle start">
</a>

In the same vein of my precedent [small puzzle game](/posts/drag-and-drop-puzzle-game), I adapted the concept of Tinder-like cards swipe using [Framer-motion](https://www.framer.com/motion/), a powerful React animation library that I still explore on a regular basis.

Initially, I designed an [animated prototype](https://dribbble.com/shots/22512145-Tinder-inspired-eco-quiz) and I decided to implement it, in order to customize it for client in the future.

Here are the [live demo](https://tinder-card-game-with-framer-motion.vercel.app/) and the [public repo](https://github.com/lansolo99/tinder-card-game-with-framer-motion).

## Design

The initial concept was to propose a quick game testing someone knowledge on the carbon footprint.

The Tinder-like gesture turned out to be an interesting UI solution, as it brings an appealing, and entertaining UI.

After designing some key screens (Figma) and tested them through an animated After Effects prototype (After Effects), time has come to turn it into some functional code.

## Framer-motion

This kind of interactity perfectly fits with what Framer-Motion is capable of. We are talking about gesture event listeners and animation controlled elements.

### Gesture

The first needed piece is the Drag gesture, that will be mapped from the swipe movement.

Framer-Motion has the [Drag & Pan helpers](https://www.framer.com/motion/gestures/#drag).

It's a matter of turning moving elements into <motion.element> and apply specific Framer-Motion attributes on them.

For the use-case of a swiping card, I used the following ones :

- drag (set the element draggable)
- dragSnapToOrigin (animate the element back to origin at release)
- dragElastic (set increasing friction as the element walks away from its origin)
- dragConstraints (maximum distance allowed from element's origin)
- dragTransition (apply an organic easing when the elements move away or back at release)
- onDragStart (speak for itself)
- onDragEnd (speak for itself)

## UseTransform

The second

### Swipe logic

## Image-mask

## Contexts and RSCs

## Copilot

## Lottie sparks

## To go deeper..

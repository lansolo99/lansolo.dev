---
title: 'Building a food simulation game with Next.js and AI'
type: 'article'
description: Process I used to design this mini simulation game.
imgCover: 'building-a-food-simulation-game-with-nextjs-and-ai'
tags: [game, next, framer-motion, Tailwind, Figma, devs, dzine]
createdAt: 2024-11-30
---

## Context

The end of 2024 is almost there, and I have been asked by Banque Populaire Rives de Paris to build a casual game for Christmas, as I have now done several in the past.

After we put ideas on the table, the one selected was a mini food simulation that fitted the most with the "charity" theme our client wanted to exploit.

I benchmarked a bit and kept some gameboard designs as a starting to point to build a game scene showing a kitchen workshop with a specific illustration style (some outlined adorable characters and assets nested within an heart-warming environment).

## Goal

The game encourages the player to complete as many orders as possible within a given time. He will have to compose the proper food tray by picking up the right assets.

## Generative design

There was a problem: as being both in charge of the graphic design and the development, the chosen style was not in my skillset. The one I master is a low poly 3D isometric.

It has been the opportunity to test a new creative workflow using AI tools to generate the needed environments in the specific style.

### Dzine.ai

I tried some Stable Diffusion based tools, and the one I retained was [Dzine.ai](https://www.dzine.ai). An intuitive interface with predefined models and tools allowing a precise control over image content.

### Sketch to image

The most efficient starting point was to compose the game background on an existing image.
Providing even an ugly sketch produce stunning results if accompagnied with a precise prompt.

The initial concept was a gift workshop, and here was the result I got providing the following sketch and prompt:

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-food-simulation-game-with-nextjs-and-ai-sketch2image.jpg" alt="Dzine - initial gift workshop scene" class="w-full">

<div class="prompt">

_The scene is a 2D flat, viewed from a frontal camera at eye level._
_It is a gift-making workshop in a cozy house._
_On the upper part of the image: the wall, with a cozy brick, a window with curtains and snowy outside. On the right part of the wall: a shelf with christmas decorations._
_On the lower part of the image: it's a workbench._
_There is a two-level workbench._
_On the higher level (a wooden table): some empty wooden boxes._
_On the lower level, beneath the table:_
_On its right side: three rolls of gift wrap in different colors._
_On its left side: three rolls of thin ribbons in different colors._
_The overall ambiance is blue._

</div>

### Image to image

When it was decided to go with a food simulation, I used a screenshot of [Lili's Cafe](https://play.google.com/store/apps/details?id=com.pixup.LilysCafe&hl=fr), an existing mobile game I took as a model. Here are the result with a little refining through prompt:

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-food-simulation-game-with-nextjs-and-ai-image2image.jpg" alt="Dzine - food workshop scene" class="w-full">

### Scene cleanup

The next step was to get a clean separated background, so that I can manage assets apart. For this, I used both the Dzine "erase" tool, and the Photoshop "content aware fill" tool. Here is the evolution:

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-food-simulation-game-with-nextjs-and-ai-erase-cleanup.jpg" alt="Dzine - erases" class="w-full">

### Assets

At the beginning, I tried to populate the scene with assets using the "image-to-image" tool but the results were too weird.

So I decided to use the text-to-image on a blank canvas for every single assets, but using a proper trained model (based on some uploaded Lili's Cafe images).

I had to trigger a lot of generations for some, because it didn't match the result or angle I wanted.

The final action were background removals and generations flaws fixs.

Here are some examples:

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-food-simulation-game-with-nextjs-and-ai-assets.jpg" alt="Dzine assets generation - " class="w-full">

### Final gameboard

I composed the final scene on Photoshop, importing and refining assets after assets. Finally, I set the game user interface with Figma. Here are the scene without and with assets:

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-food-simulation-game-with-nextjs-and-ai-final.jpg" alt="final scene" class="w-full">

## Stack

Not that much to say, because I utilized my well-established following technology stack:

- Frontend: Next.js (v.15)
- Backend: Firestore (Firebase) as users database
- UI: Tailwind.css + ShadCn + Framer Motion

## Development

The project is strongly based on our previous game releases ([Blackout](/posts/first-sveltkit-project-with-blackout), [Fin de Chantier](/posts/pommeclic-fin-de-chantier-mini-game), [Vendanges Master](/posts/building-a-2D-runner-game-with-nextjs).

Therefore, I re-used the same architecture and patterns I had built for these past ones.

I took advantage of the newly released "Copilot edits" feature that can simultaneously modify a set of files for us, based on a prompt. We just have to accept or discard the proposed solution.

This has been helpful as we often have to change multiples files to implement a feature.

## Deployment(s)

The project has to be deployed on an Apache server, so bye-bye "on-the-edge" Next.js toolings, such as Server Actions, or any Node-based features. It's all client-side static export.

## Wrapping up

It would have been an usual work if I didn't experiment the generative image workflow.

My opinion on this is still reserved:

- on the one hand, these tools give us the ability to produce a large variety of design without being an expert.
- On the other hand, editing generation is truly a pain in the a\*\*.

We are in the early stages of this technology and struggling with it is part of the game.

But when I see how fast things are evolving, I think we can be confident that those struggles will tend to minimize as time goes by...

## Demo

Here is the [playable game](https://grand-jeu-noel-2024.vercel.app/jeu).

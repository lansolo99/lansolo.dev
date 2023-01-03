---
title: 'First Sveltekit project with Blackout'
type: 'article'
description: Walkthrough of my journey learning Sveltekit by releasing a mini-game
imgCover: 'first-sveltkit-project-with-blackout'
tags: []
createdAt: 2023-01-03
---

This post describe the release of Blackout, a mini-game written in Sveltekit

## Genesis

Similar to what the [drag & drop puzzle](/posts/drag-and-drop-puzzle-game-with-framer-motion) realize in early 2022, I wanted to work on a side-project related on new year whishes with Pommeclic, company I still work with.

We're living a troubled period regarding the energy supply, especially in our european countries. 

### Concept

So I decided to adapt the mole game concept with dwellings replacings moles, and energy overconsumption replacing popin heads. 

A player has to cut energy on housing as quickly as possible before the blackout happens and trigger the game over.

### Features

- the game take place around a contest with prizes to win for best scoring players
- the contest is open for a limited time
- the game is mobile-optimized but is a web-App to keep deployments easy
- the score board is public

## Tech stack

The project was finally the perfect opportunity to experiment with Svelte.js and therefore, Sveltekit, as it encompasses static contents. The rest of the stack would stay familiary territory to avoid mental scattering : 

- frontend: Sveltekit
- backend: Firebase
- environments: Cinema 4D
- webdesign: Figma
- hosting: Vercel
- tracking: Plausible
- marketing: Send in blue


### Environments

I started to design all the dwellings on a conventional isometric 3D gameboard that leverage my own favorite design style: low-poly hand-drawn looking 3D graphics.

I then exported each dwellings on separate image renders to be usable on a browser.

### Webdesign

I then used Figma to design the game interface using phone canvases. I used some fancy fonts to get this mixed tech and fun look & feel. The blue as primary color is taken from Pommeclic guidelines.

Once all the screens set, I also designed transactional emails templates in the same vein.

## Development

I of course took the time to learn all the Svelte basics before I jump into this development, following the great tutorial I already mentioned in a [previous post](posts/js-frameworks-switching).

### Workflow

Finding a suitable architecture wasn't a big deal as the app is very simple, though, it has been challenging on numerous parts.

I chose to heavely base my logic using stores and watching them. Store are both easy and tricky to work with, especially regarding reactivity with derived store. I finally got how it works with heavy usage of the Svelte reactive statement "$:"

The global DX experience is quite pleasant, as the code boilerplate is way lighter than Next.js

I entirely relied on Svelte built-in animation to bring micro-interaction instead of implemeting a great but cumbersome framer-motion like tool, and simplicity is great at the end 😌.

### Struggles

- App performance was a huge painpoint as I quickly noticed some severe lags due to high frequency DOM refreshs that cause a lot of in-game crashes. I found a solution with switching from images display toggling to canvas updates, which help to stabilize a lot. The best would have been to use native techs but that wasn't an option at the time.
- Adjusting game difficulty was a never-ending work as I had to avoid folks cheating, while preserving overall performance.
- Some weirds layouts update on routing caused me headaches. It seems to be related to global wrapper css positions that changes from relative to absolute.
- It's not possible to have a simple and dynamic image optimization tool right now as next/image, so I manually converted all assets to webp

## Deployment

I obviously used Vercel as it's now officially backing Svelte, no need for specific deployment adapter, it works out of the box 😎! 


### Vercel

Vercel is clean with a simpler UI than Netlify. Binding custom domains is a breeze (as I wanted to expose the game as pommeclic subdomain).


### Firebase

Switching from atomic to based-branch deployments and passing them to production is easely done.
The user scores are stored with Firebase.

It has been easy to setup as always, and I didn't struggle to bring user Auth and Firestore database in the game.

## Launches phases

We decided to launch a bêta-test before exposing the game to its final target: the Pommeclic customers.

This allowed us to patch some previously unoticed bugs and game behavior (one trivial cheating method among other).

TODO: write on the production launch once done


## Wrapping up

I will update this post and put the public link to the final game once the first contest has passed (end of january 2023).

It has been the most interesting project in 2022, bringing designs and tech learning opportunities along handling a whomle real-life product lifecycle.

I will keep following Svelte development and experiment it on other projects, as it offers a very nice DX.

I however won't give up using Next.js, that has become closer to what Svelte is, since the release of v.13.


---
title: 'Nuxt.js puzzle game development - WIP#4'
type: 'article'
imgCover: 'nuxt-js-puzzle-game-development-wip4.jpg'
tags: [nuxt, cordova]
createdAt: 2019-12-27
---

This post is part of a full walkthrough of building an android app using Nuxt + Cordova
<!--more-->

The end of the year is here and the puzzle game development is still ongoing. I worked for about 7 month now on the game. I guess the completion is around 75%.

1. [Part 1](/posts/nuxt-js-puzzle-game-development-wip1)
2. [Part 2](/posts/nuxt-js-puzzle-game-development-wip2)
3. [Part 3](/posts/nuxt-js-puzzle-game-development-wip3)
4. [Part 4](/posts/nuxt-js-puzzle-game-development-wip4)
5. [Part 5](/posts/nuxt-js-puzzle-game-development-wip5)

## Follow-up

All the game content has been created, except a few video transitions missing.

Now the focus is on developing the connections between user datas and database. I set a new Firebase project for this, with a Firestore database, which is the new Firebase standard (instead of real-time database). Still easy to implement with the Firebase CLI and the clear documentation regarding the setup process.

Getting data back and forth is a piece of cake!

## Performance concerns

As discussed previously (WIP#1  WIP#2, WIP#3), the app is a VueJS + Nuxt based, packed as a webview with Cordova.

One of the biggest drawback of having chosen this stack is about the bad performance: it feels a bit laggy whatever optimisation I can do.

At the beginning I thought the Cordova setup was involved in this, but I realized this isn’t related because I tried to partially migrate the project on the [Quasar Framework](https://quasar.dev/).

## VueJS Quasar Framework

Quasar is a VueJS framework that can acts both like a UI toolkit and development framework like Nuxt.
It encompasses hooks that ease the deployment on targeted platforms, among those are Apache Cordova, so nearly no setup needed, all deployments run with a simple command line. Everything is well documented.

My experience with Quasar is too short to make an in-depth review but I appreciated the way it’s organized (tree structure, helpers, pre-built components..). I'll certainly go back to it for a future project. But having migrated the first puzzle, I realized the performance issue remains the same. So, I decided to keep up with Nuxt.

## Tools to improve performance

I read a lot about what I could change to increase FPS as the game get laggy as time goes by.
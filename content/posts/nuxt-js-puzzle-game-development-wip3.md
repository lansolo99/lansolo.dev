---
title: 'Nuxt.js puzzle game development - WIP#3'
type: 'article'
imgCover: 'nuxt-js-puzzle-game-development-wip3'
tags: [nuxt, cordova]
createdAt: 2019-11-21
---

This post is part of a full walkthrough of building an android app using Nuxt + Cordova
<!--more-->

6 months have passed since I’ve started working on what is so far my biggest Vue.js project : a Nuxt.js based Android puzzle game and it’s time to take stock on what has been achieved. I link here the articles on previous steps about the development : #WIP1 and #WIP2.
This post is a part of a miniserie where I explain my journey and what I learned through building an Android application with Nuxt.js, and wrapped with Cordova.

1. [Part 1](/posts/nuxt-js-puzzle-game-development-wip1)
2. [Part 2](/posts/nuxt-js-puzzle-game-development-wip2)
3. [Part 3](/posts/nuxt-js-puzzle-game-development-wip3)
4. [Part 4](/posts/nuxt-js-puzzle-game-development-wip4)
5. [Part 5](/posts/nuxt-js-puzzle-game-development-wip5)

## Content

* We found a name : Smart Prisoners. We also designed a logo (post feature-image).
* Things and features are self-defining along the development path, which is not a best practice, but it’s convenient for us so far. To sum up, we’ll play a prisoner that we will have 10 doors to open to free himself, by resolving 13 logic puzzles. Each puzzle has a countdown that generate new values when it times out. There’s a limited amount of “life” for the overall game. The global elapsed time is summed up and the user can record its time into a high score board at the end. So the main goal in terms of progression is to finish the whole escape in the minimum amount of time.

## Testing

* We have weekly game testing session with my mate to take a stock. I compile the app with Cordova so that we can see how the app behave in real conditions. The biggest hurdle we’re currently facing at is on the performance side. The game is lagging pretty hard on my Nexus 9 tablet. I discovered there’s memory leaks by taking snapshots from the Chrome memory tab. Indeed, the Vue components seems to pile-up as time goes. I’ve started to clean a lot of things such as event listeners, setTime outs. Some component doesn’t destroy themselves so that I have to take care of it from the "beforeDestroy” lifecycle hook.
* I’m just beginning in the performance & optimisation work as I never have to take care of it with my previous Vue app ([Weekx](https://weekx.xyz)). In this case, the challenge is bigger, due to a high amount of generated child components and micro-interactions. Hopefully I can solve it.
* I also realized I will definitely implement tests as I often break things during refactoring some code parts which cause side effects on certain routes. I started to re-learn [Jest](https://jestjs.io/) implementation in Vue to do so.

## Next steps

So far, we have covered 75% of the content development, but there still so much to do :

* Finish and polish the video transitions work and the sound design
* Implement a main menu with options
* Implement an authentication user flow (should be [Firebase](https://firebase.google.com/))
* Implement [Admob](https://developers.google.com/admob), as we plan to monetize the app through ads
* Implement unit, and end to end tests, and a solid continuous deployment flow once the game has been released (spring 2020)

This project is a great way to learn application architecture and how to organize components. It also skyrocket my grasp of javascript concepts and class/methods as each puzzle is the opportunity to start from a blank page.

See you in the next WIP!
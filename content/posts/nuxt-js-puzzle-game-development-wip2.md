---
title: 'Nuxt.js puzzle game development - WIP#2'
type: 'article'
imgCover: 'nuxt-js-puzzle-game-development-wip2.jpg'
tags: [nuxt, cordova]
createdAt: 2019-07-24
---

This post is part of a full walkthrough of building an android app using Nuxt + Cordova
<!--more-->

## Back to work

Months have passed since I’ve introduced the next big project I’m working on wich is a Nuxt.js puzzle game. I had to pause the project multiple times due to priority work, as everyone I guess.. This time I went with Nuxt.js and am still happy about it so far, the workflow is handier in many ways than vanilla vue.js. Speaking of deadline, we plan to have something finished for spring of 2020.

This post is a part of a miniserie where I explain my journey and what I learned through building an Android application with Nuxt.js, and wrapped with Cordova.

1. [Part 1](/posts/nuxt-js-puzzle-game-development-wip1)
2. [Part 2](/posts/nuxt-js-puzzle-game-development-wip2)
3. [Part 3](/posts/nuxt-js-puzzle-game-development-wip3)
4. [Part 4](/posts/nuxt-js-puzzle-game-development-wip4)
5. [Part 5](/posts/nuxt-js-puzzle-game-development-wip5)

## World

The environment is pretty well etablished at the time. We play a prisoner, locked in a high security prison in a distant future. In this prison, the convicts are offered a way to self escape by solving challenging puzzles on digital screens. Each puzzle solved unlock a door. The puzzle game principle in some way … 🙂 There will be a dozen of puzzles to solve before we can breathe the fresh air from the outside. Until then, it’s a neat and glacial looking environment a la “Cube” that will surround us between puzzles.

## 3D Environments

This time, it’s my mate Didier who has already done the modelling (with Cinema 4D) for all the different rooms that we’ll go through. I’ll care about the animations and renders + post-production.
The 3D parts will be simple html5 videos and loops that will take place between solved puzzle as we’ll go toward the next door.

## UI and GSAP

As every game, it comes with some kind of animated HUD elements.
I first went with classic css animations before realizing I could use something much more powerful and flexible, I named it [Greensock](https://greensock.com/).
I think it’s the most popular animation tooling. I used it a lot in the old days of Flash with AS3, now it perfectly fit with Vue.js, it’s just a matter of importing the gsap NPM package while using Vue $refs to target the element to animate. We can then leverage its power by using tools such as tweenMax or TimelineMax and all kind of available easings.

## Cordova for testing in real conditions

This time, we’re not building a simple web app, it has to be available on Google Play store.

I off course gathered a lot informations about existing solutions, and finally conclude that what I need is a native packager to compile my app into an app-shell. The most widely used tool is Cordova. I came across the headache of configuring stuff for Android testing, and here we go for a whole day of stuffs to install with plethora of runtime errors here and there...

### To wrap up, here is the quick list we need before attempting something:

* Install Java development kit (but version 8 only! )
* Install Android Studio app
* Install Gradle + set the permission needed (chmod 7777)
* Set the right environment variable for Android in  .bash_profile (mac user)
* Set an android device for testing purpose (unlock it for debugging)

### Now it’s time to install Cordova from a terminal:

* npm install -g cordova
* cordova create &lt;project&gt;
* cd &lt;project&gt;
* cordova platform add android
* cordova requirements (it needs to pass all the tests!)
* cordova build
* cordova emulate Android -> launch the emulator (that need to be setup in Android Studio)
* cordova run Android -> launch the project on a plugged mobile device in USB (previously you would have unlock the debugging mode)
* eventually launch Chrome to work on a debug session from the dev tools

This will execute the files found in the cordova/www folder, we still need an npm script to move an app built with Nuxt/Vue/whatever framework into this folder. Still a lot of configuration actions specific to Nuxt.js to do. I found a very useful process that worked without frictions (almost) from Hokify.

Here is the [Github project]( https://github.com/hokify/cordova-nuxt-demo).

## Next

I can now test the app in real conditions. The next step is to continue coding puzzles, and work on the overall architecture based on dynamic routes + VueX for the state management.

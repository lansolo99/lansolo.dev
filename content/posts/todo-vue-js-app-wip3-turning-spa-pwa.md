---
title: 'Todo vue.js app WIP#3 : turning SPA into a PWA'
type: 'article'
imgCover: 'todo-vue-js-app-wip3-turning-spa-pwa.jpg'
tags: [vue, sketch]
createdAt: 2019-03-26
---

This post is part of a full walkthrough of building todo app using vue.js
<!--more-->

1. [Part 1](/posts/todo-vue-js-app-wip1-new-project-startup)
1. [Part 2](/posts/todo-vue-js-app-wip2-vuex-modules-firebase)
1. [Part 3](/posts/todo-vue-js-app-wip3-turning-spa-pwa)
1. [Part 4](/posts/todo-vue-js-app-wip4-alpha-launch-weekx)

A few weeks have passed since the last report and the app is now entering an alpha phase as the core features are mostly here. Below are the main milestones I had to overcome so far :

## Github + Netlify workflow

I keep deploying with Github + Netlify and now have a better understanding on how things works :

1. Create a new branch for each new feature
2. Commit and push the branch on remote repo
3. Commit and push the branch on remote repo
4. Commit and push the branch on remote repo
5. Master is accessible from the generated domain, and branches from "branchname--domain"
6. Once the feature is ok, merge the feature branch with master and so on

Also I defined environment variables to keep Firebase keys secret. So for each key, I used something like this :

```js{}[mains.js]
apiKey: process.env.VUE_APP_API_KEY
```

Then, I configured the key directly in Netlify in the build & deploy settings.
I, of course, stored my variable in my local project using a .env.local file. Before it was needed to use the DotEnv library to make it work with vue.js but not anymore.

## Firebase authentication

User can now authenticate using the Firebase auth api. I struggle a bit to connect the auth system (email & Google sign-in) with a fully working Firebase Database system. I managed to gather the whole signIn/signUp/signOut flow in the scope of the firebase.auth().onAuthStateChanged event.

## Transitions and animations

As data are now asynchronous for the most part, I set a spinner screen to give a proper feedback to user during unavoidable fetching times (startup, authentication).

I use the vue &lt;transition&gt; tag to manage the fade-in fade-out phase, as it’s clearly explained in the doc.

The app logo is now animated in an advanced way, and I used the awesome Lottie for that. It converts any vector animated from After Effects to a fully usable and lightweight JS animation. Things are never well explained and I used the vue-lottie library to make this working in vue.js. It takes advantage of the vue state system.

By the way, if you’re interested with analysing the project so far, you can access the github repo here (constantly WIP)

## Migrating from Real Database to Firestore

As I intended to turn the app into a progressive web app, I encountered a big problem : Firebase Realtime Database doesn’t really provide data persistence management while offline. It has basic offline capabilities that can detect connection state and offer an “onDisconnect” event, but it would be a tedious refactoring work to handle all use-cases including fetch/pull methods.

Firestore however offer a reliable offline data persistence solution. It doesn’t involve any additional work to handle offline use-cases as it is packed with a caching system that automatically resynchronise data as soon as user is back online. Firestore is a bit different than Realtime Database, but the syntax for calls is pretty much the same. Data is organised in a better way (collections containing documents containing sub-collections). it took me a day to migrate from one to another, but it was worth the effort considering the magic behavior it offers.

## Turning SPA into a PWA

I then dove into the specs & requirements to turn it into a progressive web app. I first asked myself about packaging the app for app stores but found I could just leverage off the PWA capabilities that could offer an "almost" app experience on both IOS and Android devices.

So here are the things I implemented to make it work :

* Install and use the [vue pwa plugin](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa)
* Create the configuration options in vue.config.js (in /src folder)
* Configure properly the manifest.json using the Google specs
* Create the assets serie (using [realfavicongenerator.net](https://realfavicongenerator.net/)) and replace the generated ones (from vue pwa plugin)
* Configure the event to update the service worker at each app update (this article helped me a lot, as well as others)
* Add a persistent “add to home screen” for both android and apple. Android devices are listening for the "beforeinstallprompt" event while we need to guide the user to install the app for the Apple devices (safari IOS only has a partial support of PWA)

## Next

Now the app is usable as a web app in both Android & Apple devices. I discover new bugs everyday but always find workarounds step by step. It take a lot of time to test because it suppose to deploy everytime but I think it’s probably still a time-saver compared to packing the project for app stores. I also read a lot about the likely rise of PWA over native apps, so I guess it’s still a good bet.

I’m now heading to write tests to make this app more solid and reliable. I'm currently a total novice so I’ll need a heavy training first before I’m able to implementing some.

After that, I think the app will enter in a beta phase, but that’s for the next episode.
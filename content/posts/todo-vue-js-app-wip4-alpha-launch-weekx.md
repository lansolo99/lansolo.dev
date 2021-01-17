---
title: 'Todo vue.js app - WIP#4 : Alpha launch of Weekx'
type: 'article'
imgCover: 'todo-vue-js-app-wip4-alpha-launch-weekx'
tags: [vue, pwa]
createdAt: 2019-05-08
---

This post is part of a full walkthrough of building todo app using vue.js
<!--more-->

1. [Part 1](/posts/todo-vue-js-app-wip1-new-project-startup)
1. [Part 2](/posts/todo-vue-js-app-wip2-vuex-modules-firebase)
1. [Part 3](/posts/todo-vue-js-app-wip3-turning-spa-pwa)
1. [Part 4](/posts/todo-vue-js-app-wip4-alpha-launch-weekx)

Here we are, after almost 5 month of persistent work (check previous dev phases #1, #2, #3), I can show a usable prototype of my first vue.js single page application. I kept the "weekx" name for the time being, and associated the domain name “weekx.xyz”. I found the “x.xyz” letter serie funny, plus the "xyz" top level domain is one of the cheapest (I care about the promo on gandi.net 🙂).

## Current stack

To summarize : the project is made with Vue.js, hosted with Netlify with continuous integration from Github. The app take advantage of Vuex state management library, coupled with Firebase Firestore database as cloud data.

The app heavily rely on other Firebase’s services such as Firebase Auth for user authentication, Firebase Cloud Messaging to send push notifications, Firebase cloud functions to host needed lambda functions.

Firebase cloud functions to host needed lambda functions. The application is a progressive web app that can be used offline and added to home-screen devices.

## Last development features added

I encountered problems with the user’s image upload, such as photo orientation. I found a convenient lib called [Vue Image Upload and Resize](https://vuejsexamples.com/a-simple-vue-component-for-client-side-image-upload-with-resizing/) that take care of this, found on the famous vuejs examples website.

I used component slots for the first time (not scoped slot yet), to build a fully reusable dialog component. I indeed have around 15 use-cases of a dialog showing up. That was a perfect refactoring exercice to avoid DRY.

One of the most difficult thing I had to do was to make web push notifications work. I read a lot of articles on the topics as well as Firebase documentation. There’s a lot of pieces that come together. My challenge was the following one : the user can set a schedule time to receive a notification if he has checkable tasks within the current day. Here is how I proceeded:

1. Setup the Firebase Cloud Messaging client in vue (component + special Firebase service worker)
2. Build the client side form to generate a token, and store this token in Firestore
3. Write a lambda function hosted on Firebase functions that will loop through Firestore database and send a notification to user if he has a token & if he has task for the current day & if the current hour match with the one specified by the user
4. Use a cron service to trigger the Firebase lambda function every hour : I use Google Cloud Scheduler that you can access form the Google Cloud Platform
5. Do a lot of tests to understand how web push notifications are handled according to the user configuration (devices, app in the foreground/background…)

A great helper is to take a look at the Firebase code sample repo, that provide a fully working example on how to handle this.

It doesn’t work on Apple devices so far (shame on them), but I think it’s an essential feature as it greatly helps with user retention.

## How to use the app now ?

I built a landing page to showcase the application : [weekx.xyz](https://weekx.xyz). The app is available on the same domain : [app.weekx.xyz](https://app.weekx.xyz). Surely, there’s a lot of bugs remaining and missing use-cases, don’t hesitate to send me feedback on feedback@weekx.xyz

## Next

Now the prototype is barely finished, the next exercice will consist of adding unit tests as well as end-to-end tests. I’m currently reading a well written book that entirely covers this topic : [Testing Vue.js application](https://books.google.fr/books/about/Testing_Vue_js_Applications.html?id=7-FAtAEACAAJ&source=kp_cover&redir_esc=y) by Edd Yerburgh.

## Final note

I don’t plan to market the app, it remains a personal training to handle vue.js in depth. Though, if you’re interested in following/forking the mess I’ve done, it’s available on [Github](https://github.com/lansolo99/weekx).
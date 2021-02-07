---
title: Nuxt + Firebase with @nuxt/firebase
type: 'article'
description: My experience setting up Firebase with Nuxt in depth using @nuxt/firebase
imgCover: 'nuxt-firebase-part-0-serie-introduction'
tags: [nuxt, vue, firebase]
createdAt: 2021-01-07
---

THIS ARTICLE IS CURRENTLY A WORK IN PROGRESS (2/11 done)

This post is a mini-serie about setting up Firebase with Nuxt. The aim of this serie is to act as a learning journal, and eventually help others on specific topics.

## Topics covered

1. [Nuxt + Firebase - part 0 - serie introduction](#1-nuxt--firebase---part-0---serie-introduction)
2. [Nuxt + Firebase - part 1 - set up @nuxt/firebase](#2-nuxt--firebase---part-1---set-up-nuxtfirebase)
3. Nuxt + Firebase - part 2 - the emulators suite
4. Nuxt + Firebase - part 4 - helpers npm scripts
5. Nuxt + Firebase - part 5 - auth circuit with vuex
6. Nuxt + Firebase - part 6 - auth providers
7. Nuxt + Firebase - part 7 - Firestore
8. Nuxt + Firebase - part 8 - Cloud storage
9. Nuxt + Firebase - part 9 - Cloud functions
10. Nuxt + Firebase - part 10 - Algolia instant search
11. Nuxt + Firebase - part 11 - deploy on Heroku

## 1. Nuxt + Firebase - part 0 - serie introduction

### The project

I recently started working on a proof of concept web-app that basically acts as a Linkedin website, but applied to a certain niche (I will communicate on this when the project will officially release). Users can register, login, fill their details, and get immediatly referenced on a profiles wall. Users can search for other registered profiles. I will add numerous features beside that but the scope of the serie is limited to setting up this core system.

### Why Nuxt ?

[Nuxt](https://nuxtjs.org/) has become my Vue framework of choice during my journey with Vue, I already mentioned it in multiples previous posts. To sum up : 

* The abstraction is cleaner than Vue (no router needed, neat config file, layouts, convenient hooks
* Very versatile in terms of render mode (support SPA, SSR, and SSG)
* Very active development backed by a strong community

### Why Firebase ?

* [Firebase](https://firebase.google.com/) is a complete backend solution for small and medium apps, the kind I personally have to deal with.
* It offers a full-featured SDK usable from the front-end, no need to build our own API.
* It offers a large range of services that covers all the common needs (authentication, database, data storage, server-less functions and cloud notifications)

This is by no mean the one fits all backend solution. Firebase is perfectly suited for user content generated on the client side, that is to say, an utility app.

## 2. Nuxt + Firebase - part 1 - set up @nuxt/firebase

### Define a Firebase project

Obviously and first of all, someone has to initiate a Firebase project from the [Firebase console](https://console.firebase.google.com/) before proceeding further. This project has to be defined as a web app, and you can get your credentials from there.

### Setup firebase inside Nuxt

Nuxt has its own [@nuxt/firebase](https://firebase.nuxtjs.org/) module since 2019, and it give us an organized way to implement it inside our app compared to before.
I won’t detail all the process as it is subject to change over time, so head to the clear documentation.

In short, you just define an object configuration that declares a list of Firebase services you need.
You can also define multiples environment configs using 'development' and 'production' keys credentials.


```js{}[nuxt.config.js]
firebase: {
    lazy: false,
    config: {
    development: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASEURL,
        projectId: process.env.FIREBASE_PROJECTID,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGGINBSENDERID,
        appId: process.env.FIREBASE_APPID,
        measurementId: null,
        },
    production: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASEURL,
        projectId: process.env.FIREBASE_PROJECTID,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGGINBSENDERID,
        appId: process.env.FIREBASE_APPID,
        measurementId: null,
        },
    },
    onFirebaseHosting: false,
    services: {
        storage: true,
        performance: true,
    },
},
```
This module injects utilities that we will use to call Firebase services from the app following this model:

```js{}
this.$fire.<SERVICE>.<SERVICE METHOD>(PAYLOAD)
```

This way we don't have to declare a custom variable to call Firebase services, this job is done for us.

TO BE CONTINUED  (2/11 done)


---
title: Nuxt + Firebase - part 0 - serie introduction
type: 'article'
description: Introduction to the Nuxt + Firebase serie
imgCover: '/img/posts/nuxt-firebase-part-0-serie-introduction.jpg'
tags: [Nuxt, Vue, Firebase]
createdAt: 2021-01-07
---


<!--more-->
This post is a first of serie I intend to write on setting up Firebase with Nuxt. The aim of this serie is to act as a learning journal, and eventually help others on specific topics.

## The project

I recently started working on a proof of concept web-app that basically acts as a Linkedin website, but applied to a certain niche (I will communicate on this when the project will officially release). Users can register, login, fill their details, and get immediatly referenced on a profiles wall. Users can search for other registered profiles. I will add numerous features beside that but the scope of the serie is limited to setting up this core system.

## Why Nuxt ?

[Nuxt](https://nuxtjs.org/) has become my Vue framework of choice during my journey with Vue, I already mentioned it in multiples previous posts. To sum up : 

* The abstraction is cleaner than Vue (no router needed, neat config file, layouts, convenient hooks
* Very versatile in terms of render mode (support SPA, SSR, and SSG)
* Very active development backed by a strong community

## Why Firebase ?

* [Firebase](https://firebase.google.com/) is a complete backend solution for small and medium apps, the kind I personally have to deal with.
* It offers a full-featured SDK usable from the front-end, no need to build our own API.
* It offers a large range of services that covers all the common needs (authentication, database, data storage, server-less functions and cloud notifications)

This is by no mean the one fits all backend solution. Firebase is perfectly suited for user content generated on the client side, that is to say, an utility app.

## Topics covered

I will split the series in multiple small articles, that I will post on a regular basis. Below is the table of content I intend to write on: 

1. Nuxt + Firebase - part 0 - serie introduction
2. Nuxt + Firebase - part 1 - set up @nuxt/firebase
3. Nuxt + Firebase - part 2 - the emulators suite
4. Nuxt + Firebase - part 4 - helpers npm scripts
5. Nuxt + Firebase - part 5 - auth circuit with vuex
6. Nuxt + Firebase - part 6 - auth providers
7. Nuxt + Firebase - part 7 - Firestore
8. Nuxt + Firebase - part 8 - Cloud storage
9. Nuxt + Firebase - part 9 - Cloud functions
10. Nuxt + Firebase - part 10 - Algolia instant search
11. Nuxt + Firebase - part 11 - deploy on Heroku

## Coming-up

In the next post, I will cover the official [@nuxt/firebase](https://firebase.nuxtjs.org/) module setup.
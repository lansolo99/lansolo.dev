---
title: 'Todo vue.js app WIP#2 : vuex modules + Firebase'
type: 'article'
imgCover: '/img/posts/todo-vue-js-app-wip2-vuex-modules-firebase.jpg'
tags: [vue, sketch
]
createdAt: 2019-03-03
---

This post is part of a full walkthrough of building todo app using vue.js
<!--more-->

I’ve been continuously working on my first vue.js app so far (read first post for more infos about this), and might deliver a first alpha by the end of the month. I picked a name (subject to change later : “Weekx”).
Obviously, I had to overcome different kind of obstacles, starting with handling time management and periodicity.

## Time simulation

Depending on their setups, tasks have to reset at a certain time, or to trigger a record. I used the Date FNS library, which is lighter than the famous moment.js. Very easy to handle thanks to the clear doc.
Nonetheless, I struggled a bit more with how to simulate the time passing, to test the app in an efficient way. I ended up with a helper button allowing to quickly pass to the next day with the following structure using isSameDay + addDays

```js{}
const isTodayCustom = isSameDay( addDays(new Date(Date.now()), addedDays), new Date(this.userData.connexionDateLast) )
```

## Vuex store modularization

The store get quickly messy as the app grows, and, unless working for a very small utility app, I’ll always go with a pre-modularize store for future apps. It’s cleaner. Call to store methods remains concise enough with a structure like the following:

```
...mapActions({
customActionName1: 'myStoreModule1/myStoreMethod',
customActionName2: 'myStoreModule2/myStoreMethod’
})
```

## Charts

For the stats parts, I took advantage of the native [Vuetify](https://vuetifyjs.com/) features such as sparkline, but have also find something more complete, and found [Apexcharts](https://apexcharts.com/) the perfect match. It has a great integration with vue.js and clear examples. Could be a bit overwhelming with numerous possible configurations, with possibly endless data objects in the components, but on the other hand, it handles almost all the possible use-cases. I used it for custom heatmaps to track tasks records on a daily basis with a user-friendly color-code.

## Firebase update cycle

One of the headache I experienced was "how to handle data records on the server side and make it work with Vuex?", and more specifically in wich way ? What I’ve learned from the many tutorials I’ve done was :

1. Pull data from Firebase and feed Vuex
2. Push data on Firebase at each key-actions, wait, then feed Vuex with fresh re-pulled datas from Firebase

This approach didn’t fit really well with my app design because I had to massively rethink the data update cycle so far (write all the logic for each store actions before passing datas to the matching mutation. Another big drawback I encountered is that **FIREBASE GET RID OF ALL EMPTY VALUES**, and I heavily relied on empty arrays in my logic.

I used the following approach instead:

1. Pull datas from server, recreate missing empty values from snashot.val(), feed Vuex
2. Store records on Vuex then push data on Firebase without re-pulling data from server (only during initial app-load)

I also made a noob mistake  : publish the Firebase snippet on Github :/
I quickly corrected for protected environment variables.

## Next

The next key-actions will be:

* Implementing Firebase user authentication (UI + logic)
* Testing with tools such as JEST
* PWA features such as notifications, cache management…)
* Heavy alpha-test phase

---
title: 'Todo vue.js app WIP#1 : new project startup'
type: 'article'
imgCover: '/img/posts/todo-vue-js-app-wip1-new-project-startup.jpg'
tags: [vue, sketch
]
createdAt: 2019-01-31
---

This post is part of a full walkthrough of building todo app using vue.js
<!--more-->


## Diving into vue.js

Now I finished the whole Vueschool.io masterclass early in january, there was no time to loose before using this new acquired knowledge. A friend of mine has been thinking about building a small app as an excellent opportunity to start using a new framework. It's a kind of an advanced to-do list (not the most original idea), but focused on the personal development side. Anyway, I decided to pick up the idea and shape it to myself, so that I could really use it on a daily basis.

## Thinking the stack ahead

Before any dev work, I had to think what tools would I need to achieve the whole thing. I ended with this preliminary list :

* Vue.js + CLI scaffold
* Vuex (to centralize data in a store)
* Vuetify.js development framework (to get pre-packaged UI components)
* Firebase (as main backend for persistent datas and user authentication)
* Gulp (for additional builds such as icon font, image compression & retina support..)
* Github + Netlify (for versioning + easy deployment)

## Design process

It all starts with a Trello, as it's not only a solo project. This project management tool (that I used to know for years), it still very useful to get a quick overview of what remains to do and how things progress. Then it's time to really think about what the project will look like, which features.. I brainstormed multiple times to get the global picture mentally, then I sketched it, and wireframed it through Sketch as usual. 

This time, I always referenced to the Vuetify.js doc, so that I would easily use their component's library at most. After that, I quickly deployed these screens on Invision to have a sense of the flow using the app. Finally, I designed the final UI, still with Sketch.

## Development

As much as I could have learned from vueschool.io, it's still when you start your own stuff that the real learning starts. How will I structure my app ? How to think it as components ? Actually I processed step by step with building what I needed first, then it gradually became more complex as I had to do a lot of code refactoring. Of course I did many back and forth with multiple docs and school projects to compare how things are built and get inspirations.

So far, I didn't get stuck and already succeed to build a first working basic prototype. I struggle a bit with Vuex (avoid data mutation directly from components) and Vuetify.js as it added a complexity layer for a first project.

## Next

It's been a few weeks I started working on it and the worst has yet to come (add Firebase and deal with asynchronous fetchs, deal with periodicities of tasks with time libs, market the app, think about monetization, package for appstores, make the app progressive with caching datas..). Nevertheless, I'm confident I should get by ok with all these obstacles by progressing step by step without rushing too much. As I did with the short 3D film last year, I will use this blog as a personal journal of this app development until it's done.

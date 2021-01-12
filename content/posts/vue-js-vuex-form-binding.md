---
title: Vue.js + Vuex form binding
type: 'article'
imgCover: '/img/posts/vue-js-vuex-form-binding.jpg'
tags: [nuxt, vue, vuex, form]
createdAt: 2020-12-15
---

This post is about showcasing the method I use when I need to sync form datas with Vuex store.
<!--more-->

## Context

The state reactivity is one of the feature that make Vue.js really stands out, especially when using the v-model attribute within a form element. We can manage the local state (aka inside a given component) very easily.  

Things get a bit more complicated when someone needs to deal with Vuex store, and get the data centrally managed. We can send our data to Vuex via either actions or mutations, and can get then via a mapped states or getters.

## Problem

Vuex in its design, does not allow to change its state directly, this should be done via actions or mutations.  When using v-model on a Vuex state, we break this Vuex law and therefore get an error.

To bypass this common problem, [Vuex documentation](https://vuex.vuejs.org/guide/forms.html) provides a work around that make use of a modified computed property which contains getter and setter. Each form element has to be bound to this computed but I think this approach can become very verbose if our form contains a lot of fields.
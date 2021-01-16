---
title: Vue.js + Vuex form binding
type: 'article'
imgCover: 'vue-js-vuex-form-binding'
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

## My approach

After a lot of research, studying different proposed developer approachs, I’ve always used the same pattern since the beginning which I find the most robust and straightforward: **bind the form components on a local deep copy of the Vuex state and keep updating this copy through a watcher**. 

## Mindmap

As a picture is worth a thousands words, I made an illustrated mindmap of the full circuit to get things as clear as possible (I always found the stackoverflow or medium solutions not very readable as the codeblocks are spreaded across the page).

<a href="/img/posts/vue-js-vuex-form-binding_1.png" target="_blank" rel="noopener noreferer">
    <v-nuxt-image title="vuex form update circuit mindmap" path="vue-js-vuex-form-binding_1.png"></v-nuxt-image>
</a>

Note: I’m using the fetch hook as the entry point (I always work with Nuxt), but this can be replaced with the created/mounted hook.
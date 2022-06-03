---
title: 'Publishing a first npm package'
type: 'article'
description: Experimenting a publishing process for the first time
imgCover: 'storybook-a-first-glance.jpg'
tags: [Yarn, node, CLI]
createdAt: 2022-05-31
---

## Context

Few weeks ago, I stumbled upon a Josh Comeau article stated [Delightful React File/Directory Structure](https://www.joshwcomeau.com/react/file-structure) that barely follows how I already structure my React projects.

What I kept in mind was a small package called [new-component](https://github.com/robert-orlinski/new-component) he published to speed up the creation of components, so I decided to give a try.

This is a global package we can call via a CLI command and add flags to create the proper files and folders.

Though the utility is good, it didn't fit all my needs, starting with the lack of Typescript generation.

A fork has been made regarding this issue but I wanted it to stick more to my usage. I started my own fork but quickly realised I wanted to refactor a lot of the codebase, so decided to clone the project and work in isolation.

## CLI utility

I never worked on a CLI utility before and find it quite interesting, as it involves understand how aliases and flags work in combinations to customize a node process behind.

The package takes advantage of :

- [Commander.js](https://github.com/tj/commander.js), a node.js cli solution
- [Chalk](https://github.com/chalk/chalk), a styling utility for terminal logs

For the time being, I simplified the package logic and added a feature to generate sibling components into an existing component folder, along some others properties that I found relevant.

## Global components

A utility like this needs to be available globally across multiple project. I struggled a bit finding where are located the global packages depending the package manager used (Npm or Yarn), and the node version (Nvm).

I found the Yarn configuration much simpler and decided to stick with it.

I discovered some package.json props on the way I wasn't aware of, such as "bin" to create binaries recognized by the terminal to bind our command to the package.json

## The publishing process (on Yarn)

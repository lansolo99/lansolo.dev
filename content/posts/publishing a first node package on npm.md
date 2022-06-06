---
title: 'Publishing a first NPM package'
type: 'article'
description: Experimenting a publishing process for the first time
imgCover: 'publishing-a-first-npm-package.jpg'
tags: [Yarn, node, CLI]
createdAt: 2022-05-31
---

## Context

Few weeks ago, I stumbled upon a Josh Comeau article stated [Delightful React File/Directory Structure](https://www.joshwcomeau.com/react/file-structure) that barely follows how I already structure my React projects.

What I kept in mind was a small package called [new-component](https://github.com/robert-orlinski/new-component) he published to speed up the creation of components, so I decided to give it a try.

This is a global package we can call via a CLI command and add some flags to generate the proper files and folders.

Though the utility is good, it didn't fit all my needs, starting with the lack of Typescript support.

A [fork](https://github.com/robert-orlinski/new-component) has been made regarding this issue, but I wanted it to stick more to my usage. I started my own fork but quickly realised I wanted to refactor a lot of the codebase, so I decided to clone the project and work in isolation.

## CLI utility

I never worked on a CLI utility before and find it quite interesting, as it involves understand how aliases and flags work in combinations to customize a node process behind.

The package takes advantage of :

- [Commander.js](https://github.com/tj/commander.js), a node.js cli solution
- [Chalk](https://github.com/chalk/chalk), a styling utility for terminal logs

For the time being, I simplified the package logic and added a feature to generate sibling components into an existing component folder, along some others properties that I found relevant.

## Global packages

A utility like this needs to be available globally across multiple projects.

I struggled a bit finding where are located the global packages depending on the package manager used (Npm or Yarn), and the node version (Nvm).

On MacOS and using Yarn, packages are located in `~/.config/yarn/global/`

I found the Yarn location much simpler than NPM (Nvm subfolders) and decided to stick with it.

I discovered some package.json props on the way I wasn't aware of, such as "bin" to create binaries recognized by the terminal to bind our command to the proper node file in our package.

## The publishing process (on Yarn)

As Yarn is based on the NPM registry, we need an NPM account to publish packages.

Needless to say, we need to have Yarn installed locally.

The deployment is then done through a simple [yarn publish](https://classic.yarnpkg.com/lang/en/docs/publishing-a-package/) command from our package directory.

Yarn will assist us with multiples prompts.

Now, our package is official part of the npm registry and can be installed remotely using either NPM or Yarn.

## My published packages

I renamed my version as **new-react-component-ts**.

It's available on [NPM](https://www.npmjs.com/package/new-react-component-ts) and [Github](https://github.com/lansolo99/new-react-component-ts).

I plan to make improvements to experiment with package development process over time.

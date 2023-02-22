---
title: 'Storybook, a first glance'
type: 'article'
description: Quick dive into Storybook, the component development library
imgCover: 'storybook-a-first-glance.jpg'
tags: [Storybook, next, miscs]
createdAt: 2022-04-26
---

## Context

It's been long since I have been aware of [Storybook](https://storybook.js.org/), the famous open source library to build components, but didn't find the opportunity to use it so far.

At this time, I didn't use it in a real project but there is a chance I will in a near future for a _not-yet-confirmed_ component library I would have to build.

So this post is just my quick two-cents on what I have seen trying it for a day.

## The component driven development

With the takeover of javascript frameworks on the front-end development, the notion of _component driven development_ has emerged.

It's a matter of destructuring all pages elements in different component types and hierarchies.

I recently read on the well known [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/") philosophy written by _Brad Frost_ and it helped me realize how this vision make sense with our current tools.

We write components, sub-components, page sections (also often as broader components) and include them in our pages.

Usually I write components in pages first, then extract them as component if I identify them as potential reusable markup.

I think using a tool like Storybook encourages us to follow a component-first approach and to ask ourself very early about the context in which the piece of code we are writting will be injected.

Therefore we can better organize our app architecture.

## Storybook: purpose

The purpose of Storybook is to develop components in isolation.

Storybook has to be included as a project dependency and has to be booted as a separate dev environment which offers a normalized interface that expose our components.

Those components have to be binded first by writing a "story" for each, exposing them in the Storybook interface.

A "[story](https://storybook.js.org/docs/react/get-started/whats-a-story)" is a standard way of exposing a component to Storybook.

We can bring whatever props that make sense to us and Storybook automatically set a component page with a full playground to observe how the component respond to our props.

## Storybook: main entities

Storybook is composed of:

- A main setup file for global configurations
- Stories files (.stories.js) for each component we want to expose
- A dev environment that bring a whole interface referencing our component and its own playground the same way a documentation site would be

## Storybook: workflow

1. We edit our component in its own file (the usual way)
2. We build or update the component story file
3. We play with it in the Storybook environment
4. We import our component in our final page once it has been developed

## Next

After taking the time to play with Storybook, I have a better understanding of the advantage of taking this path to develop our components.

Though I think its usage is mostly suitable for heavy projects with a whole component ecosystem.

I don't think it's worth using it for standalone landing pages because Storybook involves a certain amount of time to setup stories.

I'm eager to use it in my next "heavier enough" project 🫡.

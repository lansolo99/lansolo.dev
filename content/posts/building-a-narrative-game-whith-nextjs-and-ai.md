---
title: 'Building a narrative game with Next.js and AI'
type: 'article'
description: Process I used to design this mini narrative game.
imgCover: 'building-a-narrative-game-with-nextjs-and-ai'
tags: [game, next, framer-motion, Tailwind, Figma, devs, dzine]
createdAt: 2025-03-20
---

## Context

"[Noël Solidaire 2024](/posts/building-a-food-simulation-game-with-nextjs-and-ai)", the previous game release, was an opportunity to experiment with generative images to create a custom background set based on a specific style.

This time, I wanted to dig deeper into those restyling capabilities to re-style some Montpellier places, my home base.

I imagined a small narrative game that would make players discover the city through the transportation network.

I then quickly elaborated a scenario of a student's journey that would have to travel the city to reach a train station through a commute transit.

## Sets

At the beginning, I decided on which places would be seen and how a transit system could work. I selected some key tram stations with connections as stops.

Then I took some screenshots using Google Street View of each place.

Finally I used [Dzine](https://www.dzine.ai/) once again to restyle each screenshot using a personal model style. This style was computed from a bunch of artworks I selected for their artistic styles.

Often, getting the proper result needed multiple generations with revised prompts.

I got about 50 generated sets to cover the whole story.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-narrative-game-with-nextjs-and-ai-dzine.jpg" alt="Dzine - Montpellier Scene" class="w-full">

## Sound

The effects come from a sound library, however, the music is generated using [Soundraw](https://soundraw.io/). I didn't spend a lot of time because I found the first generation satisfying.

## Story

### Dialogs

I started by gathering dialog ideas, then sorted them as dialog descriptions for each sentence. As I don't have any storywriting skills, I once again relied on AI to generate my dialogs based on the desired style, game context, scenes, and dialog descriptions using a mix of Perplexity, ChatGPT, and Mistral AI.

I found myself rewriting a lot of dialogs, but was surprised at how well they were globally crafted.

### Nodes

Once all dialogs were ready, I needed a nodal system to organize dialogs for each scene. Instead of directly crafting a huge JSON object, I relied on a visual tool called [Twine](https://twinery.org/).

Twine is both a web tool and a desktop app that is assisting through the creation on non linear stories with links between story nodes.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-narrative-game-with-nextjs-and-ai-twine.jpg" alt="Twine - story nodes" class="w-full">

Once the nodes were crafted, we could simply export the story as a single HTML file.

The next step was to parse this file so that it could be handled by our Next.js app.

It was then just a matter of displaying the proper scene and dialogs using some states and logic.

## Stack

As always, I kept using Next.js, Tailwind, and Framer Motion for development, and Figma for UI.

## Development

The only workflow change was switching IDEs, from VSCode/Copilot to [Windsurf/Cascade](https://codeium.com/), as it was depicted as a more performant AI regarding the app context.

Overall, my experience working with Windsurf was positive, and I indeed found Cascade (the chat assistant) very clever regarding my global app context and what I was trying to achieve.

The Cascade "write" mode generated nearly 75% of my logic code, getting me into this "vibe coding" workflow.

I encountered some struggle though:

- It messed up with some existing code, and I had to carefully create rules to avoid that
- It often happened that Cascade entered an infinite change loop, iterating on itself without end. The only workaround was to restart Cascade, improve prompts, and be clear about doing simple changes one by one.
- Files are getting bulkier as time goes by, as Cascade tends to aggregate dozens of functions in a single component file. We have to refactor explicitly and thoroughly retest the app afterwards.

A lot of problems are avoided by creating detailed and explicit [Cascade rules](https://docs.codeium.com/windsurf/memories) and also what is called "memories".

The pricing is pretty affordable ($15/monthly) for the time-saving.

## Wrapping up

The creative phase took about 1-2 weeks (brainstorming + visual creations) and the development phase took about 1 week.

This was a very pleasant and instructive way to develop the game using Cascade.

I just have some thoughts about us getting more and more assisted with AI (design, ideas, architecting, coding). While we are shipping faster, it also tends to soften us intellectually.

I don't know what to think at this stage. I just know things tend to evolve at an exponential speed these days...

## Demo

Here is the [playable game](https://correspondance-game.vercel.app/).

The game takes only 5-10 minutes.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/building-a-narrative-game-with-nextjs-and-ai-ingame.jpg" alt="Ingame scenes" class="w-full">

It's in French. "Correspondance" means "transit connection".

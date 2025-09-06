---
title: 'Red Teamer: Building a Button-Based AI Chatbot Game'
type: 'article'
description: My journey building an AI-powered button-based chatbot.
imgCover: 'red-teamer-building-a-button-based-ai-chatbot-game'
tags: [game, next, framer-motion, Tailwind, Figma, devs, cinema 4D, AI]
createdAt: 2025-09-07
---

This post is about [Red Teamer](https://red-teamer-alpha.vercel.app/): the small game I had developed.

## Context

A couple of months have passed since my latest [narrative game](/posts/building-a-narrative-game-whith-nextjs-and-ai) and it was time to tackle a new project.

I wanted to bring AI into the equation in some way, as it is definitely reshaping our digital interactions.

I started a new job as a front-end engineer at [Giskard](https://www.giskard.ai/) a couple of months ago.

It's a French startup which offers a platform to help identify failures for teams developing AI agents. I familiarized myself with the concept of "red teaming", which is the practice of simulating attacks against someone's product to patch it and improve its robustness.

The [Giskard hub](https://www.giskard.ai/products/llm-evaluation) performs a vulnerabilities classification from the [OWASP Top 10 LLM](https://owasp.org/www-project-top-10-for-large-language-model-applications/) definitions.

I had the idea of a small game to better understand these vulnerabilities through live examples.

## Concept

The game core is a button-based chatbot in which the user chooses a vulnerability to learn. An attack is then launched, prompting an agent testing the chosen vulnerability. The agent response is either successful (he defended properly) or unsuccessful (he fails and falls into the trap, exposing its vulnerability).

Depending on the given response, the user has to assess how the agent has responded.

## Visual

I chose to represent the attacker and the bot using 3D avatars:

- a turtle for the tester (taken from the Giskard identity)
- an android for the agent

As usual, I made them by highly customizing base models and rendered them using Redshift along with C4D. This latter has become the standard and now supports cell and toon shading. Its node-based system is not very intuitive at first, but very powerful. I really appreciated working with live-render though.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/red-teamer-building-a-button-based-ai-chatbot-game-3D.jpg" alt="Red Teamer - 3D turtle asset">

I gathered the avatars on a scene, and set a bunch of animated loops to use in the game, bringing a "living" UI that I find appealing.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161672/lansolo.dev/posts/red-teamer-building-a-button-based-ai-chatbot-game-gameboard.jpg" alt="Red Teamer - gameboard scene">

## Stack

On this side, I went with Next.js + Motion.

For the AI part, I chose Google Gemini through Vercel's AI SDK primarily for cost efficiency. The AI SDK with Zod schemas is very easy to implement and ensures reliable structured responses, returning not just the attack conversation but also success assessment and analysis explanations that feed the game's scoring system.

I thought this would take me a day to build, but I had a working feature within 2 hours. The most time-consuming part was the prompting logic to frame the result and avoid hallucinations (exactly what the game puts the light on).

## Coding assistant

I started the app using Cursor Agent, then switched to Claude Code, driven by a general consensus on it at the moment.

The terminal flow is surprisingly as pleasant as a standard UI and extends to some very interesting possibilities:

- /init feature: to help Claude understand the whole app's purpose and architecture
- plan mode: to monitor a step-by-step approach
- bash mode: to launch bash commands and have a direct Claude feedback on them
- memories: to save user behaviors and rules
- /mcp feature: to add some mcps
- images feed: to build by giving a visual feedback (frontend bugs, UI mockups...)

The code quality is recognized as very qualitative compared to others solutions.

I indeed experienced a really good flow, generating 75% of the code.

The only part I had to take care of myself is fine-tuning the UI & animations: the coding assistants are good to build something functional with a standard UI, but don't have the design sensibility to ship a well-polished UI.

## Wrapping-up

I intend to maybe gamify the app by implementing authentication along with a scoreboard, with some levels to reach. That would help engage the user in their learning.

You can test [Red Teamer here](https://red-teamer-alpha.vercel.app/).

In the end, this was a nice side-project. I realize how AI assistants make app development easier. Although solid knowledge is required to ship something clean, these tools open the door to building projects at an unprecedented pace.

We’ll see where all this will lead us...

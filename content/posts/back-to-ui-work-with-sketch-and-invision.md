---
title: 'Back to heavy UI work with Sketch'
type: 'article'
description: 'Building a design system with Sketch and UI design workflow improvement in 2021'
imgCover: 'back-to-ui-work-with-sketch-and-invision'
tags: [sketch, UI, UX, invision, zeplin, miscs]
createdAt: 2021-04-17
---

## Context

These last weeks, I had to put aside a lot of my development work to focus on building a whole UI design for an upcoming [Natixis](https://www.natixis.com/) inner service (can't mention it at present time for privacy purpose).

Regarding UI design, my tool of choice remains Sketch for the time being. I work with Sketch on a frequently basis to quickly design some of the landing pages I then have to build. I didn't improve my Sketch workflow a lot these last years considering a limited usage. 

But this time I had to roll up my sleeves as the job is about building a whole design system 💪

## Sketch improvements with new plugins

First and foremost, I needed to seriously level-up my Sketch productivity, so I read a lot about the topic and got mostly 4 essential plugins in my toolbelt :

- [Sketch Runner](https://sketchrunner.com/): this one acts like the famous [Alfred](https://www.alfredapp.com/) (mac OS) allowing us to quicky jump-to, insert, create, apply and install anything through a convenient search bar. A real game-changer to speed-up workflow using keyboard only!
- [Symbol organiser](https://github.com/sonburn/symbol-organizer): instantly re-organize the usually messy symbols page in a single shortcut
- [Artboard manager](https://github.com/bomberstudios/artboard-manager): auto place and space artboards to always get a structured grid in our canvas
- [Duplicate under](https://github.com/oodesign/duplicate-under): A small extension allowing us to placing copies under the original in the layer list

Additionally, I set up a few shortcuts that didn't exist natively (insert images, merge all windows, collapse all groups...). I would say I now go twice as fast using these tools, so it's really worth the investment 👍

## Sketch Cloud

As a front-end developer, Git is an essential part of my workflow to version all my work. But I stayed stuck in the past regarding UI work, as I'm still manually versioning every file iteration. 

I heard from tools such as [Abstract](https://www.abstract.com/) but didn't take time to look at it so far. But I also heard about [Sketch Cloud](https://www.sketch.com/docs/sketch-cloud/) that recently opened up. 

As a licensed user, I decided to give a try and switch for a team licence to be able to use it. Sketch cloud solves the versioning problem as every "save" action acts like a *git commit* and we can then roll back to a previous version if needed. But one of the main feature is to collaborate with other team members of the declared Sketch team within a space. 

Every team member can refer to a single cloud hosted file. We can also embed fonts within each file so that missing fonts across users is not a problem anymore 🦚

## Invision & Invision DSM

Regarding showcasing artboards, I have been using [Invision](https://www.invisionapp.com/) from a while now through the [Craft](https://www.invisionapp.com/craft) plugin, and am still using it. But this time, I have been asked to develop a design system from the created UI. 

I benchmarked some tools and finally found that [Invision Design System Manager](https://www.invisionapp.com/design-system-manager), aka *DSM*, was already part of the Invision plan I'm using to build this kind of stuff.

Invision DSM provides a cloud hosted space to expose a complete design system that we can build from any Sketch file. We can quickly extract any symbol, color, or style in an organised way, and complete it with a custom text description. It's also very easy to maintain it with a single push from our most recent version of our Sketch file reference.


## Next

I also wanted to talk about the [Zeplin](https://zeplin.io/) service that I will probably deploy to easily hand-off artboards to developers. Kind of a more elaborated version of Invision Inspect, but I still have to work with it before being able to evaluate this tool.

Another thing I didn't talk about is that I took advantage of using a design system ui kit called [Cabana](https://cabanadesignsystem.com/) to help me organize my design system following Sketch best practices.

So much things learned! 

It's sometimes good to be back on another part of the web domain, as it will surely help me be more efficient producing UIs.

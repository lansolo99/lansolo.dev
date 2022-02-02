---
title: 'Leveling up the After Effects game'
type: 'article'
description: My latest After Effects discoveries - morphing, scripting, and master properties.
imgCover: 'drag-and-drop-puzzle-game-with-framer-motion.png'
tags: [after effects, video]
createdAt: 2022-02-02
---

## Context

The latest project I worked on involved me coming back to motion design as I have been asked to produce 2 two video for an internal banking event.

## Morphing transition

The first one is a logo reveal, but the challenge was to transform a vector logo to another using morphing technique.

I never did that before, so I found 2 main ways to realize this transformation:

1. Using the [superMorphing plugin](https://aescripts.com/super-morphings/)
2. Using path animations

### SuperMorphing

The superMorphing one one is by far the easiest way as it's just a matter of selecting 2 layers and position keyframes, then it does all the magic behind the hood.

Here is my first version using this technique.
TODO: retrieve first reveal and upload on vimeo

The problem with this one is it's not real morphing, it's an instant object swap wrapped within a ease-in-out animation.

Supermorphing is great but limited as it's impossible to operate a slow transformation.

### Path animation

The second way is the traditional approach but requires more work and possible visual issues: it's a basic animated path using 2 keyframes with a start and and end shape keyframe. I ended up using this one as this is what the client wanted.

Here is the final result:
TODO: upload final result on vimeo

### The simple choker effect

Something I also discovered is the native Simple Choker effect. It automatically melt overlapping (or nearly) shapes in an organic way. The most common use-case is to replicate a dripping effect. It can be useful to gracefully merge different elements together.

This is shown in this [video](https://www.youtube.com/watch?v=h2uXKuIiWYA).

## Scripting

So far I only used some external snippets to help me deal with dynamic values on layer properties but never took the time to understand it a bit.

One must say that the interface to insert code is not very user-friendly and reminds me of the old Flash / actionscript IDE.

Nevertheless, it opens a lot of gates regarding transition automations.

The syntax is very close to Javascript and we can target different elements or properties, being on the same layer, same composition or on a remote composition.

The most common use-case is pick-whiping (linking), we usually do this using the UI.

I leaned to use more advanced scripting when I decided to use global variables. I partly used the technique provided in this Youtube video.

For example it allowed me to define once and for all a unique color variable that I can use everywhere I need using comp and property targeting:

```
comp("main").layer("global").effect("blueLight").color
```

[After Effects scripting](https://ae-scripting.docsforadobe.dev/) is a huge chapter, so I still a long road to master it.

## Master properties

Using React and the component philosophy in my everyday life, I felt the need to bring this logic within my After Effects project. In the past we had compositions, scripting, but nothing close to "props" we can drip into a composition from the parent one.

After Effects introduced a feature I wasn't awared of, called "[Master Properties](https://helpx.adobe.com/sea/after-effects/how-to/intro-master-properties.html)" a few years ago.

Using it, we can define dynamic properties by simply drag and dropping them into the "Essential graphic" panel.

We can rename, define default value, re-arrange and grouping those declared props. Then

Now the props defined are available from the parent composition by unfolding the new "Master properties" group under the composition properties.

This feature acts like a basic prop drilling and build trully reusable comps!

This [video](https://www.youtube.com/watch?v=H1ZsiQy764Q) explains how to use this feature in a simple way.

## Wrapping up

Beside of these discoveries, I also took time to review my shortcuts to have a more efficient workflow.

Otherwise it's a lot of time wasted moving cursor to trim comps, move comps, move the current playhead in and out...

I feel like I once again spread out my skill developments toward the generalist freelance profile.

But at the end, I just invested time to offer the best service I can considering the opportunities I have, which appears to be part of multiple domains (front-end, UI design, and motion design also).

Hopefully, I can produce After Effects works more frequently along the year, so that I can keep the flow fresh in my head.

I also discovered the very well design platform [School Of Motion](https://www.schoolofmotion.com/), offering very appealing courses.

I might decide to go deep into one somedays, but still need to balance my time with front-end which stays my priority for the upcoming times.

---
title: 'Making a real time 3D scene with Sketchfab'
type: 'article'
description: discovery of the Sketchfab platform 
imgCover: 'making-a-real-time-3D-scene-with-the-sketchfab-viewer'
tags: [cinema4D, miscs]
createdAt: 2023-03-11
---

## Context

This time, I have been asked something unusual, which was to realize a 3D interior visualization for a future open office configuration.

We agreed that I would provide a couple of static views pulled from a C4D scene, considering my current 3D skill.

I stumbled on a similar work exposed as real time 3D through a 3D viewer that I knew from the past but never paid attention too much.

Here is the [model](https://sketchfab.com/3d-models/lowpoly-office-3d-model-f60b90cbfaa64dcb9904570f698fa5a1) that I inspired me to dig a bit into this unknown territory.

## Sketchfab

[Sketchfab](https://sketchfab.com/) is a 3D assets platform, but its main strenght is to offer a 3D viewer for uploaded models, instead of just static views.

It is based on Open GL, and therefore works natively on any web browser.

### Upload

The process is pretty simple : export our 3D model using a supported file (GLtf for me), and upload it on the platform, then proceed to the render adjustments.

### Render

The main thing to understand is that we just need textured meshes, all the final render is adjusted thanks to the Sketchfab provided [settings interface](https://help.sketchfab.com/hc/en-us/articles/203064198-Scene), encompassing many features.

### Things I struggled with

As always, and as a neophyte, I had to bypass limitations to fit into the process:

- I didn't find any simple way to display an external image as a texture, but it is possible of course
- The meshes have to be really optimized and cleans, otherwise exposing our model to be messed up
- The process of checking the proper render in Sketchfab is time-consuming, compared to the regular workflow

## Final scene

[Here the model](https://skfb.ly/oERJN) I realized, pretty simple open space, but way more efficient to get a precise idea of how the space will look like instead of checking a static view as a matter of fact.

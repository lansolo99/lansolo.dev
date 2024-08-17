---
title: "Cinema 4D toon shading with Arnold render"
type: 'article'
description: My point of view after played with Arnold Render.
imgCover: 'cinema-4d-toon-shading-with-arnold-render-montpellier-gare-st-roch-trams-lines'
tags: [cinema 4D, sketch & toon, after effects]
createdAt: 2024-06-26
---

## Context

Most of my artworks adopt a "toon" style that has become my main style over time.

I used the standard Cinema 4D "Sketch & Toon" tag to render those outlines over mesh with controls.

This native material type offers a wide range of settings, allowing for fine-tuning line renders with great precision.

Sketch & Toon only works with the standard renderer, so I always thought I couldn't use other render engines to get the toon look.

Very recently, I stumbled across a tutorial to get the toon look using Arnold render. The given example artworks were very close to some SCI-FI artists' products I follow such as Caldermoore:

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/cinema-4d-toon-shading-with-arnold-render-caldermoore.jpg" alt="Ocean wastes" class="w-full">

Therefore, I embarked on an Arnold journey and discovered a whole new texture node system.

## Basics

In Arnold, we use a "toon" type material. But unlike Sketch & Toon, the Arnold one is set up using interconnected nodes, similar to the Xpresso interface.

We have a basic "toon" node but need to connect many other nodes to fine-tune some color and outline setups.

To preview the result, we have to use the "IPR" render module.

## Comparison with the standard Sketch & Toon

### Strenghts

- The greatest feature to me is the ability to use noise patterns or textures and render them as outlines. - - This immediately gives an ultra-detailed surface look, so we don't have to deal with complex geometries.
- We can stack different textures and fine-tune them using gradient ramp shaders, acting like masks. Arnold also seems to give a different and more subtle lighting look than the standard renderer.

### Downsides

- It comes at a greater cost regarding render times but stays manageable for simple scenes.
- This node system can quickly turn into an absolute nightmare if we don't thoroughly organize the different layers forming our whole material.
- The ramp shader is more difficult to handle because it's simply less precise than numbered parametric values.


*Seriously?*
<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/cinema-4d-toon-shading-with-arnold-render-arnold-material-nodes.jpg" alt="Ocean wastes" class="w-full">


## First shots

Here are some first tries (next ones will hopefully be better; beginner results here 😁).

### Ocean scene
<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/cinema-4d-toon-shading-with-arnold-render-ocean-wastes.jpg" alt="Ocean wastes" class="w-full">

### Residential building viewer
<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/cinema-4d-toon-shading-with-arnold-rendertour-le-triangle-montpellier.jpg" alt="Tour Le Triangle - Montpellier" class="w-full">

### Trams crossroad
<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/cinema-4d-toon-shading-with-arnold-render-montpellier-gare-st-roch-trams-lines.jpg" alt="Trams crossroad - Montpellier" class="w-full">


## Wrapping up

Arnold is an interesting and surprising render engine in my toolkit. I'm not sure it will remain my go-to choice for long because of its downsides.

It brings a more detailed look, but it comes with some troubleshooting associated with hardware and node complexity.
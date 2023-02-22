---
title: 'Material Tailwind quick review'
type: 'article'
description: A simpler solution to get Material UI components alongside TailwindCSS
imgCover: 'material-tailwind-quick-review.jpg'
tags: [next, tailwind, form, miscs, devs]
createdAt: 2022-07-25
---

## Context

I work for a client that uses Google Material design for everything related to forms.

Material design components are available as a React library through [Material UI](https://material-ui.com/).

So far, I used it everytime I had to implement those kind of components.

## I don't like Material UI

Though it's really exhaustive, I always found the implementation overwhelming due to the fact it uses Styled Components.

My personal opinion about Styled Components is not very positive as I find it very confusing, especially the usage of custom tag names that refer to custom presentational Styled components, and not our app components.

As many developers, I have totally adopted TailwindCSS as UI framework, but recreating all Material components from scratch felt like a too big challenge.

I was also looking for animated floating labels, as well as ripple effects and all the little things that make Material Design so recognisable.

## Material Tailwind to the rescue

I stumbled upon [Material Tailwind](https://www.material-tailwind.com/), a library that does exactly what I was looking for!

A neat landing page exposes what is to be expected, some bunch of customisable pre-built components recreating Material ones and using Tailwind classes.

It's available as HTML or React components. Of course, it's far to cover all features Material UI has to offer but only the essentials. The api is a bit lacking at the moment but the maintainers seems very active.

Here is a glance of a first form I built using it (autofilled here by [Cypress](https://www.cypress.io/), the most famous end to end framework):

<img src="https://res.cloudinary.com/lansolo99/image/upload/v1658675060/lansolo.dev/posts/material-tailwind-form-cypress.gif" alt="Material Tailwind form in a Cypress test" class="w-full">

## My opinion

It does what you expect, but we should no be looking for too advanced components at the moment, unless to be ready to fork the projects to suits our needs.

I wish all the best to peoples in charge of this package development, nothing to say more 🚀

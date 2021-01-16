---
title: 'Quick review of Maizzle: the Tailwindcss email framework'
type: 'article'
imgCover: 'quick-review-of-maizzle-the-tailwindcss-email-framework.jpg'
tags: [email]
createdAt: 2020-09-20
---

This post is about my first experience using Maizzle, a tool to generate email templates based on Tailwindcss framework.
<!--more-->

## Tailwindcss + emails

It’s been year and a half now than I’m a [TailwindCSS](https://tailwindcss.com/) user and advocate. It represents such a clever solution to quickly add tailored UI to any website compared to overwriting stuffs using classic based-component framework.

I was looking for something using Tailwind that could help me dealing with emails development, a domain that I’m not accustomed with. I used MJML once though.

While browsing [Awesome Tailwindcss](https://github.com/aniftyco/awesome-tailwindcss), I stumbled upon [Maizzle](https://maizzle.com/), and decided to git it a try.

## A mini JS framework

Maizzle has its own build system using HTML partials and variables. We use it like any JS project using npm command to trigger build. It’s just a couple of basic CLI commands : 

```bash
maizzle new
maizzle serve
maizzle build production
```

It has predefined templates we can use as starter. It has many options and utilities I won’t describe here, but I have to say the documentation is very clear and engaging.

The system is opinionated in such a way that partials are already dispatched in named folders (e.g: layouts/templates/components). All of this reminds me of a JS framework approach. The footer and the header are commons partials used in the built across all our emails in a single project. 

The development process is pleasant because it offers hot reloading, and we can directly write Tailwind classes in the markup of course (beware though that Tailwind config file has been adapted for this special use-case and the approach is desktop first instead of mobile first).

We still have to write plain HTML (it’s not using abstracted tags), so we have to compose with emails limitation in mind, but I get by after looking at the starters examples and modified tables blocks for my convenience.

## Deploy & wrapping things up

At the end, we juste have to build the project using Maizzle build production and voila! An optimized and purged file is generated in the /dist folder ready to copy/paste to our beloved mail sender system.

As always, I struggled a bit to produce a non-broken design even in old Outlook desktop client, but Maizzle has a few guides to get by over them.

To wrap this up, I found Maizzle the perfect tool to deal with email design while still using Tailwind. I barely scratched the surface of all the feature it offer as it was my first time digging in, but surely will use it again. 

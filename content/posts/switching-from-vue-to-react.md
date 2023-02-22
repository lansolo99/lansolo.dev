---
title: 'Switching from Vue to React'
type: 'article'
description: First weeks using React after 2 years working with Vue
imgCover: 'switching-from-vue-to-react'
tags: [vue, nuxt, react, next, devs, miscs]
createdAt: 2021-02-28
---

## Context

I have been using Vue for the last 2 years, and especially Nuxt and Gridsome to deliver static sites. I'm still enjoying the whole ecosystem and how the community is involved in its development (Vue 3, Vite, composition API, new Nuxt APIs...). 

As a solo freelance developer, I have the privilege to choose my stack. But I recently found myself in a situation where I was maybe looking to join a company. The thing is, despite its wonderful API, Vue remains way below its competitors in terms of global usage and demand in the job market. Angular is still widely used, though the community generally don't recommand start to learning it. However React is still the king and still will be for the upcoming years in my opinion.

So far, I always stayed away from it because I didn't get the point in learning another tool to build the exact same things and prefered to focus on mastering Vue. But at the end, I thought it wouldn't hurt me to give it a try, both for employability, but also for my personal knowledge and to forge a true opinion on comparing both tools.

## Transition

When I started looking at React tutorials, it appeared to me suprisingly easy to understand, as almost 90% of a React project follow the same file structures and code patterns. I heard that using JSX as a template language was pain in the ass, but I think it's really no a big deal at all : it's just a slightly different way to call expressions (simple instead of double curly braces), and another way to use directives (pure js instead of abstractions).

The code is a bit less clean, but it seems more "natural" and less abstracted. React shares a lot of similarities with the new Vue 3 composition API. The manner to declare states, methods, reusable pieces of code, props, hooks, I can see all of this probably inspired Vue 3 changes.

I guess my onboarding was quite easy because I realized how React simplified everything, but that wasn't the case before, when everyone relied on what we call "class components". All my learning is directed using "functional components", which are almost identical than regular Vue component.

The communication between component is easy to grasp, and maybe simpler than Vue, as all is transiting as props, especially, we can pass functions and even components as props. Therefore, we don't have to deal with the concept of event that much.

One of the thing that confuses me a bit is how to manage styles:

 In Vue, it's relatively straightforward : class or style bindings + css part within the single file component. 
 
 In React, I discovered there's a myriad of ways to manage CSS. So far, I used CSS modules, but I got the point in using CSS in JS solutions (styled components, Emotion..).

To wrap things up, I found the switch quite easy, and felt immediatly capable of adopting React for a real small production site.

## Next.js

Most of my projects are static landing pages, or micro-sites, sometimes including forms. 

Therefore, I headed towards existing React solutions. As a big Nuxt.js user, obviously I had to dive into [Next.js](https://nextjs.org/). I previously read of lot about how it recently improved and even solved problem that Nuxt currently can't (including incremental builds, and native image component).

Almost everything went without a hitch, putting aside the getStaticProps and getStaticPath API (allowing us to fetch data and generate dynamic pages), it took me a bit some time to wrap my head around these concepts. 

The native [component image](https://nextjs.org/docs/api-reference/next/image) was exactly what I think Nuxt is missing, unfortunately it can't be used on a static hosting without a Node server but Vercel, which encompasses this setup.

A lot of other concepts are very close to Nuxt, and I didn't felt lost using Next.


## So far...

Now, my goal is to play a certain amount of catch-up with React to reach my Vue capabilities across projects. If everything goes well, I then really don't know which framework I will be using as my default.

I think the important thing I learned is not to be too tied to a certain technology, and to be able to quickly adopt new concepts according to our current needs. 

This switch just proved me this was the case.
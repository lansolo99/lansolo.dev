---
title: 'On deciding to stick with React'
type: 'article'
description: My decision about sticking with React and not coming back to vue for the time being...
imgCover: 'on-deciding-to-stick-with-react'
tags: [react, next, formik, framer-motion]
createdAt: 2021-03-27
---

## Context

In the [last post](/posts/switching-from-vue-to-react), I explained why I decided to explore React after a significant Vue experience. Back then I thought I would just give it a try then coming back to Vue, but I'm currently building my 4th [landing page](https://web-prod.bpce-bpri-prod-web2.nfrance.net/jeunes-ecoles/) using React and actually really enjoy it against all odds.

## The joys of discovering the ecosystem

As previously mentionned, I quickly found my marks building and organizing React components using the functional API.
I guess I came at the right moment, as I certainly wouldn't feel the same if I had to deal with the class component API.

Actually, I think a lot of React philosophy makes more sense than Vue in my head: passing every pieces of data/logic as props or children using composition, get them in the child component using destructuring or rest paramaters, grouping logic by feature, and using context API as a global store...

## Annoyances

Off course I struggled with some weird behaviors I had to mess with, one of them is having a good grasp of the useEffect hook, especially understand its mechanism to avoid infinite loops, and be able to properly log reactive states. I have to say Vue is a bit more easy on this side.

Another thing that annoys me a lot is how the React dev tools render reactive state with a generic "state" key. It's a pity we should use nested keyed object to get intelligible keys in the dev tools at first glance. I also find the Vue dev tools much better on this side.

## General feeling

Beside this, I feel like React offers an unequivalent freedom in terms of structuring our logic, the possibilities seems endless and less compartimented than Vue (at least speaking for the option API).

Building web-apps with Next.js seems to me relatively straightforward so far. As soon as I'm wondering something, a large amount of topics and discussions are here to help: here is the power of using a tool backed by a huge community.

## Material UI

For my last project, I had to build a form using the Googla Material UI. So I dove into the [React Material UI library](https://material-ui.com/). I felt like a bit of [Vuetify](https://vuetifyjs.com/) reading the docs, but I quickly came up with a working interface. The big struggle was learning the myriad of ways about styling the components, it's literally overwhelming, but at the end, I chose to deal with the method that suited me the best, a.k.a styled components.

## Formik as the Vue-Formulate React peer

As I need form validation, I decided to go with the famous [Formik library](https://formik.org/). Here again, 10 ways to proceed. I guess it's the way React works: we have to find the method that works the best for us, then stick with it. Formik offers every feature we would need in a form and can be considered to be the equivalent of [Vue Formulate](https://vueformulate.com/) as it doesn't have an opiniated UI but just offering all the logic we need to build form components. By the way I wrote a [quick review](/posts/vue-formulate-quick-review) about this last one.

## Framer-motion: animations at ease

When I had to deal with sequenced animations previously with Vue, I used the [GSAP library](https://github.com/greensock/GSAP). I also simply used CSS classes coupled with the &lt;transition&gt; tag. I heard about [Framer-motion](https://www.framer.com/motion/) long time ago, and finally gave it a try. I found the API extremely friendly and really appreciated the default "spring" easing that gave a natural physic-like to all animations.

For the time being, I just used it for simple elements "poping out" on the page, but I read about the [magic-motion](https://www.framer.com/examples/magic-motion/) feature, which I'm eager to try on a future project as it look so impressive with it's morphing effect!

## What's next ?

The more I read on React, the more I realize I have tons to learn. One of the thing on my roadmap is definitely [Styled-components](https://styled-components.com/): it seems to be broadly used and offer a convenient way to write reactive styles. I will see if it partner properly with [TailwindCss](https://tailwindcss.com/), because I don't plan on giving up the best styling framework I used so far!

Typescript is another thing I may should dive in, but I have to say my inner motivation is mostly driven by the job market, because I tend to see it like something that will bloat the code the few times I checked tutorials on it.

For this year, I think I will continue enjoying my React journey and see what happens...

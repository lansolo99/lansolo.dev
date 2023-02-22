---
title: 'Framer & Framer-motion: prototyping workflows'
type: 'article'
description: My experience on trying the Framer app and making the connexion with the React Framer-motion library.
imgCover: 'framer-and-framer-motion-prototyping-workflows.jpg'
tags: [framer, next, framer-motion, Tailwind, Sketch, miscs, devs]
createdAt: 2022-02-27
---

## Previously

Regarding web animations, I am pretty fan of the [Framer-motion library](https://www.framer.com/motion/) since I use React. I wrote about it after having deeply experienced it on a [drag-and-drop puzzle game](/posts/drag-and-drop-puzzle-game-with-framer-motion).

Lastly, I have been asked to realize a small animated prototype for a multi-step form before coding it. In the past I experienced the Protopie tool, and wrote a [post about it](/posts/ui-prototypes-with-protopie) as well.

Though I remember having been a good feeling on it, I had to try [Framer](https://framer.com/) as a Framer-motion user.

## The Framer ecosystem

Framer is an whole ecosystem that encompasses:

- [The Framer web app](https://www.framer.com/)
- [The Framer desktop app](https://www.framer.com/downloads/)
- [The Framer-motion library for React](https://www.framer.com/motion/)
- [The Framer Sites](https://www.framer.com/sites/) no-code website builder (beta)

## The Framer app

The Framer app is mostly a design tool comparable to other well-known solutions such as Figma, Sketch, or Adobe XD. We can work on both the web or desktop app, as they are constantly synchronised.

The interface is quite close to its siblings (free canvas, artboards, and properties panels).

What differenciates it is a coding feature directly accessible within the app that allows adding React logic within our UI components. Therefore, it opens the door for accurate prototypes and integrations.

## The UI part

Handling Framer is very intuitive, and following onboarding tutorials is a breeze. We then have to understand specific concepts such as smart components, interactions types, variables, native components and so on...

Framer has been designed for mobile first, with features like the [paging tool](https://www.framer.com/support/using-framer/layers-page/) (a scroll-snapping slider) that come in handy.

Regarding the UI design, the only annoying thing I found is the lack of a scaling tool. It's also less rich-featured than other design tools can be.

Some workarounds have to be found but it's usually not a big deal.

## The coding part

It start to become tricker when we dig into the coding part..

Code can be written within 2 types of files: code components or code overrides as well explained in the [official doc](https://www.framer.com/docs/guides/).

### Code components

Code component are regular React functional components that can hold markup, logic, props and also act as component wrapper for both smart components (created from UI), or other code components.

Then, we can drag them into the UI canvas.

I didn't make heavy use of them so far.

### Code overrides

Code Overrides are kind of high order components that are assignable to any UI element on the canvas and contains logic.

Overrides files often encompass multiples overrides functions as well as a global shared state.
I mostly used them to apply a custom UI appearance to a default component on the canvas, based on some logic.

I have to say we can also bind some logic through the UI components by setting up [variables](https://www.framer.com/support/using-framer/variables/).

## Purpose and benefits

Those mechanisms allows to set a trully dynamic logic based prototype with complex conditionals. The syntax is indeed pretty much all React/JSX which any React user already knows.

Here is the [small prototype](https://framer.com/share/Multi-step-form--qwox9eKuo0rNKAzwQcGw/xGzOl5yq1) I have setup. It is a basic multi-step form taking advantage of the native Paging component. The bottom navigation, the stepper indicator, and the paging component all use overrides functions and a shared state within a same file.

If I had to do that using Sketch only, I wouldn't get the animated states across screens, and I should have each screen defined independantly with a unique configation state.

## Struggles

Though the result match what I had in mind, I'm still not entirely convinced so far, and here are some things I struggled with:

- Cannot use external editor (VS Code) but only the internal, which is not a comfortable working environment
- The changes that would happen during preview are not reflected in the canvas. At some point it might be confusing
- UI variables can only be defined binded to an element property and not arbitrary
- I have noted that animation on previews (code, UI, or published) can behave differently

But on the overall, I found having component defined both from UI AND code are really confusing me 🤔.

We can import UI component in code component, we can defined variable both in code files and UI, props work in a very different way than React, and I found incredibly difficult to alter some basic styles from code 😶‍🌫️.

I had to find workarounds at every step.

## The React implementation

At the end, here is the (simplified) [final React component](https://multi-step-form-with-framer-motion.vercel.app/) I built (using Next.js).

I also made the code available on [this repo](https://github.com/lansolo99/multi-step-form-with-framer-motion).

I ended up implemented it very differently than the Framer prototype, but it also made it way faster, even though it contains a lot more logic.

## Conclusion

I am still pretty new to Framer and I worked on it the equivalent of 2 weeks since then, so I am not legitimate to give any advisory because I probably missed a lot of things.

First the onboarding was pleasant, and building element using GUI has been a piece of cake (beside the scaling problem).

But it has become suprinzingly hard to me to deal with simple things when I started to make use of code.

I guess, it's like everything, it becomes obvious with practice but I think I should'nt have struggled that much already knowing React.

I will try to improve on Framer on any future opportunities but I hope the product would get better with time.

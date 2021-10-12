---
title: 'Manage SVG colors with Next.js'
type: 'article'
description: Method I use to manage SVG colors programmatically in Next.
imgCover: 'manage-SVG-colors-with-nextjs'
tags: [next, svg, next-optimized-image, tailwindcss]
createdAt: 2021-08-18
---

## Context

SVG is the perfect file format to display vector-based images on a website, everyone know that.

Now, there is many ways to manage how to render them, depending on two main use cases :

- polychromatic (multi colors svg)
- monochromatic (mono color svg)

For this article, I will be using next.js along with [next-optimized-images](https://github.com/cyrilwanner/next-optimized-images) which is the most versatile and easiest external package to manage all kind of images in an optimized way in a Next.js application (yes, better than next/image while writing this article in 2021).

I also use <span class="singleMdCode">@/assets</span> path which is a [next.js alias](https://nextjs.org/docs/advanced-features/module-path-aliases).

## Polychromatic

Polychromatic svg is the easiest one to deal with, as we just need to render it as it is without any further modifications. Here I use the <span class="singleMdCode">Img</span> component from next-optimized-images (same as the native <span class="singleMdCode">img</span> tag):

```typescript
import Img from 'react-optimized-image'
const ReactComponent: React.FC = () => {
  return <Img src={require('@/assets/images/image.svg')} />
}
```

## Monochromatic

Monochromatic svg can be treated the same way as monochromatic if we don't need to set its color programatically but it will just output the color defined within the svg.

What's interesting is indeed to manage svg color within our application.

To do so we have to import svg and render it inline.

Here I use the <span class="singleMdCode">Svg</span> component from next-optimized-images (same as the native <span class="singleMdCode">svg</span> tag) so that we can directly use an image file instead of copy-paste the svg code from it:

```typescript
import { Svg } from 'react-optimized-image'
const ReactComponent: React.FC = () => {
  return <Svg src={require('@/assets/images/image.svg')} />
}
```

### SVG syntax requirements

First and foremost, we have to check some attributes within ou svg code.

- Set the value of every <span class="singleMdCode">fill</span> attributes with "currentColor"
- Set the value of every <span class="singleMdCode">stroke</span> attributes with "currentColor"

We can do that either directly within our SVG code:

```svg
<path fill="currentColor" d="M12 15.." />
```

or get rid of these attributes and set them via a css file:

```css
svg path {
  fill: currentColor;
  stroke: currentColor;
}
```

The final thing is to set a css color property to our element to apply our color

```typescript
import Img, { Svg } from 'react-optimized-image'
const ReactComponent: React.FC = () => {
  return (
    <Svg
      src={require('@/assets/images/image.svg')}
      style={{ color: '#ff0000;' }}
    />
  )
}
```

And voila!

## Using Tailwind CSS helpers

Tailwind has become my css framework of choice like many people and the latest version bring on some useful utilies : [fill-current](https://tailwindcss.com/docs/fill) and [stroke-current](https://tailwindcss.com/docs/stroke#class-reference).

It is basically a replacement shortcut to the previous css code, so you just need to set the proper utility class such as below (if it contains both fills and stroke in this case):

```typescript
import Img, { Svg } from 'react-optimized-image'
const ReactComponent: React.FC = () => {
  return (
    <Svg
      src={require('@/assets/images/image.svg')}
      className="w-10 h-10 text-red-500 fill-current stroke-current"
    />
  )
}
```

## Optimization with SVGO

[SVGO](https://github.com/svg/svgo) is a very convenient tool that can perform a handful of optimisations over SVG.

It help us getting rid of unecessary attributes and cleaning up the whole code. If you create your svg via Illustrator of Sketch, it often contains a lot of these attributes.

Beside that, it can greatly help us to automate and batch optimizations tasks over a whole bunch of SVGs.

Options are numerous and I highly recommand you install the package as a dev dependency to speed up the svg management using npm scripts.

They also have a GUI tool called [SVGOMG](https://jakearchibald.github.io/svgomg/) (if you just need to perform a single operation once).

Hope it can help to setup your own SVG workflow management!

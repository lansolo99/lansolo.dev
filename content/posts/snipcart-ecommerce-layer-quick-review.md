---
title: 'Snipcart e-commerce layer quick review'
type: 'article'
description: Personal experience implementing Snipcart.
imgCover: 'strapi-headless-cms-quick-review.jpg'
tags: [snipcart, next, tailwindcss, strapi, vercel]
createdAt: 2021-10-16
---

Another quick review style article!

This time talking on Snipcart I just start to implement in a project.

## Context

In the last article, I wrote about building an e-commerce website using Next + Strapi. I just quicky mentionned using Snipcart as headless e-commerce layer but didn't say much about it because I didn't really experimented it at this time.

## Why Snipcart?

Snipcart was on my radar since a few years and this was this small site was the perfect opportunity to see how it fits. There's dozen of available option regarding e-commerce tools but I wanted something that would represent the easiest and lightweight integration as I wanted to focus on the content management part above all, which is represented by Strapi.

### Simplicity

Snipcart offload all the complexity of the e-commerce layer, and get with an out-of-the-box UI to proceed transactions without frictions.

This UI takes the form of an overlay panel containing all the visual blocks we would need otherwise (a.k.a: summary cart, order form, payment gateway, thank-you screens, user account dashboard and so on).

This overlay is triggered by any event you decide, the most common is the "add-to-cart" button.

### Almost zero additionnal code

1. Before hand, we have to inject the CDN Snipcart script (with proper API key) + the CSS layer, on the application level (the app.js file)

2. Then, making a product purchasable through Snipcart is just a matter of adding classes and attributes to one HTML tag: the add-to-cart button. Below is an extracted piece of code I used:

```jsx
<button
  className={'snipcart-add-item'}
  data-item-id={product.id}
  data-item-name={product.title}
  data-item-price={product.price}
  data-item-url={windowHref}
  data-item-image={product.images.featured?.formats.small.url}
  data-item-quantity={state.quantity}
>
  Add to cart
</button>
```

The `snipcart-add-item` class is provided by Snipcart and therefore is the key element to make your product a Snipcart purchasable item.

The other attributes are self-explanatory and provide necessary informations to handle a proper transaction.

And that's it for the front-end part. The remaning work will be setting up our Snipcart account on their hosted platform.

## As always, some struggles here and there

### Security order validations

### Authorized domains

## Wrapping-up

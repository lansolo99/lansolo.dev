---
title: 'Snipcart e-commerce layer quick review'
type: 'article'
description: Personal experience implementing Snipcart.
imgCover: 'strapi-headless-cms-quick-review.jpg'
tags: [snipcart, next, strapi, vercel]
createdAt: 2021-10-16
---

Another quick review style article!

This time, talking on [Snipcart](https://snipcart.com/) I just start to implement in a project.

## Context

In the last article, I wrote about building an e-commerce website using Next + [Strapi](https://strapi.io). I just quicky mentionned using Snipcart as headless e-commerce layer but didn't say much about it because I didn't really experimented it at this time.

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

The _snipcart-add-item_ class is provided by Snipcart and therefore is the key element to make your product a Snipcart purchasable item.

The other attributes are self-explanatory and provide necessary informations to handle a proper transaction.

And that's it for the front-end part. The remaning work will be setting up our Snipcart account on their hosted platform.

## As always, some struggles here and there

### Security order validations

Because obviously someone may point out that setting price through attribute seems unsecure, Snipcart has a highly effective communication regarding [security](https://docs.snipcart.com/v3/security) how they manage it through a server-side check. For this reason, we **CANNOT** change a product price dynamically using a simple JS data binding.

We have to leverage some specific data-options attribute that Snipcart uses to recalculate the price based on the original one.

I didn't get this immediatly and lost a tremendous amount of time dealing with validations errors after altering the price directly.

### Authorized domains (with Vercel)

Another annoying thing at firt is setting up Snipcart authorized domain to allow validations. As any Vercel user, my deployment workflow is based on a Git CI pipeline that leverage branch deploys with auto-generated subdomains.

Snipcart interface ask you to fill-in these subdomains as authorized. So I had to set a stable Vercel branch domain to avoid updating branch deploy domains anytime I want to check the order in production.

## All Snipcart featurez

It's just a really sneak pick of what Snipcart offers out-of-the-box and I just barely scratch the surface.

Here are key features that should fit with most e-commerce projects:

- Clean UI (both front-end widgets and management platform)
- Fully customizable front-end widgets
- Live/tests modes
- Numerous payment gateways
- Already set transactionnal emails routing + customizables templates
- Clean customers database
- Manageable product stocks
- Very affordable pricing policy
- Internationalization and so on...

## Wrapping-up

I didn't intend to make a giant Snipcart advertising with this article, but I should say I'm more than happy with it so far, and how easily it integrates in my front-end.

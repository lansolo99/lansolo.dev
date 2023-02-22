---
title: 'Strapi v4 & Strapi conf: quick catch-up'
type: 'article'
description: A quick catch-up following the latest Strapi conf and keypoints I consider using the new v4.
imgCover: 'strapi-v4-strapi-conf-quick-catch-up.jpg'
tags: [Strapi, next, miscs]
createdAt: 2022-03-25
---

Note: This post is not a Strapi tutorial, just a personal review.

## Context

Since I started adopting jamstack development, I've been experimenting multiple headless CMS solutions (Prismic, Storyblok, and Strapi).

The one I liked the most so far is Strapi, a french initiative 🇫🇷👍.

It's open source, and in a very active development state. I already wrote [a post about it](/posts/strapi-headless-cms-quick-review) in the past.

This status means it's platform independent, and you boot your project locally, as someone could proceed using Wordpress.

## Strapi v4

The latest [Strapi v4](https://strapi.io/v4) version has been recently released, which brings a handful of improvements. I will give you my first impressions after having playing with it for a couple of days/weeks.

## Strapi conf

First, the [Strapi conf](https://conf.strapi.io/) has taken place for the first time a couple of days ago. You can find [their blog post](https://strapi.io/blog/strapiconf-2022-announcements-recap) that offers a quick recap among other topics. All the talks are made available so that you can catch-up on a lot of topics and demo features.

## Personal v4 experience

I played with the latest version these last few days.

### Design changes

Obviously, the main change between v3 and v4 is the design revamp, a bit fresher than the previous one, though it's not necessarily a massive enhancement to my mind, it's just neat and fine.

The team however, made their [design system](https://design-system.strapi.io/) publicly available, and will be very useful for plugin development.

### REST API changes

The REST API has been reworked and is, in a way, simpler, but with drawbacks as well. We now have now access to a pagination meta object for each collection type:

```json
"meta": {
"pagination": {
"page": 1,
"pageSize": 25,
"pageCount": 1,
"total": 2
}
}
```

The response encompasses the attributes fields in an "attributes" key. Practical but can boat the response in the meantime.

```json
{
  "id": 4,
  "attributes": {
    "title": "Reseau 1",
    "createdAt": "2022-03-04T07:53:37.167Z",
    "updatedAt": "2022-03-04T08:33:21.828Z",
    "slug": "reseau-1"
  }
}
```

By default, components, relations, medias, and dynamic zones are not populated, you have to precise if you want this data using the "populate" key.

We can also easily filter the response and select which field we want.

So "populate", "filters", and "fields" are very convenient [API parameters](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html), part of the Strapi v4 Rest API.

Example of an API query:

```js
const myCollectionRes = await fetchAPI('/myCollection', {
    filters: {
      slug: "slug1",
    },
    fields: ['slug'],
    populate: ['myComponent']
}
```

### Plugins marketplace

Before v4, we have to find third party extensions by ourselves.

Strapi v4 brings a new [plugin marketplace](https://market.strapi.io/), directly accessible from the admin, a bit like the Wordpress extensions store.

So far, there is only 35 plugins available, but I can see it's already growing quickly.

Thanks to the new [plugin development tool](https://docs.strapi.io/developer-docs/latest/development/plugins-development.html#creating-a-plugin), I guess it opens doors for upcoming developer to build new stuffs easily.

I followed one of the workshop on plugin development during the Strapi conf.

There is a [CLI](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-generate) to generate a clean structure and some guidances in the docs, though, it's a bit lacking as of now, and injection zones are very limited so far.

### Plugins tests

I tested some of them.

The install process is always the same:

- a package install
- a small configuration snippet to insert manually (not for all of them)
- a rebuild of the admin before being able to use a new plugin.

Here is the list of plugins I tried:

- [SEO](https://market.strapi.io/plugins/@strapi-plugin-seo): brings a whole set of metas and open graph fields for a given collection, and give a quick SEO summary, same as Yoast
- [Website Builder](https://market.strapi.io/plugins/strapi-plugin-website-builder): brings a convenient button to trigger a rebuild for a static front-end (convenient for non-tech contributors, so that they don't have to mess with webhooks)
- [Preview Button](https://market.strapi.io/plugins/strapi-plugin-preview-button): finally something clean and handy to easily bring preview within the Strapi documents. The doc has an example with the Next.js preview.
- [Navigation](https://market.strapi.io/plugins/strapi-plugin-navigation): allows to easily build and manage a multi-level nav, from internal or external documents, avoiding doing so within the front-end
- [Comments](https://market.strapi.io/plugins/strapi-plugin-comments): once again, another very common and useful feature to manage user comments related to a document. However, we have to build the UI around

## Interesting things upcoming

The Strapi Conf has also been the place for important announcements:

- [Dark mode](https://strapi.io/blog/strapiconf-2022-announcements-recap): Already available in a beta, I've tested it and it's beautiful, even if it becomes a standard nowadays
- [Custom fields](https://www.youtube.com/watch?v=4Rq3zin8XXQ&list=WL&index=1): extend the base components catalogue with common needs, such as maps, embeds...
- [Strapi cloud](https://strapi.io/cloud): The future Strapi hosting solution, instead of relying with third parties such as Heroku. Release expected for 2023.

### Conclusion

In the headless world, I think there's a very few solutions offering the open-source model.

Beside that, the Strapi adoption is excellent since it has ranked n°1 according to [jamstack.org](https://jamstack.org/headless-cms/),

I can see huge improvements since I first play with it 3 years ago (and it was barely usable at this time).

Regarding the ambitious roadmap, my feeling is that Strapi will keep position itself as one of the major headless CMS for the upcoming years.

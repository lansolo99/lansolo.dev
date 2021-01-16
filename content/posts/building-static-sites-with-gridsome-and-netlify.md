---
title: 'Building static sites with Gridsome + Netlify'
type: 'article'
imgCover: 'building-static-sites-with-gridsome-and-netlify.jpg'
tags: [netlify, gridsome]
createdAt: 2020-04-19
---

As times goes by, Gridsome has become one of my favorite Vue framework for building static landing pages. I used it a dozen of times but also switch back and forth with Nuxt, that is also an excellent and more versatile framework. 
<!--more-->
But Gridsome is has its focus on static site generation and therefore do it well. I already wrote an article about my thoughts on Gridsome and its features. Today, I want to highlight some features I didn’t use so far and what makes Gridsome really stand out. I used them during the development of my developer portfolio extension.

## Static & dynamic GraphQL queries

Querying external datas (whether internal or external) is basically through modules imports (eg: local JSON), or with an API fetch on the client side (eg: from within a method). But Gridsome also offer a way to [query data](https://gridsome.org/docs/querying-data/) using a built-in [GraphQL data layer](https://gridsome.org/docs/querying-data/). This bridge has to be used with either a static or dynamic query. This query will only be executed on the build phase, so it’s generating some static content. 

We can become acquainted with what’s available through a query by testing it from the Graph QL explorer first, during the dev phase. This explorer exposes the available “collections” (data source) we have previously bind to the layer (using [Gridsome source plugins](https://gridsome.org/plugins/)). Theses plugins are numerous and allow to bring data in the [Graph QL layer](https://gridsome.org/docs/data-layer/#the-graphql-explorer) from almost any source (local files, externals APIs…).

Here is what we a dynamic query look like for a post content:

```js{}
query($path: String) {
node: project(path: $path) {
title
date(format: "DD/MM/YY")
content
cover_image(width: 320, height: 320)
}
}
```

It’s just a basic graphQL query using the dynamic page path to get a single node content. Then we just have to bind this data in the markup part using a basic data interpolation.

```js{}
{{ $page.node.title }}
```

## Markdown content

In the first section of my [developer page](https://lansolo99.netlify.app/), I used Markdown files for each project content. Markdown is easy to learn on the fly and offer a convenient way to write content that will translate into HTML markup. Gridsome offers the [source-filesystem](https://lansolo99.netlify.app/) and [transformer-remark](https://gridsome.org/plugins/@gridsome/transformer-remark) plugins to expose our markdown files and consume them from a graphQL query.

## Headless Wordpress

In the second section of my [developer page](https://lansolo99.netlify.app/), I used the Wordpress API to query my own [lansolo.dev](https://lansolo.dev) posts using the [source-wordpress plugin](https://gridsome.org/plugins/@gridsome/source-wordpress). In the same vein, it’s then a piece of cake to extract the needed datas with the graphQL query. The only drawback of getting external datas though the graphQL layer is the build time. But it all depends on the amount of content fetched. In my case, it’s a matter of seconds. So, technically I used Wordpress as a headless CMS for this static page. I may drop the wordpress generated front-end from lansolo.dev in the future because of the speed improvement.


## &lt;g-link&gt;, &lt;g-image&gt; and performances

Gridsome has 2 powerful built-in components : &lt;g-link&gt; and &lt;g-image&gt;.

The g-link component is a router link that offers prefetched content working together with the intersection observer. So that we get lazy loaded pages out of the box.

The g-image is an impressive and powerful features I use a lot because it encompasses a progressive image system, an auto-cropping system, and lazy loading feature on the fly. We can use dimensions attribute to get a perfectly optimized asset with a very small work : only one large asset is necessary to compute the smaller variations we would need for the responsive states.

I guess both of those tools contribute to offer a great performance lighthouse score.

## Netlify Forms

I’ve been building a lot of contact forms those last years and have been improving it as things progress. As my developer page is hosted on Netlify, I tried the [Netlifiy Forms](https://docs.netlify.com/forms/setup/) feature I often heard as a convenient solution to process forms on the server side. Indeed, it’s quite easy to bind our form and Gridsome has a quick [walkthrough](https://docs.netlify.com/forms/setup/) to easily implement it. We just need to add those 2 attributes on the form element:

```js{}
data-netlify="true"
data-netlify-honeypot="bot-field”
```

and then add an ajax POST request with a data encode helper. The whole snippet is once again available in the docs, so nearly no headache. We can test our form after deploying a Netlify preview. The form submissions are collected by Netlify and are available through the Netlify admin form tab.

Then it’s up to us to setup the way we process the data (Slack, webhook, email notification). The only drawback is our page have to be hosted on the Netlify platform, but I guess it’s really the quickest way to have a working form if it’s the case.

## Next

As always, lot of learned on this side project, my next pick will probably be [Netlify CMS](https://www.netlifycms.org/) to experiment a GIT-based CMS instead of manual markdown editing. By the way, I discovered how powerful Netlify is watching this exhaustive [free course about Netlify](https://youtu.be/mT5siI19gtc) features.

I guess I would make it my deployment solution of choice considering any jamstack architecture I experiment with.




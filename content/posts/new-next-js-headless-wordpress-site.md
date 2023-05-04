---
title: 'New Nextjs + headless Wordpress site'
type: 'article'
description: first experience using Wordpress as headless API for a Next.js showcase site
imgCover: 'new-next-js-headless-wordpress-site.jpg'
tags: [wordpress, vercel, next, devs, framer-motion]
createdAt: 2023-05-05
---

## Context

Lately, I had the opportunity to develop a small showcase site, actually a visual update of a legacy site in the flour industry.

This was a classic Wordpress site as you can see below with an outdated design.

<img src="https://res.cloudinary.com/lansolo99/image/upload/v1683194748/lansolo.dev/posts/new-next-js-headless-wordpress-site-content-1.jpg" alt="Alliance Farine legacy">

## Stack choice

The new design has already been made by a friend of mine, and I just had to care about web development.

The client wanted to continue using Wordpress for content management. Though, I wanted to use the modern JS stack I'm confortable with.

Obviously, I decided to combine both desires and use Wordpress as headless CMS to generate content on a Next.js based front-end.

As I intended to use Vercel to host the front site, I quickly stumbled on an official [guide](https://vercel.com/guides/wordpress-with-vercel) + [starter](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress).

## Wordpress

This is not my first Wordpress experience, actually maybe the thenth or something 😛.

I even already used Wordpress as API for a previous version of my [projects portfolio](https://lansolo99.netlify.app/), which is managed via Markdown files for a while now.

The main difference this time is that I decided to stick to the recommanded starter way: using a Wordpress Graph QL API using the [WPGraphQL plugin](https://www.wpgraphql.com/).

I struggled a bit building the proper queries for each content request, as I usually never use it, but started to understand more and more as I tried things right into the plugin playground.

Though, it's still mentally hard for me to build the right query on the first try, as I mess a lot with nodes/edges, objects keys...

## Next.js

Nothing special to say on this part, except I brought Framer-motion back into the game to leverage a wide variety of animations, from micro interactions, to scroll-linked and scroll-triggered kind, even page transitions.

Next.js is still my framework of choice at the time as it's reliable and performant, backed by a huge community.

I was tempted back then to switch to [Sveltekit](https://kit.svelte.dev/) when I built the [2023 new year game](/posts/first-sveltkit-project-with-blackout).

But the main blocking thing remains the lacking of an official image optimization workflow.

## Deployment

I was overwhelmed with questions before I grasp the nettle, especially regarding the hosting part on production and how to disable the legacy Wordpress front-end given an url.

I found a useful insight which is simply to create a subdomain for the Wordpress part and set the proper redirections.

Here are the steps I followed:

1. I already have an existing domain on [OVH](http://ovh.com) redirecting to some legacy hosting instance
2. I bought a new hosting instance with an empty SQL database
3. I packaged the site locally using the famous [Duplicator plugin](https://fr.wordpress.org/plugins/duplicator/)
4. I uploaded the package via ftp, then deployed it online
5. I configured a new admin.xxx subdomain and attached it to my hosting instance
6. I added some SSL certificates for these subdomains
7. I changed the wp-config site name URL for the admin subdomain
8. I deployed my front site on Vercel with the proper environment variables (especially the new production GraphQL API)
9. I attached the legacy OVH domain to the new Vercel hosting

And it finally worked! 🍾

Site admin is accessible through the admin subdomain, and front-site is accessible from the legacy root domain being properly redirected via DNS.

## Preview feature and Wordpress to Front links

This is a major one, and the starter explain how to get unpublished post versions via specific API calls.

But my problem was all different : there is no posts (only pages) and no draft states.

This site only has published pages.

All I wanted was to make the bridge between the editing phase on Wordpress, and a preview button, leading to the proper page url, and not the legacy one using some Wordpress hierarchy.

I found a quick snippet that solved this use-case by rewriting preview urls.

It works for both dev and production, and both root and children pages.

It has to be placed right into functions.php:

```php
function custom_frontend_url( $permalink, $post ) {
	$isDev = $_SERVER['HTTP_HOST'] === 'localhost:8888';
	$domain = $isDev ? 'http://localhost:3027' : 'https://alliance-farine.fr';

	$isHomepage = $post == 10;

	if(!$isHomepage){
		$custom_permalink = str_replace( home_url(),  $domain,  $permalink );
	}else{
		$custom_permalink = $domain;
	}

	return $custom_permalink;
};

add_filter( 'page_link', 'custom_frontend_url', 10, 2 );
add_filter( 'post_link', 'custom_frontend_url', 10, 2 );
add_filter( 'post_type_link', 'custom_frontend_url', 10, 2 );
```

## Wrapping up

Here is the new deployed site: [alliance-farine.fr](https://alliance-farine.fr).

I wouldn't say it's the easiest way to deploy a website as Wordpress is not design for this purpose.

But it allows someone, considering the Wordpress contraint from the client, to achieve this combination using our beloved front-end tools 💕.

The best stack to my opinion is still to use a headless CMS, without having to mess up with a non-conventional workflow.

I already tried some solutions such as [Prismic](/posts/testing-a-headless-architecture-with-nuxt-prismic), [Storyblok](/posts/building-a-restaurant-page-using-nuxt-with-), and [Strapi](/posts/snipcart-ecommerce-layer-quick-review).

The one I'm willing to try is [Sanity](https://www.sanity.io/), as it seems to offer a local environment through special syncs under the hood.

But let that experience take part and explained in a futur post hopefully 🙂.

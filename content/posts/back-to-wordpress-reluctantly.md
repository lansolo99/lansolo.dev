---
title: 'Back to Wordpress (Reluctantly)'
type: 'article'
imgCover: 'back-to-wordpress-reluctantly'
tags: [wordpress]
createdAt: 2020-08-28
---

This post is about my first experience using Wordpress with Tailwind css and how much I think the developer experience is lower than the one offered working with modern front-end framworks.
<!--more-->

## Tailwind + Wordpress ? Meet Laravel Mix

This summer, I’ve been asked for a small job by Gandi.net, my previous long-term partner. It’s about building a landing page nested on the existing [news.gandi.net](https://news.gandi.net) blog, built with Wordpress, but it has to be set apart from the blog. The Gandi.net news site is the first serious project I had to deal with as front-end developer 3 years ago. I used [Semantic UI](https://semantic-ui.com/) as a CSS framework and a very handmade Gulp process combined with over-nested sass rules.

I’ve entirely changed my design workflow and have been using Tailwind for year and a half now as it’s a real game changer. To make it work within Wordpress, I had to use a different build process that the usual one for single page apps. As stated in the [Tailwind docs](https://tailwindcss.com/docs/installation), I’ve used [Laravel-mix](https://laravel-mix.com/) , which is a Webpack bundler, needed to process the final CSS file. 

I struggled a bit configuring the main setup file, considering the various documentation sources that sometimes contradict each other, but finally got something using the following configuration :

```json{}[package.json]
"scripts": {
"dev": "npm run development",
"development": "NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
"watch": "npm run development --watch",
"prod": "npm run production",
"production": "NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
},
"dependencies": {
"laravel-mix": "^5.0.4",
"tailwindcss": "^1.6.0"
},
"devDependencies": {
"laravel-mix-purgecss": "^5.0.0",
"postcss-import": "^12.0.1",
"postcss-nested": "^4.2.3",
}
```

```js{}[ webpack.mix.js]
let mix = require("laravel-mix");
let tailwindcss = require("tailwindcss");
let atImport = require('postcss-import');
let postcssNested = require('postcss-nested');
require('laravel-mix-purgecss');

mix.js("./assets/js/gandi20/input/gandi20.js", "./assets/js/gandi20/output/gandi20.js")
.sass("./assets/postcss/gandi20.scss", "./assets/css/gandi20.css")
.options({
processCssUrls: false,
postCss: [
atImport(),
postcssNested(),
tailwindcss("./tailwind.config.js"),
]
})
.purgeCss({
content: ["./template-parts/**/*.php",]
});
```

## Personal Wordpress considerations

I can now fully use Tailwind within Wordpress PHP templates I just have to run npm production script to build the purged css.

I don’t like working with Wordpress anymore since I discovered Vue.js two years ago. Still, I should recognize it has some convenient tools such as [ACF](https://www.advancedcustomfields.com/) Field to quickly set a custom admin through custom field groups.

But I think the very opinionated way the hierarchy work is annoying. The worst is having to mix PHP + HTML by constantly using open and close <?php ?> tags. The visuel result is such a mess. Hope I will do it less and less.. 

One day I will get rid of it for my Portfolio. I already started a switch building my new [lansolo99 dev page](https://lansolo99.netlify.app/) but it’s actually pulling data from the wordpress rest API. I may keep Wordpress as a backend and consider using [lansolo.dev](https://lansolo.dev) as the only front-end site. 
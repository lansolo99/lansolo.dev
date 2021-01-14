---
title: 'Building Meet Harvey:  a dive into Wordpress membership plugin'
type: 'article'
imgCover: '/img/posts/building-meet-harvey-a-dive-into-wordpress-membership-plugin.jpg'
tags: [wordpress]
createdAt: 2019-10-11
---

This post tells the path I've been through to setup a full Wordpress membership site with protected content.
<!--more-->

## Intro

Those last months, I have set up a joint venture with a young ex-lawyer to build a personal development platform targeting french lawyers. The name is "Meet Harvey" (in reference to the tv serie “Suits"). It aims to deliver high quality posts to help leveraging employed lawyers who want to get on their own business.

My role was to design a brand for the platform as well as develop the whole project.

During our discussions with my partner around what could be the best possible solution for this kind of project, we’ve come to realize that a membership site was what we needed.

## Stack

I’ve been experimenting a lot with single page application ecosystems for nearly a year now (especially Vue.js) and I first wanted to use it for this project. It’s quite heavy on the feature side this time: we need a CMS, an authentication system and protected contents for users,  a payment gateway and an invoice system.

At first I quickly tested a Jamstack configuration combining Nuxt.js + [Strapi CMS](https://strapi.io/) + Stripe following this well explained [tutorial](https://medium.com/strapi/cooking-a-deliveroo-clone-with-nuxt-vue-js-graphql-strapi-and-stripe-ebeb49320993). But I struggled a lot (especially with Strapi that remains too buggy at this time). Considering the project has a low budget, tight deadline, and is very features-demanding, I've chosen to use a common Wordpress + a membership plugin solution.

## Web Design

The starting point of the project was first to create an iconic animated scene that will take place on the homepage hero. I used a rotating divided plate that shows different micro-scene in a sequential way, built with Cinema 4D as usual. See here in action.

## Team workflow

We use Trello as our project management tool, I used it a lot in the past with Gandi.net, it remains a very efficient tool with a neat interface.

## Wordpress setup

* As the work on templates was barely finished, I setup a few very useful plugins that I didn’t know before:
* [Auto-optimize](https://fr.wordpress.org/plugins/autoptimize/): it's now my go-tool for global assets optimisation and bundling, it rocketed the Lighthouse score in a breeze
* [Super PWA](https://superpwa.com/): it setup automatically the whole site to comply with the progressive web app requirements. I consider PWA as a best practice we should tend to, in order to build a more resilient web.

## Mailchimp integration

The first goal is engaging people in a free mail sequence. Some well positioned call-to-actions trigger a form deployment with an email input field. These forms are plugged with a [Mailchimp](https://mailchimp.com/) subscription flow through a Contact-form-7 integration. I found it quite simple though a bunch of others solutions exist as well. Mailchimp seems to be a very powerful tool but I find their UX very confusing.

## Memberpress

* The second goal is engaging people in a membership to access protected contents from the site that will be delivered on a regular basis.
* We chose to go with [Memberpress](https://memberpress.com/) as our membership plugin. This is the most common and reliable solution in the Wordpress membership plugin galaxy. It takes place with a lot of features in the WP admin. There is an extensive doc that help with configuring, but I found things are not always straightforward. It was tedious to figure out what was the right template to use to apply custom styles for exemple. There is is a lot of fields that can overwrite the base configuration and it takes time to get used to this management system.
* A big drawback is the lack of official traduction (the site is in French), so I hopefully found a translation file in a [Github repo](https://github.com/wp-premium/memberpress-basic/blob/master/i18n/memberpress-fr_FR.po).
* Another drawback is an incomplete drip system for protected content : it’s impossible to setup a sequence. We have to setup a rule instead for every single content with staggered drip time.
* On the positive side, the payment gateway is very easy to implement, we went with Stripe and we can easily test the workflow.
* To conclude on Memberpress, it fits pretty well with our project but there’s a lack of clarity in some configuration panels and the way it’s organized.

## Next

* The project has just been launched in its initial phase, that is to said, without the membership part. It is available on [meetharvey.co](https://meetharvey.co). The second phase will be launched within the next coming weeks.
* Aside from the goal of helping people to develop themselves on specifics topics, we expect to get a side-income as well. It’s the first time I take part in such a project, and chances to achieve this will greatly depends on the marketing actions, which I’m not in charge of. My part will be to maintain a reliable system that performs all user expectations.
* I’m thinking about testing a solution that I’ve heard of thousand of times through podcasts : [sentry.io](https://sentry.io/). It’s a tool to monitor activity and track errors. More on this on a future post if its implementation is relevant or not...
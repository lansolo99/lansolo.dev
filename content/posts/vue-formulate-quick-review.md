---
title: Vue Formulate quick review
type: 'article'
imgCover: '/img/posts/vue-formulate-quick-review.jpg'
tags: [vue, vuex, form]
createdAt: 2020-11-19
---

This post is about a first personal feedback regarding the Vue Formulate plugin.
<!--more-->

## Context

I’ve been dealing with a lot of form integrations for the last few years. First using Semantic UI with its validation API. When I switched to Vue.js, I used [Vuetify](https://vuetifyjs.com/en/components/forms/#forms) form components + [Vuelidate](https://vuelidate.js.org/) validation library. Finally, I drop this solution when I switched to [Tailwindcss](https://tailwindcss.com/) to have my own form markup, still coupled with Vuelidate. I heard about how [Vue Formulate](https://vueformulate.com/) could be a neater solution as it encompasses both form components + validations out of the box, and can be coupled with Tailwindcss, but I delayed the tryout until now. 

Vue-formulate is a recent game-changer regarding Vue.js forms solution and has the following promise : The easiest way to build forms with Vue. It’s partly true: now I can say yes, but I had a few headaches before I can convert my usual form use-case to this solution. 

## Setup

This library provides 2 different components to use : 

* &lt;FormulateForm&gt;, the &lt;form&gt; equivalent
* &lt;FormulateInput&gt;, all &lt;input&gt; or &lt;button&gt;pr equivalents

 A basic template setup:

```js{}
<FormulateForm 
ref="form" 
name="mainForm" 
:form-errors="formErrors" 
@submit="submitForm" 
> 

<FormulateInput 
id="name" 
v-model="form.name" 
name="Name" 
label="Name" 
type="text" 
placeholder=“Enter your name" 
validation="required" 
/> 

</FormulateForm> 
```
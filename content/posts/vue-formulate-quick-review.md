---
title: Vue Formulate quick review
type: 'article'
imgCover: 'vue-formulate-quick-review'
tags: [vue, vuex, form, miscs]
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

## Customizing

Vue-Formulate provides a basic (though clean) styling. It may be suitable for prototype purpose but usually, the point is to be able to make it look like our own way, regarding the design, but also the inner markup.

## Customizing styles

Vue-Formulate provides [props](https://vueformulate.com/guide/theming/customizing-classes/#class-keys) to inject classes to specific part of the inner markup. It’s very well designed, and usually, doing it this way will cover most use-cases. It’s just a matter of understanding the differences between "outer", "wrapper", "element" or "input" key classes to target the right DOM element. 

```js{}

<FormulateInput 
type="checkbox"
outer-class="md:w-8/12"
wrapper-class="flex items-center"
input-class="w-5 h-5 bg-transparent border-2 border-opacity-50 form-checkbox text-primary-400"
validation="accepted"
:validation-messages="{
accepted: 'Please accept the terms.',
}"
:error-class="['ml-10']"
/> 
```

## Customizing the markup

Sometimes, (and often), injecting classes as string variable won’t give enough flexibility. Vue Formulate provides [named slots](https://vueformulate.com/guide/inputs/slots/#available-slots) to replace the default markup of the different parts within a &lt;FormulateInput&gt;. This way, we can inject our markup directly in our template : 

```js{}
<FormulateInput 
type="submit" 
label="my label" 
> 

<template #default="{ label }"> 
    <div>{{ label }}</div> 
    <div>My second label</div>     
</template> 

</FormulateInput>
```

This way we can modified whatever part of the input component we want, and take advantage of passed props, part of the Vue Formulate "context" object, inherent to every input component. We can do this with simple slots, scoped slots (as above), but also we can provide our own single file component if we either want to reuse our logic, or simply because we need to inject a lot of business logic.

We can do this by setting a custom component type, using the type prop. For example we could have a custom button component this way :

```js{}
<FormulateInput 
type="myCustomComponent" 
label="my label" 
/> 
```

The binding is done through a global plugin configuration file ajustable in nearly every possible way. We can configure custom components to be used, but also global classes, and global validations to reduce the markup in a DRY way. 

## Errors handlings and helpers

Vue formulate provides a complete [validation API](https://vueformulate.com/guide/validation/), so that we don’t need Vuelidate anymore. Errors are automatically displayed beneath the input if validations fail, as the error markup is part of every input component out of the box. We can provide our own validation messages, behaviors , and extend every rules to suit our needs. 

Beside input-level validations and error, Vue Formulate also provide a convenient way to use [global error messages](https://vueformulate.com/guide/forms/error-handling/), this time binded to the form element.

```js{}
<FormulateForm 
ref="form" 
name="mainForm" 
:form-errors="formErrors" 
> 

<FormulateErrors /> 

</FormulateForm> 
```

We can then place the FormulateErrors component wherever we want.  This latest will display the error message(s) we provide if validation fail  
There would be a lot more to say about Vue Formulate. There is an option to make a field repeatable from the client-side. 

I struggled a bit to understand how I could make custom component as the documentation is lacking a bit regarding examples, but I’m sure it will be patched as things progress. 

## Conclusion

I think this library is highly recommandable as it eases the form development, considering a little effort to get started. At the end, the markup is way more elegant than building hand-made components coupled with a validation library. This will be my go-to package to build forms with Vue from now 😻.
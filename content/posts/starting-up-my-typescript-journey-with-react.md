---
title: 'Typescript here I am!'
type: 'article'
description: Starting up my Typescript journey with React
imgCover: 'starting-up-my-typescript-journey-with-react'
tags: [react, next, typescript, miscs]
createdAt: 2021-06-17
---

Note: This post is not a Typescript tutorial at all, just my personal feeling after starting to use it.

## Context

I constantly read that [Typescript](https://www.typescriptlang.org/) is the future of Javascript, that everyone should step into it.

I understand the benefits of using this superset within our code: it brings us safety and confidence during the development cycle of our project. So far I only tested it within Nuxt early in 2020, but its implementation was buggy at the time.

Now I'm using Next.js, I know for sure it's well implemented and advised so I decided to give it another try.

## A first step into Typescript

I started following courses, learning fundamentals, before trying to apply it in a React Project. I can advise the well organized Academind course intitled "[Understanding Typescript](https://pro.academind.com/p/understanding-typescript)" that covers the React use-case quite concisely.

I realized Typescript is quite extensive regarding all the existing methods if we cover them all. Fortunately, we don't have to master the whole thing to start taking advantage of it.

The syntax is not very hard to grasp at first: mostly, the typing works using a lot of colons and javascript objects.

Everyone already gets that the code below just type our futur variable as a "string" type that should be persistent holding values of that types.

```
const myVar: string
```

Now, some new special words make their entrance to the stage, among these I mostly use:

- Type objects
- Interfaces
- Union or Intersection types
- Generics
- Types definition files

Regarding a Next.js app, bringing Typescript is a breeze, the official doc has a dedicated page on this, just add a .tsconfig.json and start the dev server, then the CLI make all the work behind. A great thing considering how annoying is to have to deal with the webpack conf.

## Concretely

First of all, every react component or page should be using the .tsx extension instead of .js, and all utility files should be using .ts.

Then, I identified several typing patterns I'm now using:

### Component declaration

```ts
// Before
const PageOrComponentName = ({ destructuredProp }) => {}

// After
interface IInterfaceProps {
  destructuredProp: string
}

const PageOrComponentName: React.FC<IInterfaceProps> = ({
  destructuredProp,
}) => {}
```

### Local states

```ts
// Before
const [state, setState] = useState(null)

// After
interface IState {
  myPropsContainer: { prop1: boolean; prop2: string }
}
const [state, setState] = useState<IState | null>(null)
```

### Handler functions

```ts
// Before
const handleChange = (index) => setActiveStep(index)

// After
const handleChange = (index: number): void => setActiveStep(index)
```

Additionnally, we should install specific third-party types to avoid related errors. We proceed to this using:

```bash
npm i @types/<nameOfThePackage>
```

## Feelings

It's not super easy to start using Typescript in an existing project because a lot errors will rise all of a sudden in the terminal.

I would recommend starting a new one instead.

Having to deal with a lot of new errors can be discouraging at first, hopefully, we learn to deal with the most common ones pretty quickly. It's also a good thing to get those, because it spot for us potential sources of error at runtime.

I'm also tempted to use the "any" type to silent errors that I can't figure quickly enough. Sometimes its a convenient exit, but at the end, we are only hidding the dust under the carpet 🤫.

One of the major benefits of Typescript is also to serve us as documentation API: for example, it tells us which parameters are accepted when calling an imported function, so that we don't need to check manually the source file.

## Wrapping-up

I will stick to using Typescript in all my future projects, but maybe not the smaller ones that only deal with simple markup, because it represents a certain amount of boilerplate.

I guess it will take a lot of time to be comfortable with it...

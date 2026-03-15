---
title: 'Giskard Hub: behind the llms evaluation platform'
type: 'article'
description: A platform to help identify failures for teams developing AI agents.
imgCover: 'giskard-hub'
tags: [next, Tailwind, Figma, devs, fastApi, AI]
createdAt: 2026-03-16
---

<!--Illustration of the hub dashboard or maybe a conceptual jurassic park gate with the auth gateway screen-->

This post is about [Giskard Hub saas](https://giskard.ai): the main Giskard product.

## Context

As a designer and contributor on the Giskard hub, (the main Giskard product) for almost a year now, I thought it was a good moment to step back and reflect on what this platform actually is and does. The llm security domain was pretty much unknown territory before I deep dove into it. I took the time to understand
the ins and outs involved, and also why it has been critical to have a threat evaluation layer for any llms/agent pushed in production.

I have been involved in a small and a dedicated team of developers & reseearcher, and my role is to bridge the gap between the vision, the UI, and its implementation.

## A comprehensive overview of what the hub is doing

<!--illustration: 3D iso multi-layer concept composed of different hub screenshot with pointers-->

I think we should start from the very main core value of what Giskard does: Red Teaming applied to llms. Red teaming is a structured, adversarial testing process that uses simulated attacks (prompts) to uncover vulnerabilities, biases, harmful outputs, or unintended behaviors.

LLMs have a large attack surface, and this can lead to some serious exposure such as legal and financial risk, but also service disruption leading to a brand's reputation damage.

Giskard then provides a platform for evaluating, testing, and monitoring LLM-based applications issues (agents, RAG pipelines, chatbots).

Our tagline insists on this one thing: "find vulnerabilities in AI agents before users do".
The Giskard SDK + the Hub provide an infrastructure that address it.

The hub gather 3 main features to adversarialy test an agent:

### The playground

This is a common chatbot interface to check how your model respond directly as the end user would. If something unexpected is noticed in the conversation, you can send the proper conversation to feed a dataset, this entity is part of the evaluation feature.

### The evaluations

This is the quality spectrum: evaluations are set to monitor the agent responses using a tailored dataset (see it as a business script), and assess its responses against some built-in, or tailored evaluation metrics. A dataset is a set of conversations (test cases) paired with those metrics.

The user can build a dataset from multiple way:

- by feeding it directly with a list of problematic conversations and checks (being from the playground of through a file import)
- by providing an internal knowledge base that will go under a synthetic generation of tailored conversations
- by defining a scenario with a personna (user), topics and expected tone

Each generated test case should be configured with their proper evaluations metrics, that will target the response quality.

Once this piece is set, the user run an "evaluation" by picking its dataset and its agent, and get each test cases evaluated against their own checks, giving a global and a per-test case score.

If this is a failure, a quick analysis is provided by metrics and also classify the it into a category. This part is mostly driven by what we call a "LLM-as-a-judge": an internal "Giskard" agent evaluating the quality of outputs from the agent.

<!--illustration/schema for custom checks (list & example)-->

An evaluation config can also be scheduled, this is the catch regression layer. The tool provide trend and comparison metric to monitor how the agent score over time.

### The scan

This is the security spectrum: the scan is meant to identify weaknesses in the agent using common attack patterns.

The user can scan its agent by picking among a set of probes categories, that will be used to target the agent.
Those categories are mapped to the official OWASP standardized critical risks.

A significant amount of probes are then sent to attack the agent using a multi turn approach. Each responses is evaluated before the probe adapts its strategy for the next turn until a failure is found or max turn amount is reach.

As for evaluations, a global score is set, with a breakdown by categories.
The user can investigate every attacks set in details to take measure, and eventually send some relevant conversations to feed a dataset.

It gives an immediate feedback to user of the security level of its core logic.

## The hub stack

Currently, the hub is not a SaaS for individuals, it's B2B on-premise deployed app, or on managed cloud.
Each product instance has a gated access, along team-level defined users.

Here is a quick listing on what the cake is made of:

- Frontend: Next.js, Radix UI, Tailwind, D3
- Backend: Python / FastAPI, PostgreSQL, background job queue
- Infra: Docker Compose, Keycloak auth layer for SSO
- LLM integration: configurable model backends

It's a choice made after a proven stack....

<!--(insufficent justification)-->

## History and evolutions done over the last year

Originaly Giskard released an open source library, before extending its capacity to a fully featured SDK

<!--check SDK if it's worth adding a precision on it: /Users/stephane/Documents/stephane/DEV/giskard/giskard-hub-python-->

that can be paired with the hub, bringing a user friendly UI. When I started, the hub was kind of a bland Shadcn stylized UI, before we gradually customized the UI to align with the [revamped branding](https://www.giskard.ai/knowledge/a-new-look-for-sophia-the-story-behind-giskards-rebranding). The hub has now a distinguable identity with its singular color palette, font, and some turtle inserts here and there 🐢.

- The first significant feature introduced last year was the scan.
- The dashboard has been revamped twice, bringing some relevant monitored metrics
- Then came the collaboration layer with the "Tasks", assignable to users, and acting as an essential project management feature.
- We added the scenario based dataset generation to allow user to craft them from a tailored script
- beyond the hood, a lot improvements has been done for the developer experience, with some APIs enhancements

<!--check what does https://github.com/Giskard-AI/giskard-oss first-->

## Where we are heading at

The product now has a solid base as a specialized red teaming platform, but we still have a lot of work ahead to solve recurrent pain points and bring some game changer features.

Among them:

### Dynamic multi-turn evaluation

Currently, evaluations only support single turn conversations. This limit the possibility to get an accurate assessment based on in-depth conversation with sometimes failures happening on subsequent turns. Our Giskard Checks dependency will be soon integrated in the hub to bring this deep interaction assessement.

<!--recheck what does /Users/stephane/Documents/stephane/DEV/giskard/giskard-checks (but it should be that concise)-->

### API based agent

So far the hub covers conversational AI agents only, so what is evaluated are agents text responses. The goal is to let users evaluate their endpoint returning a flexible schema.

<!--recheck the whole decided architecture to fine tune a bit the content (but it should be that concise) check provided pdf-->

### AI assistant

We are a product evaluating LLMs, we use different internal agents to process operations, but we don't provide users a chatbot yet to assist them into their workflow. We addressed this by releasing an internal POC, currently in QA. The capabilites will encompass dataset, evals, scan creations, auto-annotation, personal diagnostic and recommendations... We plan to deploy it in the hub soon.

<!--recheck the current project, but I think it's not worth going into details: /Users/stephane/Documents/stephane/DEV/giskard/csm-assistant-->

## Others giskard releases (Guardrails, OSS, Phare)

The Hub doesn't exist in isolation — it's part of a broader ecosystem for responsible AI, aligned with the reseach philosophy behind the company's core value.

### OSS (open-source library)

This is the root of Giskard, a [Python SDK](https://github.com/Giskard-AI/giskard-oss) for testing ML models, widely used in the community.

### Guardrails

The company main's focus stay Red Teaming but extended more recently to a Blue Teaming product called Guardrails, acting like a security layer at runtime for LLMs in production. It is currently in beta. Here is a [short post](https://www.giskard.ai/knowledge/real-time-guardrails-vs-batch-llm-evaluations) on how it complements evaluations.

### Phare

Giskard also provide the recognized [Phare benchmark](https://phare.giskard.ai/) evaluating LLM against safety and security dimensions with up-to-date in-detph analysis. It's our version of [SWE-bench](https://www.swebench.com/) tailored to our specialized domain.

## Wrapping-up

I hope thie overview of the Giskard Hub has been meaningful to grasp the big picture, and what we are cooking up to keep the product as most relevant in this fast-paced industry.

<!--this sounds poorly written to me, I didn't know how to finish-->

//////

Review note:

- fix all spelling mistake
- only rephrase too awkward sentences, keep my unpolished style
- propose some missing parts (explicitly indicated via comments)
- add emojis from time to time to enhance the readability
- provide general advice and things I may have missed

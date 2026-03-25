---
title: 'Giskard Hub: behind the LLMs evaluation platform'
type: 'article'
description: A platform to help identify failures for teams developing AI agents.
imgCover: 'the-giskard-hub'
tags: [next, Tailwind, Figma, devs, fastApi, AI]
createdAt: 2026-03-16
---

This post is about [Giskard Hub](https://giskard.ai): the main Giskard product.

## Context

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-screens.jpg" alt="Giskard Hub - screens">

As a designer and contributor on the [Giskard hub](https://www.giskard.ai/) (the main Giskard product) for almost a year now, I thought it was a good moment to step back and reflect on what this platform actually is and does. The LLM security domain was pretty much unknown territory before I dove into it. I took the time to understand
the ins and outs involved, and also why it has been critical to have a threat evaluation layer for any LLMs/agent pushed in production.

I have been involved in a small, dedicated team of developers & researchers, and my role is to bridge the gap between the vision, the UI, and its implementation.

## A comprehensive overview of what the hub is doing

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-red-teaming.jpg" alt="Giskard Hub - screens">

I think we should start from the very main core value of what Giskard does: Red Teaming applied to LLMs. Red Teaming is a structured, adversarial testing process that uses simulated attacks (prompts) to uncover vulnerabilities, biases, harmful outputs, or unintended behaviors.

Agents have a large attack surface, and this can lead to some serious exposure such as legal and financial risk, but also service disruption leading to a brand's reputation damage.

Giskard then provides a platform for evaluating, testing, and monitoring LLM-based applications (agents, RAG pipelines, chatbots).

Check a Giskard webinar presenting this concept in detail:

<div class="vimeo-embed-wrapper" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:2rem 0"><iframe src="https://www.youtube.com/embed/qR-j6y4m1ZE?si=oeRfaxFy4xi5ICWG" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

### Who is it for?

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-audience.jpg" alt="Giskard Hub - screens">

Currently the target audience is AI engineers, ML and security teams willing to secure their enterprise chatbot. Giskard partners with brands in the following domains: finance, insurance, automotive, retail, healthcare, and tech.

- **Technical profiles** (AI engineers, ML and security teams) want a structured way to know whether their agent actually works as expected, and to have something to look at when things go wrong.
- **Non technical profiles (project managers, business owners)** want to make sure their chatbots their team is releasing won't break up or misbehave in production, upset customers and possibly damage their brand reputation.

Our tagline insists on this one thing: "find vulnerabilities in AI agents before users do".
The Giskard SDK + the Hub provide an infrastructure that addresses it.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-architecture-business.jpg" alt="Giskard Hub - business architecture">

The hub gathers 3 main features to adversarially test an agent:

### The playground

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-screen-playground-2.jpg" alt="Giskard Hub - playground">

This is a simple chatbot interface to check how your agent responds directly as the end user would. While basic, it has an important role: it lets you discover unexpected behaviors, and capture these conversations to feed a "golden" dataset. The datasets are then used by the evaluations.

### The evaluations

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-screen-evaluation-2.jpg" alt="Giskard Hub - evaluation">

This is the quality spectrum: evaluations are set to monitor the agent responses using a golden evaluation dataset (see it as a business script), and assess its responses against some built-in or tailored evaluation metrics. A dataset is a set of conversations (test cases) paired with those metrics.

The user can build a dataset in multiple ways:

- by importing it directly from a list of problematic conversations and checks (whether from the playground or through a file import)
- by providing an internal knowledge base that will go under a synthetic generation of tailored conversations
- by defining a scenario with a persona (user), topics and expected tone

The knowledge base approach is usually the privilegied path: by feeding the agent's own documentation (RAG), the synthetic generation produces relevant domain-specific test cases leading to a higher quality evaluation dataset.

Each generated test case should be configured with their own evaluation metrics, that will target the response quality.

Once that piece is set, the user runs an "evaluation" by picking its dataset and its agent, and gets each test case evaluated against their own checks, giving a global and a per-test case score.

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-screeen-evaluation-result" alt="Giskard Hub - evaluation result">

If this is a failure, a quick analysis is provided by metrics and also classifies it into a category. This part is mostly driven by what we call a "LLM-as-a-judge": an internal "Giskard" agent evaluating the quality of outputs from the evaluated agent. They represent an essential piece of the automated annotations in the hub. Here is a relevant [post](https://www.giskard.ai/knowledge/how-to-implement-llm-as-a-judge-to-test-ai-agents-part-1) digging this topic.

An evaluation config can also be scheduled, this is the catch regression layer. The tool provides trend and comparison metric to monitor how the agent scores over time.

### The scan

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-screen-scan-2.jpg" alt="Giskard Hub - scan">

This is the security spectrum: the scan is meant to identify weaknesses in the agent using common attack patterns.

The user can scan its agent by picking from a set of probe categories, that will be used to target the agent.
Those categories are mapped to the official OWASP standardized critical risks.

A large amount of "security" probes are then sent to attack the agent using a multi turn approach. Each response is evaluated before the probe adapts its strategy for the next turn until a failure is found or the max turn count is reached.

As for evaluations, a global score is set, with a breakdown by categories.
The user can investigate every attack set in details to take action, and eventually send some relevant conversations to feed a dataset.

It gives users immediate feedback on the agent's security posture. Check a quick overview:

<div class="vimeo-embed-wrapper" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:2rem 0"><iframe src="https://player.vimeo.com/video/1165952849?h=1deeb78d14" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>

## The hub stack

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-architecture   " alt="Giskard Hub - stack">

Currently, the hub is not a SaaS for individuals, it's a B2B on-premise deployed app, or on managed cloud.
Each product instance has a gated access, along team-level defined users.

Here is a quick listing on what the cake is made of:

- Frontend: Next.js, Radix UI, Tailwind, D3
- Backend: Python / FastAPI, PostgreSQL, background job queue
- Infra: Docker Compose, Keycloak auth layer for SSO
- LLM integration: configurable model backends

It reflects pragmatic enterprise choices: Next.js and FastAPI for velocity, PostgreSQL with pgvector for semantic search over evaluation results, and Keycloak for the SSO requirements that come with enterprise deployments.

## History and evolutions done over the last year

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-evolutions" alt="Giskard Hub - evolutions">

Originally Giskard released an [open source library](https://github.com/Giskard-AI/giskard-oss), before extending its capacity to a fully featured SDK. This latter provides access to the Hub API, allowing users to drive hub operations from their terminal. When I started, the hub was kind of a bland Shadcn stylized UI, before we gradually customized the UI to align with the [revamped branding](https://www.giskard.ai/knowledge/a-new-look-for-sophia-the-story-behind-giskards-rebranding).

There are basically 2 kinds of improvements:

- UX/UI improvements over existing features: addressing customers' pain points or we simply figured out ourselves that the UI was not intuitive enough
- New features: those are opportunities to craft a tailored UI following our benchmarking and tested prototypes.

The process involves Linear Cards to establish some specs, and (most of the time) Figma screens to validate the intention before jumping into the implementation itself.

The hub has now a distinguishable identity with its singular color palette, font, and some turtle inserts here and there 🐢.

- The first significant feature introduced last year was the scan
- The dashboard has been revamped twice, surfacing more relevant monitored metrics
- Then came the collaboration layer with the "Tasks", assignable to users, and acting as a lightweight project management feature
- We added the scenario based dataset generation to allow users to craft them from a tailored script
- Under the hood, a lot of improvements have been made for the developer experience, with some APIs enhancements

Read more on the [Giskard rebranding](https://www.giskard.ai/knowledge/a-new-look-for-sophia-the-story-behind-giskards-rebranding).

## Where we are heading

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-heading" alt="Giskard Hub - heading">

The product now has a solid base as a specialized red teaming platform, but we still have a lot of work ahead to solve recurrent pain points and bring some game changer features.

Among them:

### Dynamic multi-turn evaluation

Currently, evaluations only support single turn conversations (note that the scan already uses a dynamic multi-turn approach for security probes). This limits the possibility to get an accurate assessment based on in-depth conversation where failures can happen on subsequent turns. Our Giskard Checks module will be soon integrated in the hub to bring this deep interaction assessment.

### API based agent

So far the hub covers conversational AI agents only, so what is evaluated are agents text responses. The goal is to let users evaluate their endpoint returning structured, non-conversational schemas.

### AI assistant

We are a product evaluating LLMs, we use different internal agents to process operations, but we don't provide users a chatbot yet to assist them into their workflow. We addressed this by releasing an internal POC, currently in QA. The capabilities will encompass dataset, evals, scan creations, auto-annotation, personal diagnostic and recommendations... We plan to deploy it in the hub soon.

## Other Giskard products (Guardrails, OSS, Phare)

<img src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1757161657/lansolo.dev/posts/the-giskard-hub-products" alt="Giskard Hub - products">

The Hub doesn't exist in isolation — it's part of a broader ecosystem for responsible AI, aligned with the research philosophy behind the company's core value.

### OSS (open-source library)

This is the root of Giskard, a [Python SDK](https://github.com/Giskard-AI/giskard-oss) for testing ML models, widely used in the community.

### Guardrails

The company's main focus remains Red Teaming but extended more recently to a Blue Teaming product called Guardrails, acting like a security layer at runtime for LLMs in production. It is currently in beta. Here is a [short post](https://www.giskard.ai/knowledge/real-time-guardrails-vs-batch-llm-evaluations) on how it complements evaluations.

### Phare

Giskard also provides the recognized [Phare benchmark](https://phare.giskard.ai/) evaluating LLM against safety and security dimensions with up-to-date in-depth analysis. It's our version of [SWE-bench](https://www.swebench.com/) tailored to our specialized domain.

## Wrapping-up

That's the big picture of Giskard Hub 🌌, what it does, how it's built, and where it's going. The pace of the LLM industry makes this kind of platform both genuinely useful and genuinely hard to build. The real challenge is to constantly adapt the hub capabilities to address the right security problems emerging in this landscape that reinvents itself every few months.

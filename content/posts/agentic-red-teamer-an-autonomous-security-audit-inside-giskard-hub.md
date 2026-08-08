---
title: 'Agentic Red Teamer: an autonomous security audit inside the Hub'
type: 'article'
description: Journey of designing our new Agentic Red Teamer feature.
imgCover: 'red-teamer-building-a-button-based-ai-chatbot-game'
tags: [figma, next, Tailwind, devs, cinema 4D, AI, Blender]
createdAt: 2026-08-10
---

This post is about A.R.T (Agentic Red Teamer), the latest feature we've been building at Giskard. Currently in early alpha.

## Context

The Hub has always been about finding vulnerabilities in AI agents before users do. So far, that happened through two paths: evaluations (quality assessment from datasets) and the scan (security assessment sent to the agent).

The scan is fast and standardized, but it works from a fixed catalog.

A.R.T doesn't work that way. It studies the target first, tries something, gets refused, changes tactics, and keeps pushing until something is eventually found. It's a full audit assessment that outputs an exhaustive report in a matter of hours.

## One cycle

We worked as a team on this feature with one objective: build a better red teamer than our competitors, starting with a fully working POC.

The work was then split into four initiatives running in parallel:

- integrating external scanners (Garak, Promptfoo, plus Lidar)
- turning an internal red teaming copilot into something autonomous
- sandboxing it so it could run unsupervised for hours
- and the Hub integration, which I focused on

The ambition was set at the top of the brief, and the scope was then widened over time during its implementation.

## How it works

User has to define an agent to target. A.R.T then:

- investigates the system
- builds its own attack plan
- runs the attacks
- validates which ones truly succeeded

And returns two artifacts:

- a security report: a plain-language global assessment, a prioritized list of findings, and how to fix each one
- an evaluation result, uploaded straight into the Hub: every attack that succeeded, kept as the conversation that produced it, each one paired with the check that judged it a failure

<!--pdf report image-->

The report is the readable one: short enough to hand to a business stakeholder and to be exploitable by the dev team behind the agent. The evaluation result stays in the Hub, for anyone who needs to read the attacks themselves rather than the summary.

## The architecture

I wasn't involved in engineering this part, so I'll keep it at the level I'm comfortable with, but the diagram is worth showing, a typical orchestration flow that should be self-explanatory enough.

<!--diagram image-->

Rather than one model improvising attacks, the work is split into distinct stages: understanding the target, modeling threats against it, generating and running attacks, then judging what actually constitutes a failure. Each stage feeds the next. That separation is what lets the system stay persistent.

## How it compares

The R&D team benchmarked it properly: a fictional banking assistant seeded with 17 known vulnerabilities, then four tools pointed at it: Garak, Promptfoo, Claude Code (Opus 4.8 max effort), and A.R.T.

A.R.T surfaced 10 of the 17. Claude Code found 7, Garak 2, Promptfoo 1.

However, 6 vulnerabilities escaped every single tool, including ours. They're mostly safety issues rather than security ones (hallucinated guidance, sycophancy, out-of-scope advice).

Full benchmark here: [Automated AI Red Teaming: ART vs Claude Code, Garak & Promptfoo](https://www.giskard.ai/knowledge/automated-ai-red-teaming-benchmark).

## Hub integration

My role was the Hub integration (not the red teaming engine itself) where it becomes a product feature.

The brief started modestly on this side: just an aggregated list of downloadable PDF reports. It drifted, in the right direction. A downloadable document is the final artifact, but the user has to open it to see the details, thus the need for a detailed view.

<!--audits list image-->
<!--audit detail page intro + findings image-->

We finally went with a concise but to the point audit detail view resolving top-down: the key metrics first, with a global assessment below it giving an answer for anyone who needs a position on whether this agent can ship. Underneath, the findings as a table: what was found, and the associated remediations someone can work through.

Findings and remediations stay two separate tables, joined by ID: a finding can need several fixes, and duplicating recommendations across rows would have been unreadable. Expanding a finding gives its severity, OWASP mapping and what the agent did; clicking a linked remediation swaps the table and highlights it.

<!--audit detail page remediations image-->

Everything here stays concise, the full detail being in the report.

It also keeps the two artifacts distinct: the report is what you hand out, the evaluation result is where you read the attacks conversation by conversation.

## Wrapping-up

A.R.T extends the Hub with what I see as a relevant and complementary feature beside our scan.

It's still alpha, but I'm glad the first version offers a clear readable verdict, while still allowing for deep exploration of the findings in the report.

<!--whole animation here?-->

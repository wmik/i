---
title: "AI slop isn't a model problem. It's a briefing problem 🧠📋"
tags: ["ai", "llm", "context-engineering"]
date: "2026-09-28"
draft: false
path: "/blog/ai-slop-context"
---

Most "AI slop" isn't the model failing. It's the model doing exactly what you'd expect from someone handed a vague task with no context.
<!-- end -->
An LLM is a very fast, very eager new hire who never asks clarifying questions. It fills the gaps in your instructions with whatever is statistically plausible. Plausible isn't the same as right and it's often not what you meant.

So the useful question isn't "how do I get a better model?" It's "what did I actually tell it?"

## Slop isn't one thing

"Slop" gets used for two very different failures.

The first is real breakage where hallucinated facts, invented citations, code that doesn't run demonstrates a capability and verification problem.

The second is subtler and far more common because the output is fluent, well-formatted but confidently wrong *for you* since it answered the question you typed and not the one you had in mind. It reads fine, so nobody catches it.

The second kind is where most of the cost is and it's mostly self-inflicted so calling it "slop" isn't quite fair to the model. It often did a competent job but on an underspecified task.

## The new-hire test

Imagine giving a smart, capable person this instruction: 

> "Write something for our customers about the new feature."

They'd probably come back with questions like; Who exactly? What's the goal: signups, retention, an apology? What tone? What's off limits? How long? What does "done" look like?

A human colleague is able to surface those gaps by simply asking but a model usually doesn't. It just starts writing.

Every employee, however talented, needs the same things to do good work:

- **The goal:** what outcome this serves, not only what task to perform
- **The audience:** who receives it and what they already know
- **Constraints:** what to avoid, budget, tone, brand rules
- **A definition of done:** what would success look like
- **Examples:** what good and bad look like

If you leave those out of a brief for a person then you get mediocre work and similarly if you leave them out of a prompt then you get slop. The failure is identical and the only difference is the speed at which it's delievered.

## Why prompt tricks plateau

Much of the early conversation around AI focused on wording: magic phrases, personas, formatting hacks and there's real signal in it. Research on prompt formatting found that several open-source models were extremely sensitive to subtle formatting changes, with accuracy differences of up to 76 points in few-shot settings. Notably, that sensitivity persisted even with bigger models, more examples and instruction tuning so even though newer models are more forgiving; wording still matters.

Still, wording is the smallest lever and rephrasing a vague goal gives you a differently worded vague result.

The industry seems to agree because Anthropic's engineering team describes context engineering as the natural progression of prompt engineering where it's less about "finding the right words" and more about asking "what configuration of context" is most likely to produce the behavior you want. Context here means everything the model sees from instructions, examples, retrieved documents, history, tool definitions and beyond.

It also isn't a case of "more is better". Research on long inputs found that models perform best when relevant information sits at the start or end and degrade significantly when it's buried in the middle, even for models built for long contexts so dumping your whole knowledge base into the window isn't context. It's noise with a bigger budget.

Overall good context is curated with the right information, in the right place, at the right time.

## What this looked like in the real world

At Continuum Ads, we generate ad content for marketing campaigns and earlier outputs had a pattern. They were fluent and grammatical but often slightly off e.g. not quite on-brand, weak on relevance to the audience, tone that drifted or a call to action that was missing or buried.

Nothing in that output would trip a spellchecker or a hallucination filter and that's what made this kind of slop expensive since it passes a skim.

The fix wasn't a cleverer or differently worded prompt but rather defining "good" in a form the system could check.

We did this by defining:

- **A gold set:** a collection of pre-approved examples that captured what "on-brand, relevant, clear CTA" meant in practice for different contexts, industries & brands
- **An evaluation harness:** an agent that scored every single output against that gold set on relevance, tone, call to action and other relevant metrics
- **A feedback loop:** an agent that fed back scores into the model so it improved over time instead of repeating the same misses and issues
- **Human-in-the-loop:** an actual person that reviewed content the harness flagged before it shipped

The result was a drop in the number of campaigns that needed manual review from every single campaign to about 1 in every 5 campaigns, an 80% improvement and overall more trust in the system gained from users.

The pattern behind it is the new-hire test again since we stopped hoping the model would guess what good meant and instead wrote it down, measured against it and kept a human in the loop for the cases the system wasn't sure.

## Setting things up so you get less slop

You don't need a big platform for this and the habits scale down to a single person using a chat window:

1. **Write the brief before the prompt.** Goal, audience, constraints, definition of done, one good example. If you can't state the goal in a sentence, the model can't either.
2. **Define "good" before you generate.** A checklist, a rubric or a handful of gold examples. If you can't tell good from bad, you can't tell whether the tool is working.
3. **Curate context, don't dump it.** Give it what's relevant to this task and put the critical instructions first or last.
4. **Match oversight to stakes.** Low-risk drafts can ship fast so anything customer-facing or irreversible gets a human checkpoint.
5. **Close the loop.** When output misses, capture why and fix the brief, the examples or the rubric otherwise you'll fix the same problem forever.
6. **Assign ownership.** Someone owns the output that ships, whoever or whatever drafted it.

## What slop actually costs

The cost is mostly invisible because it lands as review time, rework and trust instead of a line item.

A BetterUp Labs and Stanford Social Media Lab survey coined the term "workslop" for polished but hollow AI output that passes work downstream. Of the workers surveyed, respondents estimated 15.4% of the content they receive fits that description and spent nearly two hours per incident dealing with it. The researchers estimated that it added up to about $186 per employee per month, or over $9 million a year for a 10,000 person company. That's a self reported survey and a modeled estimate, so treat the exact figure as directional. The pattern is what matters.

There's a relationship cost too since about half of employees who received workslop saw the sender as less creative, capable and reliable and 42% trusted them less concluding that "slop" hurts your output as well as your reputation.

At the organizational level, the researchers pointed to indiscriminate AI mandates and too little guidance on quality standards as a likely contributor.

MIT's Project NANDA report on enterprise GenAI reached a similar conclusion from a different angle. Its headline was that just 5% of integrated pilots were extracting millions in value while most showed no measurable P&L impact. The lead author framed the core issue as not model quality but a "learning gap" between tools and organizations. The report also found that most GenAI systems don't retain feedback, adapt to context, or improve over time. That report has been debated on methodology but the diagnosis is consistent with everything above.

METR also ran a randomized trial with experienced open-source developers working on their own repositories. They took 19% longer with AI tools, yet had expected a 24% speedup and afterward still believed they'd been about 20% faster. Although, it was a small study (16 developers, 246 tasks) on early 2025 tools, in a setting where developers knew their codebases deeply so it doesn't really prove that AI slows everyone down but shows that our *feeling* of productivity is a poor measurement, which is one more reason to define and measure "good".

## Where that leaves things

There's no real answer or concrete formula yet but a few approaches that could be adopted are:

**"Use AI everywhere" is not a strategy.** A mandate without quality standards produces volume and volume without standards produces slop. Eventually, the cost gets pushed onto whoever reviews it.

**Magic-phrase prompt libraries are folk remedies.** Some help but none can replace knowing what you want and saying it clearly.

**Demos are not evidence.** A demo shows the best case on a friendly input so ask how it's evaluated, what happens when it's wrong and who checks.

None of this means the models don't matter since they improve fast and better models will brush off some bad briefs but the fundamentals are: clear goals, defined success, feedback, accountability. 

Anyone who has managed people will recognize them so before you blame the model for slop, give the same task to a smart new colleague with the same information and if they'd come back confused, the problem was probably the brief.

---

### References

1. Liu et al., "Lost in the Middle: How Language Models Use Long Contexts," *TACL* (2024), arXiv:2307.03172
2. Sclar, Choi, Tsvetkov, Suhr, "Quantifying Language Models' Sensitivity to Spurious Features in Prompt Design," ICLR 2024, arXiv:2310.11324
3. Anthropic Engineering, "Effective context engineering for AI agents," anthropic.com/engineering/effective-context-engineering-for-ai-agents
4. BetterUp Labs and Stanford Social Media Lab, workslop research (Sept. 2025), betterup.com/blog/hidden-costs-workslop; summary in *Harvard Business Review*, "AI-Generated 'Workslop' Is Destroying Productivity"
5. The Decoder, coverage of the BetterUp/Stanford workslop study (2025)
6. MIT Project NANDA, "The GenAI Divide: State of AI in Business 2025" (July 2025); Fortune coverage (18 Aug. 2025)
7. METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity" (July 2025)

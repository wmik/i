---
title: "AI vs Human writing 🤖✍️👤"
tags: ["ai", "llm"]
date: "2026-09-06"
draft: false
path: "/blog/ai-text-detection"
---

How can you reliably tell whether text is AI-generated? You can't...
<!-- end -->
In the fall of 2023, a nursing student at Central Methodist University found herself defending her own writing after it was flagged as AI-generated but her explanation was that her writing style was shaped by being on the autism spectrum.

Around the same time, at the University of Houston-Downtown, a computer science major named Leigh Burrell had to assemble a 15-page document of timestamped Google Docs revision history just to prove she'd written her own paper.

By 2026, an Adelphi University student had taken his school to court over an AI-cheating accusation and won. Most recently, a family in Palo Alto is currently suing a school district in federal court over the same issue.

What’s common among all of them?

None of these students used AI but all of them were caught in a system that claims you can reliably tell whether a human or a machine wrote something. 

You mostly can't.

## How detection is supposed to work

Most AI text detectors lean on two core statistical signals: perplexity & burstiness.

**Perplexity** measures how predictable word choices are. LLMs tend to repeatedly choose the statistically likely next word but human writing is inherently messier and unpredictable.

**Burstiness** analyzes variations in sentence length and structure i.e. rhythm. Again, LLMs tend to be consistent but humans often mix short punchy sentences with longer winding ones.

Detectors usually combine these signals with machine-learning classifiers trained on labeled examples of human vs AI text and sometimes layer in embedding-based similarity checks or cryptographic watermarking(e.g. How many “i” are generated after a certain number of “e”) that bias a model toward certain token choices so its output can later be statistically identified which overall lowers the quality of output.

Some studies found that tools like GLTR, which visualize where a text's word choices fall in a model's probability distribution, slightly improved human detection accuracy from around 54% to 72% when readers were trained to use it.

But that's the theory part and in practice, every one of these signals degrades poorly under real world conditions.

## Why the whole approach is shakier than it looks

It's circular, not linear. 

The uncomfortable irony at the center of AI detection is that most detectors are themselves language models trained on human writing. A detector essentially asks, "does this look like something I would have generated?".

A 2023 paper by Sadasivan et al. proved that as LLMs get better at emulating human writing, the accuracy drops and for advanced models only perform slightly better than random guessing. The same paper also showed that a simple paraphrasing pass could break watermarking schemes, neural classifiers, and retrieval-based detectors.

So as models are trained on more human text and other models' output too, the two distributions, machine-written vs human-written, keep drifting closer together rather than staying cleanly separated.

Overall, “good writing” is difficult to quantify since perplexity and burstiness are proxies for statistical predictability rather than for quality, voice, or authenticity.

A well edited human essay can score as "low perplexity" because it's clear and well-structured; meanwhile, formal, academic, or legal writing is often naturally low-perplexity regardless of who wrote it which shows detectors are measuring conformity to statistical norms as “human” but what they're actually catching is sometimes just competent, conventional prose.

A Stanford study tested seven AI detectors on TOEFL essays written by non-native English speakers and found an average false-positive rate of 61.3%. More than half of genuine human essays were flagged as AI-written and on nearly 20% of essays, every single detector agreed unanimously and wrongly, that a human essay was AI-generated.

This effectively shows that the bias is not evenly distributed since most non-native writers often use more standard syntax and more common vocabulary which reads to a model as "predictable".

## Humans can't spot it either — but they can feel it

If the machines are unreliable, surely people can do better? Not really.

One experiment found an overall human accuracy of 48.8%. Even trained annotators familiar with the models didn't do better in most of these studies and yet, anyone who spends time online today has probably had the experience of reading a paragraph and thinking, confidently, “that's AI”. That instinct isn't detecting a hidden statistical signature but pattern matching on style.

ChatGPT leans on a specific vocabulary like "delve," "tapestry," "realm," "underscore," "pivotal," "meticulous," "navigate the landscape of" which are words that became more common after its release, especially in academic writing.

Claude has a tendency toward hedged, structured, almost therapeutic phrasing, heavy use of "I want to be direct," aka “claudish” qualifying caveats, and a fondness for em dashes and tricolon lists. Gemini and other models have their own recognizable tics too but none of these are universal markers of AI text but brand specific style choices baked in by each company's fine-tuning and RLHF process.

So what people are actually detecting, when they say something "reads like AI," is often closer to recognizing a celebrity's voice rather than performing statistical analysis and it's exactly the kind of pattern matching that degrades the moment someone runs the same text through a paraphraser or a "humanizer" tool.

There's a genuinely interesting theory about where some of this came from: OpenAI has relied heavily on human reviewers in Nigeria and Kenya to rate model outputs during reinforcement learning from human feedback. "Delve" is common in Nigerian formal and professional English in a way it isn't in American or British English and researchers have found some evidence that RLHF may have amplified that regional style into a global default, even as English speakers elsewhere started reading it as "robotic”.

> It’s poetic in a way: AI systems absorbing the linguistic fingerprints of the low-paid global workforce that helped train it and having that same fingerprint mistaken by everyone else as a machine’s.

## The industry that's grown up around all this

None of this uncertainty has slowed the money. GPTZero, launched in January 2023 by a Princeton undergraduate, grew to more than 19 million users and roughly $30 million in annual recurring revenue before being acquired by Superhuman in 2026 for a reported $88 million valuation.

Turnitin, an industry standard in academic plagiarism checking with over 16,000 institutional customers, rolled AI detection into its existing product suite and claims accuracy above 97% with a false-positive rate under 1%, a figure that has been heavily scrutinized independently and for good reason because a 97% success rate can be surprisingly bad if the base rate is low, as illustrated by the classic Bayes’ theorem example. If 10% of essays in a class are AI-written, and your detector is 90% accurate, then only half of the essays it flags will be truly AI-written so if an AI detection tool thinks a piece of writing is AI, you should treat that as “kind of suspicious” instead of conclusive proof.

On the other side of the same arms race sits a smaller but fast-growing industry of "humanizer" tools such as StealthGPT, Undetectable.ai, WriteHuman, and others explicitly built to help AI-generated text slip past the detectors and often marketed directly to students and content marketers. Vendors on both sides sell certainty but independent benchmarking research generally finds detector accuracy dropping sharply against paraphrased or "humanized" text.

The responsibility question is where this gets genuinely uncomfortable. Turnitin's own disclaimer says its AI score "should not be used as the sole basis for adverse actions against a student" but that gets overlooked due to institutional pressure to act on a number. 

Australian Catholic University logged nearly 6,000 academic misconduct cases in 2024 with about 90% involving AI flags, before eventually abandoning the tool after finding around a quarter of referrals were dismissed on investigation. Multiple students are now suing schools over false accusations, some seeking well over a million dollars in damages.

The pattern across nearly all of these cases is the same: a probabilistic score, produced by a system its own maker won't fully vouch for but gets aggressively marketed to and treated by an overworked institution as a verdict.

## Where that leaves things

There's no clean resolution here, and it's worth avoiding the conclusion "that nothing matters”.

Plenty of institutions do have a real problem with unattributed AI use but the specific promise these tools are selling, a reliable, automatable answer to "did a human write this?", is inaccurate based on the statistics and the lawsuits.

The tools are measuring statistical predictability and calling it authorship meanwhile humans are bad at the literal task but unexpectedly good at noticing a company's writing style once they've seen enough of it.

So until that gap reduces the safest assumption is that any single AI-detection score on its own is closer to a guess than a fact. Treating it as anything more than a prompt for a human conversation is where the actual harm tends to start.

---

### References

1. OpenDataScience, "AI Detectors Wrongly Accuse Students of Cheating, Sparking Controversy" (Oct. 2024)
2. GetCoAI, "False AI cheating allegations are creating a new kind of academic injustice"
3. PlagiarismToday, "Adelphi Student Wins AI Plagiarism Lawsuit" (Feb. 2026)
4. Almanac News, "Parent sues Palo Alto school district over artificial intelligence procedures" (May 2026)
5. Scribbr / OpenDataScience explainers on perplexity and burstiness in AI detection
6. Kirchenbauer et al., soft watermarking scheme for LLM output (cited in Sadasivan et al., 2023)
7. Gehrmann et al., "GLTR: Statistical Detection and Visualization of Generated Text" (cited via GPT-Sentinel survey, arXiv:2305.07969)
8. General framing repeated across detector-methodology writeups (e.g., dageno.ai, "How AI Content Detectors Work")
9. Sadasivan, Kumar, Balasubramanian, Wang, Feizi, "Can AI-Generated Text be Reliably Detected?" arXiv:2303.11156
10. TechCrunch / The Register / Ars Technica coverage of OpenAI's July 2023 AI Classifier shutdown
11. Liang et al., "GPT detectors are biased against non-native English writers," Patterns (2023); coverage via The Markup and Tech & Learning
12. Liu et al. (2024), Sarvazyan et al. (2023), Li et al. (2024), Uchendu et al. (2021) — summarized in "Detecting AI-Generated Text: Factors Influencing Detectability," arXiv:2406.15583
13. "On the Detectability of ChatGPT Content," arXiv:2306.05524 (user study on academic abstracts)
14. The Conversation, "ChatGPT is changing the way we write. Here's how – and why it's a problem" (2026)
15. Willison / Hern reporting on RLHF and Nigerian English; Ryan et al., "Why Does ChatGPT 'Delve' So Much?" arXiv:2412.11385
16. Originality.AI and Sacra profiles of GPTZero's growth, revenue, and 2026 acquisition by Superhuman
17. MarketsandMarkets AI Detector Market report; Sacra Turnitin profile
18. MarketsandMarkets, "AI Detector Market" sizing report
19. Reviews of StealthGPT, Undetectable.ai, WriteHuman, and related "AI humanizer" products
20. EyeSift, "AI Detection Tools Compared" — independent benchmarking of detector accuracy against paraphrased text
21. MarketsandMarkets AI Detector Market report, citing Turnitin's own usage guidance
22. WDEF/AP, "University Wrongly Accused Students Of AI Cheating Using Flawed AI Detection Software"
23. PlagiarismToday coverage of Adelphi University and University of Minnesota AI-accusation lawsuits

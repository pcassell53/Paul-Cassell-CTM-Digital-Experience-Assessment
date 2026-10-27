# CTM Digital Experience Assessment

**Responsive home services landing page · Build + Optimize a CTM Landing Experience**

This project is a front-end landing-page prototype for CTM's home services paid campaign. It uses CTM's supplied marketing content, brand assets, and interactive product demo.

- **Live landing page (after GitHub Pages is enabled):** https://pcassell53.github.io/Paul-Cassell-CTM-Digital-Experience-Assessment/
- **Source code:** https://github.com/pcassell53/Paul-Cassell-CTM-Digital-Experience-Assessment
- **Part 2 written response:** [Optimization Plan (Markdown)](optimization-plan.md) · [Optimization Plan (Word)](docs/CTM_Optimization_Plan_Paul_Cassell.docx)

## Goals

- **Primary conversion:** Request a Demo
- **Secondary action:** Explore Interactive Demo
- **Audience:** Marketing, business, and operations leaders at growing home services companies

## What's included

The responsive page includes the supplied value proposition, three benefit areas, the 89% follow-up statistic and its Dynata attribution, an actual CTM call activity screenshot, a separate Storylane interactive demo section, and a five-field demo request placeholder.

The accompanying optimization plan explains what I would investigate if paid traffic were healthy but demo requests were lower than expected, plus a UX/CRO hypothesis, three tests, and technical validation checks.

## Implementation

Built with HTML, CSS, JavaScript, Bootstrap 5, and Font Awesome. The design follows CTM's supplied color palette, logos, and Albert Sans typography. The page uses responsive layouts, semantic sections, labeled fields, keyboard focus styles, descriptive image text, and accessible reduced-motion behavior for the animated statistic.

**The form is a prototype.** It performs front-end validation and displays a confirmation message, but it does not send or store leads. The Storylane demo loads on demand and includes an external link for visitors whose devices cannot display the embedded experience.

The published exercise uses `noindex, nofollow` because it is not an official CTM campaign page. Search indexing and canonical settings would need review before production launch.

## Project structure

```text
index.html
css/styles.css
js/main.js
assets/logos/
assets/images/
components/
optimization-plan.md
docs/CTM_Optimization_Plan_Paul_Cassell.docx
README.md
```

## Run locally

Open `index.html` in a browser. The CDN-hosted styles, font, icon library, and Storylane demo require an internet connection. There is no build step or backend.

## Assessment materials

Marketing claims, the 89% survey statistic, and campaign objectives come from CTM's supplied 2026 Digital Experience Assessment. The product screenshot comes from the supplied demo, and brand assets remain CTM's property. This is an assessment prototype rather than an official live CTM marketing campaign.

# CTM Digital Experience Assessment — Part 2: Optimization Plan

**Scenario:** The home services landing page has been live for 30 days. Paid traffic is healthy, but demo requests are lower than expected.

## 1. What I would review first

- **Make sure the numbers are accurate.** Confirm that visits from paid ads, Request a Demo clicks, form starts, form errors, and completed submissions are being recorded correctly. Separate real leads from test submissions or spam.
- **Look at who is visiting.** Compare results by ad campaign and by desktop versus mobile. I'd also check whether the message in each ad matches what visitors see when they land on the page.
- **Find where people are leaving.** Are visitors leaving before reaching the form, starting it but not finishing, or choosing the interactive demo instead? Form errors and mobile usability problems could help explain the drop-off.
- **Check the quality of the leads.** The goal isn't just more form submissions. I'd want to know how many requests are from businesses that are a good fit for CTM.

**Main measure of success:** Qualified demo requests compared with the number of paid visitors. I'd also watch form completion rate and cost per qualified request.

## 2. My UX/CRO hypothesis

Visitors may understand the headline but want more confidence in how CTM would help their business before completing a five-field form. That hesitation may be greater on mobile. I would check the data before assuming this is the problem.

## 3. Tests I would prioritize

1. **A/B test the form location.** Compare the current form in the hero with the same form placed just after a brief benefits section. Keep the fields the same so we're mainly testing placement. Measure completed, qualified demo requests, not just button clicks.
2. **Test the message at the top of the page.** If people aren't engaging with the page, try a headline that focuses more directly on a home services outcome while staying consistent with the ad and CTM's supplied messaging.
3. **Add reassurance near the form.** Test bringing the provided 89% follow-up statistic, with its source, or a clear invitation to explore the product closer to the demo form. See whether it helps visitors take the next step.

I'd choose which test to run first based on the drop-off data and avoid changing several major elements at once.

## 4. Technical checks

I'd review mobile loading speed, layout shifts, and responsiveness; keyboard access and form error messages; and whether the interactive demo slows the page down. I'd also verify that campaign tracking stays intact through form submission and that genuine leads reach the intended destination.

For a production page, I'd check the page title, headings, accessible image descriptions, and whether product information is easy for search engines and answer engines to understand. The assessment prototype intentionally uses `noindex, nofollow`; that setting would need to be reviewed before a real launch.

**Prototype note:** The submitted form is a front-end placeholder, not a live CTM lead form. The tests above describe what I would investigate with real traffic and tracking in place.

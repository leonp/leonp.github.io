---
title: Meaning, appearance and purity
layout: post
category: web
---

This article feels like the end of an era, the last hurrah for a way of thinking about how we should build websites. Those of us who remember the <abbr title="Cascading Style Sheets">CSS</abbr>/tables wars perhaps feel an atavistic tug from presentational classes to something more "semantic". But that misunderstands the point of CSS.

<abbr title="HyperText Markup Language">HTML</abbr> and class schemas like microformats provide structure and clues to the meaning of our content, while <abbr title="Accessible Rich Internet Applications">ARIA</abbr> aids accessibility. CSS changes appearance.

These are separate concerns &#8211; the whole point of CSS is that it helps us decouple structure from appearance. This is a good thing as it makes us our markup easier to understand for machines and anyone using assistive technology. However, we still need to style our HTML for anybody reading from a screen, and the _only_ way to do that without recoupling everything is by adding presentational classes. Once we start styling elements, microformats or even ARIA roles we're misusing and confusing the purpose of all these separate elements, which is likely to result in malformed HTML (not to mention impossible to manage CSS).

We should embrace <i>classitis</i> and look at ways of making classes easy to interpret, rather than attempting to limit their use.

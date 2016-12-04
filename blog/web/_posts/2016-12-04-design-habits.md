---
layout: default
title: Design habits
category: web
description: "Good design habits and CSS APIs allow us to work more efficiently, predictably and faster. Choosing the right API and establishing good design habits is the key to working well."
---

I first built a proper website in 2007-ish, a three page effort for a poet and author who'd just finished his first novel. I got drunk on the heady power of being able to mould text and pictures into something anyone could find by typing in a proper web address. It had a sidebar and was set in 16 pixel Georgia, which looked huge on an 800x600 monitor. Ahead of the curve, as ever &#8211; in 2006, most websites used 11px Arial.

Back then I wrestled with naked HTML and CSS, which was a wholly enjoyable, if long-winded, experience. When I built a new website I'd start from scratch: the only thing it would have in common with my poet's effort would be `#content` and `#sidebar` IDs (which I'd merrily style). I'd use a bunch of completely new classes to build new page components, recycle nothing and construct gruesomely long selectors. This would result in several thousand lines of <del>repetitive CSS soup</del> handcrafted CSS.

A decade on and the process is far quicker and more efficient: over time I've developed better habits. Using the [Tachyons framework](http://tachyons.io/) for several months means coding takes little thought; the relationship between typing and seeing changes on the web page is as immediate and direct as it can get. It'd take me three or four hours to build the poet's website now, in 2006 it took a couple of weekends.

Styling HTML has become an exercise in using APIs &#8211; in Tachyons' case, a terse, expressive and precise API. My work process is exponentially more efficient and repeatable, as any exercise in building interfaces should be. I could perhaps conclude it's not as much fun now, that we're not exploring CSS any more, but I don't think that's true. Using the right API is far more flexible and predictable, and lets me put effort into the right things. Besides, could you imagine the horror of building and managing a site of any size without a framework and set of good habits now?

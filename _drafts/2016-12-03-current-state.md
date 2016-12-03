---
layout: default
title: Design habits
category: web
description: "It would be impossible to keep up with every methodical change in any practice, let alone something as fluid as web design. Perhaps the art lies in seeing the important changes and adapting to them over time."
---

I first built a proper website in 2006. It was a three page effort for a poet and I was drunk on the heady power of being able to mould some text and pictures into something anyone could find by typing in a proper web address. It had a sidebar and was set in 16 pixel Georgia, which looked huge on an 800x600 monitor. Ahead of the curve, as ever &#8211; in 2006, most websites used 11px Arial.

Back then I wrestled with HTML and CSS, which was a wholly enjoyable experience. If I built a new website the only thing it would have in common with my poet's effort would be `#content` and `#sidebar` IDs, which I'd merrily style. I'd use a bunch of completely new classes to build new page components. I'd reuse nothing, construct gruesomely long selectors and end up with several thousand lines of <del>handwritten</del> handcrafted CSS.

A decade on and the process is much quicker and more efficient. I use the Tachyons framework habitually. It'd take me four or five hours to build the poet's website now, in 2006 it would have taken several weekends.

API terse, expressive precise.

**ENDS**

## Coding in the good (bad) old days

The big difference to 2007 is how *habitual* the process has become. Back then, I'd painstakingly style `divs` and the odd class, generating a rudimentarily structured stylesheet. Our main concern was separation of concerns, which basically meant using `float: left` instead of tables and removing any styles from our HTML. SMACSS, OOCSS and ITCSS were years off. A different site meant a different approach.

Around 2011 I started building mobile first. This was a (good) habit to get into, but only served to complicate my stylesheet. A year or so after that I began looking at external frameworks, which is the first major step to becoming more efficient. Someone else writes your CSS; all you worry about is how everything fits together and automating an increasingly complex build process.

## The problem with jumbotrons

The problem with big frameworks like Bootstrap and Foundation is that they're too opinionated. You start seeing jumbotrons and panels everywhere. Default spacing annoys. I found myself writing a lot of additional CSS on the Foundation-based Suffolk Libraries site, until I ripped it all up and started to write my own framework based on my own (idiosyncratic) naming and spacing conventions.

Which brings us to this year, when I discovered Tachyons. One of the many great things about Tachyons is its largely unopinionated styles. There are no jumbotrons in Tachyons, just a terse, easy to learn notation that maps directly to CSS properties and values. For me CSS now means Tachyons.

## Coding fast

I can't overstate Tachyons' efficiency. Once you have HTML to work with add class chains and you're styling quickly and precisely. Use it for a couple of months and you're not even leaving your HTML files. You'll rarely need the (extensive) docs.

If something doesn't look right you choose the next step in the scale and refresh. Often this simply involves changing something like `pa3` to `pa4`. If you want a different `padding` when the viewport stretches, just add `pa5-ns` (which means *padding all 5 at non-small screens*).

## We use APIs while the professionals code

Foundation and Tachyons are essentially CSS APIs. We've moved from diving into CSS to leaving the heavy lifting to people who know how to structure and code better than us. That makes sense as we produce better, reusable code quicker.

But we do lose something. By styling `#content` and pulling a page about until it resembled something like we had in mind we got to learn CSS itself and maybe try something new. Now we're more expressive but our range is narrower.

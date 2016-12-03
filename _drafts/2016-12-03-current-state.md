---
layout: default
title: Habitual design
category: web
description: "It would be impossible to keep up with every methodical change in any practice, let alone something as fluid as web design. Perhaps the art lies in seeing the important changes and adapting to them over time."
---

I've been thinking recently about *how* I go about coding websites, and how that methodology has changed over the years. If you could somehow measure how efficient that process has been, you'd plot a dramatically upwards chart. But there are some downsides to doing things better.

## Coding in the good (bad) old days

The big difference to 2007 is how *habitual* the process has become. Back then, I'd painstakingly style `divs` and the odd class, generating a rudimentarily structured stylesheet. Our main concern was separation of concerns, which basically meant using `float: left` instead of tables and removing any styles from our HTML. SMACSS, OOCSS and ITCSS were years off.

Around 2011 I started building mobile first. This was a (good) habit to get into, but only served to complicate my stylesheet. A year or so after that I began looking at external frameworks, which is the first major step to becoming more efficient. You basically let someone else write your CSS; all you do is worry about how everything fits together.

## The problem with jumbotrons

The problem with big frameworks like Bootstrap and Foundation is that they're too opinionated. You start seeing jumbotrons and panels everywhere. Default margins annoy. I found myself writing a lot of additional CSS on the Foundation-based work site, until I ditched it and began to write my own framework built on my own (idiosyncratic) naming and spacing conventions.

Which brings us to this year, when I discovered Tachyons. One of the many great things about Tachyons is its largely unopinionated styles. There are no jumbotrons in Tachyons, just a terse, easy to learn notation that maps directly to CSS properties and values.

## Coding fast

I can't overstate Tachyons' efficiency. Once you have some HTML to work with add some classes and refresh your browser. Use it for a couple of months and you're not even leaving your HTML files. You'll rarely need the (extensive) docs.

If something doesn't look right in the browser you choose the next step in the notation and refresh again. Often this simply involves changing something like `pa3` to `pa4`. If you want a different `padding` when the viewport stretches, just add `pa5-ns` (which means *padding all 5 at non-small screens*).

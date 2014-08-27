---
author: admin
comments: true
date: 2012-05-14 15:35:07+00:00
layout: post
slug: decouple-style-and-meaning
title: Using visual class names to decouple meaning from style
wordpress_id: 2589
categories:
- Design
tags:
- css
- html
- practice
- snook
---

**I had a Eureka moment** when I read Snook's Smashing Magazine article [Decoupling HTML From CSS](http://coding.smashingmagazine.com/2012/04/20/decoupling-html-from-css/).

I've always resisted using class names such as `.one-col`, `.two-col` etc. to control layout, mainly through habit but partly because there's a residual fear of committing a _semantic_ sin.

Snook's article showed me that the opposite is true. If you don't use presentational classes to control presentation then your CSS and HTML's meaning are intertwined and will become more difficult to manage.


## An example: The content area


Take this common article page structure:

[caption id="attachment_2591" align="aligncenter" width="606" caption="A typical content area and sidebar layout"]![A traditional article layout. The content area is next to the sidebar.](http://leonpaternoster.com/wp-content/uploads/2012/05/trad-layout.png)[/caption]

Which I'd normally markup like this:

    
    <code><div id="content"> ... </div> <aside class="sidebar"> ... </aside> </code>


And style like this:

    
    <code>#content {float: left; width: 65%; margin-right: 5%;} .sidebar {float: left; width: 30%;} </code>


That's fine, until you need to style a `#content` area with different dimensions. Let's say you want to build a home page with a big splash image:

[caption id="attachment_2592" align="aligncenter" width="606" caption="A typical home page structure"]![A splash image on a home page](http://leonpaternoster.com/wp-content/uploads/2012/05/splash.png)[/caption]

The mark up's easy:

    
    <code><div id="content"> <img> </div> </code>


But the style poses a problem. Our initial `#content` area was floated, given a right margin and a width of 65% of its container. But we want the home page `#content` area to extend across 100% of its container, and we don't need the right margin.

It is possible to retain our markup and play around with specificity to make sure the home page is styled how we want it:

    
    <code>.home #content {float: auto; width: 100%; margin-right: 0;} </code>


But that's inefficient and difficult to manage. The CSS has to be written in a definite order and what if we need other `#content` layouts?

We've run into this problem because we've used CSS to style a _semantic_ id. In other words, we haven't really separated our content from its appearance.


## The fix: Embrace ‘presentational’ class names


We need to use classes according to their functions. Snook uses the phrase “limiting the depth of applicability”, which means even our presentational CSS classes should be limited to specific jobs within their overall function.

In our example we could use this markup on our article page:

    
    <code><div id="content" class="two-col"> ... </div> <aside class="sidebar one-col last"> ... </aside> </code>


And this markup on our home page:

    
    <code><div id="content" class="three-col last"> <img> </div> </code>


And this CSS:

    
    <code>.one-col {width: 30%; margin-right: 5%;}; .two-col {width: 65%; margin-right: 5%;} .three-col {width: 100%;} .last {margin-right: 0;} </code>


To some people (such as me) this seems counter–intuitive. But it appears to be the most efficient, manageable way to write markup and CSS.
  *[HTML]: HyperText Markup Language
  *[CSS]: Cascading Style Sheets

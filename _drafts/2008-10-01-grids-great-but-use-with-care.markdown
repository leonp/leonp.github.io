---
author: admin
comments: true
date: 2008-10-01 12:58:46+00:00
layout: post
slug: grids-great-but-use-with-care
title: 'Grids: Great, but use with care'
wordpress_id: 183
categories:
- Articles
tags:
- essential
- front
- grid
- guardian
- typography
- usability
---

When I started this blog [I criticised some mighty big names](http://leonpaternoster.com/2008/05/why-use-grids/) (some of whom are great influences). Rather stupid, but I was an angry young man just 6 months ago. One area that seemed to concern me was the increasing use of _complex_ grids in the design of websites.

[caption id="" align="aligncenter" width="285" caption="A grid system"]![Grid with margins and gutters](http://farm4.static.flickr.com/3099/2903922561_2948581858_o.jpg)[/caption]

My thinking was a bit clouded by my attitudinising, so here's my more considered take on the subject.


### Grids: very good





	
  * Any website will benefit from using some type of grid to align page elements. Grids create rhythm, which makes the physical act of reading easier: the eyes needn't reach for content as the brain will know where that content is going to appear. As a consequence of this, websites that make use of a grid _feel_ better and create a positive impression on the reader.

	
  * Grids also aid the **meaning** of a page. The placement of page elements can suggest importance, relevance etc.; aligning certain elements can suggest a link between their functions. For example, if the content area occupies 2 columns of a 3-column grid, and links to twitter entries and delicious bookmarks occupy 1 column of the grid, then there is a natural suggestion that the content is twice as important as the twitter and delicious information, which would share the same importance.




### Complex grids: fuzzier




Grids aren't an end in themselves
    The design process _should_ run as follows:



	
  1. Decide what content we want to place on the page

	
  2. Design an appropriate grid


However, if we reverse that process and decide that we want to design to, say, an 8 column grid (which is easy using [a CSS grid framework](http://blueflavor.com/blog/2007/oct/24/blueprint-css-101/)), then we are making decisions about content based on design, which is wrong. Frameworks _can_ be great: there's no reason why you couldn't use Blueprint to create a 2 column site with some subtle sub-columns, but it makes creating more complicated grids very easy.


Complex grids can excuse poor design decisions
    If we have a _lot_ of content we want to place on a page, then a grid will help us to organise it. The problem here is that we shouldn't be placing lots of content on our pages. The design process is essentially a process of subtraction, organisation and emphasis — too much information on a computer screen is overwhelming for readers, regardless of how well it's been placed.
    We see this problem with the [online editions of newspapers](http://guardian.co.uk). A new, multi–column convention has arisen, which, in my opinion, makes them _harder_ to read. Unfortunately, the clever application and appreciation of grids has clouded more fundamental design problems.
Less readable
    The more content we place on a page, the less scannable it is. Narrow columns also mean smaller text, and small text is harder to read than large text.
Complex grids = complicated CSS
    Which is one reason we got rid of tables for layout.
So we should beware when we encounter a site that utilises a well-constructed grid. We should ask: _does the page structure hide poor design decisions?_, and _Could this have been presented more simply to the reader?_ Often, of course, the grid will in fact aid the presentation of the content — but not always.

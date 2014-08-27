---
title: 'Why can&#8217;t I build my web page like a magazine? (part 274)'
author: Leon
excerpt: "<i>Repetez&#8211;moi</i>: web and print are different things. And CSS regions can't change that."
layout: post
permalink: /2014/01/why-cant-i-build-my-web-page-like-a-magazine-part-274/
categories:
  - Design
---
In this week’s <cite>A List Apart</cite> [CSS nobility stamped the <cite>CSS Regions Working Draft</cite> “considered harmful”][1]. To be honest, complex CSS constructs like regions leave me cold at the best of times (I haven’t bothered [experimenting with `flexbox`][2], although I should), so I didn’t delve into the nuts and bolts of how it&#8217;ll will work.

I am, however, instinctively against any *how can we make web layouts more like magazines?* proposals. Unfortunately, they have to be killed several times over (text as images, fixed width pages, text as Flash files etc. etc.)

Even if you don’t delve into the gory details, you can be sure this is what the <cite>Regions Working Draft</cite> is proposing. Check out [the introduction][3]:

> Displaying the complex layouts of a typical magazine, newspaper, or textbook on the web requires capabilities beyond those available in existing CSS modules. Dynamic magazine layout in particular requires flexibility in placement of boxes for content flows. This is the purpose of the CSS regions module. <cite>Regions Working Draft</cite>

## Why web pages can’t be magazine pages

For a start, *page* is a bad name for a web text. It implies a fixed canvas: A4, A3, A, B or C format, when we don&#8217;t know the size of our reader&#8217;s screen. It&#8217;s an abstract construct, something that&#8217;s convenient to refer to, but easy to break out of. Hence scroll bars.

Web pages are inherently dimension agnostic, even when we define their widths. Ems and pixels are relative units of measurement – you can&#8217;t say how many pixels there are in a centimetre. Without a fixed canvas it’s difficult to pull things out of the natural flow of a document and place them with any certainty.

The (not inconsiderable) advantage to designing around fluidity is that readers can access content on a million different devices. The disadvantage – for people still thinking in terms of design = placing fixed elements cleverly – is that we can’t *control* the position of discreet page elements.

Proposals like CSS Regions are an attempt to square the circle. Unsurprisingly, they’re headache inducing.

## Good fluid design

The best screen reading experiences don’t attempt to ape complex print magazine layouts. They’re generally simply constructed.

The two most pleasing websites I encountered this week were <cite>A List Apart</cite> and the [<cite>The Manual</cite>‘s blog][4] (perhaps I just like the Franklin Gothic/serif combination).

<cite>The Manual</cite> uses the responsive age&#8217;s *de facto* blog layout: a left/right main area/sidebar which collapses into one column on a smaller screen. It&#8217;s clearly well designed – it&#8217;s easy to read on any device and creates an appropriate tone for the text – and it doesn&#8217;t use pull quotes or mess around with document flow at all.

 [1]: http://alistapart.com/blog/post/css-regions-considered-harmful
 [2]: http://philipwalton.github.io/solved-by-flexbox/demos/grids/
 [3]: http://www.w3.org/TR/2013/WD-css3-regions-20130528#introduction
 [4]: http://blog.alwaysreadthemanual.com/2014/01/24/typography-and-typesetting-the-web-edition/
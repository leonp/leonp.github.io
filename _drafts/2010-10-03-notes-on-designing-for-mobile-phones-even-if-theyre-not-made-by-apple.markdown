---
author: admin
comments: true
date: 2010-10-03 08:06:12+00:00
layout: post
slug: notes-on-designing-for-mobile-phones-even-if-theyre-not-made-by-apple
title: Notes on designing for mobile phones (even if they're not made by Apple)
wordpress_id: 1441
categories:
- Articles
tags:
- accessibility
- apple
- design
- inclusive design
- mobile
- nokia
- symbian
---

This recent [slideshow on designing inclusive mobile websites](http://www.slideshare.net/bryanrieger/rethinking-the-mobile-web-by-yiibu) inspired me to build a mobile version of my website. I've been working on it a few hours and established some provisional mobile design dos and don'ts.

<!-- more -->

Here's what the design should do:



	
  * **render appropriately** across screen widths. It shouldn't make readers scroll horizontally on a narrow screen, and it shouldn't make reading difficult on a desktop monitor by making column measures too wide

	
  * **use **`**@media**`** rules** so it's easy to implement (no separate site)

	
  * work across browsers, regardless of how limited they are (because **mobile ≠ iPhone**). It therefore uses a ‘mobile first’ approach: The base stylesheet is appropriate for a narrow screen and the `@media` rules target wider, desktop screens, and/or advanced rendering engines  (basically Webkit, Presto and Gecko).




## Testing


It's important to note that you can't just reduce your desktop browser's width to see if the layout works. **Less capable mobile phones often come with browsers that interpret HTML and CSS differently**, or don't understand the whole of the [CSS2 spec](http://www.w3.org/TR/CSS2/) (let alone [CSS3](http://www.w3.org/TR/css3-roadmap/)). I've therefore been testing on my work phone, a [Nokia N78](http://www.gsmarena.com/nokia_n78-2254.php), which has the [Symbian OS](http://www.symbian.org/) installed on it. I use the default browser. I guess it's reasonably powerful in the grand scheme of things, but it's no iPhone. The resolution is 240X320 pixels (it can be rotated).

[caption id="attachment_1448" align="aligncenter" width="440" caption="The Nokia N78 (from http://dailymobile.se/wp-content/uploads/2008/11/nokia-n78-pictures12.jpg)"]![A Nokia N78 mobile phone](http://leonpaternoster.com/wp-content/uploads/2010/10/nokia.jpg)[/caption]


## Observations


Obviously my N78 doesn't represent all mobile phones and I've only been working on the design for a few hours. But it is a relatively basic browser compared to, say, Safari on an iPhone (even if the newest Symbian browser is built on Webkit). Here's what I've found:



	
  * **CSS coverage is patchy**; my mobile doesn't seem to consistently recognise `overflow` or `max-width`, for example, which made it nigh on impossible to control image widths

	
  * **use relative sizing**: ems and % work fine and allow stylesheet modifications to be made quickly (e.g. you can up font sizes on wider monitors by simply altering the `body`'s font size as a % and using ems down the cascade)

	
  * **use javascript to make IE obey @media queries**. That means only IE users who have turned javascript off won't benefit from your @media queries

	
  * **use **`**padding**`** instead of **`**margin**` on your `body` or `wrapper div` in your base styles. I found `margin` behaviour unpredictable, whereas `margin: 0 auto` is a staple of desktop browser design

	
  * **keep the above padding small**. On my phone it seemed to have a disproportionate effect on the page gutters

	
  * **reduce margins between elements**: you don't have the luxury of much whitespace on a small mobile screen

	
  * **use **`**list-style-position: inside**` on bullets as there's not enough room in the gutters for hanging bullets

	
  * **take care resizing search boxes** as they can expand unpredictably and bork the layout

	
  * **avoid floats** as scrolling horizontally on a mobile is highly annoying

	
  * **be careful if you're using HTML5**. I don't think my Nokia understood the new, structural tags (despite the script I fed it), at least it didn't limit the width of `nav` in the same way as it did `p` (which meant the layout leaked beyond the screen width in some circumstance)




## Why bother? Who actually browses on a small phone screen?


There's a good gmail app on my phone, so I don't need to visit gmail.com to get my email, which is all I really use the phone for online. Unless you visit a site designed specifically for a mobile (e.g. [Box](http://m/box.net rel=) and [BBC News](http://bbc.co.uk/news/mobile/)), it's a pretty dispiriting experience.

Still, if we are designing websites for mobile consumption, they should not, on principle, be closed to people who can't afford an iPhone. And when it comes to reading from my Nokia, it's actually a pretty pleasant experience if the site is designed correctly; after all, you can't grab your desktop PC, put your feet up and read a news article from the comfort of your sofa.

**If you are viewing this post on a mobile screen I'd be really grateful to hear your thoughts on the design.**

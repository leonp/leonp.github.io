---
author: admin
comments: true
date: 2011-12-30 14:47:48+00:00
layout: post
published: false
slug: what-next-for-scherzo
title: What next for Scherzo?
wordpress_id: 2409
categories:
- Articles
tags:
- scherzo
- WordPress
---

If you're not aware (because I'm very reticent about it), Scherzo is my WordPress theme. When it lived in the official WordPress theme directory it attracted around 26,000 downloads. It's had lots of mentions across the blogosphere, which is quite right. It is (as far as I'm aware) the only mobile first theme out there.

Still, it's had a somewhat chequered history. It started out as a very simple thing: no customisable backgrounds and headers, no threaded comments. At one point older versions of Internet Explorer weren't served the two column version at all; now they are (through some conditional comments and javascript).

I plan to start charging for Scherzo in the future. In return for the 10–20 quid you'll get:


## A navigation menu


There's nothing stopping you from adding a menu as a sidebar widget, but the single most common request I receive is for a horizontal navbar. I'm still thinking of ways of implementing this in a mobile friendly way. I've discounted a select box and link to a bottom–of–the–page menu. Any ideas gratefully received.


## A truly flexible layout


When I first created Scherzo back in 1814, I was using ems to size layouts. Now I (usually) use percentages if there's more than one column involved, and that's what I'll do with Scherzo.


## No media query support for old versions of Internet Explorer


At the moment IE<9 loads some javascript to make it understand media queries. I'm becoming more strident in my approach to bodges and polyfills, so I'll be ditching this support. Instead, older versions of IE will be served a slightly modified version of the base stylesheet. They won't see what sits within the media queries. (See [Leaving Old Internet Explorer Behind](http://jonikorpi.com/leaving-old-IE-behind/) for some more details.)


## Some form of support


Not sure what, yet, but something.


## Better header images


Scherzo uses a background image for the header. I plan to change this to an inline image, which will make header links more usable. The image will also scale better than it does at the moment.


## The far future


I'm also thinking of a few more custom options that you'll be able to access in the dashboard; accent colours and fonts, for example.


## What would you like?


If you'd like to see any changes to Scherzo, drop me an email at mail@leonpaternoster.com or [tweet me](http://twitter.com/leonpaternoster).

---
author: admin
comments: true
date: 2011-03-30 14:58:54+00:00
layout: post
published: false
slug: scherzo-2-released
title: Scherzo version 2 released
wordpress_id: 1802
categories:
- Articles
tags:
- scherzo
---

The latest update to the Scherzo theme is now available from the WordPress theme directory (you can update automatically if you already have it installed).

[Download Scherzo version 2](http://wordpress.org/extend/themes/scherzo).

<!-- more -->


## Changes from version 1.6





	
  * added a ‘responsive design’. Used media queries in `style.css` to target wider viewports

	
  * added `css3-mediaqueries.js` to force IE<9 to understand media queries. Enqueued and registered in `functions.php`

	
  * HTML5shiv js links to Google Code. Enqueued and registered in `functions.php`

	
  * heading typography changed

	
  * fixed widget padding in sidebar; margins between widgets collapsed before

	
  * added `max-width` support for content images to IE6 using `_width` hack in CSS

	
  * made all functions pluggable in `functions.php`

	
  * added a custom header

	
  * added a ‘Continue reading’ link to front page posts for ‘Read more’ shortcodes in posts




## Known issues




### Child themes and Internet Explorer


If you include the default theme styles in your child theme, Internet Explorer version 8 and below won't retain the wide screen layout, which means you’ll see the mobile layout. Internet Explorer 9 is fine.

**This problem does not affect the theme itself**, just child themes. Only **Internet Explorer versions 8 and below** are affected: Chrome, Firefox, Opera and Safari are fine.

The quick fix is to copy the `@media` query CSS from the parent stylesheet to your child theme stylesheet.


## Responsive layout


Scherzo automatically adjusts its layout according to the width of the device that views the theme. This means that mobile devices will display a one column layout. Wider screens (desktop monitors and the iPad in landscape mode, for example) display a two column version.

This is all achieved using CSS media queries. No plugins required.


## And finally…


Some very helpful folk took the time to test this version, namely:



	
  * [Ben Smith](http://benjam.in/)

	
  * [Konstantin Winkler](http://www.konni.org/)

	
  * [David Oliver](http://doliver.co.uk/)

	
  * [John Baker](http://johnbakersblog.co.uk/)


Tak!

---
author: admin
comments: true
date: 2011-09-05 15:24:39+00:00
layout: post
published: false
slug: my-mobile-first-%e2%80%98framework%e2%80%99
title: My mobile first ‘framework’
wordpress_id: 2188
categories:
- Articles
tags:
- css
- html
- mobile first
---

When I want to mock something up quickly, or need a set of files to start a project with, I tend to use the same code.



	
  * [download my mobile first framework](http://www.box.net/shared/4lleherjv9xzlhdrr7fn)

	
  * [see it in action](http://leonpaternoster.com/labs/mob1-framework/)


You may or may not find these files useful. There's no grid system or thorough reset, and I don't use HTML5 sectioning elements.

But I do find they save me a lot of work.


## About the ‘framework’





	
  * it has a one column default layout

	
  * it works on **any** mobile device

	
  * it uses media queries to target viewports > 760px

	
  * it changes to a fluid, two column layout at > 760px

	
  * it uses ems to size elements

	
  * it includes a print stylesheet

	
  * it's marked up using microformats

	
  * it uses ARIA roles

	
  * it uses an HTML5 doctype but not HTML5 sectioning elements

	
  * it works in all modern browsers and IE6+

	
  * the HTML and CSS validates




## Why you'd use it


It saves you from typing out the same things over and over. It also provides a CSS structure for creating a mobile first document so you don't have to think about it. On the other hand, you may well already have your own system in place.


## Behind the scenes


There's not that much going on.

The wide screen styles are stored within media queries so any browser that understands CSS can access the basic styles.

The `index.html` file uses IE conditional comments to load `css3-mediaqueries` for IE<9. I've found this to be more robust than `respond.js`.

There's also a `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">` tag to make sure page zooming is disabled on handheld devices.

And that's it.

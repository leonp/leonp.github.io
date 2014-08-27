---
author: admin
comments: true
date: 2009-01-01 23:32:53+00:00
layout: post
slug: 4-changes-that-would-make-wordpress-even-better
title: 4 changes that would make WordPress even better
wordpress_id: 380
categories:
- Articles
tags:
- cms
- improvements
---

I like WordPress. It's easy to learn, makes developing standard-style blogs quick and simple and has a huge range of plugins and themes to integrate into websites. The back end is modern, easy-to-use and substantial new versions are released every few months.

The developers take a **democratic** approach to new releases: [fill in the survey](http://http://www.polldaddy.com/survey.aspx?id=6fc3e15cde20b5b5) to register your preferences. I'm not sure I agree with this development by vote: I'd prefer the experts to use their knowledge to provide us with an improved product.

Anyway, if I had any say in 2.8, I'd make the following changes:


### Make the code editor a code editor


[caption id="attachment_382" align="aligncenter" width="500" caption="The HTML editor: hard to read as code, no p tags"]![The HTML editor: hard to read as code, no p tags](http://leonpaternoster.com/wp-content/uploads/2009/01/editor.png)[/caption]

The current HTML editing option is poor. _Really_ poor. It suffers from two major problems:



	
  1. It doesn't use a **monospace** font. Consequently, non-savvy users aren't sufficiently deterred from messing with all that technical stuff, while those who do want to write HTML have to untangle unevenly spaced text. Why break such an established convention?

	
  2. **Line breaks** are converted into paragraphs. In fact, the HTML view is really a _nearly_-HTML view. It is incredibly annoying to use  mark up that discards the most basic HTML tag of all, while thinking about line breaks.




### Captions are not alt text


WordPress handles images pretty well. One thing that confuses me is the way in which **captions** also serve as **`alt`** text. `alt` text is meant to provide a textual alternative to an image for readers using a screen reader. A caption does not necessarily serve the same purpose. Take this example:

[caption id="attachment_250" align="aligncenter" width="560" caption="Garamond is an example of a poor font for body copy"]![Garamond is an example of a poor font for body copy](http://leonpaternoster.com/wp-content/uploads/2008/12/garamond1.png)[/caption]

The caption only has any real meaning if you can actually _see_ the image. The `alt` text should read something like _The alphabet and numbers set in Garamond._

Additionally, screen readers will repeat the same phrase: first as `alt` text and then the actual caption.


### Make widgets contextual


Some **widgets only need to appear on certain pages**. For example, I have created a theme that displays a list of posts related to the current post in the sidebar; obviously, this list should only appear on individual post pages. It's quite easy to code this using conditional statements, but there's no solution for non-coders, while it would save a lot of time for those who can PHP.


### Fine tune what users can see


Theme users often have different needs. Some don't know what a theme (or a CMS) is, others can use HTML and custom fields quite happily. It would therefore be really useful if theme designers could **fine tune what options are available to users** when they hand their themes over.

What do you think? How would you improve WordPress?

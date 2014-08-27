---
author: admin
comments: true
date: 2012-08-09 09:38:51+00:00
layout: post
slug: google-meta-data
title: Why can't Google make use of meta data?
wordpress_id: 2849
categories:
- Miscellany
tags:
- Google
- readability
- search
- SEO
---

Here's what one of my articles looks like if you send it to Readability (not that you'd need to):

[caption id="attachment_2850" align="aligncenter" width="600"]![Screenshot of an article reformated by Readability](http://leonpaternoster.com/wp-content/uploads/2012/08/readability.jpg) Readability interprets HTML well.[/caption]

Note the entry summary placed under the title. I used the [hatom microformat](http://microformats.org/wiki/hatom) to indicate what content is a summary. The HTML isn't complicated:

`<div class="entry-summary intro"><p>The web designer's portfolio often consists of a slideshow of big images. How much does this tell potential customers about how you can help them? And are there other, better ways to generate business?</p>`

This is good. A machine has used HTML to interpret and present content meaningfully.

Here's what a search for _improving and looking beyond portfolios_ returns when you tap it into Google:

[caption id="attachment_2851" align="aligncenter" width="600"]![Screenshot of Google search results](http://leonpaternoster.com/wp-content/uploads/2012/08/google.jpg) Google simply finds a search query and presents the surrounding text in search results. It doesn't interpret the HTML.[/caption]

Not so good. Google has simply returned an excerpt based on the found text and surrounding content – content that has been marked up as a date.

`hatom` is a well established microformat. For example, WordPress generates `hatom` classes out of the box. And the meaning of content wrapped in a `time` element is pretty obvious.

It can't be beyond Google's capabilities to recognise when a title has been entered into a search query, return a meaningful excerpt and use the `time` element properly.
  *[HTML]: HyperText Markup Language

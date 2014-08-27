---
author: admin
comments: true
date: 2009-02-15 19:44:01+00:00
layout: post
slug: go-forth-and-html-5
title: Go forth and HTML 5
wordpress_id: 474
categories:
- Articles
tags:
- doctype
---

I've just completed designing a blog for work that is based on [WordPress](http://wordpress.org). I'm really pleased with it and will write something when it goes live.

Anyway, the first line in `header.php` is:

`<!DOCTYPE html>`

For those of you who have been using HTML4 or (for whatever reason) XHTML this will seem a bit, well, simple. But I think that's part of the point of [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/).

Now, the real benefit of HTML5 will be the introduction of several new tags, including `<section>`, `<aside>`, `<header>` and `<nav>`, which will add more structural meaning to your HTML documents (which using classes and IDS doesn't). Unfortunately, it's going to take some time before all browsers recognise these tags, but there are **immediate benefits** (besides a simple DOCTYPE), such as the ability to nest block level elements within other block level elements. Which means that `<ul><li><h2>` is perfectly acceptable (which, ironically enough, is an [invalid construct WordPress likes](http://www.themelab.com/2008/04/18/see-how-easy-it-is-to-widgetize-wordpress-themes/)), and you can even wrap divs in a tags (rsulting in some nice, big link areas).

By using `<!DOCTYPE html>` all browsers (including IE6) will render your page in standards mode, which **avoids any XHTML confusion**. [The HTML validator](http://validator.w3.org/) will also attempt to parse your document (HTML5 even accepts both `/>` and `>` closing tags with aplomb), so there's really no reason to not go ahead and replace the first line in your header template file.


### Further reading





	
  * [John Resig on using HTML5 to trigger standards mode](http://ejohn.org/blog/html5-doctype/)

	
  * [Jon Tan on preparing for HTML5](http://jontangerine.com/log/2008/03/preparing-for-html5-with-semantic-class-names) (I don't agree that using classes and IDs adds meaning in the same way as using actual tags, but it's an excellent overview of the new tags and how they should be used)

	
  * [Eric Meyer on using HTML for An Event Apart](http://meyerweb.com/eric/thoughts/2009/01/02/an-event-apart-and-html-5/)

	
  * [Jens Meiert on some advantages of using HTML5](http://meiert.com/en/blog/20080708/you-can-use-html-5/)



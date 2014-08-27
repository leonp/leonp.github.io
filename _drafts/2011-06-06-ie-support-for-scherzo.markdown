---
author: admin
comments: true
date: 2011-06-06 03:05:14+00:00
layout: post
published: false
slug: ie-support-for-scherzo
title: Why I'm not fully supporting Internet Explorer 8 and older in future versions
  of Scherzo
wordpress_id: 1957
categories:
- Articles
tags:
- IE
- javascript
- mobile
- scherzo
---

In the next version of [the Scherzo theme](http://leonpaternoster.com/wp-themes/) I plan to drop full support for Internet Explorer (IE) version 8 and lower. The theme currently uses [javascript to make IE scale to different viewports](http://code.google.com/p/css3-mediaqueries-js/), which I intend to remove in version 2.3. Note that the change won't affect IE9, which recognises [media queries](http://www.alistapart.com/articles/responsive-web-design/).

<!-- more -->

There are several reasons for dropping full support that I think outweigh any inconvenience IE users will experience:



	
  * Scherzo will serve IE the same one column style sheet as mobile devices — the theme doesn't ‘break’, it just looks different

	
  * getting WordPress to serve scripts just to IE is a problem I've been unable to solve. Normally, I'd use conditional comments in the `head` section of an HTML document, but the ‘proper’ method is to register and enqueue scripts in `functions.php`. Unfortunately, you can't put PHP in conditional comments. This means that _all_ browsers, regardless of device, OS etc., load the 20k or so of javascript that only IE needs.

	
  * the IE javascript causes problems with child themes built on Scherzo

	
  * I have better things to do with my life than wrestle with this problem

	
  * from a personal point of view, only 9.7% of my visitors over the last couple of weeks used version 8 or less of IE. IE9 was offered as an automatic update during this period, so I expect this number will decrease.

	
  * Scherzo is built on a [mobile first principle](http://www.slideshare.net/bryanrieger/rethinking-the-mobile-web-by-yiibu). It doesn't make sense to serve mobile users on a slow connection an extra 20k of javascript just so an old desktop browser can modify the page layout.


I appreciate you may feel differently about dropping IE support (perhaps because your visitor stats are markedly different from mine). If you do, please leave a comment.

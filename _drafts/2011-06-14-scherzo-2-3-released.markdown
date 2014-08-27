---
author: admin
comments: false
date: 2011-06-14 19:45:56+00:00
layout: post
published: false
slug: scherzo-2-3-released
title: Scherzo 2.3 released
wordpress_id: 1982
categories:
- Articles
tags:
- Internet Explorere
- mobile first
- scherzo
---

Version 2.3 of my WordPress theme has been approved and is live. Either update from yer admin panel or [download from the theme directory](http://wordpress.org/extend/themes/scherzo).

<!-- more -->


## Changelog





	
  * moved wp_footer hook within #site-footer so it can be used for HTML as well as js

	
  * resized sidebar so it's now correct width

	
  * removed css-mediaqueries js to save mobile devices loading ~20k (no longer registered and enqueued in functions.php). NOTE: **Older versions of Internet Explorer now display a one column, mobile version of the website**

	
  * tidied up article footers, adding a couple of rules to separate them from the article content

	
  * tidied up floating image margins and added a border to them


Obviously there's quite a big change in there. I posted [an explanation of why I'm not using javascript to make older versions of Internet Explorer display a two column version of the theme](http://leonpaternoster.com/2011/06/ie-support-for-scherzo/). It'll be interesting to see if this generates any feedback.

As ever, [comments, bugs and suggestions gratefully received](http://leonpaternoster.com/wp-themes/).

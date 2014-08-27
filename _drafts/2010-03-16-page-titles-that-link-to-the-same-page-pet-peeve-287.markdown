---
author: admin
comments: true
date: 2010-03-16 13:25:17+00:00
layout: post
slug: page-titles-that-link-to-the-same-page-pet-peeve-287
title: 'Page titles that link to the same page: Pet peeve 287'
wordpress_id: 1093
categories:
- Articles
tags:
- annoyances
- fixes
- links
- navigation
- temkin
---

One of the routine annoyances of browsing the web is encountering page titles that link to the same page. See [Customer Experience Matters](http://experiencematters.wordpress.com/2010/03/16/customer-experience-lessons-from-marks-and-spencer/) for an example.

[caption id="attachment_1094" align="aligncenter" width="600" caption="Note that the title is a link to the same page. Incidentally, Customer Experience Matters is a great blog which I thoroughly recommend."]![Screenshot of Customer Experience Matters: the page title is a link to the same page](http://leonpaternoster.com/wp-content/uploads/2010/03/cem.jpg)[/caption]

Customer Experience Matters is hosted by [WordPress.com](http://wordpress.com) and uses the [Regulus theme](http://www.binarymoon.co.uk/projects/regulus/). Regulus is a very smart theme, and the author has published [some excellent plugins](http://www.binarymoon.co.uk/projects/bm-custom-login/) (so I'm certainly not criticising the blog or the theme author).


# What's so annoying about these links?


Well, it's not going to ruin your day encountering a title that links to the same page, but:



	
  * [users expect to go to a new place](http://www.useit.com/alertbox/within_page_links.html) when they click a link. At least page anchors lead to another place within the same document; these type of links don't lead anywhere new at all

	
  * copying and pasting a title that's also a link requires some manual dexterity (as I found out when tweeting the Customer Experience Matters page; I ended up clicking the link accidentally)

	
  * there may be an SEO issue (at least, [Chris was wondering](http://twitter.com/chrisltd/statuses/10372636453) about it). Headings that are links are perhaps viewed as links to other pages rather than actual headings




# Fixing the problem


In WordPress, it's pretty trivial. In `single.php` look for the page title; it'll probably look like: `<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>`. You need to remove the hyperlink, so something like `<h1><?php the_title(); ?></h1>` would do it.

Like I say, it's more a _tut tut _ than a huge usability issue, but these small annoyances can accumulate to create a frustrating user experience.

What do you reckon? And what's your pet website peeve?
  *[SEO]: Search Engine Optimisation - the 'art' of making your website findable by search engines

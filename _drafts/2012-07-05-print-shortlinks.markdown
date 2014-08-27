---
author: admin
comments: true
date: 2012-07-05 15:41:13+00:00
layout: post
slug: print-shortlinks
title: Getting your WordPress theme to print a post shortlink
wordpress_id: 2753
categories:
- Design
tags:
- printing
- WordPress
---

**As you may be aware**, WordPress automatically generates shortlinks to posts. So instead of pasting `http://leonpaternoster.com/2012/06/why-nobody-mourns-the-queens-english-society/` into a tweet you can use `http://leonpaternoster.com/?p=2694`.

This is fairly useful online. But you can also use it to display shorter URLs when your visitors print your pages. Again, fairly useful, especially if an article is passed from one person to another.

To do this, you need to add a few print styles to your theme. If you're not sure how to do it you could do worse than refer to Jens Meiert's [dead simple how–to](http://meiert.com/en/blog/20070221/print-style-sheets-the-basics-for-no-excuses/), and you can scroll to the end of [this theme's stylesheet](http://leonpaternoster.com/wp-content/themes/earth/style.css) for an example.

Once you've got your print styles up and running, add something like `<p class="print-permalink">Permalink: <?php echo wp_get_shortlink(); ?></p>` wherever you want the shortlink to appear.

You'll need the class if you only want the shortlink to appear when the page is printed. To hide it from the screen simply add `.print-permalink {display: none};` to the `@media screen, projection {}` section of your stylesheet.

Mystified? Print preview this page for an example, and be very mildly amazed.

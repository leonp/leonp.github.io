---
author: admin
comments: true
date: 2011-12-08 10:33:35+00:00
layout: post
slug: wordpress-tag-clouds
title: Getting WordPress tag clouds to display more than 45 tags
wordpress_id: 2382
categories:
- Articles
post_format:
- Aside
tags:
- code
- taxonomy
- WordPress
---

WordPress has a pretty useful `wp_tag_cloud` function that generates a cloud (or list)  of tags used on your website. I use it on[ the current index page](http://leonpaternoster.com/index/).

You might not be aware of the `number` parameter, and its default setting. If you don't specify a `number` the function will return a maximum of 45 tags.

Simply set the `number` parameter to 0 to display all your tags. Here's how I use the function:

`<?php wp_tag_cloud('smallest=0.915&largest=0.915&unit=em&format=list&number=0'); ?>`

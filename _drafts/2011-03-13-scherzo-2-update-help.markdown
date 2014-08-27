---
author: admin
comments: true
date: 2011-03-13 17:27:43+00:00
layout: post
published: false
slug: scherzo-2-update-help
title: Scherzo 2 update — problems with child themes
wordpress_id: 1786
categories:
- Articles
tags:
- child themes
- javascript
- responsive design
- scherzo
- WordPress
---

A while back I asked for testers to help with version 2 of Scherzo. Some very helpful folks duly volunteered and, unsurprisingly enough, found some bugs.

This is a very good thing. I've fixed most problems and even added some features (such as pluggable functions). All of which will make Scherzo a lot more robust in the future.

<!-- more -->

But I've reached an impasse with one of these bugs (if it is indeed a bug). It doesn't affect Scherzo itself, but it does mean that child themes don't work properly in Internet Explorer. If you use a child theme you'll see the mobile version of your site in IE.

This makes it nigh on impossible to submit the latest version of Scherzo to the WordPress themes directory. If I could even find an easy workaround I'd probably go ahead, but it hasn't been possible. So I need some help figuring out the problem.


## The problem


Scherzo 2 boasts a responsive design, which means that if you view it on a narrow screened device (such as a mobile phone) you'll see a one column version of the theme. In order to make it work on pretty much _any_ device I've used a ‘mobile first’ approach, which means `@media queries` are only used to target wider screens (and, by extension, browsers that recognise `@media queries`).

Of course, not _all_ desktop browsers recognise `@media queries` — Internet Explorer (!) doesn't. To make IE behave, Scherzo uses some javascript which is registered and enqueued in its `functions.php` file. This works just fine.

That is until you use a child theme. Child themes _should_ simply run the parent theme's `functions.php`, which _should_, in turn, register and enqueue the relevant javascript. For some reason this doesn't appear to be happening.

I've researched the problem and submitted a question to [WordPress Answers](http://wordpress.stackexchange.com/questions/11761/how-do-i-get-a-child-theme-to-load-scripts-from-the-parent-theme), but no joy.

I'm sure I will find the answer, but in the meantime Scherzo remains on hold. If you're reading and you have any ideas as to what's causing the problem please leave a comment. Thanks.

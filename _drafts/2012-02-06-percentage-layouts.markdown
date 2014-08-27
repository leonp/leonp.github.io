---
author: admin
comments: true
date: 2012-02-06 12:57:59+00:00
layout: post
published: false
slug: percentage-layouts
title: 'Percentage based layouts: Some notes'
wordpress_id: 2483
categories:
- Articles
tags:
- css
- design
- layout
---

I've been using a % based layout in the latest version of Scherzo. Here are a few observations:



% based layouts should only be applied to wide screens
    Common sense this, but applying a 75% width to a 240px wide screen results in a very narrow content column. Generally, I apply (small) margins and paddings to my base stylesheet and only set a `width=x%` for wider screens.
Go mad and use most of your available space
    Scherzo 3 uses 90% of the screen, plus some `3em`s of padding. Using most of the available screen looks good.
    

[caption id="attachment_2494" align="aligncenter" width="480" caption="Scherzo at 75em"]![Screenshot of a website with a 90% width](http://leonpaternoster.com/wp-content/uploads/2012/02/emigrants.jpg)[/caption]


Set a `max-width` as well
    Because a lucky few people have _really_ wide monitors, I set a maximum width of 75em. This means the Scherzo 3 content column won't expand beyond 707px (assuming the user hasn't upped the font size), which is a decent enough limit for reading 16px Georgia comfortably.
% calculations are absolute
    Sounds odd, but if you use `em`s to define your website layout, changes to the base `font-size` will affect font size _and_ your layout. While this is logical, most people are only looking to change the size of the font rather than the layout dimensions.
    Furthermore, upping the base font size in an `em` based layout can result in a horizontal scroll bar should the calculated width extend beyond the width of the screen. 90% of the screen width, on the other hand, is an untouchable value.

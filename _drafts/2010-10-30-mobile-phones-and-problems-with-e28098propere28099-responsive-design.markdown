---
author: admin
comments: true
date: 2010-10-30 21:26:36+00:00
layout: post
slug: mobile-phones-and-problems-with-%e2%80%98proper%e2%80%99-responsive-design
title: Mobile phones and problems with ‘proper’ responsive design
wordpress_id: 1487
categories:
- Articles
tags:
- opera for mobile
- responsive design
---

The theory is great: [Design for basic, mobile phones first and then target capable browsers with @media queries](http://leonpaternoster.com/2010/10/notes-on-designing-for-mobile-phones-even-if-theyre-not-made-by-apple/). That way your website works across all mobile devices, not just those made by Apple.

But there's a problem. Because websites have traditionally provided no support for mobile phones, some mobile browsers attempt to make the best of a bad job by displaying the full site in the mobile browser window.

If you're viewing this on a ‘normal’ laptop or desktop reduce the browser window to see what it _should_ look like on a mobile phone. (And on my phone's default browser it does just that.)

[caption id="attachment_1488" align="alignnone" width="563" caption="How my website should look on a mobile phone (i.e. without @media queries)"]![The mobile version of leonpaternoster.com: One column, no horizontal scrolling](http://leonpaternoster.com/wp-content/uploads/2010/10/mobile.jpg)[/caption]

[Opera for Mobile](http://www.opera.com/mobile/), however, displays the complete, wide screen version on the small screen and allows me to select an area to zoom into. It works pretty well, but the whole point of serving up styles for a narrow screen is to make the process of reading as seamless and easy as possible. Selecting areas and scrolling horizontally remains a pain.

For sites that are beyond the pale, Opera has a _mobile view_ that basically strips out styles altogether. This is really handy if I want to access my bank account because [Natwest](http://natwest.com) is unusable on a mobile screen, but it messes up this site visually; `display: none` doesn't work and the margins and font sizes are ugly.

What this means is that Opera for Mobile (my phone browser of choice) doesn't do ‘proper’ responsive design. It's hard to see how this can be resolved as the _mobile view_ will be invaulable as long as there are websites that don't view properly on mobile phones.

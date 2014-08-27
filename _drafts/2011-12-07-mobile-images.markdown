---
author: admin
comments: true
date: 2011-12-07 16:26:41+00:00
layout: post
slug: mobile-images
title: Mobile first images should work well on mobile phones
wordpress_id: 2370
categories:
- Articles
tags:
- compression
- data
- design
- images
- mobile first
- Opera Mini
---

Ideally, the `img` tag would allow us to specify different images for different viewports. Something like (via [Rethinking the mobile web](http://www.slideshare.net/bryanrieger/rethinking-the-mobile-web-by-yiibu)):

    
    <code><img> <source="leon-small.jpg" media="max-device-width:680px"> <source="leon-large.jpg" media="min-device-width:681px"> </img></code>


But it doesn't, mainly because `img` comes from a time when the size of your screen wasn't particularly important. Everyone used chunky beige desktops and two foot deep monitors.

In the iPhone age, this causes a problem. We want to build websites that scale to various size viewports. We don't want large images to create horizontal scroll bars.

The simplest solution is to link to an image that looks right on a wide screen and then add a CSS rule that limits its dimensions:

    
    <code>img {max-width: 100%;}</code>


This works, but doesn't stop our server sending a large file to a mobile phone. This problem can be alleviated by your browser ([Opera Mini sends pages to Opera's servers for compression](http://my.opera.com/chooseopera/blog/2011/11/23/opera-mini-compression-and-updates) before they're downloaded by the mobile device), and mobile operators will also do some compression work for you. But if you're sending lots of kbs to a mobile browser on a ropey connection, the chances are the page will grind to a halt and seize up.


## Complex solutions and rounded corners


There are ways round this. They're pretty complex. Which is why this comment added to [a 24 Ways article on responsive images](http://24ways.org/2011/adaptive-images-for-responsive-designs) stood out:


> … if the 320 pixel-wide image is enough to get the point across, why are you wasting the bandwidth and screen real–estate of the desktop user with the larger image?

I think the real problem might be that there’s still a lot of images out there that are tightly related to the content, but at the end of the day are really just decorative. There to break up the text, but not to illustrate a point. [Mike Gossman](http://24ways.org/2011/adaptive-images-for-responsive-designs#c009943)


I like this idea. I'm not saying it's practical in the real world, but there's something logical about accepting the way things are getting on with it.

Think about how web pages generate rounded corners. A few years back you'd be fiddling around with 4 background images and 40 lines of CSS. Now, `border-radius: 0.25em;` does the job.

Does anyone still waste their time with tiny background images of curves? There are millions of pages out there that aren't displaying rounded corners to Internet Explorer. Has this caused anyone, anywhere a problem?

So why not serve up smaller images until the `img` tag changes, and adopt a _mobile first_ approach to your imagery?
  *[CSS]: Cascading Stylesheets

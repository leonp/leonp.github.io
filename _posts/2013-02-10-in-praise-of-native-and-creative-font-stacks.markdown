---
author: admin
comments: true
date: 2013-02-10 09:49:45+00:00
layout: post
slug: in-praise-of-native-and-creative-font-stacks
title: In praise of native and creative font stacks
wordpress_id: 3227
categories:
- Article
- Design
---

Web fonts give us access to a range of new typefaces that we can use across operating systems and browsers. The process is simple: choose an appropriate typeface and enjoy a modern looking website that looks more or less the same everywhere.

This is a good thing, but I feel there's still a place for old fashioned font stacks that cycle through the typeface options available to the user's operating system. There are a couple of reasons for this:

* Designers are using larger fonts sizes as well as new typefaces. Lots of native typefaces look OK at 20 pixels, which means we can explore typefaces we wouldn't have even considered a few years back. Believe it or not, designers once thought that using 11 pixels for body copy was OK. Only Georgia and a handful of sans serifs are legible at 11 pixels.
* Native fonts save users a download. As with all these things, a few hundred k may mean nothing if you're using an iPad next to a broadband router, but if you're stuck with a ropey mobile connection every byte becomes important.

[Creative and native font stacks enjoyed a short period of popularity](http://www.sitepoint.com/eight-definitive-font-stacks/) a few years back. This is a call to give them another go.

## An example

At the time of writing I'm not using `font-face`. Instead, I'm using this font stack:

`'Hoefler Text', cambria, 'Bitstream Charter', georgia, 'dejavu serif', serif`

Now, I'm not saying this will be OK for everyone. Although all these typefaces are serifs, they're different _types_ of serif. Cambria is a million miles from Hoefler Text, but I'm not interested in this degree of consistency (and nor are readers). I want to exploit the user's operating system to create a pleasant reading experience.

Here's the thinking behind this stack:
	
* Apple devices will use [Hoefler Text](http://en.wikipedia.org/wiki/Hoefler_Text), a beautiful, classic typeface. I've put this before Cambria because it's quite possible mac users have Cambria installed on their machine with Microsoft Office. Better still, iOS includes Hoefler Text.
* Windows devices will use [Cambria](http://en.wikipedia.org/wiki/Cambria_(typeface)), a friendly, transitional typeface included with Vista, Windows 7 and Windows 8.
* Gnome (Ubuntu, Mint etc.) users will see [Bitstream Charter](http://en.wikipedia.org/wiki/Bitstream_Charter), a jolly, angular typeface designed by Georgia's creator [Matthew Carter](http://en.wikipedia.org/wiki/Matthew_Carter). In my opinion it has one of the best bold weights of any on screen serif.
* Anyone else will see either Georgia or, failing that, the operating system's default serif typeface.

If you're reading this on a Windows PC you'll see something different than when you read it with your iPhone. I don't think that matters—what does is that it's legible and attractive. What do you reckon? [Tweet me with your thoughts](http://twitter.com/leonpaternoster).

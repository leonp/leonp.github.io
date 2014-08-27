---
author: admin
comments: true
date: 2009-03-06 14:17:40+00:00
layout: post
slug: fancy-transparencies-with-rgba
title: Fancy transparencies with rgba
wordpress_id: 490
categories:
- Articles
tags:
- css
- transparency
- visual effects
---

Transparency is not something I've used much in the past, probably because it traditionally involves messing around with images (which is not really my thing: I'm a textual type).

But CSS does allow authors to apply transparency to textual components, and I've recently discovered the `rgba` value. I like `rgba` because it doesn't use any browser specific syntax, and it's very logical.



	
  * [See an example of rgba in action](http://leonpaternoster.com/labs/transparent/)

	
  * Download the [zipped HTML, CSS and image files](leonpaternoster.com/downloads/transparent.zip)




### What's rgba?


Like the `rgb` value, three numbers are used to reference the red, green and blue elements of any given colour. `rgba` accepts an additonal value (the a, or _alpha_ value) which determines how transparent the colour is on a scale of 0-1 (1 being opaque). So a black, half transparent colour would be set with `rgba(0,0,0,0.5)`.

[caption id="attachment_491" align="aligncenter" width="477" caption="This is not a picture of me"][![See what happens when the block is hovered over](http://leonpaternoster.com/wp-content/uploads/2009/03/transparency.jpg)](http://leonpaternoster.com/labs/transparent/)[/caption]

This value can be applied to any selector. Combined with the `:hover` pseudo class, authors can create some pretty effects without messing around with actual images.


### How my example works


It's basically a huge link with a background image. The default background color is normal, opaque yellow (hex `FFD100`), but the `a:hover` background value has been set to `rgba(259,209,0,0.5)` (i.e. the same yellow with 50% transparency). The additional text only changes to black when it's hovered over: the default state is yellow.

Unfortunately, only Firefox and Safari accept the `rgba` value. You can make other browsers degrade gracefully by setting a traditional background colour  value  above the `rgba` value. <del>Unsurprisingly, IE makes a pig's ear of it by _trying_ to do something, and failing. I therefore had to use a separate IE style sheet to get it working properly: overkill, perhaps, but it's the only way I could get it to work.</del>


### What could you use it for?


Erm, I'm not sure. Surprise images aren't great from a usability point of view, and it can be quite annoying accidentally making images appear as you mouse across the page. I quite like the idea of a blog front page where titles are displayed in this way. When the reader hovers over the title the image reveals itself, perhaps along with a summary of the post. I'd love to hear of any ideas you have, or any examples of it in the real world.

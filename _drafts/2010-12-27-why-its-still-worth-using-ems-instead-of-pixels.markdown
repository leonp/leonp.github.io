---
author: admin
comments: true
date: 2010-12-27 12:19:57+00:00
layout: post
slug: why-its-still-worth-using-ems-instead-of-pixels
title: Why it's still worth using ems instead of pixels
wordpress_id: 1591
categories:
- Articles
tags:
- css
- ems
- maintenance
- scale
- typography
---

[Florent](http://twitter.com/fvsch) wrote [an excellent overview of creating a vertical rhythm](http://covertprestige.net/2010/verticalrhythm/), arguing that If you want pixel precision, use pixels instead of ems, _nearly_ persuading me to re–revert to pixels. I say _nearly_: Although I agree that the accessibilty issue is a small one, and that the maths can become a pain, there is one reason I think it's worth sticking with ems, and that's _maintenance_.

The beauty of ems is that they [cascade](http://reference.sitepoint.com/css/cascade) through the stylesheet. So once you've set the body's font size, every element's dimensions are calculated from this figure. Change the body's font size, and everything — font sizes, margins, padding — changes dimensions accordingly. This saves a _lot_ of time if you want to make large scale changes to your website while retaining the same proportions.


## An example


Let's say you've decided to set your type to the following [scale](http://webtypography.net/Harmony_and_Counterpoint/Size/3.1.1/):



	
  * Secondary text: 12

	
  * Body copy (base size): 15

	
  * Third level headings: 19

	
  * Second level headings: 24

	
  * Titles: 32


If you're using pixels you'd simply set all font sizes, margins, paddings and borders around these values. Instead of reaching for the calculator to figure out 24/15 and, worse still, margins, padding and borders based on 24/15, you'd enter the desired value.

If you're using ems you're using a calculator and rounding to 3 decimal places. Although this becomes easier the more times you do it, pixels remain temptingly _easy_.

But let's say you decide you don't like 15 pixels as a base font size. It's too small. So you opt for the same scale, but base it on 16 pixels: 13, 16, 21, 26, 34. Now, if you've designed with pixels, you've a big job ahead of you — you've got to change _every_ font size, margin, padding and border value throughout your stylesheet; however, if you've used ems you have to change just one value, the body font size, and — as if by magic — all margins, paddings and borders expand in pefect harmony.

I can see this ease of maintenance becoming more important in the future as we adapt our typography to different viewports. If we can offer larger type to wider screens by simply altering one value in the stylesheet, it's going to save a lot of time.

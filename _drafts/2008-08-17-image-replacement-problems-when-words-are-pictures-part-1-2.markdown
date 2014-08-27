---
author: admin
comments: true
date: 2008-08-17 10:47:30+00:00
layout: post
slug: image-replacement-problems-when-words-are-pictures-part-1-2
title: 'Image replacement: problems when words are pictures (part 1)'
wordpress_id: 92
categories:
- Articles
tags:
- accessibility
- imagery
---

**Image replacement is used when a designer wants to use non-web safe fonts. Part 1 of this article looks at the disadvantages of replacing marked-up text with images.**

When it comes to designing websites, designers can choose from the following fonts (and this ignores users with a Linux variant installed on their PC):



	
  * Times

	
  * Helvetica/Arial

	
  * Verdana

	
  * Georgia

	
  * Trebuchet

	
  * Lucida


Of course, this can prove **limiting**, especially when a designer comes from a print background, where font choice is limited only by the designer's ability to purchase new fonts. Fonts can express the author's personality, structure information and aid readabilty.

So designers have a choice:



	
  1. Accept the situation and carry on with the 6 fonts listed above, or;

	
  2. **Replace** text with images of text.




### Problems with image replacement


[caption id="" align="aligncenter" width="512" caption="The font's garamond italic - but an image of words is meaningless to screen readers"]![A picture of a sentence, italicised garamond on a pink background. It says these are not words](http://farm4.static.flickr.com/3061/2769749103_03d054b873_o.gif)[/caption]



Workload
    Instead of simply wrapping headings in `h1–h6` tags designers have to create them using imaging software. Even if this is automated, the process of entering the text into an application, copying the resultant markup tag and pasting it into an HTML document is relatively **laborious**. Using the [SIFR](http://www.mikeindustries.com/blog/sifr/) method requires even more work.
The heading text can't be copied
    Let's say I want to **copy** an article from a website, paste it into a word-processing document and format it for printing. This is simple when copying from an HTML document with plain textual headings. On the other hand, if images have replaced text, I couldn't reformat the heading: in fact, if background images have been used I wouldn't have any headings to edit at all.
Images cause accessibility issues
    Without visual cues such as bolding and colour, screen readers rely on the _structure_ of a document to derive meaning from it. As an image is not a heading it has an inappropriarte **meaning** to a screen reader. The Firefox [screen reader](http://en.wikipedia.org/wiki/Screen_reader) emulator extension [Fangs](http://www.standards-schmandards.com/projects/fangs/) demonstrates this quite clearly.
    Let's take this simple example of a heading marked up using a standard `h1` tag:
    

    
    <code><h1>Text should be text, not pictures</h1></code>



    This is what Fangs outputs:
    


> Page has one heading and no links An example of a heading dash Internet Explorer Heading level one Text should be text, not pictures



    


> Heading list: Text should be text, not pictures: 1



    Let's replace the `h1` tag with an image:
    

    
    <code><img src="#" height="200" width="500" alt="Text should be text, not pictures"></code>



    This is what Fangs outputs (i.e. what a screen reader would say):
    


> An example of an image used as a heading dash Internet Explorer Graphic This is the top level heading of this document



    The headings list is empty
Google won't like you
    **Search** engines approach HTML documents in the same way as screen readers; they use structure to derive meaning. In order to ascertain what a document is about (and its subsequent appearance in search query listings), Google will look at the page's `title` and `h` tags and weight them accordingly. `Alt` tags are useful as they will tell Google what meaning an image is conveying, but a heading occupies a higher level within a document's **hierarchy**.
Designers therefore use several methods to overcome these problems. I'll discuss these in Part 2 of this article.

If you liked this article, you might also be interested in [5 web design sins from the experts](http://leonpaternoster.com/2008/06/5-web-design-sins-from-the-experts/).
  *[HTML]: HyperText Markup Language
  *[SIFR]: Scalable Inman Flash Replacement

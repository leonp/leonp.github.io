---
author: admin
comments: true
date: 2009-05-31 18:40:01+00:00
layout: post
slug: what-is-semantic-html
title: What is semantic HTML?
wordpress_id: 650
categories:
- Articles
tags:
- html
- microformats
- semantics
- structure
---

Or, as another question: Which is the more semantic of these?



	
  1. `<div class="col3 left">`

	
  2. `<div class="content-entry">`


My natural inclination is to say #2, but I'm not sure it is. I don't think the answer is clear when we consider to whom (or what) it's more semantic.


## HTML aids meaning through structuring content


Take this example of text that hasn't been marked up:


> Two blog formats: magazines and journalsMay 26, 2009Blogs can be very loosely categorised as either journals or magazines, although many blur the line between the two formats.Continue reading this postHow print and web are differentApril 30, 2009Jason Santa Maria's SVA Dot Dot Dot Lecture provides a wonderful overview of the differences between print and web design. It also raises some interesting questions about the history of web design, and how positive an influence print is.Continue reading this post


We can discern the meaning of this text (with some effort) because the author's words, punctuation and syntax are clear enough. However, its meaning can be made a lot clearer if we use HTML to tell the browser what textual elements we're using (headings, paragraphs and anchors in this case):





## Two blog formats: magazines and journals


May 26, 2009

Blogs can be very loosely categorised as either journals or magazines, although many blur the line between the two formats.

Continue reading this post


## How print and web are different


April 30, 2009

Jason Santa Maria’s SVA Dot Dot Dot Lecture provides a wonderful overview of the differences between print and web design. It also raises some interesting questions about the history of web design, and how positive an influence print is.

Continue reading this post


So we can certainly argue that using tags (<p>, <ul>, <h1>, <a> et al) makes documents more meaningful for the reader. But does using classes and IDs give content some sort of semantic 'boost'?


## Tags+semantic classes=even more meaning?


Let's look at how we could mark up the dates in the above example:

`<p class="published">April 30, 2009</p>`

`<p>April 30, 2009</p>`

In what ways does the addition of the class _published_ make the meaning of the information any clearer to the reader? Both are interpreted as paragraphs by the browser and the purpose of the content within the paragraph is self-evident. Besides, the reader won't be aware of the class unless he or she inspects the HTML.

The class may be useful for the page designer because he or she could style the date differently, but that could also be acheived with:

`<p class="grey">April 30, 2009</p>`

This means that the concept of classes and IDs can aid the visual meaning of a document (screen readers are completely disinterested), but the semantic content of the class or ID is unimportant to readers. It simply has to exist, as a 'hook'. Returning to the original question, the code snippets are equally semantic (or lack additional meaning to the reader to the same degree).


## More meaning for designers and authors?


The W3C group makes the following argument for using semantic class names:


> They describe what a certain element represents, and they are not likely to change. A warning will always remain a warning, no matter how much the look of the page changes. [Use class with semantics in mind](http://www.w3.org/QA/Tips/goodclassnames)


In other words, when we design web documents, we'll save time when we restyle the appearance of page elements if we use class names that describe its purpose rather than its appearance. While this is true, I think there's an equally compelling reason for using non-semantic, presentational names, especially when designing complex sites that will use different layouts across pages.

For example, grid frameworks allow designers to quickly divide web pages into 12 or 16 column grids. If we had to repeatedly define our layout elements using separate ID and class dimensions, this will soon become labourious.

However, if we can call on a set of standard dimensions declared just once in our stylesheet, this will save a lot of time and effort. This is why `<div class="col3 left">` is so useful and, if it's no less semantic than `<div class="content-entry">`, there's no reason not to use it.


## Where “semantic” names are useful: Microformats


If document and software authors could agree on a standard set of informative class names then semantic HTML could prove to be of great benefit in the future. This is what [microformats](http://microformats.org/about/) attempt. An example of a microformat is [hAtom](http://microformats.org/wiki/hatom), which standardises how syndicated content (blog entries, for example) is classified. To follow the standard, we'd have to make sure we use class names such as _entry-title_ and _author_ when marking up our content.

This could be used in many ways. For example, if search engines recognised the hAtom standard then queries could return more interesting and useful information, displaying the publication date, author name, summary etc.


## Use semantic and presentational class names


We've seen that while using semantic class names doesn't magically boost the meaning of documents for readers, they can provide benefits for page designers.

On the other hand, presentational names can be extremely useful when developing complex sites consisting of a range of documents.

The great thing about CSS is that we can give elements both IDs and several classes. So the answer to our original question is to add a further option:

`<div class="entry-content col3 left">`

So what do you think? Are you a pragmatist or a semantic purist? Or both?

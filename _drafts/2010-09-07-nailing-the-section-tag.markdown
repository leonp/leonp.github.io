---
author: admin
comments: true
date: 2010-09-07 20:06:10+00:00
layout: post
slug: nailing-the-section-tag
title: Nailing the section tag
wordpress_id: 1397
categories:
- Articles
tags:
- div
- html5
- section
- semantics
---

## Why use section id="content"?


HTML5 offers document authors a means of replacing the traditonal, ‘meaningless’ `div`–based markup of previous versions. A typical HTML document used to be structured along the lines of `div id="header", div id="content", div id="sidebar", div id="footer"`. HTML5 offers a ready–made, easy to use, _nearly_ complete replacement: `header, content, aside, footer`. Replace and paste and you're HTML5–ready.

The problem with that, of course, is that there is no `content` tag. Naturally enough, HTML authors don't want to leave that awkward `div` in there reminding them of their past semantic misdemeanours. So they use `section id="content"`, because the content is a section of the HTML document, right?


## Why section id="content" is wrong


The [the spec](http://www.w3.org/TR/html5/sections.html#the-section-element) says a section is:


> … a **thematic grouping** of content, typically with a heading [my emphasis]


The problem is that `div id="content"` was never used to group thematically related content. Instead, it served two important, but unsematic purposes:



	
  1. to serve as a styling hook

	
  2. to provide an anchor for skip links




## Understanding document structures and using section properly


This pseudo, `div`–based (essentially visual) way of thinking about HTML documents is the biggest barrier to ‘getting’ _all_ versions of HTML. In X/HTML (to version 4) it was headings that established a document's outline, not `div`s. For the purposes of creating a document outline `div` has always been ignored.

In HTML5 it's sectioning elements that do the job of headings; `div` is still not a [sectioning element](http://www.w3.org/TR/html5/content-models.html#sectioning-content) (distinct from a `section`; the terminology can be confusing).

`section` can, of course, be used to group thematically related content within `div id="content"` (or any other `div`). There _should_ be a higher–level heading or sectioning element within your document because it makes sense to use `section` to split larger pieces of content into comprehensible chunks. This larger piece of content maybe the document's `body`, where the `h1` lives free of any sectioning tags, as in the spec's [_graduation programme_ example](http://www.w3.org/TR/html5/sections.html#the-section-element).


## The future of div id="content"


Ironically enough HTML5 has made me a lot more relaxed about `divs`. Now I understand how HTML documents are outlined I'll brazenly use a `div` if I want to style something, or, as is traditional, provide an anchor.

However, sometimes it may be appropriate to replace `div id="content"` with a ‘proper’ sectioning element. One example is when the content could be syndicated and the `article` tag used. Even then, there's nothing wrong with placing the `article` between the `div` tags. I'm sure `div id="content"`will be around for years to come. And why not.
  *[HTML5]: HyperText Markup Language 5

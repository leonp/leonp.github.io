---
author: admin
comments: true
date: 2010-10-17 20:27:46+00:00
layout: post
slug: time-html5-and-google-search-results
title: Time, HTML5 and Google Search results
wordpress_id: 1481
categories:
- Articles
tags:
- Google
- html5
- sematics
- time
---

Came across a Google oddity while testing out a few search terms from my website (we all do it, right?)

[The article in question is about WordPress search](http://leonpaternoster.com/2010/09/improving-wordpress-search/), which I wrote on September 1st 2010. This is how it appears in Google search listings:

[caption id="attachment_1482" align="alignnone" width="606" caption="Google search result excerpt; publication date is wrong"]![Google search result excerpt; publication date is 9 Jan 2010](http://leonpaternoster.com/wp-content/uploads/2010/10/goog.jpg)[/caption]

Which is strange, considering the date I wrote it. Here's how it appears on my blog:

[caption id="attachment_1483" align="alignnone" width="388" caption="01/09/10 means 1 September 2010 in the UK"]![How the publication date is shown on my blog: 01/09/10](http://leonpaternoster.com/wp-content/uploads/2010/10/blog.jpg)[/caption]

Of course, 01/09/10 means different things to different people; if you're in the US it does indeed mean 9th January 2010, while in the UK it means 1st September 2010.

Fair enough, you might think—you can't expect Google to guess the author's intention (after all, the document's declared language is `en-us`). However, there's a little bit more going on here than meets the eye. Here's the relevant HTML:

    
    <code><time datetime="2010-09-01T20:03:05+00:00" pubdate>01/09/10</time></code>


Note the `datetime`. This value isn't open to intepretation, and it's ‘machine readable’. It's telling the machine (in this case the Google search robot) that the article was published on the September 1st 2010 at 3 minutes and 5 seconds past 8 in the evening (see [the wonderful Dive Into HTML5 for an explanation](http://diveintohtml5.org/semantics.html#time-element) on how `time` works).

So what's happening? As far as I can work out, it's one (or a combination) of:



	
  * Google doesn't recognise `time`

	
  * Google doesn't read `datetime`

	
  * Google reads human dates but not machine dates

	
  * Google respects the document's language setting and interprets a human date accordingly

	
  * Google ignores the document's language setting and interprets dates as American dates


Obviously this is unimportant in the scheme of things, but it's interesting to see what would happen if I marked up [the publication date using hatom](http://microformats.org/wiki/datetime-design-pattern). Would Google read the time in the `title`?

It's also worth taking a look at [Florent's time and HTML 5](http://covertprestige.net/2011/pagedate/) article and [his test page](http://covertprestige.info/html/robot-spiders/html5-time-2.html).
  *[HTML]: HyperText Markup Language

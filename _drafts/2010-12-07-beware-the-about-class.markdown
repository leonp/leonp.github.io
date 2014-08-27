---
author: admin
comments: true
date: 2010-12-07 13:29:10+00:00
layout: post
slug: beware-the-about-class
title: Beware the about class
wordpress_id: 1551
categories:
- Articles
tags:
- Google
- hatom
- microdata
- microformats
- SEO
---

[I've been updating themes recently](http://leonpaternoster.com/2010/12/the-scherzo-theme-for-wordpress-update/). One of the many great things about WordPress is that it generates markup with [microformat classes](http://microformats.org/), thereby giving your posts a ‘semantic boost’. This means search engines will be able to extract information such as dates, authors and titles easily from your posts, and — once micordata has been properly adopted — more sophisticated information, such as entry summaries (using the `entry-summary` class).

[caption id="attachment_1559" align="aligncenter" width="526" caption="Adding microformats to a WordPress theme"]![Some code with microfomats](http://leonpaternoster.com/wp-content/uploads/2010/12/code.jpg)[/caption]

I enhance WordPress's work by adding more classes from [the `hatom` microformat](http://microformats.org/wiki/hatom) (including said `entry-summary` class). While I was updating [my Scherzo theme](http://leonpaternoster.com/2010/12/the-scherzo-theme-for-wordpress-update/) a thought struck me. If Google is able to extract semantic data from a page it must look at the text enclosed by tags with a `class` attribute. What if it used this functionality beyond the scope of microformats? For example, what if it extricated some _about_ information from this HTML?:

`<small>© 2010 Leon Paternoster ∼ <span class="about">A blog about web design and writing</span>. Built on WordPress & the Scherzo theme by Leon Paternoster.</small>`

I decided to use this HTML (`about` isn't, as far as I'm aware, part of any microformat) on my blog in a place where you wouldn't expect to find it (namely, the `footer`) so that I could be reasonably sure Google wasn't looking at any other structural factors when extracting data. Note that the code appeared on _every_ page of my website.

I also added a meta tag with some different content because Google normally uses this text when it displays search engine result text:

`<meta name="description" content="A blog about web design, writing and the internet.">`

I waited a few days and Googled myself. Here's what Google displayed in its search results:

[caption id="attachment_1553" align="aligncenter" width="526" caption="Google search results for 'Leon Paternoster'. Note the page descriptions."]![Google search results for 'Leon Paternoster'](http://leonpaternoster.com/wp-content/uploads/2010/12/google-search.jpg)[/caption]

So you'll see that Google did in fact extract the text wrapped in my `about` span. Interestingly, Google appears to give this markup more weight than the `meta` tag.

You'll also note that, for some reason, Google displayed the text around the extracted meta data, resulting in a rather messy entry. But that's not the only problem. The search for ‘Leon Paternoster’ returns several of my blog entries (_Improving WordPress search_ in the above image). Instead of displaying the text wrapped in the post's `entry-summary`, or some text from the post content, it adheres to the text it finds in the _about_ `span` in the footer, which is pretty useless as a description of the post's content (and shows that Google interprets `about` as information about the document rather than the author).

It's good that Google attempts to extract meaning from a page's class and ID structure, but I think that straying from a set of pre–defined rules (such as a microformat) makes it difficult to predict how your markup will affect search engine listings (or understand exactly what you're marking up) —you should certainly use the `about` class with care.

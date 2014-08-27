---
author: admin
comments: true
date: 2010-09-01 19:03:05+00:00
layout: post
slug: improving-wordpress-search
title: Improving WordPress search
wordpress_id: 1371
categories:
- Articles
tags:
- search
- WordPress
---

## What's wrong with WordPress search?


Two things, mainly: The search itself and the way WordPress presents the results. Let's say you're searching for a post I published a while back about [The Times recent redesign](http://leonpaternoster.com/2010/05/times-in-sensible-nav-menu-shocker/). You might (logically enough) tap ‘new Times design’ into the search box. Here's what you'd get:

[caption id="attachment_1372" align="alignnone" width="588" caption="Search results for 'new times design' don't return the article about The Times redesign"]![Search results for 'new times design' don't return the article about The Times redesign](http://leonpaternoster.com/wp-content/uploads/2010/09/actual-search-results.jpg)[/caption]

The article isn't returned at all because of the over–literal way WordPress searches through posts.


## How WordPress searches posts


WordPress returns a post if it finds _every_ word in your search phrase as a string within the title or content. If every word isn't contained in the post then it won't be returned. Note that it looks for strings rather than words, so a search that contains the word ‘new’ will find words such as ‘newspaper’, ‘news–stand’ and ‘Newcastle’.

It ignores proximity, so it doesn't matter if the words ‘new times design’ occur one after another or are scattered throughout the post (or scattered throughout the post as parts of possibly unrelated words). Even more annoyingly, it doesn't search excerpts, so even if the exact phrase occurs in the excerpt, the search won't find it:

[caption id="attachment_1373" align="alignnone" width="588" caption="The article we were looking for even contains the exact search phrase in the excerpt"]![The article header and excerpt text, which contains the exact search term](http://leonpaternoster.com/wp-content/uploads/2010/09/actual-article.jpg)[/caption]

All strings are equal to WordPress, so using ‘the’ in your search term will generate a search ‘hit’ of equal value to a word that is more relevant, even if the post only contains strings of which ‘the’ is a substring; ‘another’, for example.


## How WordPress displays search results


Having ‘found’ a bunch of posts in the database WordPress will display them using the `search.php` template and a loop. Loops are good for displaying sequential information, but inappropriate for displaying information that requires fuzzier sorting (such as by relevancy. Of course, WordPress has no concept of relevancy anyway).

This problem is exacerbated by the fact that WordPress is limited by what it can display within a loop. As there is no `search_snippet()` function theme authors can only display, at best, the post's excerpt, and hope that this bears some relation to the search term. Some themes will display the whole post, which makes scanning for relevant results next to impossible.


## How to improve WordPress search


WordPress needs to implement the following:



	
  * whole post search, including the excerpt

	
  * optional tag and category search

	
  * search for whole phrases, as well as individual words

	
  * search for complete words, surrounded by spaces, not just strings

	
  * some form of weighting and relevancy: attach more relevance to non–common words, phrase matches and word frequency

	
  * allow search loops to sort posts by a relevancy score

	
  * implement something like a `search_snippet();` function which returns text from a post around a search match

	
  * output HTML that can be styled (a `mark` tag would be useful here, but a `span` would be fine)


There are a few search plugins that can enhance WordPress search, but it's such a basic feature of a website that I think something like [Sphider](http://www.sphider.eu/) or [Lucene](http://lucene.apache.org/java/docs/index.html) should be incorporated within the core files.

Or maybe blogs don't need advanced search? Perhaps users rarely visit blogs to find a particular piece of information. What do you reckon?

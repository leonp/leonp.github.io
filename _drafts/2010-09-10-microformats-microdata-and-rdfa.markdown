---
author: admin
comments: true
date: 2010-09-10 15:26:19+00:00
layout: post
slug: microformats-microdata-and-rdfa
title: Microformats, microdata and RDFa
wordpress_id: 1406
categories:
- Articles
tags:
- Google
- html5
- microdata
- microformats
- RDFa
- semantics
---

[A post on Brian Cray's blog](http://briancray.com/2010/09/08/html5-microdata/) got me thinking about the ways we can add more information to our web documents so they basically _do more stuff_. I like a good chat about [the semantics of ](http://leonpaternoster.com/2010/09/nailing-the-section-tag/)[HTML5](http://leonpaternoster.com/2010/09/nailing-the-section-tag/)[ tags](http://leonpaternoster.com/2010/09/nailing-the-section-tag/) as much as the next man, but I am certainly no expert on microdata (or _The Semantic Web_ — I'm unsure of the terminology). Here's what I'm thinking:

<!-- more -->


## What I want additional data to do


For me, the semantic web needs to provide some obvious, general and practical benefits. Such as:



	
  * provide search engines with more data about the document I'm marking up

	
  * enable search engines to display a bit more information about that document in search engine results (e.g. geographical data, ratings, contact info etc.). [Google's rich snippets](http://www.google.com/support/webmasters/bin/answer.py?hl=en&answer=99170) promise to do this.

	
  * enable browsers to do stuff with the document (e.g. extract information and use it in another application, such as an address book)


It should be pointed out that I'm not seeing much evidence of this sort of usage. While screenshots such as this

[caption id="attachment_1407" align="aligncenter" width="513" caption="A Google search listing that contains nicely formatted, specific event information"]![A Google search listing that contains nicely formatted, specific event information](http://leonpaternoster.com/wp-content/uploads/2010/09/webmasters_164506_rsevents.png)[/caption]

… are interesting I don't come across this stuff very often and it's having little impact on my online life. In other words, whatever format you use, people need to start doing things with the data.


## Semantic choices


There are three ways of adding semantic data to web documents:



	
  1. RDFa

	
  2. microformats

	
  3. microdata


I've plumped for microformats for several reasons:

	
  * they appear to be used a bit more than the other formats

	
  * they can do all the things listed in Brian's post

	
  * WordPress uses them (the `post_class` function adds an `hentry` class to an element and comment authors are marked up using `cite class="fn"`)

	
  * there are no custom vocabularies, which means I can go to a definitive scheme and add the ‘correct’ classes to my HTML. I don't really want to invent my own schemes —not enough time— and surely having standardised vocabularies makes widespread adoption more likely.

	
  * they're the easiest to get your head around

	
  * because microformats are added as classes I can style them as well, which means less work and more coherence in the meta structure of my documents (_not sure that makes sense!_). If I use microdata I have to add _itemscope_, _itemprop_ and _itemtype_ text **and_ _classes so I can style the information.**


As I say, I'm certainly no expert on this, so I'm more than willing to be corrected on any inaccuracies or plain wrong–headedness. Are you using additional data? And how?
  *[[HTML5](http://leonpaternoster.com/2010/09/nailing-the-section-tag/)]: HyperText Markup Language version 5

---
author: admin
comments: true
date: 2011-04-24 21:51:12+00:00
layout: post
slug: titles-citations-and-italics
title: Titles, citations and italics
wordpress_id: 3027
categories:
- Writing
tags:
- html
- semantics
---

Writing about this here as it's a bit obscure for [my (vastly popular and influential) blog](http://leonpaternoster.com).

Had a Twitter exchange about italics and citations with [@isemann](http://twitter.com/isemann) and the ever wise [@fvsch](http://twitter.com/fvsch). As I'm sure you're acutely aware, the once derided `i` tag has been refactored into HTML5:


> The `i` element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, a thought, a ship name in Western texts, or some other prose whose typical typographic presentation is italicized. [HTML5 spec](http://dev.w3.org/html5/spec/Overview.html#the-i-element)


When I first read about `i`'s resurrection (ha!) I was sceptical: why bother trying to make the purely presentational meaningful? But now I rather like it; `i` provides a more semantic catch all than `em`. Previously I would have marked up French phrases with `em` (not `span`; we're talking markup rather than microformats), so it would have been `It has a certain <em>je ne sais quoi</em>`. Silly, if you think about, as I'm not emphasising the French phrase. But it needs something to differentiate it from the surrounding text, and ‘an idiomatic phrase from another language’ fits far better.


## Titles and citations


I've also used `i` to mark up titles of books, programmes — anything.

Take this example:


> I'm going to watch <i lang="en">The Spiral</i> (nothing on<i lang="en">The Killing</i>, but good for a Saturday evening) [Tweet ID 61882494097698816](http://twitter.com/#!/leonpaternoster/statuses/61882494097698816)



Unfortunately (in my opinion) the spec states that we can use `cite` for _any_ work titles:


> The cite element represents the title of a work (e.g. a book, a paper, an essay, a poem, a score, a song, a script, a film, a TV show, a game, a sculpture, a painting, a theatre production, a play, an opera, a musical, an exhibition, a legal case report, etc). This can be a work that is being quoted or referenced in detail (i.e. a citation), or it can just be a work that is mentioned in passing. [HTML5 spec](http://dev.w3.org/html5/spec/Overview.html#the-cite-element)


I used `i` because the verb _to cite_ means to quote or list a _source_, whether _verbatim_ or by paraphrasing. Mentioning a work in passing is not the same as using it as a source in our own work: I'm not citing The Spiral in an essay about French TV drama, for example. But we do need to differentiate titles from their surrounding text, partly because convention dictates we italicise titles but also becuase we need to acknowledge the presence of a different text within our own writing. It's almost impolite not to do so.

But the spec says use `cite`, so we use `cite`.


## Languages


You'll also note I used a `lang` attribute in my tweet. Oddly enough, the Twitter page has no `lang` set at all, so, technically speaking, the language of my tweet is unknown. However, as it's clearly English, [Florent was quite right to state that it was unnecessary](http://twitter.com/#!/fvsch/statuses/61886970095353856).

_Unnecessary_ doesn't mean _improper_, and I'd argue it served _some_ use in that it drew attention to the fact that the title is a translation into English from the original French. Of course, you'd only pick up on that only if you go around looking at HTML source.
  *[HTML5]: HyperText Markup Language 5

---
author: admin
comments: true
date: 2010-01-07 22:03:19+00:00
layout: post
slug: adventures-in-html5-part-one-use-it-now
title: 'Adventures in HTML5. Part one: Using HTML5 now'
wordpress_id: 917
categories:
- Articles
tags:
- css
- html5
- meaning
- screen readers
- semantics
- structure
---

There's no real reason I'm aware of for not using an HTML5 DOCTYPE and HTML5 tags (with the exception of `audio` and `video`, [which can be fixed](http://diveintohtml5.org/video.html)). So that means the first line of any HTML document should be:

`<!doctype html>`

Which is reason enough to start using HTML5. But it also means that instead of structuring pages with:

    
    <code><div id="header">
    ... <div id="nav">
    <div id="content">
    ... <div class="post">
    <div id="sidebar">
    <div id="footer"></code>


You can use:

    
    <code><header>
    ... <nav>
    <article>
    ... <header>
    ... <section>
    ... <footer>
    <aside>
    <footer></code>


Which is _very_ exciting (and radically different from the last seven or so table–free years of markup). At last we can structure documents with _real_ tags. There will be less `<div>s` in the world, which is a good thing.


# Browser support


All modern browsers interpret HTML5 tags and allow CSS to style `aside`, `header` etc., and you can force Internet Explorer to join the party with a small snippet of javascript. I hotlink to some Google Code–hosted javascript by adding the following to the `head` section of HTML pages:

`<!--[if IE]><script src="[http://html5shiv.googlecode.com/svn/trunk/html5.js](http://html5shiv.googlecode.com/svn/trunk/html5.js)"></script><![endif]-->`

(Note the lack of a script `type`. That's one of the many great things about HTML5: It's stripped out lots of (X)HTML verbosity, which makes it a lot more _friendly_.)

Which means the following browsers and user agents don't interpret HTML5:



	
  * Internet Explorer with javascript turned off

	
  * Screen readers


Which isn't a problem because one audience is going to be absolutely tiny (is there any reason to browse in IE with javascript turned off?) and the other will simply ignore the HTML5 tags (another great feature of HTML5 is the [graceful degradation](http://www.digital-web.com/articles/fluid_thinking/). Browsers adopt the standard at different rates, but most of the time the fall back option is perfectly acceptable).

_Most_ HTML5–specific tags are currently implemented by (ab)using the virtually meaningless `div` (`div` groups bits of content _arbitrarily_; it doesn't indicate _why_ these bits of content have been grouped). As screen readers do nothing with `div`s it makes no difference if we use `header` or `article` instead of `div id="header"` or `div id="content"`. And once screen readers start to _understand_ HTML5 users will begin to benefit from more meaningful documents. For example, screen readers could separate navigation from content by looking at the markup contained between `nav` tags.


# Caveat


As ever, all is not _completely_ simple. The problem HTML5 poses to screen readers is not the introduction of a new set of tags, but in the way it handles `h1`-`h6`. In previous HTML specs, <del>a document could only consist of 1-6 discrete headings</del> it made sense to only use one top level heading because it would mark up the document's title, and documents normally one have one title. So your document would use `h2`s, `h3`s _et al_ to head other pieces of content.

In HTML5 each _node_ can have its own hierarchy of headings (so each `header`, `footer`, `article` and `aside` can have an `h1`), although it doesn't have to (HTML5 is a good friend because it's so flexible) Looking at our traditionally marked-up page, it would be structured along the lines of:

    
    <code><div id="header">
    <h1>Site title</h1>
    ... <div id="nav">
    <div id="content">
    ... <div class="post">
    ... <h2>Document title</h2>
    <div id="sidebar">
    <h3>Sidebar section title</h3>
    <div id="footer"></code>


Whereas our HTML5 page can be structured like this:

    
    <code><header>
    ... <h1>Site title</h1>
    ... <nav>
    <article>
    ... <header>
    ... <h1>Article title</h1>
    ... <section>
    ... <footer>
    <aside>
    ... <h1>Aside section title</h1>
    <footer></code>


Which is logical, but means that screen readers (which use the traditional method) just see a bunch of first level headings, which corrupts the structure of the document.

It's difficult to suggest a way round this. HTML5 is our flexible friend, so you can continue to use a strict `h1`-`h6` structure, but it strikes me as illogical, considering the new DOM structure which allows us to have document level footers _and_ footers within articles.


# So are you using HTML5 on a day to day basis?


Or is it still too experimental for real client work?
  *[DOM]: Document Object Model
  *[HTML5]: HyperText Markup Language
  *[CSS]: Cascading Style Sheets
  *[(X)HTML]: X=extensible

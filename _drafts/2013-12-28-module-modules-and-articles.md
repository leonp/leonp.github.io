---
title: Module modules and articles
author: Leon
excerpt: Getting to grips with frameworks and SMACSS.
layout: post
permalink: /2013/12/module-modules-and-articles/
categories:
  - Code and technology
---
As it&#8217;s Christmas and I have a week and a bit off work I&#8217;ve been taking a look at various front end frameworks. The idea being to improve my coding and see if any of them fit my way of working.

(I have done all the Christmas stuff too, in case you&#8217;re worried.)

So I&#8217;ve tried [Bootstrap][1] and [Barebones][2] (which makes more use of attributes than classes) and explored the component/module way of thinking (specifically Jonathan Snook&#8217;s [SMACSS][3] system).

It&#8217;s good to see a common set of markup/style patterns emerge over time – it saves us the bother of abstraction, which is hard work; instead, we can just reach for `vertical nav`, `horizontal nav`, `media`, `breadcrumbs`, `jumbotron` etc. when we build and code HTML.

I&#8217;d like to build my own framework. Partly because I&#8217;m old enough to feel vaguely guilty at simply dropping code into a website, but mainly because I do certain things my own way. This isn&#8217;t a wholly good thing: because I got into the web at a time when it wasn&#8217;t uncommon for a single person to do *everything* (code, design, write and even script) on a website themselves, and because my job also calls for a whole bunch of different things, I haven&#8217;t become as good a coder as I&#8217;d have liked. You spread yourself too thin.

Anyway, I&#8217;m still struggling with a few ideas:

## The difference between layout and modules

In Snook&#8217;s SMACSS system, the line between *layout* and *module* can become blurred. A grid system belongs squarely in layout, but some of the *fixed* layout elements (a site header, for example) *feel* like modules sometimes. Or rather: do we work with such fixed canvases these days? And is it possible to abstract the site header as some sort of pattern?

## Module modules and styling elements directly

I often create an `article` module for extended pieces of prose such as a blog article. Barebones and other systems (somewhat confusingly) offer a `module` module, but that&#8217;s a distinct, short block of content (a sidebar *about* block, for example) rather than an extended piece of prose.

Instead, both Barebones and Bootstrap style elements such as `p`, `ol` and `dl` directly, while SMACSS suggests putting these styles in its *base* section. I find this causes a specificity problem as you end up blitzing element margins in most modules. Similarly, both Bootstrap and Barebones reset or normalise elements, only to apply new paragraph margins and paddings straight away.

If you set `p` element styles they&#8217;ll get applied to a lot of HTML, which is, as Snook would put it, a *depth of applicability* problem.

I could be misunderstanding things, of course.

But I do really like this way of structuring HTML, even when it isn&#8217;t really necessary for a small site like mine. Once you&#8217;ve figured out your abstractions coding is fast and efficient. Now if I want to get really serious about development, I need to finally get to grips with a CSS preprocessor, and begin automating some of the deployment processes. I guess that&#8217;s what [Grunt][4] does. Always so many things to learn.

 [1]: http://getbootstrap.com/
 [2]: http://barebones.paulrobertlloyd.com/
 [3]: http://smacss.com/
 [4]: http://gruntjs.com/

 *[HTML]: HyperText Markup Language
---
layout: post
category: web
title: Running a library website on Jekyll (maybe)
---

We're making some changes to our website. Nothing _too_ major from a user's point of view, but I built the site back in 2013 and we do a lot more things on and offline now. Consequently, the IA needs rejigging and I want to simplify navigation (by [replacing the universal navigation menu with a more traditional approach](/2016/03/council-toolkit-no-universal-navigation-aberdeenshire/)).

I do want to make big changes to the back end. In 2013 I didn't use SASS and I hadn't got my head around abstracting CSS, which means the styles are a mess and I've built way too many WordPress templates.

I could improve the CSS structure within WordPress, but I'd also like to make everything a bit more streamlined, quicker and more secure. We currently use 10 plugins, including (excellent) [caching](http://wp-rocket.me/) and [firewall](https://sucuri.net/) services, but the main purpose of these is to implement static website features. Which raises the question <i>why not build a static site</i>?

As I've been using Jekyll on this site since 2013 it seems the most obvious candidate.

## It's madness using Jekyll (or Hugo, or Octopress, or Pelican)

### Static isn't dynamic

There are many reasons _not_ to build a static site, one of which is its staticness. That means no inbuilt forms, comments or anything interactive.

While there are plenty of third party services that'll fill in the gaps for you, time remains a really thorny problem on a static site because _now_ is when the site's built, not the actual _now_ you're sitting in at this moment in time. Consequently, events are difficult (but not impossible) &#8211; and any library website will need to do events in some form or other.

So Florent is right when he says

> "PHP site generators suck!" *writes a static site generator in Ruby/Node/Rust* "More dynamic pls!" *makes it run like PHP* <cite>[Florent, Twitter](https://twitter.com/fvsch/status/709417111542747136)</cite>

&hellip; which makes something like [Kirby](https://getkirby.com/) pretty attractive.

However, I think if you can crack events you've overcome the main problem static site generators pose, and you'll enjoy the benefits, especially when something like [Jekyll does data so well](https://jekyllrb.com/docs/collections/) (think about all that data you can add to branch pages).

### WordPress has several million plugins

I need sliders, events linked to locations, forms with downloads, new custom fields, author images etc. etc. etc. In WordPress, you can get all of these &#8211; and lots more &#8211; in a couple of clicks and some fiddling around with settings. And I get a <abbr title="Grapical User Interface">GUI</abbr>.

## Static sites are good because&hellip;

I do like the novelty and challenge of writing a work site in Jekyll, but there are some very solid reasons for going static:

### They're fast

No page construction and no database calls, just the plain HTML your browser works with. No more of those baffling pauses while WordPress does _something_.

### They're reliable

A WordPress site can fail, or at least hang for a while for lots of reasons. Now, you can get yourself a good caching plugin which will largely solve this problem, but you still need to have a database to serve up your static files. There are _no 500 errors_ if you are just serving plain HTML.

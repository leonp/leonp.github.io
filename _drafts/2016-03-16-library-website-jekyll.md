---
layout: post
category: web
title: Running a library website on Jekyll (maybe)
---

We're making some changes to our website. Nothing _too_ major from a user's point of view, but I built the site back in 2013 and we do a lot more things on and offline now. Consequently, the IA needs rejigging and I want to simplify navigation (by [replacing the universal navigation menu with a more traditional approach](/2016/03/council-toolkit-no-universal-navigation-aberdeenshire/)).

I do want to overhaul the back end. In 2013 I didn't use SASS and I hadn't got my head around abstracting CSS, which means the styles are a mess and I've built way too many WordPress templates.

I could improve the CSS structure within WordPress, but I'd also like to make everything a bit more streamlined, quicker and more secure. We currently use 10 plugins, including (excellent) [caching](http://wp-rocket.me/) and [firewall](https://sucuri.net/) services, but the main purpose of these is to implement static website features. Which raises the question <i>why not build a static site</i>?

As I've been using Jekyll on this site since 2013 it seems the most obvious candidate.

## It's madness using Jekyll (or Hugo, or Octopress, or Pelican)

There are many reasons _not_ to build a static site. One of the 

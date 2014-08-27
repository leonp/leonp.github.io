---
author: admin
comments: true
date: 2012-02-14 11:30:46+00:00
layout: post
slug: display-none
title: 'When display: none may still be useful'
wordpress_id: 2525
categories:
- Design
tags:
- accessibility
- css
- html
- navigation
---

I normally hide content from the screen using [the clip technique outlined by Jonathon Snook](http://snook.ca/archives/html_and_css/hiding-content-for-accessibility).  This means that it's not hidden from screen readers.

It's worth bearing in mind that `display: none` still has its uses, though. Recently I've been working on a mobile navigation menu which is hidden from wide screen users via a media query, and a widescreen navigation menu that's hidden in the base stylesheet. Up til now, I've been using the clip technique to hide these menus.

This _looks_ fine, but it was causing problems for my screen reader navigation menu, which would dutifully read both menus (or rather, I was viewing the page _sans_ CSS and seeing both menus). I was bodging round this by adding headings to both menus: _Quick links_ for the mobile menu and _Site navigation_ for the widescreen menu.

This resulted in a rather long menu. The solution (I think) is to head back to the old practice of using `display: none` to hide the menus from the relevant screens, so that screen readers would only read the shortened menu. I could then hide another link to a full menu displayed at the bottom of the page using the clip technique.

It's also worth nothing that an unstyled browser page doesn't necessarily relate to a  screen reader page. ([As Florent explains below](http://leonpaternoster.com/2012/02/display-none/#comment-82289).)

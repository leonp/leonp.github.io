---
author: admin
comments: true
date: 2012-01-08 09:05:17+00:00
layout: post
slug: mobile-navigation
title: Designing navigation for narrow screens
wordpress_id: 2413
categories:
- Article
- Design
tags:
- context
- design
- mobile
- usability
---

I plan to add a navigation menu to the next version of [Scherzo](http://leonpaternoster.com/wp-themes/). It's a pretty simple process, but can cause problems when the theme user creates a long list of navigation links.

In an ideal world we'd build a separate site for tablets and mobile phones, tailoring the layout and content according to screen size and offering different navigation menus according to the physical restraints of the screen, and the user's context.

This is an expensive and time consuming approach. It's far more efficient (and elegant) to write our HTML once and style it for the user's device. This is what Scherzo does.

However, long navigation link lists don't work too well on narrow screens. Horizontal lists will often stretch beyond one line, which looks plain ugly, while vertical lists will extend beyond the bottom of the screen, which is plain baffling. They get in the way of the content.

Take the [_New Adventures in Web Design Conference_](http://2012.newadventuresconf.com/) website. It's a gorgeous thing that scales perfectly on my old Nokia N78. However, the vertical navigation makes me scroll a lot before I reach the content (note: I guess this sounds like an argument for [the fold](http://www.boxesandarrows.com/view/blasting-the-myth-of). But there's a difference between stating that all important content should be placed above the fold – an absurd idea on mobile and desktop screens – and that it's OK if the navigation menu extends well below the bottom of the screen):

[caption id="attachment_2428" align="aligncenter" width="247" caption="The New Adventures in Web Design Conference website viewed on a Nokia mobile"]![The New Adventures in Web Design Conference website viewed on a Nokia mobile](http://leonpaternoster.com/wp-content/uploads/2012/01/nawd.jpg)[/caption]

There are a couple of solutions that allow us to retain all our navigation links while using a small amount of screen space, but they're not without their problems.


## The Select option


This technique displays a standard, long navigation menu on wide screens and replaces it with a `select` box on narrower screens. See the [Information Architects](http://informationarchitects.jp) website for an example:

[caption id="attachment_2423" align="aligncenter" width="868" caption="The iA widescreen navigation menu"]![The iA website menu on a laptop screen](http://leonpaternoster.com/wp-content/uploads/2012/01/ia-menu.jpg)[/caption]

[caption id="attachment_2417" align="aligncenter" width="372" caption="At narrow widths the iA site displays two select boxes instead of normal navigation lists"]![Information Architects' navigation menu](http://leonpaternoster.com/wp-content/uploads/2012/01/ia.jpg)[/caption]

While this solves our space problem, we've replaced it with another. From a usability perspective `select` lists are awkward for a few reasons:



	
  * they don't look like navigation lists

	
  * they require two actions to activate a link

	
  * they require more dexterity to use successfully than a properly styled list of anchors


What's more, this technique can generate bizarre markup. Your HTML would include a list of links _and_ a `select` box. You'd hide the link list at narrow widths and hide the `select` list from wider screen devices. If you're accessing the page using software that ignores CSS you'll see both.


## Move navigation to the bottom of the page


This technique moves the navigation link list from the top of the page to the bottom, where it doesn't get in the way of the content.

You place an in–page link to the navigation menu near the top of the page, thereby keeping to convention. See [Manuel Martensen](http://martensen.co/) for an example:

[caption id="attachment_2418" align="aligncenter" width="591" caption="Manuel Martensen's narrow screen navigation link. The menu link sends users to a different location on the same page."]![Manuel Martensen's narrow screen navigation link](http://leonpaternoster.com/wp-content/uploads/2012/01/manuel-top.jpg)[/caption]

[caption id="attachment_2419" align="aligncenter" width="591" caption="The navigation menu sits at the bottom of the same page"]![Manuel Martensen's navigation menu](http://leonpaternoster.com/wp-content/uploads/2012/01/manuel-bottom.jpg)[/caption]

However, there are problems:



	
  * as with the `select` approach, navigation takes one more step than usual

	
  * links to other parts of the page are baffling to most users. When we click a link we expect to be taken to a new page, or for options to reveal themselves where we clicked.

	
  * if we don't want to use the navigation menu we've lost our bearings


Manuel's implementation is inventive. When users hit the link to the navigation menu the page scrolls, which reinforces the notion that we are still on the same page. There's also a _top_ button that returns to the top of the page. But this alleviates rather than solves the problem.


## Think context and selection


I think there's only one real solution to this problem, and that's to limit the number of navigation links at narrower widths. Think about what your narrow screen users want to do on your site and only display these options to them.

At leonpaternoster.com you'll see just two navigation links on mobile devices: _home_ and _archives_. If you're reading this on a wide screen you'll see the change if you reduce the screen width. I figured the index, Scherzo and RSS links are largely superfluous as you can find them in post footers, or they offer a nice rather than essential means of navigating the site. They're of secondary importance.

Technically this is relatively easy to implement – just use a small piece of CSS to either hide or reveal items within the navigation list. Ideally you'll create a hide or similar class and add it to list items you don't want to display at narrow widths. This is the CSS I'm currently using:

    
    <code>header nav ul li.menu-item-1932 /* wp generated class */ { position: absolute !important; /* CSS nabbed from snook.ca */ clip: rect(1px 1px 1px 1px); /* IE6, IE7 */ clip: rect(1px, 1px, 1px, 1px); }</code>


The only problem here is that you'll need access to your site's styles in order to target your links, which may not be possible if you're using a CMS. Maybe WordPress and the like will build this function into their dashboards in the future.
  *[HTML]: HyperText Markup Language
  *[CMS]: Content management system
  *[CSS]: Cascading Style Sheets

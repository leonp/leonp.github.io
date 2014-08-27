---
author: admin
comments: true
date: 2010-01-24 22:27:33+00:00
layout: post
slug: unify-making-sites-simple-for-clients
title: 'Unify: making sites simple for clients'
wordpress_id: 1020
categories:
- Articles
tags:
- clients
- cms
- rutledge
- unify
---

# What's wrong with CMSs?


Let's say you're using [WordPress](http://wordpress.org) to power a website. Like many CMSs, WordPress uses templates to build HTML pages, which involves figuring out appropriate functions, syntax and how the templates slot together and work with the back–end.

Writing plain old markup (and some PHP bits and pieces) is a lot quicker, and you decide on the doctype and flavour of your markup. WordPress, on the other hand, forces certain structures on you: self–closing tags and comments wrapped in `<li>` tags, for example.

[caption id="attachment_1025" align="alignnone" width="562" caption="The WordPress admin area can be bewildering for non–techies"]![Screenshot of the WordPress back-end](http://leonpaternoster.com/wp-content/uploads/2010/01/wp.jpg)[/caption]

CMSs make things complicated for clients as well. Often the person responsible for a website has no background (or interest) in computers; the very concept of a CMS is enough to scare them off. Logging in, finding the relevant option and making amends adds a layer of abstraction to their mental model of the site. Far simpler if they can simply change content on a page.

Finally, for all the power they afford, CMSs can be maddeningly inflexible when it comes to changing _simple_ things. Let's say a site owner wants to alter their footer contact details. How do you achieve this is in WordPress without editing a template file? Having to explain to a client that you'll need to contact me to make this change isn't really satisfactory.

Far better if clients could simply change the text on the page.


# Enter Unify


[Unify](http://unify.unitinteractive.com/) is one of a number of apps that allow site owners to edit text on a live site. There's no back–end to deal with at all: The user visits example.com/unify, logs in and is returned to their home page. Icons indicate editable areas:

[caption id="attachment_1023" align="alignnone" width="562" caption="The green icons indicate editable areas"]![What a page looks like once you've logged in to Unify: green icons indicate editable areas](http://leonpaternoster.com/wp-content/uploads/2010/01/unify_menu.jpg)[/caption]

If the user clicks on an icon they can make changes to specific bits of content (or even whole blocks), review them and finally publish. Compared to logging into a CMS, it's pretty clear:

[caption id="attachment_1024" align="alignnone" width="562" caption="Editing text is easy in Unify"]![Editing an element in Unify. It uses a simple, clear set of labels and icons, similar to basic word-processor](http://leonpaternoster.com/wp-content/uploads/2010/01/unify_edit.jpg)[/caption]

Installation is quick and easy. You buy Unify, set up an admin account and upload a folder to the domain.


# Why it's good


Unify solves many of the problems a CMS poses. From the developer's point of view writing simple PHP that you have complete control over is both quick and fun (believe me: there's an almost guilty pleasure in just marking up pages). But it's clients that benefit most.

Firstly, they save money. While Unify costs 16USD (at the time of writing), the time a developer spends installing a CMS, creating a database, writing templates and explaining how it all works will cost the client more.

Most importantly, clients find Unify intuitive, which both reduces the number of help requests post–launch _and_ encourages site owners to write more. Once the excitement of a new site fades, a CMS can act as a deterrent for adding new content.

And because there's no CMS or database, the site's faster and less inclined to develop complex problems. Which means less stressed developers and clients.


# Conclusion


On the whole my experience of Unify has been very positive. The only problems I ran into with the software were a few javascript conflicts. These were quickly resolved when a new version was published (upgrades are currently free, and simple to install), and I got some sterling service from the people at [Unit Interactive](http://unitinteractive.com/) (their time is worth far more than the price, but I'm not complaining).

Sometimes, of course, a site will need a CMS (if there's a blog, for example), and developers will have to weigh up the time and effort required to develop more complex features against installing a CMS and finding a plugin that does the work for you. Another approach is to use things like the Google Calendar and Twitter APIs and Unify (but that's another post).

One piece of advice. Unify is flexible, and with great flexibility comes an even greater capacity for clients to make bad design decisions. If you place an (editable) one sentence summary of what a business can do on the home page don't be too surprised when that one sentence becomes a paragraph.

What do you reckon? Are you using Unify or a similar service? Or have you found a way of using CMSs for simple sites?
  *[API]: Application Programming Interface
  *[HTML]: HyperText Markup Language
  *[CMS]: Content Management System
  *[PHP]: HyperText pre-Processor

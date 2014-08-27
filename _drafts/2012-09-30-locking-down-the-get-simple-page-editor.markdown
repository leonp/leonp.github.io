---
author: admin
comments: true
date: 2012-09-30 08:02:21+00:00
layout: post
slug: locking-down-the-get-simple-page-editor
title: Locking down the Get Simple page editor
wordpress_id: 3059
categories:
- Design
tags:
- Get Simple
---

[Get Simple](http://get-simple.info/) is an, erm, simple, user-friendly CMS. It's perfect if you're setting up a site for someone who just needs:







  * a basic set of templates such as a generic page and a special home page


  * the ability to add new pages


  * a set of editable elements such as a welcome note, tagline, sidebar etc.





I'd recommend it as an alternative to WordPress if you don't need custom post types or a blog (although there is a blog plugin and you probably could cobble something together with a template and a bit of PHP). It's a lot easier and quicker to get up and running.





One thing I really like is the ability to edit the user's admin area. I'd suggest you make the following two changes to any install so as to stop users messing up their pages (and your styles):







  1. Enable the Advanced editor. Do this by uncommenting line 52 of `gsconfig.php`. Without the advanced editor you can't enable the `Format` dropdown menu in the WYSIWYG page editor, which contains lots of useful options like headings.


  2. Edit the advanced toolbar options in the `adminedit.php` file so users can't wreak multicolored, multifonted havoc. I plump for a set of safe options: 'Bold', 'Italic', 'NumberedList', 'BulletedList', 'Table', 'Link', 'Unlink', 'Image', 'RemoveFormat', 'Source' and 'Format'.





No database, a bunch of text files and an intuitive user admin area--what's not to like?
  *[WYSIWYG]: What you see is what you get
  *[CMS]: Content Management System

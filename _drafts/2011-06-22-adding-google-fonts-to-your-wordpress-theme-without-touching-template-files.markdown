---
author: admin
comments: true
date: 2011-06-22 20:25:38+00:00
layout: post
slug: adding-google-fonts-to-your-wordpress-theme-without-touching-template-files
title: Adding Google fonts to your WordPress theme without touching template files
wordpress_id: 2013
categories:
- Articles
tags:
- fonts
- Google
- WordPress
---

The [Google Font API](http://code.google.com/apis/webfonts/) offers a free and really easy way to access some good quality fonts (I recommend the PT family as a genuine alternative to established fonts such as Georgia and Arial).

If you were building your own theme you'd simply enter the `link` to your Google font(s) in `header.php`. However, if you're building a [child theme](http://leonpaternoster.com/2011/02/child-themes/) it's generally a good idea to add styles via `functions.php` or `style.css` to avoid rewriting template files.

<!-- more -->


## Adding code to functions.php





	
  1. if you don't have a `functions.php` file in your child theme folder create one

	
  2. add the following to your `functions.php` file:

    
    <code>add_action('wp_head', 'load_fonts');
    
    function load_fonts() {?>
    
            <link href="http://fonts.googleapis.com/css?family=Oswald&v1" rel="stylesheet">
            <link href="http://fonts.googleapis.com/css?family=PT+Sans:regular,italic,bold&v1" rel="stylesheet">
    
    <?php
    
    }</code>







### What this code does


It creates a function called `load_fonts` that adds your Google font API code to the `wp_head` hook in the theme's `header.php` file. The `wp_head` hook sits between the `head` tags of `header.php`, so it's the perfect place to add links to additional style sheets and scripts.

You can, of course, use `add_action('wp_head', 'load_fonts');` to add _any_ code to your theme's `header`.


## Adding code to style.css


This method is even simpler.

Simply find the link to your Google font (e.g. `http://fonts.googleapis.com/css?family=PT+Sans:regular,italic,bold`) and add it as a normal CSS import to your `style.css` file. An example would be:


    
    <code>@import url(http://fonts.googleapis.com/css?family=PT+Sans:regular,italic,bold);</code>



Incidentally, it's well worth looking at [the new Google web fonts](http://www.google.com/webfonts/v2).

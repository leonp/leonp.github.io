---
author: admin
comments: true
date: 2011-02-13 20:13:21+00:00
layout: post
slug: child-themes
title: Modifying Scherzo? Use a child theme
wordpress_id: 1728
categories:
- Articles
tags:
- css
- scherzo
- WordPress
---

The [Scherzo theme](http://wordpress.org/extend/themes/scherzo) is intentionally plain, which makes it a good ‘install and go’ option. However, many bloggers like to tweak settings such as font size and font face. If you do want to change any existing theme you really should create a **child theme**.


## What's a child theme?


Child themes are 'mini' themes that allow users to make adjustments to existing themes while keeping those adjustments separate from the _parent theme_. They act just like normal themes; you download, install and even update them in just the same way. The only real differences are that they're small (typically they'll consist of one file) and they need a parent theme to function.

Let's say you've installed my Scherzo theme but you want to use [lucida grande](http://en.wikipedia.org/wiki/Lucida_Grande) instead of [georgia](http://en.wikipedia.org/wiki/Georgia_(typeface)). Instead of editing the relevant lines in the `themes/scherzo/style.css` file you would create a new folder in the `themes` directory and add your changes to a new `style.css` file within that folder. Scherzo would be the parent theme, your new theme (consisting of just one file) the child.


## Why use a child theme?


For many reasons. If you're trying to modify a theme and cock everything up you can simply revert to the parent theme without having to trawl through all the changes you've made; **child themes are _really_ good for WordPress/CSS beginners**. Similarly, when the parent theme is updated your changes stay in place.

Take our example of changing the theme's font. Without using a child theme you'll have gone through `themes/scherzo/style.css` and made all the necessary adjustments. But then you decide that lucida grande isn't for you and you want to try [trebuchet MS](http://en.wikipedia.org/wiki/Trebuchet_MS). That means going through nearly 1000 lines of CSS and making another set of changes.

So you make the changes and then a Scherzo theme update becomes available. You dutifully install the new version and notice that your blog has reverted to Georgia because all of your modifications have been overwritten. So you trawl through the 1000 lines of CSS and make yet another set of changes.

If you'd created a child theme you'd have neatly stored all your modifications in one separate, dedicated `style.css` file — no need to trawl through 1000 lines of CSS if you change your mind. And the changes would have stuck even when you updated the Scherzo theme.


## How to create a child theme


Creating child themes is very easy. Let's create a brand new theme called Newbie:


### 1. Add a new folder to the themes directory


[caption id="attachment_1729" align="aligncenter" width="526" caption="Your new folder must be in the same folder as the 'parent' theme"]![Screenshot of a new folder](http://leonpaternoster.com/wp-content/uploads/2011/02/folder.jpg)[/caption]


### 2. Create a file called `style.css` within your new folder


[caption id="attachment_1731" align="aligncenter" width="526" caption="Your new file must be called 'style.css'"]![Screenshot of the new file](http://leonpaternoster.com/wp-content/uploads/2011/02/file1.jpg)[/caption]


### 3. Add these lines to your file:



    
    <code>/*
    Theme Name:     Newbie
    Theme URI:      http: //leonpaternoster.com/
    Description:    This is a child of the Scherzo theme
    Author:         Mr Leon A Paternoster
    Author URI:     http: //leonpaternoster.com/about/
    Template:       scherzo
    Version:        0.1
    */
    
    @import url("../scherzo/style.css");</code>


Note that you can edit all of these settings. The template setting tells WordPress which parent theme to load. If it's wrong then your child theme won't work.


### 4. Add your styles to your new `style.css`


If you fancy a base font size of 15px and trebuchet MS, you might add the following to your theme:

    
    <code>body {
    	font-family: 'trebuchet ms', arial, 'helvetica neue', sans-serif;
    	font-size: 93.75%;
    }</code>




### 5. Select your child theme


Child themes appear like any other themes in the WordPress admin area:

[caption id="attachment_1734" align="aligncenter" width="526" caption="Your child theme will appear with all the other themes"]![Screenshot of the WordPress themes page showing the child theme](http://leonpaternoster.com/wp-content/uploads/2011/02/admin.jpg)[/caption]

And we can see that selecting the new theme has the desired effect:

[caption id="attachment_1736" align="aligncenter" width="526" caption="It works!"]![Screenshot of our Newbie theme](http://leonpaternoster.com/wp-content/uploads/2011/02/new-theme1.jpg)[/caption]

This is obviously a very simple example; child themes really come into their own when you make more complex adjustments to a parent theme. In fact, you can choose to not load the parent theme styles at all by omitting `@import url("../scherzo/style.css");` from your style.css file, and you can even override any template file (useful if you want to get rid of comments on your blog, for example). See the [WordPress codex on child themes](http://codex.wordpress.org/Child_Themes) for more information.

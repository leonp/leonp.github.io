---
author: admin
comments: true
date: 2009-04-05 06:14:50+00:00
layout: post
slug: controlling-excerpts-and-content-length-in-wordpress
title: Controlling excerpts and content length in WordPress
wordpress_id: 510
categories:
- Articles
tags:
- excerpt
- themes
- WordPress
---

Apologies for the less than pithy title…

WordPress is a little inflexible when it comes to displaying post excerpts. If you use `[the_excerpt](http://codex.wordpress.org/Template_Tags/the_excerpt)`, Wordpress will dutifully display your excerpt or, if there isn't one, the first 55 words from your content.

It'd be good if this function included a parameter to limit content length by a specified number of words. Perhaps it will in future versions. In the meantime, here's how I go about it:

First I determine whether a post has an excerpt or not by checking whether the excerpt field in the database is empty. If it's not empty, WordPress will go ahead and display the excerpt. If the excerpt is empty, I tell Wordpress to display a specified number of words (10 in this example) from the content by using the `[the_content_rss](http://codex.wordpress.org/Template_Tags/the_content_rss)` function:

    
    <code><?php if ($post->post_excerpt != "" ) {
    
    the_excerpt();
    
    }
    
    else {
    
    the_content_rss('', FALSE, '', 10);
    
    }
    
    ?></code>


Although this may seem (and be) a rather esoteric technique, I've found two uses for it. The first was when I developed a theme for a client that generated a banner from the excerpt. The client had around 400 posts in his blog that didn't have excerpts, so I needed to limit the banner size.

You can also modify the code to display all of a post's content if there is no excerpt. This is useful if you're using [Twitter Tools](http://wordpress.org/extend/plugins/twitter-tools/) to pull tweets into your blog, but you want to display excerpts from your regular posts.

Well, I found it useful.

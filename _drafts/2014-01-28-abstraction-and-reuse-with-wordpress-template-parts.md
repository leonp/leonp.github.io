---
title: Abstraction and reuse with WordPress template parts
author: Leon
excerpt: Template parts are little bits of code you can include anywhere in your WordPress theme templates. They save time and effort and keep your markup consistent.
layout: post
permalink: /2014/01/abstraction-and-reuse-with-wordpress-template-parts/
categories:
  - Code and technology
---
I recently discovered [WordPress template parts][1]. If you&#8217;re unaware of them, they&#8217;re little bits of code you write and call from any template.

When you first build WordPress themes each page type (`single`, `page`, `archive` etc.) consists of its own, separate code, apart from the calls to `get_header`, `get_sidebar` and `get_footer`. `get_header` *et al* are great because they save you copying and pasting large bits of code into every template. Template parts let you extend this idea into the content area of your page (or even the header, sidebar and footer).

It&#8217;s useful to think about reusable patterns in your content because you&#8217;re:

*   keeping markup and presentation consistent across your site
*   cutting down on the amount of code you write
*   reusing that code
*   breaking your pages up into discreet chunks that are easier to debug and manage

The two obvious content abstractions in a blog are an article (reused in `single.php`, `page.php` and possibly `archive.php`) and excerpts (a title, meta data, excerpt pattern that you might use in `index.php`, `search.php` and `archive.php`). If you use these template parts you&#8217;ve cut down work on at least 5 templates, and probably any custom templates you build. Edit your `excerpt.php` part and you update several pages at once.

You can also override a parent theme template part in a child theme, which gives you some pretty fine control over what WordPress outputs on your website.

 [1]: http://codex.wordpress.org/Function_Reference/get_template_part
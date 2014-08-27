---
author: admin
comments: true
date: 2008-08-04 22:57:31+00:00
layout: post
published: false
slug: when-css-works-beautifully
title: When CSS works beautifully
wordpress_id: 46
categories:
- Articles
tags:
- coding
- css
---

There are times when CSS is so elegant and logical that you smile. Take this example:



    
    
    <code>.Pingback .commentmetadata li a:before {
            content: '(This is a pingback or a trackback) 2014 ';
            font-weight: bold;
            color: #444;
    }</code>
    




And it works — it prepends styled content to links that reside in lists that are descended from two parents (the content has grandparents, in effect).




Not in IE, of course.




Sidenote: HTML entities can be added to CSS–generated content, but only using hexadecimal values.
  *[CSS]: Cascading Style Sheets

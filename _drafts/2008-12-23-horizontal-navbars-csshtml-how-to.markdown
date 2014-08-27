---
author: admin
comments: true
date: 2008-12-23 09:23:38+00:00
layout: post
published: false
slug: horizontal-navbars-csshtml-how-to
title: 'Horizontal navbars: CSS/HTML how-to'
wordpress_id: 257
categories:
- Articles
tags:
- css
- design
- navigation
---

Here's how I've been implementing horizontal navbars (note: only tested in FF3 and IE7 at this moment):


### The problem


We want a navbar that:



	
  1. is horizontal

	
  2. shows the reader where in the site they are

	
  3. indicates where the reader is about to go by changing the style of a hovered–over link

	
  4. doesn't use any unnecessary divs


[See a demo of my horizontal navbar](http://leonpaternoster.com/labs/navbar/).

[caption id="attachment_261" align="aligncenter" width="560" caption="Horizontal navbar"]![Horizontal navbar](http://leonpaternoster.com/wp-content/uploads/2008/12/navbar.png)[/caption]


### The code


Our HTML couldn't be cleaner and simpler—no meaningless divs, just semantic classes for the `ul` and the selected link:

    
    <code><ul class="nav">
    
    	<li class="current">Home</li>
    	<li><a href="#">About</a></li>
    	<li><a href="#">Journal</a></li>
    	<li><a href="#">Portfolio</a></li>
    
    </ul></code>


And the CSS:

    
    <code>ul.nav {
    	height: 2em;
    	text-transform: lowercase;
    	font-variant: small-caps;
    	letter-spacing: 0.1em;
    	margin-bottom: 1.5em;
    	font-family: lucida grande, liberation sans serif, sans-serif;
    	background-color: #efefef;
    	color: #333;
    }
    
    ul.nav li {
    	list-style-type: none;
                 float:left;</code><code>
    }
    
    ul.nav li a {
    	float: left;
    	width: 10em;
    	text-align: center;
    	line-height: 2em;
    	background-color: #efefef;
    	color: #333;
    	text-decoration: none;
    	border-right: 0.0625em solid #333;
    }
    
    ul.nav li a:hover, ul.nav li.current {
    	float: left;
    	width: 10em;
    	text-align: center;
    	line-height: 2em;
    	background-color: #ffd100;
    	color: #333;
    	text-decoration: none;
    	border-right: 0.0625em solid #333;
    }</code>


You can, of course, play around with the colours and fonts.


### How it works


The real magic is in the `height` and `line-height` properties: as long as the `ul` height is the same as the `li` line-height we can ensure that the borders that separate the nav links match the height of the background bar.

Have a very merry Christmas!

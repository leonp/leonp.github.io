---
author: admin
comments: true
date: 2008-07-22 14:58:05+00:00
layout: post
slug: recreating-the-guardians-masthead
title: Recreating the Guardian’s masthead
wordpress_id: 25
categories:
- Articles
tags:
- guardian
---

The previous Guardian masthead was a distinctive mixture of Garamond and Helvetica. I thought I'd try and implement it using just HTML and CSS. Here's what I cam up with:

[caption id="attachment_811" align="aligncenter" width="515" caption="My name in The Guardian's old style. Screenshot from Windows, so you get Arial and jagged text."]![My name in The Guardian's old style. Screenshot from Windows, so you get Arial and jagged text.](http://leonpaternoster.com/wp-content/uploads/2008/07/guardian.jpg)[/caption]

[See the a live version of the old Guardian masthead](http://leonpaternoster.com/labs/guardian_masthead/) (appearance will vary depending on the fonts you have installed on your PC.)

The HTML is simple. I wrapped  'Paternoster' in a span:

    
    <code><!DOCTYPE html>
    
    <html lang="en-gb">
    
    	<head>
    
    		<meta charset="utf-8">
    
    		<title>My New House</title>
    
    		<link rel="stylesheet" type="text/css" href="style.css">
    
    	</head>
    
    	<body>
    
    		<h1><a href="#">Leon <span>Paternoster</span></a></h1>
    
    	</body>
    
    </html></code>


And the CSS just requires the two fonts to have the same line-height:

    
    <code>* {
    	margin: 0;
    	padding: 0;
    }
    
    body {
    	font-size: 16px;
    	line-height: 24px;
    	width: 960px;
    	margin: 96px auto;
    }
    
    a {
    	text-decoration: none;
    }
    
    h1 a {
    	color: #DF0000;
    	font-family: 'Garamond Premier Pro Italic', garamond, baskerville, palatino;
    	font-weight: normal;
    	font-style: italic;
    	font-size: 96px;
    	line-height: 96px;
    	text-transform: lowercase;
    	word-spacing: -10px;
    }
    
    h1 a span {
    	color: #000;
    	font-size: 72px;
    	line-height: 96px;
    	font-family: arial;
    	font-weight: bold;
    	font-family: helvetica, arial, sans-serif;
    	font-style: normal;
    	letter-spacing: -2px;
    }
    
    h1 a:hover span {
    	color: #DF0000;
    }</code>

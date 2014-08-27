---
author: admin
comments: true
date: 2011-06-30 08:50:23+00:00
layout: post
slug: adding-borders-to-elements-using-box-shadow
title: Adding borders to elements using box-shadow
wordpress_id: 2046
categories:
- Articles
tags:
- borders
- css
---

Occasionally, you may want to place a border around something without using the `border` property.


 


Why? Well, if you're using % to size an element adding a `px` or `em` sized border may bork your layout. The box model will simply add the border width to the overall element width and shift other elements accordingly.


 


Because % widths are variable it's impossible to control the overall width of the element.


 


I've used a kind of hack on this site to get round the 'problem'. I'm not sure it's the best way of doing it, and it only works in browsers that understand the `box-shadow` property.


 


Anyway:


 


`#content {
-moz-box-shadow: 0 0 0 0.125em #AAA;
-webkit-box-shadow: 0 0 0 0.125em #AAA;
-o-box-shadow: 0 0 0 0.125em #AAA;
box-shadow: 0 0 0 0.125em #AAA;
}`


 


It works by applying a shadow to an element with no offset or blur radius. In other words, a normal border. So, the above code has the same effect as using:


 


`#content {
border: 0.125em solid #AAA;
}`


 


Like I say, I'm not sure it's the best approach. Maybe I'm missing something very simple?

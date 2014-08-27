---
author: admin
comments: true
date: 2011-06-28 12:28:01+00:00
layout: post
slug: mobile-schmobile
title: The W3C mobileOK Checker looks for all the wrong things
wordpress_id: 2037
categories:
- Articles
tags:
- accesibility
- html
- mobile
- mobile first
- XHTML
---

Really. See how it validates [a page built on my Scherzo WordPress theme](http://validator.w3.org/mobile/check?docAddr=http%3A%2F%2Fleonpaternoster.com%2Fscherzo&async=false).

On the face of it, this isn't a bad result. Two low importance failures and one medium.

It's just that the majority of the problems have nothing to do with how well the page performs on a mobile device:



	
  * it generates a slew of errors because I don't use XHTML. I don't use XHTML because XHTML has been dead for about a year.

	
  * it doesn't like the `i` tag I use. Apart from the fact that [`i` has been gloriously reinterpreted](http://html5doctor.com/i-b-em-strong-element/), I don't see how its usage has ever affected how a mobile device renders the page

	
  * it frowns upon the `@media` queries I use, even though they contain styles for modern browsers. If your device doesn't understand `@media` you get the default, mobile friendly stylesheet


In short, it's pretty useless. I assume it hasn't had any love for a while.
  *[XHTML]: eXtensible HyperText Markup Language. A somewhat strict markup language used in the past.

---
author: admin
comments: true
date: 2012-08-14 10:51:19+00:00
layout: post
slug: tables-accessibility-customers-and-modern-web-sins
title: We don't use tables for layout because they cost us time and money
wordpress_id: 2880
categories:
- Design
---

**I have to admit** I was somewhat taken aback by this Hacker News [discussion about the site's archaic HTML](http://news.ycombinator.com/item?id=4370206). After all, [we resolved this 'problem' back in 2001](http://www.alistapart.com/articles/journey/).





The discussion shows two things. Firstly, anyone who writes web documents using HTML and CSS will most likely have developed a set of good basic working practices which may seem difficult or even counterintuituve to the uninitiated. Even if the uninitiated are programmers.





Secondly, it's always worth revisiting the basics to make sure we're applying good principles consistently. Ask yourself _why do I not use tables for layout?_ and you'll reaffirm the need to keep content and its presentation separate. But you'll also consider _why_ we need to do this: Because we don't want to bar visitors (known as 'customers' if you're running a business) from our website.





Here's my one sentence answer to the question _Why can't I use tables for layout?_:





> 
  
> 
> Using tables for layout bars customers from your website and costs you more time and effort.
> 
> 






And the longer answer:





> 
  
> 
> Because your content and its appearance aren't kept separate, you can't adapt your content's layout when its viewed by customers with different requirements. These might include, but aren't limited to, customers using a mobile phone or customers using different size monitors.
> 
> 
  
  
> 
> You're also going to make your site inaccessible to customers using a screen reader because tables are tables to them; i.e. something you tabulate data with, rather than something you use to control your page's layout.
> 
> 
  
  
> 
> In fact, if you want to change any aspect of your content's layout, you're going to have to make lots of changes to your hard to read, long-winded, slower-to-load HTML, rather than a few simple to changes to an easy to manage, separate file. This will cost you time, money and more customers.
> 
> 






All well and good, but how consistently do web developers apply these customer friendly principles? No modern developer would use tables for layout because it makes it easy to line up page elements. But how often does fancy or resource-greedy CSS, an embedded font or javascript bar customers using IE, a slow connection or an old smartphone from using our sites? Isn't this exactly the same as using tables for layout?
  *[HTML]: HyperText Markup Language
  *[CSS]: Cascading Style Sheets

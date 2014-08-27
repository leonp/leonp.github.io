---
author: admin
comments: true
date: 2011-08-30 13:40:10+00:00
layout: post
slug: desktop-first
title: Desktop first
wordpress_id: 2161
categories:
- Articles
tags:
- desktop
- iphone
- mobile first
- nielsen
- scherzo
- wroblewski
---

My first reaction to [Nielsen's article on the importance of designing for multiple viewports](http://www.useit.com/alertbox/3-screens-transmedia.html) was that he'd misinterpreted the meaning of _mobile first_:


> Some even recommend designing websites for mobile first, and then modifying the design for the desktop PC as an afterthought.


To me _mobile first_ is simply a way of writing CSS that, ironically enough, overcomes a designer–centric approach to screen widths. Instead of placing a bunch of mobile–friendly styles in `@media` queries that only modern mobile phones can understand, it caters for older devices by putting the desktop CSS (two or more columns, for example) in the `@media` queries.

Nothing to do with adding desktop design as an afterthought.

But a Google search tends to back up Nielsen's view of things. [Luke Wroblewski's article](http://www.google.co.uk/search?aq=f&sourceid=chrome&ie=UTF-8&q=mobile+first) came top of my search for _mobile first_, and it goes way beyond how we should structure CSS. After all, mobile is ‘exploding’; by the end of this year smartphone sales will outstrip those of PCs.


## Smartphone sales ≠ the death of the desktop


Although this may sound strange coming from someone who built [a _mobile first_ WordPress theme](http://leonpaternoster.com/wp-themes/), not every site needs to be mobile first.

[caption id="attachment_2162" align="alignleft" width="160" caption="They're not looking at your site."]![People using iPhones on a tube train](http://leonpaternoster.com/wp-content/uploads/2011/08/iphones.jpg)[/caption]

If smartphone sales are increasing that doesn't mean hordes of people are visiting your site on their iPhone.

Context is everything. iPhone owners are viewing their Twitter streams, Facebook and Gowalla, but, as Nielsen points out, you're still going to do certain things on a PC.

[Check your analytics](http://leonpaternoster.com/2011/07/not-mobile/). I'm willing to bet that less than 5% of your blog's visitors are using a mobile device. They're more likely to be using IE6. The 95% should really come first.

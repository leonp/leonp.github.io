---
author: admin
comments: true
date: 2008-05-11 08:27:41+00:00
layout: post
published: false
slug: how-to-get-leading-right-part-1
title: How to get leading right (part 1)
wordpress_id: 8
categories:
- Articles
tags:
- css
- design
- leading
- legibility
- reading
---

### What it is and why it's important


Leading is the space between lines of text or, more precisely, the space between the _baselines_ in two lines of text:

![](http://farm4.static.flickr.com/3109/2480975539_ce6a53f99a.jpg?v=0)

Leading is important for two reasons:



	
  * It helps establish the vertical rhythm of your page.  If readers know exactly where the next line of text is going to occur, reading becomes a more efficient physical process.

	
  * If lines of text are too close together the eye and brain have to work harder to differentiate between the lines.  Often the reader will have to go back across the page in order to re-establish their position in a text.


If a site's leading is wrong the reader experiences physical discomfort and - in my case at least - a sense of frustration.  And if you're making your readers uncomfortable and frustrated you are, at the very least, creating an unfavourable impression of who you are.


### How to set leading on a web page


CSS refers to leading as `line-height`.  It accepts absolute units such as px and pt as well as relative units such as a % and ems.  The relative units are calculated using the `font-size` property as a basis, so if you have set your `font-size` to 16 pixels and your `line-height` to 150% or 1.5 em then the leading will be 24 pixels (because 16X1.5=24).  As it's good practice to use relative sizing units, that's what I'll proceed with.

As with all CSS properties, your browser will set its own value if you don't specify one.  And as with many browser defaults, it's worth changing.  The default leading with most browsers is 120% of the font size.  This is what a paragraph looks like on this site with the leading set to 120%:


As the cab drew up before the address indicated, the fog lifted a little and showed him a dingy street, a gin palace, a low French eating-house, a shop for the retail of penny numbers and twopenny salads, many ragged children huddled in the doorways, and many women of different nationalities passing out, key in hand, to have a morning glass; and the next moment the fog settled down again upon that part, as brown as umber, and cut him off from his blackguardly surroundings. This was the home of Henry Jekyll's favourite; of a man who was heir to a quarter of a million sterling.



And here's what it looks like with this site's leading:

As the cab drew up before the address indicated, the fog lifted a little and showed him a dingy street, a gin palace, a low French eating-house, a shop for the retail of penny numbers and twopenny salads, many ragged children huddled in the doorways, and many women of different nationalities passing out, key in hand, to have a morning glass; and the next moment the fog settled down again upon that part, as brown as umber, and cut him off from his blackguardly surroundings. This was the home of Henry Jekyll's favourite; of a man who was heir to a quarter of a million sterling.

Which did you find easier to read?


### Adding leading to your style sheet


You might add a selector rule to your style sheet as follows:
` `

    
    p, ol, dl, ul, blockquote {
       font-size: 1em;
       line-height: 1.5em;
    }


This would set your paragraph and list font sizes to 100% of the value of their parent's size and the leading to 150% of that.

Which is great.  But the `line-height` property has an interesting characteristic that enables you to set the leading on your _whole_ site to the same height, regardless of the font size of any given property, thereby establishing a vertical rhythm.  I'll discuss this in [part 2](http://leonpaternoster.com/2008/05/getting-leading-right-part-2/).

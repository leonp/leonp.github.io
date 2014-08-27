---
author: admin
comments: true
date: 2008-05-17 22:07:48+00:00
layout: post
published: false
slug: getting-leading-right-part-2
title: How to get leading right (part 2)
wordpress_id: 9
categories:
- Articles
tags:
- css
- design
- leading
- legibility
- reading
---

In [part 1](http://leonpaternoster.com/2008/05/how-to-get-leading-right-part-1/) of this article I looked at the basics of leading, namely what it is, why it needs to be set and how to go about setting it.  In this part I'll discuss the finer points of leading: Setting a consistent value across your site and how to use it with headings.


### Giving _everything_ the same leading


Your readers will appreciate the predictability that a consistent leading affords them - knowing exactly when the next line is going to occur saves the eye much reaching and up and down the page.

![Lined paper](http://farm3.static.flickr.com/2040/2499352968_8a546fb688.jpg?v=0)

The great thing about the CSS `line-height` property is that it is _inherited_ as an absolute value regardless of the font size of its descendants.

If that sounds complicated, it isn't.  What it means is that if you set your body `line-height` to 24 pixels then _every_ other selector (paragraphs, lists etc.) will also have a `line-height` of 24 pixels, regardless of what `font-size` you give them.

Take this example:

` `

    
    body {
    font-size: 100%; /* probably 16 pixels */
    line-height: 1.5em; /* probably 16*1.5=24 pixels */
    }
    
    #footer p {
    font-size: 0.75em; /* probably 16*0.75=12 pixels */
    }


The leading of the footer paragraph will be 24 pixels, even though the font size is 12 pixels.

To see how it works, take a look at this example:

` `

    
    body {
    font-size: 100%; /* probably 16 pixels */
    line-height: 1.5em; /* preobably 16*1.5=24 pixels */
    }
    
    p.normal {
    font-size: 1em; /* probably 16 pixels */
    }
    
    p.small {
    font-size: 0.75em; /* probably 12 pixels, certainly 75% of the normal paragraph size */
    }


Which produces this:


There was no possibility of taking a walk that day.  We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further out-door exercise was now out of the question.




There was no possibility of taking a walk that day.  We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further out-door exercise was now out of the question.




Note the same leading in the two paragraphs, despite the different font sizes.





### Headings and large font sizes


Maintaining a consistent leading is all well and good until a page element breaks through the constraints of your line height.

The most common cause of this is setting heading font sizes that exceed the inherited line height.  For example, an `h2` with a font size of 32 pixels will exceed a line-height of 24 pixels set using the `body` selector by 8 pixels.

Browsers accommodate this by simply increasing the leading to the same size as the element — so headings that exceed the document's base leading and run over a line will look cramped (although you might sometimes be looking for this effect).  This can cause a headache for page designers - the vertical rhythm of 24 pixels for every line is broken.

The solution is simple.  If a heading needs more space in which to breathe, give it some.  As long as the same leading is maintained, it doesn't matter what font size you use.

The means setting an element's line height within its own declaration, thereby overriding the value the browser creates.  It needs to be set to the next multiple of the base line height (48 pixels in the above example).  Here's how:

` `

    
    body {
    font-size: 100%; /* assume this is 16 pixels */
    line-height: 1.5em; /* therefore this is 24 pixels */
    }
    
    h2 {
    font-size: 2em; /* 32 pixels */
    line-height: 1.5em; /* 48 pixels, because 32*1.5=48, the height of 2 lines.  Note that the element's font-size is used to calculate the line-height*/
    }


Of course, this technique doesn't just apply to headings: any element which has a font size that exceeds your base leading will need to be altered.

Which leaves just one problem.  What if your heading's content spreads over more than one line?  Won't it look excessively spaced?  The best way to solve this problem is to set the element's `font-size` to a multiple of the document's base leading.  So, if the base leading is 24px, element sizes can be set to 24px, 48px, 74px etc.  Try experimenting with different combinations.

[Read Part 1](http://leonpaternoster.com/2008/05/how-to-get-leading-right-part-1/).

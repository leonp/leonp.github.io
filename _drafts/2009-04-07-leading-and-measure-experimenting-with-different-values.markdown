---
author: admin
comments: true
date: 2009-04-07 20:16:56+00:00
layout: post
published: false
slug: leading-and-measure-experimenting-with-different-values
title: 'Leading and measure: experimenting with different values'
wordpress_id: 516
categories:
- Articles
tags:
- css
- leading
- measure
- readability
- typography
---

If you want to experiment with different measure, leading and font combinations, download and extract these index and style files:

[index.html and style.css](http://www.box.net/shared/yhem8ydole) (Zipped)

[caption id="attachment_527" align="aligncenter" width="539" caption="Typographical terms"]![Typographical terms](http://leonpaternoster.com/wp-content/uploads/2009/04/typog.gif)[/caption]


### How it works


Once you've extracted the two files into a directory on your computer, insert some text within the `p` tags in the `index.html` file and add classes to try different typographical settings. The classes are:



	
  * l_x_: line height with the value _x_ (12-30px)

	
  * m_x_: paragraph width with the value _x_ (360, 420, 480, 540, 600 or 630px)

	
  * your choice of font (georgia, helvetica, lucida, trebuchet, verdana, times)

	
  * f_x_: font size (12-30px)

	
  * c_x_: font colour (#000, #333, #444, #666 or #888)




### Example



    
    <code><p class="helvetica f12 l16 m360 c444">Some text or other.</p></code>


will render the text in 12px helvetica/arial with a paragraph width of 360px, a line height of 16px and a colour of #444.


### Background


Leading and measure are delicate things. In the bad old days before CSS, designers didn't even think about such typographical obscurities; they just put text on the page, leaving the browser to sort things out. When CSS became popular,[ a few rules began to surface](http://informationarchitects.jp/100E2R/).

Now, web designers balance many different factors when setting their text for easy reading, and [more refined sets of rules](http://www.aisleone.net/2009/design/8-ways-to-improve-your-typography/) have been formulated. There's an element of trial and error in trying to find the best combination of leading, measure and font size: using these two files is quick and easy.

---
author: admin
comments: true
date: 2010-06-28 20:50:03+00:00
layout: post
published: false
slug: re-introducing-the-133-theme-for-wordpress
title: Re-introducing the 133 theme for WordPress
wordpress_id: 1206
categories:
- Articles
tags:
- '133'
- reading
---

The 133 theme has been redesigned. Now with even less.



	
  * [Download the 133 theme for WordPress](http://www.box.net/shared/vzr1zd9tcy) (version 2, ZIP, 16K)

	
  * [See the live demo](http://leonpaternoster.com/133)




## Flicking and reading


The thinking behind 133 was to provide a theme that gave the reader nothing to do apart from read and flick through posts. It was built on [Sandbox](http://www.plaintxt.org/themes/sandbox/) and took a grand total of 133 minutes to write (geddit?)

It's been my second most popular theme (surprising, considering it wasn't listed by Smashing Magazine), perhaps providing evidence that there's a demand for design that promotes reading and little else (see [Readability](http://lab.arc90.com/experiments/readability/) and [Today's Guardian](http://guardian.gyford.com/)).

[caption id="attachment_1214" align="aligncenter" width="568" caption="Screenshot of the 133 theme."]![Screenshot of the 133 theme. 3 columns, first is empty, content off centre to the right. Uses serifs for body copy, headings in an old looking font.](http://leonpaternoster.com/wp-content/uploads/2010/06/133shot.jpg)[/caption]

To get an idea of what it does it's best to list what it doesn't:



	
  1. no search

	
  2. no archives

	
  3. no tags or categories

	
  4. no navbar

	
  5. no menu

	
  6. no comments

	
  7. no Twitter integration (there was in version one, but it was pointless)




## Usage




### Excerpts


The theme makes use of excerpts by displaying them on the front page and above posts on single pages. If a post doesn't have an excerpt, the front page will display the whole post instead, and the single page won't display an excerpt (obviously), nor an abbreviated version of the full post. In short, feel free to use excerpts but don't worry if you don't.


### Images


The content column is 560 pixels wide. If you add the class `pull` to an image it'll place it in the empty left hand column. Pulled images _must_ be 265 pixels wide; if they're not, they'll be resized. (Note: you can apply the `pull` class to any element). Centring images and floating left and right work in the normal way.

You can also incorporate full page images (the theme is 855 pixels wide in all) by adding a `wide` class to images.


### Asides


[I'm a fan of (proper) conversational asides in blog posts](http://leonpaternoster.com/2010/03/an-aside-really-isnt-a-sidebar/). Wrap anything in `aside` tags and 133 will pull them into the left hand column. (Warning: WordPress can be somewhat moody with `asides`; check your HTML after making any amendments).


### Additional information


The theme will attempt to display the following info from behind the scenes:

_Users → Your profile → About yourself → Biographical information_ is displayed in the footer.

_Settings → General → Description_ serves as a tagline and is displayed in the header, aligned right.


## Behind the scenes


The theme has been re–written from the ground up. It's now marked up in shiny HTML5 and I've used the [Google Font API](http://code.google.com/apis/webfonts/) to sprinkle some [IM Fell DW Pixa](http://code.google.com/webfonts/family?family=IM+Fell+DW+Pica) around.

(A by–product of all this is to reduce the size of the zipped theme to 15.7K, including a screenshot. The stylesheet weighs in at 291 lines, including comments.)


## It looks different


The structure is essentially the same: three columns, the first left mainly empty, the content placed off centre to the right. Titles are now set in IM Fell DW Pixa and body copy remains 100% (16 pixels). If you're on Windows you'll get Georgia. If you're on a Mac or Linux you'll get Palatino. Everyone's happy.

The content column has been widened from 500 pixels to 560 pixels.




The thinking behind 133 was to provide a theme that gave the reader  nothing to do apart from read posts and flick to the next one. It was  built on [Sandbox](http://www.plaintxt.org/themes/sandbox/) and took a  grand total of 133 minutes to write (geddit?)

It was actually my second most popular theme (surprising, considering  it wasn't listed by Smashing Magazine), perhaps providing evidence that  there's a demand for design that promotes reading and little else (see [Readability](http://lab.arc90.com/experiments/readability/) and [Today's Guardian](http://guardian.gyford.com/)).


  *[HTML]: HyperText Markup Language

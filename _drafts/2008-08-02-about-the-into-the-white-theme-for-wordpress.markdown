---
author: admin
comments: true
date: 2008-08-02 07:55:02+00:00
layout: post
slug: about-the-into-the-white-theme-for-wordpress
title: About the “Into the White” theme for WordPress
wordpress_id: 32
categories:
- Articles
tags:
- theme
- thinking
---

As you can probably tell from reading some of the posts on this blog, I'm interested in making **usable**, **readable** and **accessible** websites, rather than pretty websites.  Although I'd argue that the interface is the brand, and a usable, accessible and readable website is a pretty website.

[caption id="" align="aligncenter" width="512" caption="Jakob Nielsen - usability guru"]![Jakob Neilsen - usability God - smart, besuited, sober](http://farm4.static.flickr.com/3281/2723998365_3b071e6185_o.jpg)[/caption]

In terms of influences, there's [God](http://useit.com), [IA](http://informationarchitects.jp) and [Jon Tan](http://jontangerine.com).  All excellent writers who play within the **confines** of the medium: no image replacement, SIFR or cludged CSS, just imaginative **text**, images and layout (well, in the last two cases anyway!)

So I drew up a list of **aims** for the [Into the White theme](http://leonpaternoster.com/2008/08/introducing-the-into-the-white-theme-for-wordpress/):



	
  * The theme is viewable at a resolution of **800X600** upwards.  Until about a year ago this was my monitor's resolution, and my own gut feeling is that a fair percentage of viewers browse at this resolution.  Schools, for example, often use old monitors, and several viewers may use the same terminal over the course of a single day.

	
  * The site **structure** is as simple as possible.  It consists of a home page, a posts page and an about page.  The visual structure is also very simple.  Yes, there are 2 columns, but the secondary column contains small amounts of supplementary information rather than long lists of links that serve to distract the reader from the content.  The exception is the Posts page, but there isn't any content on this page anyway; it's just 2 lists.

	
  * **Navigation** is as clear as possible.  I think I've achieved this in two ways: Firstly, all page and post headings take the form of a **breadcrumb**, which means that readers should be aware of exactly where they are at all times.  Secondly, I use lots of contextual links.  You'll note that there's no universal navigation bar: readers are offered choices appropriate to what they are reading.  A sidenote: I've replaced the term 'archive' with 'posts'.  When browsing the site a reader who had no familiarity with blogs had trouble with this metaphor.  Using 'posts' is much clearer.

	
  * I've followed two well-established **conventions** to make the site as usable as possible: the search bar is placed top right on every page, while there is a link to the home page top left.

	
  * Body copy is set to 100% of the browser's default.  This means that most users will read text sized at a comfortable **16px**, while those users who have changed the setting are respected as well.  The choice of font caused a problem; I tried arial/helvetica, lucida and finally settled on georgia.  It is, perhaps, the only decent-looking font at 16px.

	
  * All font sizes are set in **ems**.  While modern browsers now allow resizing of elements sized in pixels, I'm sticking with ems as it respects the reader's default setting.

	
  * Other typographical niceties aid **readability**: the leading is set to 1.5em of the font size (normally 24px), while block level margins are also set to 1.5em, which establishes a vertical rhythm.

	
  * **Colour** is used conservatively, solely to indicate hyperlinks.  The link colour is blue, which means that readers who are colour-blind will be able to distinguish links from the rest of the text.  Yes, black, white and red looks great, but red can be hard to distinguish from black.  Links are not underlined (which I may change) except in the hover state.  I use a border and some padding here to aid legibility and increase the **target area**.  In the post list links are set to `display: block` which means the target area is very large.


I think I've created a theme that is accessible, usable and readable while managing to look pretty as well.  What do you think?

---
author: admin
comments: true
date: 2008-11-03 15:00:18+00:00
layout: post
slug: writing-wordpress-themes-is-easy
title: Writing WordPress themes is easy
wordpress_id: 218
categories:
- Articles
tags:
- coding
- content
- design
---

The secret's out.  WordPress is **easy** to use.

It really is.  This may look complicated:

    
    <code><?php while (have_posts()) : the_post(); ?>
    
    <h2><?php the_title(); ?></h2>
    <h3><?php the_excerpt(); ?></h3>
    <p class="byline"><?php the_time('F jS, Y'); ?>. Written <span class="flourish">by</span> <?php the_author_firstname(); ?>.  <a href="#commentary">Read the commentary</a>.</p></code>


But it's actually simple.  And the point is that you'll **reuse** it several times, without even having to know what `F jS, Y` means.  And finding out what `F jS, Y` means is just a short google search away.

When I designed my first WordPress theme, I didn't even know what PHP was.  I built the theme by poking around the template files with Notepad++, until it looked OK.

I now know _some_ PHP and, yes, it does make customising easier and development quicker, especially if I'm trying to bend WordPress into unlikely shapes.

What _is_ difficult is creating **plain old HTML and CSS** that works, is readable and looks good.  I design WordPress themes in two steps:



	
  1. Produce a CSS/HTML mockup that doesn't have any dynamic functionality (e.g. a comments form that works)

	
  2. Convert the HTML to PHP template files


Now, step 2 _sounds_ more complicated: the world and his dog can create static HTML pages, no?  And generating a list of posts based on their tags is surely more difficult than wrapping a header in `h2` tags and styling the output.  Yet step 1 invariably takes longer, is more frustrating and requires more **imagination** than step 2.

Clients no doubt feel that they get best value for **money** from the work that goes into step 2, the WordPress magic.  That's not true—it doesn't surprise me to hear that [a top notch designer can knock up a basic, standard–issue theme in 90 minutes](http://www.pearsonified.com/2008/10/tipd-launch.php).  Because just as writing good content is criminally undervalued (good **content** can redeem nearly all bad design, yet a javascript code monkey will earn twice as much as a good content editor) writing well-formed, imaginative HTML and CSS is a rare, precious skill.
  *[PHP]: A scripting language that makes websites dynamic

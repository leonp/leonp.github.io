---
author: admin
comments: true
date: 2009-04-04 20:14:05+00:00
layout: post
published: false
slug: styling-wordpress-pages-according-to-their-mood
title: Styling WordPress posts according to their mood
wordpress_id: 498
categories:
- Articles
tags:
- css
- mood
---

Well, it's been a long time since the last post. Combination of reasons: busy at work work, some client work and the wife getting a promotion and more work work work. We're [working class](http://en.wikipedia.org/wiki/Working_class), us.

There is, of course, [the great God Twitter](http://twitter.com/leonpaternoster) devouring my creative juices, or rather diverting them into 140 character missives. I love Twitter for many reasons: it's a sort of whispering underground, an ever–flowing communication stream ([of effluence](http://twitter.com/leonpaternoster/statuses/1341198632), sometimes, but still…)

There's another Twitter–influenced post (and site overhaul) in the offing, but in the meantime, there have been two WordPress problems and solutions that I've been working on recently. I'll share the first with you in this post, namely:


### Changing page styling by adding an ID to the `body` tag


I'm in the process of overhauling my personal site and one thing I'm looking at is styling index and single pages according to the mood of the post that's being displayed.

The easiest way to do this is to add an ID to the page's `body` tag. As the `body` tag is the daddy of all other tags (`HTML` is grandpa, but we leave him well alone), prefixing CSS declarations with `body#id_name` will override any previous declarations.

Let's say I fancy a gothic feel to my page and want to override my default `h2` setting. I'd add the following **below **my original `h2` declaration:

`body#gothic h2 {color: red; font-size: 72px; font-family: garamond, baskerville, times, georgia, serif;} /* gothic styling! */
`

The problem is getting WordPress to spit out `<body id="gothic">` in the HTML. [Custom fields](http://codex.wordpress.org/Using_Custom_Fields) provide the answer:

[caption id="attachment_499" align="aligncenter" width="555" caption="Adding a custom mood field to WordPress - note: don't use spaces"]![Adding a custom mood field to WordPress - note: don't use spaces](http://leonpaternoster.com/wp-content/uploads/2009/04/adding_a_custom_field.jpg)[/caption]

Now I have a bit of text I can use as an ID, I need to get wordpress to insert it into the relevant file (which can be any template file). First, I begin my loop and grab the text from the database:

    
    <code><?php while (have_posts()) : the_post(); ?>
    
    <?php $mood = get_post_meta($post->ID, 'mood', true); ?></code>


Then I add it to my body tag:

`<body id="<?php echo $mood; ?>">`

When WordPress gets round to rendering the page, it'll spit out:

`<body id="gothic">`

A pretty simple process (and not limited to gothic styling, but I'm guessing you'd figured that out). The only odd thing is starting your loop before the `body` tag: but that has zero effect on anything really. I've created [a page that shows the technique in action](http://leonpaternoster.com/blogid/) (view the CSS to see how the override works).

NB: If you're running a site with lots of traffic and bandwidth is an issue you need to beware of a proliferating stylesheet. You'll have a default set of declarations (so you don't have to style _every_ post separately) and each 'mood' will have its own set. On the other hand, if (like me) you're low on fancy imagery, you're operating efficiently anyway.
  *[NB]: Nota Bene

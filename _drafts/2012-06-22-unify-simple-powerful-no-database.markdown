---
author: admin
comments: true
date: 2012-06-22 12:54:19+00:00
layout: post
slug: unify-simple-powerful-no-database
title: Flattening websites (or why you don't need a database for everything)
wordpress_id: 2709
categories:
- Design
---

**I'm updating** a work website with Unify so other people can edit the content.

I've written about [Unify](http://unify.unitinteractive.com/index.php) before. [I liked it back then](http://leonpaternoster.com/2010/01/unify-making-sites-simple-for-clients/), and it's even better now.

Perhaps its strongest feature is repeatable areas. A repeatable area consists of several content blocks that can be edited, deleted, copied and dragged. A content block consists of one or more elements, such as a heading, image and paragraph.

[caption id="attachment_2713" align="alignnone" width="699"]![Screenshot of the Conference website](http://leonpaternoster.com/wp-content/uploads/2012/06/conf.jpg) Repeatable areas are flexible. In this example each one represents a conference speaker.[/caption]

These repeatable areas are exciting for three reasons. Firstly, they're flexible enough to represent any content unit you can think of. I'm currently using them to build conference events and a list of sponsor logos and bumph.

Secondly, they're very simple to create. Compare setting up custom taxonomies, post types and templates in WordPress with writing this markup:


    
    <code><div class="unifyRepeatArea">
        <div class="speaker unifyRepeat">
            <h2>Leon Paternoster</h2>
            <img src="images/leon.jpg" alt="Leon Paternoster">
            <p>Leon will discuss the wonders of single column websites.</p>
        </div>
    </div></code>



Finally, your users don't have to grapple with a complex, two–tiered conceptual model of their website. There's no admin area where they feed the site bits of data that it spits out in various places. Instead, there's just the site itself – it's all surface, where what you see is what you get.

Too often we reach for the most complex solution simply because we're used to it. Sometimes the simplest solution is also the most powerful.

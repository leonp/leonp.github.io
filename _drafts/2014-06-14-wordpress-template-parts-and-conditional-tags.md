---
title: WordPress template parts and conditional tags
author: Leon
excerpt: Use template parts and conditional tags to keep your WordPress code lean and efficient.
layout: post
permalink: /2014/06/wordpress-template-parts-and-conditional-tags/
xyz_twap:
  - 1
categories:
  - Code and technology
---
I first wrote [a bit on WordPress template parts][1] a few months back, and I can&#8217;t recommend them highly enough.

Why? Well the majority of your templates will now consist of a few lines of `get` functions &#8211; the real work will take place in the template parts, which means when you change one template part and you&#8217;ll affect several templates at once.

All very efficient and possible since the year dot with PHP includes, but the `get_template_part` function simplifies things and makes sure you call the right file at the right time.

Better still, combine template parts with conditional tags such as `is_archive` and you retain the same degree of control over your pages as if you were coding them separately.

For example, this theme has a template part called `contentbox.php`, which generates the markup for every white article box you&#8217;ll see on the site. But there are some minor differences between what&#8217;s displayed on each page; for example, titles on the home page link to the article page, while article page titles aren&#8217;t linked at all.

I still only need one template part for all instances of a content box &#8211; I simply wrap the title anchor in an `is_home` check. So if we&#8217;re on the home page we get a linked title, otherwise we just get text.

Similarly, I check for `!is_page` before displaying the publication date because it doesn&#8217;t make much sense on my *About* page, or any other page:<figure> 

    // If we're not on a page, show the date
    
    <?php if ( !is_page() ) : ?>
    		
    	Our date markup.
    	
    <?php endif ?>

<figcaption class="secondary"> 
How to check you&#8217;re not on a page in WordPress. This code sits in `contentbox.php`, which the `page.php` template calls with the `get_template_part`

</figcaption>  
</figure> 
As with any programming, we can nest our checks and use `and`, `not` and `or` to get exactly what we want. I&#8217;ve used `( is_home() &#038;&#038; has_excerpt() )` to control how excerpts are displayed on the home page &#8211; there are countless possibilities.

 [1]: http://leonpaternoster.com/2014/01/abstraction-and-reuse-with-wordpress-template-parts/ "Abstraction and reuse with WordPress template parts"
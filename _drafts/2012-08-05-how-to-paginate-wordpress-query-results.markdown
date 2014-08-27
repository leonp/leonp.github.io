---
author: admin
comments: true
date: 2012-08-05 07:04:55+00:00
layout: post
slug: how-to-paginate-wordpress-query-results
title: How to paginate WordPress query results
wordpress_id: 2816
categories:
- Article
- Design
tags:
- pagination
- query
- WordPress
---

**Often we need to tell WordPress** to only fetch certain posts from the database. The best way to do this is to feed the `WP_Query` class a number of variables, such as a category ID when we only want to pull posts from a certain category, a tag slug or a number of posts.





This works well except for one (really maddening) thing. For some reason, WordPress doesn't paginate the query results like it does when you run the default loop. So if your query returns 200 results and you only want to show 10 on any given page, you're out of luck. This is especially frustrating considering you can pass a `posts_per_page` parameter to the query (--it does nothing).





## The solution: Pass along the paged query variable from the main query





To get paginated results you need retrieve the `paged` variable from the query. I know this sounds strange as you may well be using `posts_per_page` to override the _Settings > Reading > Blog pages show at most…_ admin settings, but it works.





## Example





Let's say you only want to retrieve posts from the _News_ category and allow the website user to set the number of posts displayed on each page via _Settings > Reading > Blog pages show at most…_ Here's how I do it:




    
    <code>// create our query
    // if we want paginated results, we need to call the paged variable
    
    $wp_query = new WP_Query( array ('category_name' =>' 'news', 'paged' => get_query_var('paged') ) );
    
    // the loop
    
    while ($wp_query−>have_posts() ) : $wp_query−>the_post();                
    
    // do your loop stuff
    
    endwhile;
    
    previous_posts_link('More recent news ->', 0);
    next_posts_link('<- Older news', 0);
    
    wp_reset_postdata();</code>





(Hat tip [Silviu-Cristian Burcă](http://scribu.net/wordpress/wp-pagenavi/right-way-to-use-query_posts.html)).




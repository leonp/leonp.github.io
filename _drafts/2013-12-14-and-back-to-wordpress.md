---
title: And back to WordPress
author: Leon
excerpt: "I like Jekyll a lot, but I'm moving back to WordPress."
layout: post
permalink: /2013/12/and-back-to-wordpress/
categories:
  - Code and technology
  - Politics
  - Website management
  - Writing
---
So I&#8217;ve reinstalled WordPress on my server and imported 19 blog posts. I&#8217;m no longer using [Jekyll][1] to generate this website.

These “[I&#8217;m moving from system x to system y][2]” posts were quite common a while back. Now people don&#8217;t care so much, which is a good thing, I think. All that really matters to the outside world is how usable the site is, not what it&#8217;s run on.

So this is how it&#8217;ll affect my dear readers:

*   *You&#8217;ll be able to comment*. I could have installed [Disqus][3] or some such on my Jekyll generated site, but a) I don&#8217;t like it from a user point of view and b) I&#8217;m taking a stubbornly oldschool attitude to blogging. Posts and your comments belong on this site, not some third party.
*   *You&#8217;ll be able to explore related posts a lot more easily*. I know you *can* do taxonomy in Jekyll, but I always found it flaky. And I never got previous and next post links to work.
*   *Search*. Again, you can use an external service such as Google, and WordPress&#8217;s out of the box search is next to useless (literal and no results snippets), but there are some [good search plugins][4] out there.
*   *Plugins*. Email comment subscriptions, proper search, sitemap, caching, spam control.
*   *The website will probably load more slowly*. Jekyll&#8217;s great advantage was building posts on your PC rather than on your actual website. It generated flat HTML files; and flat HTML is quicker than PHP calls to a database.
*   *The website will probably go down more*. My Pingdom stats under the Jekyll regime were fantastic. Now I&#8217;m prone to *No connection to the database* errors, and I can&#8217;t afford an expensive host.

As with all things web, it&#8217;s a balance thing. I expect y&#8217;all to comment now.

## Long live blogs

At the same time, [Zeldman posted a blogging call to arms][5]. And he&#8217;s right: blogs are brilliant, even if they do seem so 2003. Better than Facebook and Twitter from the writer&#8217;s and the reader&#8217;s point of view: It&#8217;s your meaningful writing and your comments, all on your own server.

In fact, this 2003 model of things seems more right than ever. You don&#8217;t have to be a conspiracy theorist to feel uncomfortable at your relationship with Google, Facebook and, increasingly, Twitter. Nothing comes for free, and a seflhosted blog provides the most transparent relationship between reader, writer and medium.

 [1]: http://jekyllrb.com
 [2]: http://leonpaternoster.com/2013/06/moving-from-wordpress-to-jekyll/ "A few notes on moving from WordPress to Jekyll"
 [3]: http://disqus.com
 [4]: http://wordpress.org/plugins/relevanssi/
 [5]: http://www.zeldman.com/2013/12/11/this-is-a-website/
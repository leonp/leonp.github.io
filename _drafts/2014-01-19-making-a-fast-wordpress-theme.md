---
title: Speed up your WordPress theme
author: Leon
excerpt: Some notes on speeding up WordPress. Looks at how you can design a WordPress theme that serves pages quickly, and the compromises you might need to make in order to keep any website running quickly.
layout: post
permalink: /2014/01/making-a-fast-wordpress-theme/
categories:
  - Code and technology
  - Design
---
## Summary

Some notes on speeding up WordPress. Looks at how you can design a WordPress theme that serves pages quickly, and the compromises you might need to make in order to keep any website running quickly.

Basically, you can:

*   Minimise your CSS
*   Concatenate your CSS files
*   Call only 1 external CSS file
*   Minimise the number of web fonts you use
*   Use CDNs for common javascript files
*   Minimise and concatenate your javascript
*   Keep the design simple

Here’s how I went about building the *mm* theme (which I&#8217;m using at the time of writing):

## Groundwork

Before marking anything up I made a list of all the things a reader *needs* when they visit a blog. There are [tons of articles][1] on this subject out there, and I’ve probably written a few myself over the years. After some reasonably careful consideration, I boiled the list down to:

*   Home page link
*   Title
*   Date
*   Big, readable text
*   Sitewide navigation
*   Archive page
*   About page

I haven’t bothered with comments or a taxonomy. It’d be easy to add categories and tags, but most people don’t click on the links. Your experience may of course be different.

## Design

Most readers enter my site via a search or link. I therefore coded article pages first.

The groundwork suggests a simple article page design. There’s no need for a sidebar or even a navigation menu that reveals itself when the viewport reaches a certain width. It’s just a single column of text with a logo and footer navigation links.

The home page lets the reader ‘dive in’ to an article. My 9 year old son had no problem finding the about and archive pages from the footer navigation menu. I guess I should test a bit more, but I prefer the navigation below the main content.

Finally, the [archive page][2] sorts posts by year, which serves to break up the list. No excerpts: in my experience, readers judge an article by its title (so make it short and descriptive).

A simple design leads to smaller file sizes, and you can gain a few more `kb`s by cleaning up WordPress’s `head`. The `header.php`, `single.php` and `page.php` files all weigh in at 300–800 bytes.

## File size and requests

You don’t really need a grid or drop shadows when you build a blog, which means very little `.g-c-1, -webkit-border-radius` detritus. And because there’s no major difference between the narrow and widescreen design, the widescreen media query only contains a handful of rules.

The `style.css` file weighs in at just `2.8kb` minified. I originally called [Pure’s tables module][3] to handle table styles, which added a further `1.2kb` to the the CSS load. The only ‘problem’ with using Pure is that it adds another CSS call to the page (obviously these problems are all relative, but we’re trying to find the quickest possible approach here).

I then experimented with adding my CSS to the document’s `head` by putting the CSS between `style` tags, thereby reducing the number of CSS requests to 1. I got this down to zero by concatenating my CSS and Pure’s into one minified, `3.8kb` of code.

This sounds a good idea, but browsers cache linked files. If you put your CSS directly in the document’s `head`, the browser will download the HTML *and* CSS whenever it loads a new page on your site.

I can’t really test this too scientifically, but I’m guessing the best approach is to call one, minified CSS file that contains all your styles.

## Fonts

It’s very easy to use a service like Typekit or Google Fonts, but they can add a lot more weight and work to your page than the CSS and HTML.

Take a well designed font like [Source Sans Pro][4]. If you want to use just 3 weights (normal, normal italic and bold) and call it from Google Fonts you’re going to:

*   make an additional call for [a CSS file (with a query appended)][5] to the Google fonts API
*   download 3 separate `woff` files (totalling `54kb`)

So if we’re trying to make our page load as quickly as possible, we need to avoid `@font-face`.

I opted for a flexible font stack. Most Windows machines will use a combination of Calibri and Cambria (mainly because Georgia begins breaking down at 19px on Windows), while Debian and Mac users will see Helvetica (or Nimbus) and Georgia. Android defaults to Noto Sans and Serif.

## This is difficult in real life

If you&#8217;re writing a simple WordPress theme with no or few plugins this is all doable. But introduce frameworks, child themes and big plugins and it gets complicated.

I&#8217;m dealing with this problem on our new work site. I&#8217;ve got the number of external file calls down to 26(!) from 32, and the home page load down to `337kb` from over `500kb`.

I&#8217;m using a big, complex (but well coded) plugin to handle events, and once you start using javascript WordPress itself doesn&#8217;t concatenate lots of small (minified) `jquery UI` files, such as the datepicker and menu. It&#8217;s hard to trace what file is calling what script.

You can make some immediate changes, though. By default, WordPress calls its own, uncompressed version of jquery. Deregister jquery in your `functions.php` file and reregister Google&#8217;s CDN version to save yourself `~180kb`. You can also use a caching plugin to serve static HTML.

## Why do this

After all, this is a small site with a handful of visitors.

Two reasons:

1.  It’s useful to explore how a system such as WordPress handles CSS, js and HTML. If you’re using a theme built on a framework it’s likely you can make your site more lean by unpicking, minimising and concatenating files, and using CDNs to serve up files like `jquery.min.js`.
2.  You’ll find out how features can affect your website’s speed, which means you’ll consider whether it’s worth adding an extra font weight or javascript effect to your pages. Often this cost is hidden because it&#8217;s so easy to install a plugin or framework. More thought should result in quicker (=better) design.

 [1]: http://baymard.com/blog/designing-a-new-website-part-one
 [2]: http://leonpaternoster.com/archives/ "Archives"
 [3]: http://purecss.io/tables/
 [4]: https://www.google.com/fonts/specimen/Source+Sans+Pro
 [5]: http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic,700
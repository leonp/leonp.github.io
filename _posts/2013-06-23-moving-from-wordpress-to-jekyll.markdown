---
date: 2013-06-23 09:40:00+00:00
layout: post
title: A few notes on moving from WordPress to Jekyll
---

<img class="bleed" src="/uploads/jekyll.jpg" alt="Jekyll and Hyde film poster">

<p class="figcaption">Image from <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dr_Jekyll_and_Mr_Hyde_poster_edit2.jpg/1280px-Dr_Jekyll_and_Mr_Hyde_poster_edit2.jpg">Wikimedia</a></p>

Last night I migrated my blog from WordPress to <a href="http://jekyllrb.com/">Jekyll</a>. As it doesn't really make much difference to readers (apart from in one major way, which I'll discuss in a bit), I wasn't planning to write about it. But the change elicited a few Twitter comments, so here's a rough and ready explanation/guide.

## What's Jekyll?

Jekyll is a static site generator, which means you write posts on your PC in <a href="http://daringfireball.net/projects/markdown/">Markdown</a>, which Jekyll converts into a bunch of <abbr title="HyperText Markup Language">HTML</abbr> pages. Once it's done that, you upload your site to your web server.

## Why use Jekyll?

**Speed**, mainly. WordPress builds HTML pages *on your web server* by grabbing information from a database and feeding it through a template. Jekyll looks at Markdown files within a folder, puts them through various <a href="http://liquidmarkup.org/">Liquid</a> templates and generates HTML pages *on your PC*. You can view these pages before uploading them to your server (and copy and paste them &#8211; there's no extracting your content from a database).

Because a Jekyll&#8211;generated site consists of flat HTML files it's also a lot **simpler and therefore more robust** than a WordPress install. There's no database, which means no `500 internal server error` messages.

For the same reason, Jekyll is **more secure** than WordPress. A database can provide access to your website. No database means no way in.

Finally, the Jekyll **writing workflow** is simpler and more flexible than WordPress's. When I used WordPress I'd write posts in Markdown, copy the HTML it generated and post it into the WordPress editor. Jekyll converts the Markdown into posts for me, which I then upload to the server. No copying and pasting, logging in and reformatting.

## Disadvantages

Initially, Jekyll is daunting, especially if you're not used to the **command line**. You can't open a program with an icon and windows and buttons. This is what you'll be using:

<img src="https://lh3.googleusercontent.com/-k8NAPsBc5Cw/Ucc0YEhoc6I/AAAAAAAAB7Y/X_eVVYvNI7E/w600-h457-no/terminal.jpg" alt="Screenshot of the Linux command line">

<p class="figcaption">A command line, yesterday</p>

To get everything up and running you'll need to install Ruby and the Jekyll gems, and write in Markdown. You'll also have to use an <abbr title="File Transfer Protocol">FTP</abbr> client (or even run the site through Github).

Jekyll, Ruby, Markdown, Liquid, FTP&hellip; It all sounds frankly geeky. And it is, to a certain extent, but once the system is set up it's easy to use. **Markdown is easier to write than HTML** and gives you far more freedom and control over what your website outputs than a <abbr title="What you see is what you get">WYSIWYG</abbr> editor. If you can hack around WordPress template tags, you won't struggle with Liquid.

Similarly, the command line is efficient, and the only things you'll need to type are:

* `cd [path to your site's folder on your PC]`
* `jekyll build --watch`
* `jekyll serve`

There are, however, a few additional problems. The biggest is **there are no comments**, because there's no database to store them in. Unlike many bloggers who made the move to Jekyll, I like comments. Getting rid of them is a big thing.

I weighed up the advantages of Jekyll against losing comments and decided to take the plunge anyway. If you have a lot of comments you may feel differently.

If you *do* want comments you can use a third party system like Disqus. Personally, I don't like Disqus, but it is possible to export all your existing WordPress comments into it.

Another big advantage to WordPress is that it lets you publish anywhere with an internet connection. All you need is a browser or the relevant app. With Jekyll you need a PC with Ruby and Jekyll installed on it. You *can* store a local site across different PCs using Dropbox, but it's a still **a long way from being able to publish a post on a public PC or a smartphone**. If you're blogging about a trip abroad, you're not going to use Jekyll.

Finally, you might miss **WordPress's plugins**.

## How to plan the migration

You'll need to think about:

1. setting up Ruby
2. setting up Jekyll
3. moving your existing posts from WordPress into Jekyll
4. getting your permalink and image URLs to match up with your existing install
5. creating a sitemap
6. creating an <abbr title="Really Simple Syndication">RSS</abbr> feed

### Installing Ruby and Jekyll

Remember &#8211; **you don't need to know any Ruby to run Jekyll**. You just need to install it.

You won't need to set up Ruby on a Mac as it comes pre&#8211;installed. Use the <a href="http://www.ruby-lang.org/en/downloads/">official Ruby guidelines</a> if you're on Ubuntu or similar, and the <a href="http://jekyllrb.com/docs/installation/">Jekyll docs</a> if you're on Ubuntu or Mac.

I have Jekyll installed on my **Windows** work laptop. <a href="http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html">Running Jekyll on Windows</a> is the best guide I found, although I did a few things differently:

* I installed the Ruby devkit from the same page as the Windows Ruby installer (just make sure you get the right devkit for the right version of Ruby)
* I didn't need to edit my `config.yml` file as it already contained the correct path to my Ruby installation
* I didn't bother installing pygments

It's also worth remembering you can run a special Ruby command line from Windows. To find this I simply enter `command` into the start button search box, which brings up a choice of a standard command line or the Ruby version.

### Moving your existing posts from WordPress to Ruby

I couldn't get the &#8216;official&#8217; WordPress importer to work, but <a href="https://github.com/thomasf/exitwp">exitwp</a> was excellent. Just make sure you follow *all* the instructions carefully.

Unfortunately, you won't just be able to publish your exported markdown posts as is. **They'll need *some* editing**. For example, exitwp didn't handle WordPress's `[caption]` very well. I found that a normal post will take around two&#8211;five minutes to edit, depending on how many images it contains, which is why I've only published 10 at the time of writing (check your analytics to see what's popular).

You'll save yourself a lot of heartache if you can **keep your existing permalink and image path settings**. It's easy to configure pretty URLs in Jekyll (and I published a post on <a href="http://leonpaternoster.com/2013/06/replicating-year-month-wordpress-urls-in-jekyll/">keeping the standard YY/MM/post-name structure</a>).

WordPress stores images and other assets in its `wp-content/uploads` folder and organises it according to your chosen permalink structure. exitwp extracts all your assets from your `wordpress.xml` file and puts them in a similarly structured folder. So all you need to get images working on your Jekyll site is to copy the `uploads` folder to your project's folder.

### Creating a sitemap and RSS feed

Again, this isn't as daunting as it seems. Both these methods worked perfectly:

* Vito Bottas's guide to <a href="http://vitobotta.com/how-to-migrate-from-wordpress-to-jekyll/#atom-rss-feed">creating an RSS feed</a> (just remember to replace all the existing site references if you copy and paste the code)
* Tobiass Josten's guide to <a href="http://vvv.tobiassjosten.net/jekyll/jekyll-sitemap-without-plugins/">creating a sitemap <abbr title="Extensible Markup Langauge">XML</abbr> file</a>

## Conclusion

And that's all I did. I now have a website that's generated on my laptop then uploaded to my server. I've found it easy to publish posts and everything is a lot quicker:

<img src="https://lh6.googleusercontent.com/-T8befFQMJaI/UcctGFRlmwI/AAAAAAAAB60/FN_9adEUxEQ/w761-h480-no/pingdom.jpg" alt="Screenshot of my faster than 100% of other sites pingdom result">

<p class="figcaption">My site put through <a href="http://tools.pingdom.com/fpt/">Pingdom's tester</a></p>

If you know the basics of WordPress theme creation then you should know enough to start using Jekyll. It all depends on how important comments and plugins are to you. WordPress isn't &#8216;bloated&#8217;&#8211;it's just more than you need for a simple blog.

(Incidentally, you may ask *why Jekyll?* Well, Mr Hyde is Dr Jekyll's ugly, evil alter ego. Jekyll lets you present your civilised face to the world while keeping all your ugly, evil stuff on your PC.)
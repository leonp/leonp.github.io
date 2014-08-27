---
date: 2013-04-13 08:43:26+00:00
layout: post
category: libraries
cat_name: libraries
title: Library websites, catalogues and their poor UX
---

I started working for [Suffolk Libraries](http://suffolklibraries.co.uk) last week. Over the next few months I'll be rebuilding our website. If you take a look now, you'll see why.

Libraries and the internet seem to share an uncomfortable relationship. I can see a few reasons for this. The main one is that Online Public Access Catalogues (OPACs) are not designed to slot into existing websites. They live as separate entities.

That's why you're shunted off to a subdomain or even a different website whenever you search for a title, whichever library website you try:

* [Manchester Central Library](https://librarycatalogue.manchester.gov.uk)
* [Birmingham Libraries](https://library-opac.birmingham.gov.uk/cgi-bin/spydus.exe/MSGTRN/OPAC/HOME)
* [New York Public Library](http://nypl.bibliocommons.com/)

This strikes me as exceptionally poor UX. If I go to find a book on a library website I expect to be able to find it on that site. [Navigating across websites is confusing](http://www.nngroup.com/articles/top-10-ia-mistakes/). And isn't a library essentially a collection of texts? Why aren't they actually housed in the library?

Libraries have tackled this problem in two ways:

* Some attempt to make the OPAC seem a part of the main site. This is what we've done in the past, and it's my least favourite option. The pages are styled in the same way as the rest of the website, and the navigation is replicated. This strikes me as fundamentally _dishonest_. It also makes it a PITA to make simple changes to the website IA, especially when your OPAC isn't a CMS.
* Others apply some light branding to the subdomain, perhaps through adding a logo. I prefer this approach as it doesn't try and hide what's happening to the user. But hopping between websites is a confusing experience.

In an ideal world users would tap in their query and the website would display a list of search results. You'd expect this to be easy enough to implement even if the website itself didn't store the database records. That's what APIs are for.

But here we run into a second problem. Suffolk Libraries is unique in that it is a completely separate entity from its council. But its OPAC still feels like something from the world of local government &#8211; it looks dated and is difficult to talk to. If you were able to come up with a library management system with an easy, open API you'd make a killing (there's a business idea for you.)

It seems that providing services across disparate domains and services has become a habit. That's why you'll see yet more subsites popping up, such as [ebook provider Overdrive](http://manchesterdownload.lib.overdrive.com/).

I suspect this will pose the main challenge in my website redesign. Is there anyone out there with experience of dealing with OPACs? I guess screen scraping is an option. Or is there actually a way to do subdomains and separate websites well?
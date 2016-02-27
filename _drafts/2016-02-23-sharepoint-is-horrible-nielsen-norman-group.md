---
layout: post
title: Sharepoint is crap whatever Nielsen Norman Group tells you
excerpt: Intranets are websites for staff, and Sharepoint is a product that helps you build intranets. But that doesn't make it any good.
category: web
---

It's very rare for articles about the web to [get me angry](https://twitter.com/leonpaternoster/status/701872228049285124) these days (although they might have in the past), but this [advert for Sharepoint](https://www.nngroup.com/articles/sharepoint-intranet-ux/) from Nielsen Norman Group did just that.

There are many stupid statements in this poorly written piece of shit. Let's start near the beginning:

> Some Microsoft SharePoint intranets are nothing short of marvelous — rich with features that support the business and engage employees, anchored by predictable navigation, supported by a smart search, and with page layouts that make employees want to scan all the content.

Well yes, I'm sure there are some 'marvelous' Sharepoint intranets out there, just as much as I'm sure there are many wonderful WordPress, Google Sites and Backpack (RIP) intranets out there too. That's because an intranet is basically a website for employees, and you can build websites using thousands of services.

Where Sharepoint will offer an advantage is in its integration with other Microsoft services such as Mail and Office 365. If you're using Office 365 at work (which we do) you really should look at Sharepoint. Add Intune and Azure and you _could_ have a system where staff login to their PC once to login to everything: file sharing, intranet, staff directory and email.

The problem is Sharepoint is truly fucking horrible to use. It's not just the godawful markup and early 2000s, non-responsive default designs (although that's obviously pretty fundamental); it's also the utterly impenetrable back end.

To be fair, the article doesn't try and argue that making an intranet with Sharepoint is easy. Instead, it argues you should employ UX and design folks _who also know Sharepoint_, as if UX skills combined with, say, a good understanding of HTML and CSS aren't enough:

> **Enlist UX Designers Who Know SharePoint** Your SharePoint developer may or may not be a good UX designer. So you need UX designers. Ideally, they should have a grasp of SharePoint’s capabilities. These experts should offer creative input that is reasonable within SharePoint’s constraints.

Normally, I could be pretty sure of being able to build an intranet with forms, documents and message boards using Google Sites or WordPress without having to hire somebody else. That's not possible with Sharepoint.

## What's shite about Sharepoint? Let me count the ways.

If you've never had the pleasure of using Sharepoint, here are a few of the stupid UI elements that make it next to impossible to use without specialist training.

### It's not even fucking called Sharepoint

So you login as an admin to Office 365 to set up your intranet. Here's what you'll see in your navigation menu:

<figure>

<img src="/images/portal-menu.png" alt="The Office 365 admin menu">

<figcaption class="figcaption"><p>The Office 365 menu contains no reference to Sharepoint.</p></figcaption>

</figure>

Yes, there's no Sharepoint option in there. That's because it's not clear what Sharepoint even _is_. It'll pop up in various Admin menus, or even in users' sidebars if they synch the contents of a site's documents area with a folder on their PC, but it doesn't appear to be an actual _thing_ within Office 365.

So let's try _Sites_ instead, because an intranet's a site, right?

<figure>

<img src="/images/sharepoint-sites-menu-doesnt-show-all-sites.png" alt="The Sites home page">

<figcaption class="figcaption"><p>The Sites home page won't show all your sites by default.</p></figcaption>

</figure>

This looks right: a list of intranet sites. Except for some reason it won't list all the sites you have access to; instead, you'll have to go to a different area to add more sites to this list. And you won't be able to do that by choosing a site from a list; you'll have to copy and paste the site URL into a box.

### Its language is opaque and confusing

Here's what your default site looks like:

<figure>

<img src="/images/a-site.png" alt="An example site">

<figcaption class="figcaption"><p>A default Sites website.</p></figcaption>

</figure>

This doesn't look too bad, although you may wonder what the _Notebook_ is. You'll no doubt poke around the settings to get a sense of what you can do:

<figure>

<img src="/images/site-settings.png" alt="A site's settings list">

<figcaption class="figcaption"><p>A long list of settings.</p></figcaption>

</figure>

Some of these options make perfect sense (_Site permissions_), others are a bit odd (_Solutions_) others completely baffling. What could _Composed looks_, _Web parts_ and _Reset to site definition_ actually mean? This incomprehensible labelling persists through all screens, including the page editor.

### Doing simple things is very, very difficult

At the moment we use Google Drive to build 4 or 5 work forms and and link to them _from_ our intranet. It'd be really good if we could include them _in_ our intranet.

If you use Google Drive (and, by extension, Google Sites) you'll love its forms feature. Go to Drive, select _New form_ and add all sorts of field types and logic using a simple drag and drop interface. Apps will then create a spreadsheet for you which will collect form responses. Anyone with appropriate permissions and a decent understanding of computers can create a form in minutes.

Compare this with creating a form in _Sites_. Here's the page editor:

<figure>

<img src="/images/sites-add-a-web-part-form.png" alt="The Sites page editor">

<figcaption class="figcaption"><p>The add form interface.</p></figcaption>

</figure>

And here's Google Forms:

<figure>

<img src="/images/google-form.png" alt="Screenshot of Google form editor">

<figcaption class="figcaption"><p>With Gooogle you build a form with fields and labels.</p></figcaption>

</figure>

After searching through Sites' tabs and menus I finally found the _Add form option_. It sits in the _Web parts_ section (an example of a baffling label). I'm then presented with an even odder choice: _HTML form web part_ or _Infopath form web part_. I don't know. I just want to create a fucking form. Aren't all forms HTML?
Let's try the simpler sounding _HTML form web part_:

<figure>

<img src="/images/form-options.png" alt="The add new form dialogue">

<figcaption class="figcaption"><p>There are no add field options.</p></figcaption>

</figure>

Now, there are all sorts of options that let me change the height (in pixels, natch) of my form, but there's nowhere to actually create a form from different fields.

Maybe I need to do something first. Perhaps that Sharepoint conusltant I didn't hire could help?

Ok, let's try to _Configure a connection_. Perhaps we need to connect our form to something (an Excel spreadsheet, perhaps) in order to add some fields. That could make sense.

<figure>

<img src="/images/configure-connection.png" alt="The configure connection dialogue">

<figcaption class="figcaption"><p>The configure connection dialogue. It's displayed in a pop up, which Firefox blocked by default, and has no styling. It doesn't look finished.</p></figcaption>

</figure>

_No consumer schema_? What on god's earth does that mean? Configuring a connection got me precisely nowhere. I poked around in other settings, Googled and tried the help docs. Nothing. I'm still no closer to setting up a form.

This is typical of adding any feature to a page.

## Why do people use Sharepoint?

That's a good question. As the article says:

> [Sharepoint has] strong market adoption: The Radicati Group’s 2015 "Microsoft SharePoint Market Analysis, 2015-2019” report asserts that “Microsoft SharePoint continues to see strong market adoption across all verticals, and is projected to grow at an annual average growth rate of 20% over the next four years.”

I _hope_ there's a reason for this increase beyond anyone actually thinking Sharepoint is any good. Perhaps it's me? But I reckon there could be some other explanations: as more organisations move their email and file storage to the cloud they'll use Microsoft's Office 365. As Sharepoint (and/or Sites) is a part of 365, more people will see it and try it &#8211; like I said earlier, there are lots of reasons to at least consider Sharepoint.

**Sharepoint is not good software**. People can use Google Sites and the WordPress admin area with little or no training or web expertise. This site is run on Jekyll and Github pages and I built the work website on a custom WordPress theme &#8211; yet I struggle with Sharepoint. Saying you _could_ build a good intranet with Sharepoint as long as you pay for specialist consultants merely confirms how godawful it is.

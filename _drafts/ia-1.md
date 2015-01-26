---
title: Complex site structures and navigation menus
layout: post
---

If you run a website for an organisation that does lots of things in lots of places, making information findable is hard work.

I think this work consists of three discrete stages:

1. Establish what information people want from your site (using some form of task research)
2. Organise this information (using a card sort)
3. Implement some form of navigation <abbr title="User interface">UI</abbr>

We're still working on stage 3, and it's proven a lot harder than I thought it would.

## Our current set up

We use two menus on the Suffolk Libraries website:

1. A horizontal &#8216;Tools&#8217; menu containing links to common online tasks, such as searching and reserving books and contacting us
2. A vertical &#8216;Services&#8217; menu containing links to our services, such as a branch directory, mobile library timetables and an overview of our structure

<img src="/images/sl.png" alt="The Suffolk Libraries navigation menus" height="1201" width="513">

<p class="figcaption">The tools menu (top) and services menu (under the search box)</p>

Now, this set up does work in as much as we consistently get good results when we do simple task tests; in fact, the system does really well when there are alternative routes to the same content.

But it's not perfect.

## Problems with our set up

- _If a link doesn't exist in the vertical menu, users assume it doesn't exist at all_. Because some sections contain _lots_ of sub pages we can't list every single one. Instead, we list the popular links. This causes problems when users look for information about dyslexia, for example. It actually sits in the _Reading_ section, which leads to a second problem&hellip;
- _Users often don't think the top level link is a link_. Oddly, the _Branches_ link works, but _Reading_ doesn't. This could be because there are several links under _Reading_, which suggests it's just a heading rather than a heading and a link, or, more likely, the purpose and meaning of _Branches_ is a lot clearer than _Reading_.
- _Some users struggle with dropdown menus_. We've tried to get round this problem by making dropdowns appear on click rather than hover, but _some people just don't get dropdowns_. Although on click is better than on hover as users won't accidentally open dropdowns, it does make it difficult to click the top level page (try finding the `/help` page, for example).
- _Too many places to look for information_. If you're looking for a book list you can either choose _Reading_ &rarr; _Book, music and film lists_ from the services menu, or _What's new_ from the home page content area. Our testing shows users dither because they're presented with too many choices &#8211; we cause too much friction.

## Solutions to our navigation problems

Our ideal navigation system will:

- make it easy to get to important information
- avoid presenting users with too much choice
- avoid dropdowns
- avoid links that also serve as headings
- use clearer labels

To that end, I think a single horizontal or vertical menu will work best, although having a separate _Tools_ menu may not be a bad idea. It would also solve a secondary design problem as there may not be enough room for a single line horizontal menu.
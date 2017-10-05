---
title: Skinny Guardian
excerpt: "Skinny Guardian displays the last 30 Guardian articles in a plain, easy to scan and read format. No javascript, no database and a smattering of CSS make it ideal for when you just want something to read on your phone."
summary: "Skinny Guardian displays the last 30 Guardian articles in a plain, easy to scan and read format. No javascript, no database and a smattering of CSS make it ideal for when you just want something to read on your phone."
category: work
description: "Skinny Guardian displays the last 30 Guardian articles in a plain, easy to scan and read format. No javascript, no database and a smattering of CSS make it ideal for when you just want something to read on your phone."
---

[Skinny Guardian](https://www.skinnyguardian.xyz) was inspired by sites like [CNN Lite](http://lite.cnn.io/en) and [Thin NPR](http://thin.npr.org/) -- news served with next to no styling. While this may sound (and look) unexciting I find a simple list of headlines an excellent way to get something to read quickly, and because there's nothing going on behind the scenes they load instantly. Perfect on a train or bus journey into work with a poor mobile connection, or when you want something quick to read during your lunch.

My paper of choice is The Guardian, which has [an open API](http://open-platform.theguardian.com/). So the project gave me a chance to work with external, queryable data, an area I'd only worked on once before (with the Google Maps API).

## The set up

Skinny Guardian uses Jekyll to generate static HTML files, thereby removing any database requirement. I use Netlify hosting for free SSL and Zapier integration, which means I can automate site builds once an hour (the easiest way of getting static sites to update automatically). The site simply queries the content whenever it's built, grabbing the 30 most recent articles and converting the json response into Jekyll data files with the [Jekyll Get](https://github.com/18F/jekyll-get) plugin.

I then use the [Jekyll Datapage Generator](https://github.com/avillafiorita/jekyll-datapage_gen) plugin to convert the json into Jekyll pages that I can list and feed through layout files. Throw in the Tachyons CSS framework, and you have a fast, regularly updated list of Guardian articles to peruse and read.

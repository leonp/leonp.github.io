---
title: Getting to grips with Contentful and Jekyll
layout: default
category: web
description: "Contentful is a CMS based on an API, providing a non-technical editing environment for web writers. Here's how it works with Jekyll, a static site generator."
---

[Contentful](http://contentful.com), if you're unaware, is a platform agnostic Content Management System (CMS). You use its API to pull content into a website or app. There are several reasons for using it instead of/in addition to a CMS:

- With a closed CMS such as WordPress you can only publish content to your website. While you can use RSS to pull that content into something else, the Contentful API gives you access to _all_ content types and fields in easy to read and parse json.
- If you move your website away from WordPress you have to get all the content out and into your new system as well. Contentful has your content ready to access via the API, which should make for a less disruptive, long-winded process.
- Contentful has a nice <abbr title="What you see is what you get">WYSIWYG</abbr> editor, a god send if you're using a system which has no front end, such as Jekyll or Middleman. Furthermore, it lets you create well-structured data types easily.

We use Jekyll at work and publish with a text editor, command line and Git. That's OK for our web team of two as we don't need (or want) many other people publishing to our website. However, if you're running a site with lots of distributed writers, editors and publishers using a text editor and Git for publishing is far from ideal. You'll want something a little less technical.

Even for us, it'd be good if we had the option of adding a news story without having to fire up a terminal &#8211; we could publish on a phone or tablet, for example. While we can use Prose or even edit files directly in Github, a proper editor would provide a lot better experience.

I've been experimenting with Jekyll and Contentful. I found it easy to set up and using the editor was great, especially for someone who's been using Markdown for years. However, there are a couple of problems with creating canonical pages for your content items, and getting stuff from Contentful to the live site.

## Setting up Contentful and Jekyll

I decided to create a simple collection of books for my experiment. The content type `book` consisted of just four text fields:

- Book title
- Author surname
- Summary (a longer text field)
- Picture (any image)

This took a couple of minutes. I found the Contentful UI simple and intuitive:

{% include figure.html url='contentful1.jpg' alt="Screenshot of the Contenful editor" caption="Adding content types and content is easy. The rich text box will be welcome for non-technical editors, and it generates Markdown, which is great for Jekyll." %}

Happily enough, Contentful provide Jekyll and Middleman plugins for grabbing content and putting it into your project. I installed the Jekyll plugin with no problems and was soon pulling content into my local project by running `bundle exec jekyll contentful`.

## Displaying pulled in content on the website

Contentful places <abbr title="Yaml Ain't Markup Language">YAML</abbr> files in your Jekyll project's data folder. As you'd expect, the files consist of jason name and value pairs:

{% include gist.html code="f163a966aba840af33e877440e97aca2" gh-user="leonp" %}

---
title: 5 ways to use in site search data to improve your website
author: Leon
excerpt: "Keep your search info to hand and learn your users' language."
layout: post
permalink: /2014/05/5-ways-to-use-in-site-search-data-to-improve-your-website/
categories:
  - Code and technology
  - Language
  - Website management
  - Writing
---
Keep your users&#8217; website search queries within easy reach to:

*   See what’s important to them
*   Learn their language

And know how your search engine works to make improvements.

Here are 5 ways I use in site search data:

## 1. Add search data to your CMS

It’s pretty easy to set up Google Analytics (GA) to track what your customers search for on your website.

But it’s better when you have search data to hand. If you’re managing a website you’ll be spending most your day–to–day time in your Content Management System (CMS), so that’s where you should be able to find search data.

On the [Suffolk Libraries][1] website I use [Relevanssi][2], which displays user queries in the WordPress dashboard.<figure class="figure alignnone">

<img src="http://leonpaternoster.com/wp-content/uploads/2014/05/search-screenshot.jpg" alt="Relevanssi search queries" width="760" height="599" /><figcaption class="secondary">The Relevanssi user searches page</figcaption></figure> 
I look at search queries whenever I have a couple of minutes spare, so I can make and test little copy and structural changes all the time.

## 2. Use search terms to write pages and structure your site

If users are searching for the same thing over and over again it could indicate:

*   You’re missing some important content
*   Customers can’t find important content
*   Or, more simply, what users come to your website to look for (remember: [many visitors head straight for your search box][3] and don’t bother too much with navigation)

Whatever it indicates you might need to take action. Think about:

*   writing new content
*   rewriting existing content
*   making important content easier to find (perhaps by providing a shortcut on your home page, or by restructuring/streamlining your existing navigation)

## 3. Learn your users’ language

Organisations use different words from users to describe the service they offer. Whether the organisational lingo is ‘better ’ than the user’s doesn’t matter.

You may refer to *titles* because the library offers books, films, epubs, CDs, DVDs, streaming and MP3s and it’s a convenient umbrella term. However, when users come to your website they often (but not always) have a particular format in mind. They want to borrow a book, so they search for something like *how do I borrow a book online*. So your pages have to contain the terms *borrow* and *book* (or you need to work on synonyms).

You’ll see this analysis doesn’t just apply to how you label services. It can get quite complex when users think about processes, such as borrowing and renewing.

## 4. Know how your search engine works

If you’ve identified a problem and written some content you’re nearly there. The final piece of the jigsaw is understanding how your search engine will find that content and display it.

You need to think about:

*   What types of content the engine searches
*   How the engine does relevancy
*   Can it handle synonyms?

### Content types

Relevanssi allows you to omit or weight certain post types and comments from search results. So you can stop comments appearing in results, or make sure the engine favours pages over comments.

At any one time we have several thousand events published on the website (which is probably a problem in and of itself). We’ve therefore taken the decision to exclude events from search results.

### Relevancy

A decent search engine attempts to sort search results by how relevant they are to the searcher. The simplest mechanism to control relevancy is through field (title, content, excerpt etc.) weighting.

For example, you can assign each WordPress post field a score which Relevanssi uses to calculate how relevant the post is. You can use this to make the title field a lot more important than, say, the excerpt.

After you’ve weighted fields you can make sure titles contain common user search words and terms so they appear among the first results.

### Synonyms

We often label *things* with different words, which may have slightly different meanings. Words drop out of popular usage over time, so what’s now a *bucket* was once, more or less, a *pail*.

Search engines let you group several words under one meaning. So I could make *book* and *title* mean the same thing.

I say *could*. I haven’t really used this Relevanssi feature as language usage is so unpredictable. What if someone really wanted to search for something to do with the titles of books rather than books? What if you use *title* to mean title rather than *book*?

## 5. Test your search set up

Search can be a complex beast, especially if you&#8217;ve got lots of options to tweak (which is why using [Google Custom Search Engine][4] often appeals).

If you’re making extensive or complex changes, test them out on your staging site first, and keep an eye on your search logs and analytics once you&#8217;ve made them live.

 [1]: http://suffolklibraries.co.uk
 [2]: http://www.relevanssi.com/
 [3]: http://www.nngroup.com/articles/search-navigation/
 [4]: https://www.google.com/cse/
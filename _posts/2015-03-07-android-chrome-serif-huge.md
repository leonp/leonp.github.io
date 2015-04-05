---
title: Chrome for Android's default serif is too big (and Chrome doesn't hyphenate)
layout: post
category: work
---

I do try and make this website _quick_, mainly because without speed it's hard to make a good <abbr title="User experience">UX</abbr>, and I want to make your visit as pleasant as possible. I'm nice like that.

To make this site speedy I:

- Serve static HTML files
- Use Github Pages' <abbr title="Content delivery network">CDN</abbr>
- Limit the use of javascript as much as possible
- But do use javascript so pages render while they fetch external fonts
- Keep an eye on the number of resource requests I make  (although I could do better here, I know)
- Keep file sizes small

In the interests of keeping file sizes small I'm conservative when it comes to external fonts. Until recently, I only called Open Sans Light for use in headings. The main font stack was simply `georgia, serif` (incidentally, <a href="/2014/09/in-praise-of-georgia/">I do like Georgia a lot anyway</a>, so this wasn't a purely functional decision). This amounted to around 23k worth of font files and associated javascript &#8211; acceptably small, I think.

That's all well and good, until you get to Android. Neither Chrome or Firefox have Georgia, so they'll use their default serifs instead. In Chrome's case that's Droid Serif, in Firefox's it's Charis.

The same page therefore looks very different (<a href="/labs/test-droid">see this page for a live example</a>):

<div class="row clearfix">

	<figure class="g-w-col1-2 g-w-left">
	
		<h2>Chrome</h2>
		
		<p><img src="/images/chrome-serif.jpg" class="centre" alt="Screenshot of Chrome displaying serif text"></p>
		
		<figcaption class="figcaption">Text at font-size: 100% in Chrome on Android. It's big. And ugly.</figcaption>
		
	</figure>
	
	<figure class="g-w-col1-2 g-w-left g-w-last">
	
		<h2>Firefox</h2>
		
		<p><img src="/images/ff-serif.jpg" class="centre" alt="Screenshot of Firefox displaying serif text"></p>
		
		<figcaption class="figcaption">Text at font-size: 100% in Firefox on Android. It's elegant.</figcaption>
		
	</figure>
	
</div>

I'm not _too_ fussed by Droid Serif's pig ugliness, but combine ugliness with clumsy proportions and you get something unusable. Which means you _have_ to reach for an external serif font.

## What's wrong with hyphens?

If you look really closely at the two screenshots you'll notice something else that gives Firefox the upperhand when it comes to typography. Firefox hyphenates, through the `hyphens: auto` declaration.

Even if browsers justified decently I'd probably stick with left aligned text, but hyphens _are_ useful for non&#8211;justified text, especially on narrow screens with big type. They help you avoid half&#8211;filled, two word lines.

If Internet Explorer, Safari and Firefox support `hyphens: auto`, why on earth don't Opera and Chrome?







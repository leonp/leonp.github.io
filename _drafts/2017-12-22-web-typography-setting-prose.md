---
title: "Web typography: Making prose readable by choosing the right typefaces"
category: web
---

There are quite a few things you need to consider when you choose typefaces for prose, beyond whether you think they look nice. Here, I'll discuss five things that affect your readers' experience of your prose directly:

1. Loading speed
2. Similarity and contrast
3. Legibility
4. Tone

<aside class="pa2 ph4-ns bg-near-white">

<h2 class="f5">Terminology</h2>

<p>In this article, I'll use the terms <i>font</i> and <i>typeface</i>. A font is one size or weight of a typeface. So, strictly speaking, Georgia is a typeface, while bold italic Georgia is a font. This isn't a hard and fast rule, and the terms have become inter-changeable. For example, <i>webfont</i> can refer to a font or typeface that you download.</p>

<p>I'll also refer to <i>webfonts</i> and <i>web safe</i> fonts (or typefaces). A webfont is a font (or typeface) that you ask the reader to download from the internet. A web safe font is already on their PC or device, so it doesn't need downloading.</p>

</aside>

## 1. Loading speed

Since 2009 [Typekit](https://typekit.com) has offered an easy way to include hundreds of fonts you don't have on your PC in web pages (incidentally, IE4 blazed a trail back in 1997 with the [introduction of downloadable EOT fonts](https://en.wikipedia.org/wiki/Web_typography#History)). In 2010, [Google Fonts](https://fonts.google.com) launched, providing simple, free access to thousands more fonts, of perhaps more varied quality.

Before these <i>webfont</i> services, we were limited to a handful of <i>web safe</i> fonts, which we could be fairly sure the reader had installed on their PC. This is why most websites used very familiar typefaces such as Georgia, Verdana, Arial and Helvetica; they don't need downloading as they're already on Macs, Windows PCs and iOS (Android is a different beast, but we'll come on to that).

In some ways webfonts are obviously a good thing: developers get access to more varied, better quality fonts, which means they can make prose more legible and attractive.

However, back in 2009 page performance was a secondary consideration for most web developers, as we assumed people would access our pages via a desktop browser over a decent broadband connection. Then mobile happened, and performance became much more important (in turn, we're more aware of how critical speed is to _any_ digital interaction).

_Webfonts slow pages down_. You can (and should) mitigate this by serving them well, but any font your reader has to download will add a significant performance hit to any web page, especially if you've been optimising in other ways. For example, if I use web safe fonts such as Georgia and the PC's default sans serif, my home page weighs in at around 23kb and 4 requests. Add three fonts from the Spectral typeface to replace Georgia, and you have around 90kb and 10 requests.

Furthermore, system typefaces tend to come with all the variants (bold, italic, bold italic, light etc.) you'll ever need, whereas if you want to use a typeface's normal, bold, italic, bold italic and 300 weight fonts you'll need to download five files.

So your first decision is: _Do I use a web or a system typeface?_, followed by _If so, what fonts will I need?_ If you're looking to make your web page as fast as possible, you should, in all conscience, use a system typeface. As Adam Morse says:

> These points were enough to convince me that webfonts cause more problems then they solve and weren't worth the cost to my users or myself. Webfonts come with a number of costs. They cost money to license. They cost time to implement. They cost time to download, and with some mobile data plans they can cost money to download as well. <cite>[Webfonts](http://mrmrs.github.io/writing/2016/03/17/webfonts/)</cite>

Why use a webfont at all? Well, you may feel readers are bored of Georgia, or that Skolar represents your 'brand' better. Also, since the rise of mobile and proliferation of operating systems and operating system versions, we can't be as sure that the reader has the specified typeface, or font, on their device. For example, Android doesn't include Georgia.

If you're sticking to web safe typefaces you'll specify a font(s) to load should the user not have your first choice, adding the system `serif` or `sans serif` at the end. That way you'll be able to predict what typeface your readers see, even if it isn't always the same, and that it will at least be part of the broad serif or sans serif families. You can be quite [creative with these system font stacks](https://www.sitepoint.com/eight-definitive-font-stacks/), but you'll need to be happy with ceding control over some of the points I discuss below.

<aside class="pa2 ph4-ns bg-near-white">

<h3 class="f5">On control</h3>

<p>The web is an open, democratic, decentralised beast, accessible through millions of different screens and other devices. There is a tension between <em>controlling</em> typography and how our readers experience it. The web&#8217;s openness and accessibility necessarily means we can&#8217;t control <em>how</em> people get to read our words, and nor should we want to. Beware experts using lots of print terms, stuffy language and edicts; instead, try and make your words as accessible as possible.</p>

</aside>

Still, I'm not here to tell you what to do, and the following advice applies regardless of whether you're using Georgia, Freight Text Pro or Open Sans.

## 2. Similarity and contrast

You'll note this article is about choosing _typefaces_ rather than a single typeface. You can, of course, choose just one for your prose. If you're thinking of doing that, move on to the next section; everything's the same, there's no contrast to consider.

There are a few reasons why you might want to choose more than one typeface for your prose.

- _Variation provides some visual interest_. Break up those swathes of serifs with a smart, upright sans for secondary text and titles.
- _Contrast aids interpretation_. We want our different prose elements (headings, emphasis, lists etc.) to look different from each other. One of the simplest ways to do this is through using different typefaces.
- _Some typefaces are better than others at bolding and italicising_. As a rule of thumb, assuming you're using a true italic rather than slants generated by the browser, serifs make for more elaborate and, arguably, attractive italics. On the other hand -- and this is a more hard and fast rule -- sans serifs have clearer, more attractive bolds. This is a _possible_ argument for using sans serif titles and headings paired with a serif for body text.

I'm going to _assume_ you're pairing a serif and a sans serif, but there's no law against using two different serifs, or two different sans. Whatever your choice, you need to consider a few things.

Some typefaces play well against each other, for all sorts of largely subjective reasons. I'll save these considerations for the tone section of this article. What I'm interested in here is contrast, specifically in your typefaces' proportions.

_Some typefaces are bigger than others_, even at the same pixel size. If you're only using one typeface this isn't a problem -- you can simply up your whole document's `font-size` so the text is large enough to be read across devices. But take these three fonts as an example:

{% include figure.html url='spectral-georgia-plex.png' alt="The letter x rendered in 3 different fonts" caption="The x character at exactly the same pixel size in (from left to right) Spectral, Georgia and Plex Sans" %}

This is the same _x_ character rendered at 72 pixels, but you can see the Plex Sans _x_ is approximately 15% taller than the Spectral _x_. (You might also compare Georgia's thick strokes and curvier serifs, which combine to make it legible and friendly at the same time, with Spectral's slightly sharper serifs and thinner strokes, which make for a more formal, classical feel.)

This variation in height can cause problems. To my eyes, Spectral needs to be set at around 21 pixels in order to make it comfortably legible, whereas Plex Sans is fine at 18 pixels. If you're setting your type to a scale you might find there's not much wriggle room for heading sizes at different points on your scale.

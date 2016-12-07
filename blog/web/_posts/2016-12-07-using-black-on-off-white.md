---
layout: default
title: "Current thinking: Using 'true' black text on an off white background"
category: web
description: Trying new colour combinations in order to make my website more readable.
published: true
---

I wrote something on how I've gone about building websites over time, and the habits we get into. Tied to that are some basic decisions we make about projects that are pretty much always the same &#8211; the real basic habits.

Among these would be stuff like designing mobile first (which is pretty much how everyone does things these days, I assume, but was [a real sea change back in 2011](/2011/07/scherzo-is-mobile-first/)), designing using progressive enhancement and accessibility concerns like contrast and text size.

Since I started building web pages I've always used the same foreground and background colours for any long pieces of text, more or less. The background has always been `#FFF` and the foreground a dark grey, `#222` to `#444`, depending on the size and thickness of the font.

The reasons for this choice have been pretty simple. 'True' black on white is too stark, while grey on white is too indistinct. Using something around `#333` on `#FFF` seemed the best way to satisfy both demands.

At the time of writing I'm taking a different approach: `#000` on `#FFFCEB`, an off white, creamy yellow (or ['washed yellow' in Tachyons](http://tachyons.io/docs/themes/skins/) language).

I had a couple of reasons for making this change.

Firstly, I liked this piece on [how the web became unreadable](https://backchannel.com/how-the-web-became-unreadable-a781ddc711b6#.17po1hr1d), which argues that there's nothing wrong with a 'crisp' black on white for reading from a screen (and that true black isn't true black anyway).

Marks argues that not using black on white is a less severe version of designers choosing a mid gray on white simply because it looks better (also see: using `font-weight: 300` for body copy). This _seems_ right to me, and as accessibility *should* always trump subjective style, I'm trying `#000`.

Secondly, we stock dyslexia friendly books at Suffolk Libraries, which use cream paper as the reduced glare makes the text easier to read. [Marks quotes 2012 research into colour combinations](https://kevinmarks.github.io/textsamples.html) to make the same conclusion (although somewhat confusingly he suggests using a dark grey for text).

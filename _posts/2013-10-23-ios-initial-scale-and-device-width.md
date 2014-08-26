---
date: 2013-10-23 12:58:57+00:00
layout: post
title: Scaling and width in iOS
---

## The short version

If you want your website to change when the user rotates a device running iOS, set the `width` *and* `initial-scale` attributes in your `viewport` meta tag.

## The long version

If you're building a website that scales across devices and orientations you'll need to use the (non&#8211;standard) <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag">viewport meta tag</a>. In theory this is really simple &#8211; you add a single line to the `head` of your HTML document:

`meta name="viewport" content="width=device-width"`

### How width=device-width works

By default, manufacturers make mobile devices work with sites that haven't been built for narrow screens. So although your iphone's screen is 320 pixels wide and most desktop websites are around 960 pixels wide, you don't have to scroll horizontally to see the whole page.

iOS does this by creating a virtual screen (or *viewport*) 980 pixels wide, which will accomodate most websites. It then maps the viewport onto its &#8216;real&#8217; screen. So a website that hasn't been built for a narrow screen looks cramped, but you can see the whole page and zoom into areas you want to read or click.

This kind of works, but panning and zooming is a chore, and difficult to get right every time. What we really want is a website that's been built for the device itself. For example, our in library home page changes according to what you view it with:

<img src="/uploads/sl-wide.png" alt="The Suffolk Libraries in library home page on a widescreen monitor">

<p class="figcaption">The Suffolk Libraries in library home page on a widescreen monitor</p>

<img src="/uploads/sl-narrow.png" alt="The Suffolk Libraries in library home page on a Nexus 4 mobile phone">

<p class="figcaption">The Suffolk Libraries in library home page on a Nexus 4 mobile phone</p>

That's where our `viewport` meta tag comes in. When we set the `width` attribute to `device-width` the device sets the width of the virtual viewport to the same width as the device itself. In the case of the iphone, 320 pixels instead of the default 980 pixels.

### One code base, multiple website views

To actually make our website look different across different devices (iphone, laptop, tablet, desktop etc. etc.) we use CSS `@media` queries. These change the website's appearance according to the viewport width.

So if we feel our content allows us to use a multi&#8211;column layout once the viewport reaches 760 pixels, we could use this CSS:

<pre>@media screen and (min-width: 760px) {
Some CSS that's applied when the screen is
at least 760 pixels wide.
A common practice is to move from a single
to a multicolumn layout.
We can also change things like spacing, 
whitespace and heading sizes.
}</pre>

Again, this is a simple, robust system. We use the same HTML regardless of the device that views it. It works.

### One device, multiple website views

Sometimes our media query *should* change the website's layout when we shift from portrait to landscape. Take this example:

<pre>@media screen and (min-width: 900px) {
Some CSS that's applied when the screen is
at least 900 pixels wide.
The iPad 1 and 2 have a 768x1024 resolution.
Which means you'll only see these
styles when you view the web page
in landscape mode. 
}</pre>

Except the iPad *doesn't* behave as expected. Instead, both orientations show the non&#8211;media query CSS. If you change the query to `@media screen and (min-width: 760px) {` then both show the media query CSS.

The reason why? As far as I can tell, iOS *always* uses its narrow viewport dimensions to figure out when to apply media queries. So `@media screen and (min-width: 900px)` has no effect on an iPad becuase its viewport is 768px, even in landcape mode.

You would have thought our original `meta name="viewport" content="width=device-width"` tag would have told the iPad to make the viewport and the device width one and the same. So when the orientation changes the viewport should &#8211; otherwise, what's the point of rotating the device?

But there is a fix.

### Change the viewport meta tag

This is what you'll need:

`meta name="viewport" content="width=device-width, initial-scale=1"`

Note the `initial-scale` attribute. `initial-scale` *should*, as the name suggests, simply scale our content. For example, if you used `meta name="viewport" content="width=device-width, initial-scale=2"` on an iphone 4 in portrait mode, the viewport would be 320 pixels. Any image with a width of 200 pixels would be expanded to 400 pixels (which results in horizontal scrolling &#8211; I can't really think why you'd ever use a value of more than 1).

So there are two reasons `initial-scale=1` shouldn't make any difference (and why it's therefore &#8220;<a href="http://www.quirksmode.org/blog/archives/2013/10/initialscale1_m.html">batshit insane</a>&#8221;). Firstly, it has nothing (I can see) to do with orientation. Secondly, the default value should be 1 (if it wasn't you'd get some really unpredictable results) &#8211; so why explicitly set it to 1?

But it does. And here's <a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html">Apple's sort of explanation</a>:

>  &hellip;if just the initial scale is set, then the width and height are inferred. Similarly, if just the width is set, then the height and initial scale are inferred, and so on. If the inferred values do not work for your webpage, then set more viewport properties.<br>Since any of the width, height, and initial scale may be inferred by Safari on iOS, the viewport may resize when the user changes orientation. For example, when the user changes from portrait to landscape orientation by rotating the device, the viewport width may expand. This is the only situation where a user action might resize the viewport, changing the layout on iOS.

If I knew *how* iOS inferred width, initial scale etc. it would help. But adding `initial-scale=1` does work, so I guess that's all that matters.




---
author: admin
comments: true
date: 2011-02-18 12:19:00+00:00
layout: post
slug: adblockers-ids-and-class-names
title: Adblockers, IDs and class names
wordpress_id: 1752
categories:
- Articles
tags:
- adblock
- adverts
- html
- testing
---

I encountered what seemed a really thorny problem when building a work website recently. I wanted to add a few event sponsor logos to a sidebar, which linked to a separate sponsors page.

The coding was pretty simple and I didn't envisage any problems. Of course, I tested it in a few browsers locally before uploading to our live site. The results were strange. The logos displayed in IE and Safari, but not Firefox and Chrome.

Stranger still, the new sponsors page didn't display at all in Firefox and Chrome. I spent a good couple of hours searching through the markup and CSS, making various adjustments. No joy.

It finally occurred to me that this might not be an HTML/styling problem; if it was, why would Chrome and Safari do different things? The only thing the two offending browsers had in commmon was that I'd installed the same extension on them, namely [Adblock Plus](http://adblockplus.org/en/). Sure enough, uninstalling the extension fixed the ‘problem’ ([my use of a `sponsors` ID](https://easylist-downloads.adblockplus.org/easylist.txt)).

Want to test this for yourself? [Visit my test page](http://leonpaternoster.com/labs/spons). (Note that the whole page problem was due to attaching a `sponsors` ID to the `body` element.)


## What does this mean?


Two things:



	
  * you need to be mindful of the classes and IDs you use in your markup; what might seem quite innocent may get blocked or have unintended effects (see also [the pitfalls of using the about class](http://leonpaternoster.com/2010/12/beware-the-about-class/))

	
  * you need to test across browsers _and_ browsing scenarios. If your primary browser is Safari you still need to test in Chrome, and it's best to test in a ‘real’ Chrome installation, rather than a virginal, testing–only install


You could argue that Adblock plus is being a tad draconian here. However, looking at this from the website visitor's view, you could also argue that it's doing exactly the right thing; after all, not everyone wants to look at a bunch of logos and read about sponsors.

---
title: Unstyled reveals how bad markup is, even on The Guardian
layout: post
---

> Unstyle removes the website's original CSS, and replaces it with a much smaller, _better_ [my italics] optimized version. <cite>[Unstyle](https://unstyleapp.com/about/)</cite>

I'm not sure in what ways Unstyle's stylesheet is better than, say, <cite>The Guardian's</cite> styles. It's certainly smaller, and in a mobile world that really is an important aspect of getting your page to render as quickly as possible. But Unstyle is built for a _visual_ browser, so _some_ CSS is valid. For example, it makes sense to hide skip links from a browser-rendered website as we don't need a _Skip to content_ link when we can see where that content is. Overriding the default CSS `line-height` value will make prose more readable.

It's a lot easier to scan and interpret <cite>The Guardian's</cite> home page than its Unstyled version.

So Unstyle is slightly misimplemented, but the basic idea idea of being able to render a meaningful, readable website <i>sans</i> javascript and CSS raises some interesting questions.

<cite>The Guardian</cite> is quick compared to <cite>The Globe</cite> and <cite>The Post</cite>, but view it naked, and its a bit odd.

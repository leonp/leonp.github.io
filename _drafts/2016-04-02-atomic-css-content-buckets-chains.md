---
layout: post
title: Atomic CSS, abstraction, managing classes and avoiding repetition
excerpt: Tachyons is a lightweight, unopinionated CSS framework that you could, in theory, use for any project at all. I've found it easy to use and quick for building pages, but what happens when you want to change a common part of your design or editors use its classes?
category: web
---

Tachyons is an "atomic" CSS framework, which means it eschews the abstraction of Foundation and Bootstrap's panels, jumbotrons and image sliders for a low level collection of classes that map directly to CSS properties.

Tachyons is virtually unopinionated. You can build components by chaining CSS classes, thereby completely controlling their appearance.

Take Foundation's panel as an example. In Foundation adding a panel to your HTML is simple:

<pre><code>&lt;div class="panel"&gt;Panel stuff&lt;/div&gt;</code></pre>

Which applies the following CSS to the `div`:
<pre><code>border-style: solid;
border-width: 1px;
border-color: #d9d9d9;
margin-bottom: 1.25rem;
padding: 1.25rem;
background: #f2f2f2;</code></pre>

That's fine if you're happy with all your panels having a `1px #d9d9d9` border and an `#f2f2f2` background, but if you want a different background colour, padding or border you're stuck without writing your own classes or, worse still, more specific rules.

In Tachyons you'd chain classes together:

<pre><code>&lt;div class="ba b--dark-gray pa4 mb4 bg-light-gray"&gt;Panel stuff&lt;/div&gt;</code></pre>

Or, if you wanted a different panel, perhaps with a darker background:

<pre><code>&lt;div class="ba b--dark-gray pa4 mb4 bg-silver"&gt;</code></pre>

Or a really thick, dashed border with less padding and a smaller bottom margin:

<pre><code>&lt;div class="b--dashed bw5 pa2 mb2 bg-light-gray"&gt;</code></pre>

Which applies the following CSS to the `div`:

<pre><code>border-style: dashed;
border-width: 2rem;
padding: .5rem;
margin-bottom: .5rem;
background-color: #eee;</code></pre>

That's good if you're willing to make a trade off between loss of control and ease of writing. _Atomic CSS gives you more control over each instance of a component, but abstraction saves time and ensures consistency._

That sounds like quite an easy decision to make &#8211; of course we'd rather type `panel` than think about margins, colours and padding. But when you're building a complex site with lots of different types of 'panels' (or things that are like panels but not quite) this might be a problem. And if you're building more than one site atomic CSS can offer a huge bonus: In theory, you can use the same framework every time but design for different users, brand and context.

We often moan that sites look and behave in the same way. This is in no small part due to Foundation and Bootstrap abstraction: a Bootstrap jumbotron on one website will share features with a Bootstrap jumbotron on another.

More worryingly, abstractions express a view on how web pages as a whole should look. The fact that jumbotrons and nav bars exist encourage the top, horizontal navbar/huge splash image/product summary pattern we see on so many websites. This _could_ be a good thing: when we go to a website we know what's going to be there and automatically scroll past the big image. But what if your service doesn't fit into such a neat design? What if you're not putting the cart before the horse?

## DRY your templates: move complexity away from CSS

Before CSS, we used HTML like this to make a paragraph green:

<pre><code>&lt;font color="green"&gt;Some text&lt;/font&gt;</code></pre>

That was bad because every time we wanted to change the shade of our green, or even make it red, we had to hunt through all our HTML files and change every `color` attribute.

So we unlearned that and created a 'semantic' class instead (`.success`, maybe) with a `color` declaration. It might look something like:

<pre><code>.success {
    color: green;
}</code></pre>

If you're using Tachyons you'd create your own class (probably something like `.custom-green` but `green` will do for this example) and apply it to the paragraph:

<pre><code>&lt;p class="green"&gt;</code></pre>

You see the similarity with `font` and maybe shudder. Wasn't the whole point of CSS that we change the value in our declaration once so it would _cascade_ through all our HTML, changing every green thing at once? Now we're back to bad old days of searching through HTML files and changing every instance of the value `green`.

In those days we were probably marking up individual pages by hand, perhaps including a header, sidebar and footer. When you're managing hundreds of files finding and replacing a single value is migraine inducing work. But the way we produce pages now has also changed; instead of handcrafting everything, we're using templates to process data and churn out an unlimited number of HTML pages. So we can, in theory, move complexity from CSS to our templates as we only have to change our `green` value in a handful of templates:

> &hellip; this means removing complexity from stylesheets, which are global and leaky, and moving that complexity to the templating system, which is much more isolated and easier to manage. <cite>[Rethinking variables in CSS](http://jxnblk.com/writing/posts/rethinking-variables-in-css/)</cite>

If you're keeping [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself) you'll avoid repetition in your templates as much as possible, probably through using logic or an include to change output in one template instead of creating a brand new one:

> Most web projects will be utilizing some sort of templating system. Just as with any code, templates should be kept DRY. If the markup for something like a modal overlay is defined multiple times across templates, it should be consolidated to a single place. <cite><i>[ibid](http://jxnblk.com/writing/posts/rethinking-variables-in-css/)</i></cite>

## Editors using atomic CSS

So in an ideal world, web editors will only provide data for templates to produce HTML pages, even in the form of long, marked up articles. However, sometimes they'll need to use something like our `panel`, perhaps for a table of contents, or just to draw attention to a part of their page.

This could pose a problem as we're editing data rather than a template or include. What if the editor has created 20 panels over the years? What if we need to need to change their background colour? The only way to do this seems to be hunting through the relevant data.

I'm not sure if I'm still seeing this problem through the eyes of the CSS cascade. Perhaps there's a templating solution? Maybe we should create a table of contents template or include? In other words, we should always look to move abstraction and complexity from CSS to templates. This really is a new, difficult way of looking at things for someone who was around during the table versus CSS wars, similar to the shift to mobile first design 5 or 6 years ago.

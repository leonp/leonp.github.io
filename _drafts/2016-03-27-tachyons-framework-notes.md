---
layout: post
title: Atomic CSS and content buckets
excerpt: Tachyons is an atomic CSS framework that you could, in theory, use for any project at all. I found it easy to use and quick for building pages, but there are a couple of caveats.
category: web
---

We've used the [Foundation front end framework](http://foundation.zurb.com/) at work for a few years and, while it's served us pretty well, I've come to find it too opinionated and unwieldy, which means lots of overwriting styles, large files and unused javascript and CSS.

We're looking at developing our own set of CSS modules, but as there are far better developers out there I've also been keeping an eye out for a Foundation alternative. I've enjoyed reading Adam Morse recently, so I thought I'd try [Tachyons](http://tachyons.io), his atomic CSS framework.

## Atomic CSS

The CSS universe has a benign god: it consists of a hundred or so properties that form the building blocks of all our styles. Stuff like margins, padding, borders, font sizes, borders, text-transform, font-style and colour. Atomic CSS references these simple properties using a combination class names and extensions.

For example, Tachyons has a set of rules that set the `font-size` of any element. These follow a simple, terse structure: `f1`, `f2`, `f3-ns` etc. What you won't find in Tachyons is a jumbotron or image slider:

As Morse puts it:

> It’s all about lego bits. Because I never needed to re-contextualize my understanding of lego blocks. I could use them across ‘projects’ and they were always the same. I dream of this world in front-end development. I want lego blocks that work everywhere because there is serious power in leveraging solutions that are project agnostic. <cite>[CSS and Scalability](http://mrmrs.io/writing/2016/03/24/scalable-css/)</cite>

A jumbotron is a combination of lego bricks &#8211; think of it as something like a pre-built lego house. You _might_ be able to squeeze the same lego house into different lego cities, but you can _always_ use a combination of bricks to build a house that fits perfectly.

Atomic CSS also solves specificity problems. Because each class does just one thing independently of other classes, styles can only have one effect, even when they're nested. There are no `.introduction .f5` type declarations.

This sounds great. So I thought I'd redo a copy of my site locally using Tachyons.

## You can build things quickly

Tachyons is really elegant. The terse syntax might seem opaque at first, but once you start setting padding, margins and background colours it soon makes sense. You'll be chaining classes and laying out page elements in no time. Longer, more &#8216;meaningful&#8217; class names now seem verbose &#8211; atomic CSS is a lot more readable and easy to interpret than more traditional CSS.

Working in small units made shifting page elements _really_ quick. It's easier to design in the browser with a thoughtful use of `em` and `rem`; in fact, it feels more Photoshop and Sketch-like.

Of course, if you just link to the CDN copy of `tachyons.min.css`, you're not using SASS or similar. Because it only deals with CSS fundamentals such as border and size, there shouldn't, in theory, be much need to extend or overwrite its classes &#8211;  you'll only be writing HTML.

## Smart, responsive typography

However, all frameworks and resets are opinionated to _some_ degree. Tachyons imposes a type scale and sans serif font stack, for example. The defaults are readable and attractive, as is the palette of greys, blacks and whites. The default `measure` is `30em`, which will give you a nigh on perfect line of around 10-12 English words.

Tachyons is mobile first and implements 3 sensible breakpoints. You extend classes by adding the breakpoint abbreviation to the name; for example, to apply a font size at the _not small_ breakpoint, you simply add `-ns` to the class name. So `f2 f1-ns` will give you the `f2` font size up until the _not small_ breakpoint, where you'll get the `f1` font size. Again, it's quick, flexible and easy to interpret.

## Excellent documentation and examples

Every atom contains examples and its CSS, which makes extending and overriding pretty simple. There's also a [useful set of components](http://tachyons.io/components/) you can use straight away, including navigation patterns, headers, footers, cards etc. These also demonstrate how powerful an atomic approach can be.

## Content buckets are a problem

So that's the good. I did encounter a few problems, though.

When you're using atomic CSS you'll want to put classes on every element, or leave them to the Normalize CSS. That's doable if you're just feeding structured data through a template engine, but not so much when you have users editing their own content.

Most CMSs will inject editor content into a page and wrap it in a `div` with a class like `entry-content`. Unless your users are adding classes to everything, you're going to break one of the tenets of atomic design by using descendant selectors. For example, if you want to style third level headings in `entry-content` you're going to have to use something like `.entry-content h3`.

This can become a specificity problem when you want to use Tachyons CSS within your wrapping class. Because `.entry-content h3` is more specific than `<h3 class="f5 f4-ns pa0 mb0 mb3">` it'll take precedence. I didn't find it a huge problem (in fact it made me rethink and improve my HTML) but I could see it making things difficult on a bigger site.

## Your HTML doesn't seem that dry

Perhaps a bigger problem is the sheer number of classes you add to things repeatedly.

Take article and page titles. My blog uses separate layouts for blog posts and pages, but they share the same title style. In the old days I'd simply create a `title` class and add it to the relevant `h1` element across my templates.

In Tachyons you have to add a chain of classes across all your templates (something like `<h1 class="f2 f1-ns pa0 mb0 mb3">`), which at the very least seems inefficient.

It gets more difficult when you want to change your title style. Before Tachyons I'd simply update `.title` once in the stylesheet. In Tachyons I have to edit all instances of `<h1 class="f2 f1-ns pa0 mb0 mb3">`.

Which raises the very odd possibility of returning to the pre-CSS days of `<font face="verdana" color="green" size="6">This is some text!</font>`.

Now, this could all be a function of my poor templating, or CSS, for that matter. I'm using 2 layouts for nearly identical page types when I could use some logic within a single template instead.

## What I learned

If I was rebuilding my site I'd be tempted to use Tachyons, even though I'm not taking advantage of its main feature by using it across projects.

It has made me reassess the way I'm using CSS.

### Semantic class names are rubbish for styling

### I need to make my CSS more specific

### rems are good

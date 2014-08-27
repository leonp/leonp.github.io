---
author: admin
comments: true
date: 2008-10-11 11:11:59+00:00
layout: post
published: false
slug: paragraphs-on-the-web-a-typographical-guide
title: 'Paragraphs on the web: a typographical guide'
wordpress_id: 194
categories:
- Articles
tags:
- design
- essential
- front
- leading
- measure
- reading
- typography
---

With thanks to [Stefan Vervoort and his article on paragraphs](http://www.divitodesign.com/2008/10/paragraph-typography-guide/), which gave me the idea for this article.


### What's a paragraph?


It _seems_ a simple question, but as with so many fundamental questions giving a concise answer can be tricky.

Well, a paragraph isn't a sign or a clue as to your content in the same way that headings are. Paragraphs _are_ your content: the flow of **ideas **and the development of your **argument**.

Which means that you owe your readers respect when it comes to setting your paragraphs; **readability **is absolutely paramount, especially when you're dealing in lots of text — when writing a blog, for example.

[caption id="" align="aligncenter" width="448" caption="An example of an indented paragraph from an old text"]![An old example of indented paragraphs](http://farm4.static.flickr.com/3154/2930698875_18919b18fe_o.jpg)[/caption]


### Making paragraphs readable in 5 steps


We need to think about 5 things when we set paragraphs on the web, all of which can be controlled using CSS:



	
  1. Font choice and size

	
  2. Colour

	
  3. White space: this includes line-height, line width, margins, letter-spacing and word-spacing

	
  4. Alignment

	
  5. Boundaries, indents, outdents and versals




Font choice and size
    I'll talk about the effect different fonts create in a future article. What I'm interested in here is _legibility_. Of the web safe fonts, Times looks cramped at 'normal' font sizes, and is only worth using in headings. Monospace fonts such as Courier and Lucida Console denote code and are therefore generally inappropriate for body copy (unless you're [making a lo–contrast statement](http://www.aestheticallyloyal.com/)).
    Traditionally, serif fonts (such as Georgia and Times) were seen as conducive to print **reading **while sans serif fonts (such as Arial, Helvetica and Lucida) were seen as appropriate for the screen. Either is fine, but it is worth bearing in mind what fonts work at what size. [Verdana was specifically designed to be used at small sizes](http://www.will-harris.com/verdana-georgia.htm), so it is a sensible choice at, say, 10 pixels. Georgia looks pale and indistinct at 12 pixels and below, but up it to 16 pixels and it looks great.
    Of course, we don't want to inflict **small **fonts on our readers, [regardless of their age](http://www.useit.com/alertbox/teenagers.html) (so just because your readers are all hawk–eyed young designers who prefer to look at neatly aligned _blocks_ of text rather than messy, real text, it doesn't mean you can get away with 8 pixel Helvetica).
    I would suggest a _minimum_ font size of 14 pixels for paragraphs. I _generally_ use 16 pixels. Of course, we should be allowing readers to select their own size by using relative sizing units. This is what I use on this blog:
    

    
    <code>body {
    font-size: 100%;
    }
    
    p       {
    font-size: 1em;
    font-family: helvetica, arial, nimbus sans, sans serif;
    }</code>



Colour
    We need to consider **contrast **and glare when selecting colours for our paragraphs. Regardless of your reader's eyesight, every reader will appreciate distinct text that doesn't give them a migraine. [Some choices are obviously poor](http://www.aestheticallyloyal.com/), but you can be sure by running some objective checks. I use the [Colour Contrast Analyser extension for Firefox](http://juicystudio.com/article/colour-contrast-analyser-firefox-extension.php). Of course, some of this is just personal preference: white/near white on black will pass any contrast test, but it is not, in my opinion, conducive to **reading **long swathes of text.
    Here's the CSS I use:
    

    
    <code>body {
    color: #444;
    background-color: #fff;
    }</code>



White space
    White (or negative) space need not, of course, be white. It is the space both around and within paragraphs, and can help your reader keep his or her place within the text, while not having to worry about accidentally straying into adjacent content.
    [I've written pretty extensively on line height](http://leonpaternoster.com/2008/05/getting-leading-right-part-2/) before; suffice to say that it's worth changing the browser **default **setting of 120% of the paragraph font size. Anything between 140% and 170% is good, although bigger font sizes don't require as much line height as smaller.
    CSS allows some fine tuning of the white space between letters and words. Applying letter spacing to headings can often provide some interesting effects, but it's rare to see either property applied to paragraphs. These settings have become so **conventional **that any change has a marked effect upon a page, as you can see at the [Contrast.ie blog](http://www.contrast.ie/blog/). Interestingly, additional letter-spacing has been applied to the `body` selector: it creates a bold, confident effect, which perhaps links to the firm's own image. It's a very original approach that would require a _lot_ of **care **to implement well.
    CSS also allows us to control the space between and around paragraphs. In some **print **material, a new paragraph is marked by an indent, but on the screen the convention is to insert a space between paragraphs (although some sites attempt to introduce [a 'bookish' variation](http://www.newyorker.com/online/blogs/festival/), which unfortunately makes reading from a screen difficult. It's good to see that The New Yorker has taken [my advice](http://userstyles.org/styles/6815) and inserted line breaks between paragraphs. If it ups the font size and changes the font to Georgia it'll be there!) It is logical to make the space between paragraphs the equivalent of a **single line**, as this maintains the [vertical rhythm of the text](http://24ways.org/2006/compose-to-a-vertical-rhythm) on the page.
    Ensuring that there is space around a paragraph is a matter of overall page **design **and element placement. One good way to ensure that this happens is to keep sidebar lists to a reasonable length, while making the content part of your page the **widest **element on the screen. Of course, it is also necessary to ensure that the width of your paragraphs (also known as the _measure_) is neither too long (so the eye loses its place within a line of text) nor too short (so that the eye has to jump up and down the page too often). The **optimum measure** is _around_ 10-15 words.
    There's quite a lot to bear in mind when setting paragraphs and white space. This is my typical CSS:
    

    
    <code>body {
    width: 57em; /* probably 912px */
    font-size: 100%;
    line-height: 1.5em; /* this ensures everything has the same line-height */
    }
    
    p {
    width: 30em; /* measure therefore 10-15 words, width over half the body width */
    font-size: 1em;
    margin-bottom: 1.5em; /* same as document leading */
    }</code>



    If you are thinking of using a smaller font size for paragraphs (say `0.875em`) then you'll need to **resize** the bottom margin, so as to maintain the vertical rhythm set in your body selector. It needs a calculator, but it's quite simple: simply divide the line height by the element font size. So if we have a `body` line height of `1.5em` and a font size of `0.875em`, then the sum is 1.5/0.875, or `p {margin-bottom: 1.714em;}`
Alignment
    This is easy. Browsers don't justify text very well, so you're best off using flush **left**, ragged right alignment. This is what browsers default to, so it doesn't need to be set. If you _must_ use justified paragraphs, the CSS is simple: `text-align: justify;`. In my experience, serifs justify better than sans serifs and the wider the measure the better.
Boundaries, indents, outdents and versals
    Jon Tan has written [a wonderful article on achieving some fancy effects when setting paragraphs](http://jontangerine.com/log/2008/06/the-paragraph-in-web-typography-and-design). What I want to concentrate on here is _how_ we can **implement **these largely unexplored areas.
    CSS offers us a range of _pseudo–selectors_ with which to alter the way in which the opening line or letter of a paragraph (or any element) is presented:
    `:first-letter` allows us to style the first letter of a paragraph, while `:first-line` allows us to target the (you've guessed it) first line. So, you could use something like:
    

    
    <code>p:first-letter {
    font-weight: bold;
    font-size: 1.5em;
    }
    </code>


which would make the first letter of _every_ paragraph bolder and bigger. We obviously need a way in which to **target **specific paragraphs. There are 2 possible approaches:



	
  * Apply first letter or first line styling to paragraphs that have been given a particular class. We could target an _intro_ paragraph class with `p.intro:first-letter {font-weight: bold; font-size: 1.5em;}`, and leave our other paragraphs alone.

	
  * Sometimes we can't target paragraphs that have been assigned a class. For example, when we simply want to target the first line of a blog article. The way round this is to use [adjacent selectors](http://splashofstyle.com/archives/2006/07/18/css-child-adjacent-sibling-selectors/). So if we have wrapped our article in an id entitled `#article` and we knew that the first paragraph _always_ followed an `h2` or an `img` preceded by an `h2`, then `#article h2 + p:first-line, #article h2 + img + p:first-line {font-variant: small-caps;}` will make sure that _only_ the first paragraph is targetted.



    This is quite complicated CSS, so let's give a complete **example**. Let's say you want to make the first letter of every blog article `3em bold` and the first line `small-caps`. Here's what you'd do:
    

    
    <code><strong>HTML</strong>:
    <div id="article">
    <h2>Artcile title</h2>
    <p>Paragraphs are lovely.  Beautiful.  And I want you to appreciate their beauty.</p>
    <p>The thing about them, though, is that they take a bit of thought.</p>
    </div>
    
    <strong>CSS</strong>:
    #article h2 + p:first-letter {
    font-size: 3em;
    font-weight: bold;
    line-height: 1em;
    }
    
    #article h2 + p:first-line {
    font-variant: small-caps;
    }
    </code>



    The use of these pseudo-selectors opens up a wide range of **possibilities **for styling paragraphs. Jon Tan's article goes some way in exploring them: the rest will be down to some experimentation.



### Conclusions


I've provided [an example of some reasonably fancy paragraphing](http://leonpaternoster.com/examples/paragraphs/je.html). Feel free to peruse the HTML and CSS.

As you can see, there's quite a lot to think about when setting paragraphs on the web. As ever, CSS offers a concise, simple and easy–to–understand method for implementing our ideas. What do you think? How do you go about setting paragraphs?
  *[CSS]: Cascading Style Sheets

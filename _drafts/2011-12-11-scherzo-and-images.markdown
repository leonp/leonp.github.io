---
author: admin
comments: true
date: 2011-12-11 08:46:41+00:00
layout: post
slug: scherzo-and-images
title: Scherzo and images
wordpress_id: 2117
categories:
- Articles
tags:
- images
- scherzo
- WordPress
---

[Get the latest version of Scherzo](http://leonpaternoster.com/wp-themes/).

As Scherzo alters its layout to suit whatever screen you're using, you need to be aware of a few things when it comes to images:


## Alignment (centring and floating)


Scherzo aligns images in posts in the usual way (i.e. no alignment, float left, float right and centre).


## Size


Normally, Scherzo will limit the width of an image to the width of its containing element. So if you place an image in a post which is wider than the width of the post, Scherzo will resize the image to the width of the the post, and scale the height accordingly.

Scherzo scales images across devices. If you're viewing Scherzo on a mobile phone, images should scale to the width of the phone's screen:

[caption id="attachment_2125" align="aligncenter" width="280" caption="Scherzo at 280 pixels wide. The images have automatically scaled from over 800 pixels wide to fit on the screen."]![Screenshot of the one column version of Scherzo. Images scale accordingly.](http://leonpaternoster.com/wp-content/uploads/2011/08/one-col.jpg)[/caption]

This means you don't really have to worry about the width of your images (although bigger images normally make for bigger file sizes).


## Making wider images


Sometimes you may want to make an image as wide as possible. Scherzo allows you to make images span both the post width and the sidebar by adding a `wide` class to the image. Like so:

[caption id="attachment_2118" align="aligncenter" width="840" caption="A wide image. Note the short sidebar."]![An image of Camus that extends over the content and sidebar areas](http://leonpaternoster.com/wp-content/uploads/2011/08/widescreen.jpg)[/caption]

You can add a `wide` class to an image by selecting the image in the post editor and accessing the _Advanced Settings -> Class_ menu:

[caption id="attachment_2119" align="aligncenter" width="600" caption="Add a class to an image."]![Screenshot of WordPress's Advanced Image Settings Menu](http://leonpaternoster.com/wp-content/uploads/2011/08/edit-image.png)[/caption]


### Warning


Wide images encroach into the sidebar. If you have a long sidebar it's more than likely that your wide image will make your page look odd.


## Header images


Scerzo allows you to add a background image to the site header. On wide screens this is always 816 pixels wide and 144 high.

If you're viewing Scherzo on a narrow screen then it will attempt to scale the background image. Because Scherzo limits the height of the header on narrow screens this may mean that some of your header background image is truncated.


### Warning


If your header background image is largely decorative it's unlikely this will cause any problems.

However, if you're using the background image to replace the site title and tag line you should test to see whether it scales properly.

If you don't have a narrow screen device to hand (such as a mobile phone that can view web pages), simply shrink your browser window until Scherzo only displays one column.

If your header background image doesn't display satisfactorily you'll need to change it.


## Images that link to something


WordPress allows you to make images link to another web page, or another file (perhaps a larger version of the image).

By default, Scherzo will place a line underneath any image that links to something:

[caption id="attachment_2120" align="aligncenter" width="869" caption="Sometimes you may want to remove this line."]![Screenshot of an image that links to a file. There's a border beneath it.](http://leonpaternoster.com/wp-content/uploads/2011/08/with-border.jpg)[/caption]

If you want to remove this line you'll need to head to the image's Advanced Settings again.

This time you'll need to add a class to the _Advanced Link Settings_ section. In the _CSS class_ box add the word `imglink` and save. This will make any line disappear.

[caption id="attachment_2121" align="aligncenter" width="699" caption="The imglink class gets rid of underlines."]![Screenshot of WordPress's Advanced Link Settings menu](http://leonpaternoster.com/wp-content/uploads/2011/08/imglink.jpg)[/caption]

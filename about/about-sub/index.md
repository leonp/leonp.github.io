---
layout: page
title: About sub
permalink: /about/sub/
---

This is in `/about/about-sub`. The `permalink` has been set to `/about/sub/`

Do it work?

It does, perfectly.

Notes:

- You should think about your structure before you start: is it all flat in the root folder and controlled via the `permalink` variable? Or do you put everything in folders?
- A `FILENAME.md` file is converted into `FOLDER/index.html`. Use `permalink: /filename/` to get clean URLs
- This works for subfolders. So an `about` folder containing an `index.md` file and a folder called `sub` which also contains an `index.md` file is converted to `/about/` and `/about/sub`, assuming you've added `permalink: /about/sub/` to the sub index's front matter
- By default, `for page in site.pages` returns a flat list of all pages. Would need to investigate nested lists or just returning the top level list. Or use a variable to display or hide in nav menu?

Leon likes this. In an ideal world editors would perhaps need the skillz to write markdown and commit files to Github. But I'm only just getting my head around this as well.

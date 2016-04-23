---
layout: default
title: Leon Paternoster
excerpt: Web and customer service manager at Suffolk Libraries. Blogs about the design, code, politics, books and all sorts of other things.
---

I'm Leon, web and customer service manager at Suffolk Libraries. You can contact me at:

- [Twitter](https://twitter.com/leonpaternoster)
- [LinkedIn](https://uk.linkedin.com/in/leonpaternoster)
- leon.paternoster@zoho.com

## Recent blog posts

<ul class="list pl0">

{% for post in site.posts limit:10 %}

	<li class="{% include link-list.html %}"><a href="{{ post.url }}">{{ post.title }}</a> <span class="{% include link-list-meta.html %}">Posted <time>{{ post.date | date_to_string }}</time> and filed under <a href="/blog/{{ post.category }}">{{ post.category }}</a></span></li>

{% endfor %}

</ul>

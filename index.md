---
layout: default
title: Digital and IT design and strategy
excerpt: Web and customer service manager at Suffolk Libraries. Blogs about web design, code, politics, books and all sorts of other things.
---

I post articles and notes about the web, politics, libraries and other bits and pieces. You can [follow me on Twitter](https://twitter.com/leonpaternoster).

## Recent posts

<ul class="list pl0">

{% for post in site.posts limit:10 %}

	<li class="{% include link-list.html %}"><a href="{{ post.url }}">{{ post.title }}</a> <span class="{% include link-list-meta.html %}">Posted <time>{{ post.date | date_to_string }}</time> and filed under <a href="/blog/{{ post.category }}">{{ post.category }}</a></span></li>

{% endfor %}

</ul>

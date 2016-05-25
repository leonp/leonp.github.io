---
layout: default-no-title
title: Leon Paternoster
excerpt: Web and customer service manager at Suffolk Libraries. Blogs about web design, code, politics, books and all sorts of other things.
---

<p class="custom-lh-title mt0 mb3"><strong>Leon Paternoster</strong>, web and customer service manager at Suffolk Libraries.</p>

<ul class="ma0 pa0 mb2 pb4 custom-lh-copy">

	<li class="dib mr2"><a href="https://twitter.com/leonpaternoster">Twitter</a></li>
	<li class="dib mr2"><a href="https://uk.linkedin.com/in/leonpaternoster">LinkedIn</a></li>
	<li class="dib">leon.paternoster@zoho.com</li>

</ul>

<h2 class="gray f6 tracked ttu pa0 ma0 mt4-ns mb1 custom-lh-title">Recent blog posts</h2>

<ul class="list pl0">

{% for post in site.posts limit:5 %}

	<li class="{% include link-list.html %}"><a href="{{ post.url }}">{{ post.title }}</a> <span class="{% include link-list-meta.html %}">Posted <time>{{ post.date | date_to_string }}</time> and filed under <a href="/blog/{{ post.category }}">{{ post.category }}</a></span></li>

{% endfor %}

</ul>

---
layout: full-width
title: Leon Paternoster
excerpt: Web and customer service manager at Suffolk Libraries. Blogs about web design, code, politics, books and all sorts of other things.
---

<div class="cf">

	<div class="fl-ns w-40-ns pr4-ns">

		<h1 class="{% include article-title.html %}">{{ page.title }}</h1>

		<p class="custom-serif">Web and customer service manager at Suffolk Libraries. You can contact me at:</p>

		<ul class="custom-serif mb2 pb4">

			<li class="mb2"><a href="https://twitter.com/leonpaternoster">Twitter</a></li>
			<li class="mb2"><a href="https://uk.linkedin.com/in/leonpaternoster">LinkedIn</a></li>
			<li>leon.paternoster@zoho.com</li>

		</ul>

	</div>

	<div class="fl-ns w-60-ns pl4-ns">

		<h2 class="{% include article-title.html %}">Recent blog posts</h2>

		<ul class="list pl0">

		{% for post in site.posts limit:10 %}

			<li class="{% include link-list.html %}"><a href="{{ post.url }}">{{ post.title }}</a> <span class="{% include link-list-meta.html %}">Posted <time>{{ post.date | date_to_string }}</time> and filed under <a href="/blog/{{ post.category }}">{{ post.category }}</a></span></li>

		{% endfor %}

		</ul>

	</div>

</div>

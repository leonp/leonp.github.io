---
layout: default
title: Search results
---

Try another search:

<form method="get" action="/search" class="pure-form form-custom" role="search" id="search">

	<input type="search" name="q">
	<input type="submit" class="pure-button" value="Search">
	<input type="hidden" name="sitesearch" value="leonpaternoster.com">

</form>

<script>
    (function() {
        var cx = '014626350489520397086:dw0dlftob6c';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
            '//cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    })();
</script>

<gcse:searchresults-only linkTarget="_self"></gcse:searchresults-only>

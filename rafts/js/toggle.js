document.addEventListener('DOMContentLoaded', function() {
	[].forEach.call(document.querySelectorAll('.button-custom'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			[].forEach.call(document.querySelectorAll('.button-custom-active'), function(el) {
				el.classList.remove('button-custom-active');
			});
		});
	});
	[].forEach.call(document.querySelectorAll('.button-custom'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			[].forEach.call(document.querySelectorAll('.pure-button-primary'), function(el) {
				el.classList.remove('pure-button-primary');
			});
		});
	});
	[].forEach.call(document.querySelectorAll('.button-custom'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			e.target.classList.add('button-custom-active');
		});
	});
	[].forEach.call(document.querySelectorAll('.button-custom'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			e.target.classList.add('pure-button-primary');
		});
	});
});
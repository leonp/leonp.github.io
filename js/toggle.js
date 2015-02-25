document.addEventListener('DOMContentLoaded', function() {
	[].forEach.call(document.querySelectorAll('.toggle'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			[].forEach.call(document.querySelectorAll('.toggle'), function(el) {
				el.classList.toggle('ta-reveal');
			});
		});
	});
	[].forEach.call(document.querySelectorAll('.toggle'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			[].forEach.call(document.querySelectorAll('.ta-toggle'), function(el) {
				el.classList.toggle('ta-open');
			});
		});
	});
});

$(document).ready(function () {
	$(window).scroll(function () {
		//Method 2: Using toggleClass
		$('.header').toggleClass('header-shrink', $(this).scrollTop() > 50)
	})
})
var w = window.innerWidth ? window.innerWidth : $(window).width()

//Если ширина меньше 640px
if (w <= 640) {
	function reveal() {
		var reveals = document.querySelectorAll('.reveal')
		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight
			var elementTop = reveals[i].getBoundingClientRect().top
			var elementVisible = -400
			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add('active')
			} else {
				reveals[i].classList.remove('active')
			}
		}
	}
	window.addEventListener('scroll', reveal)
} else {
	function reveal() {
		var reveals = document.querySelectorAll('.reveal')
		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight
			var elementTop = reveals[i].getBoundingClientRect().top
			var elementVisible = 150
			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add('active')
			} else {
				reveals[i].classList.remove('active')
			}
		}
	}
	window.addEventListener('scroll', reveal)
}

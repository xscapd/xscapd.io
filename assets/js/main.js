document.addEventListener('DOMContentLoaded', function() {
	let fadeTarget = document.getElementById("loadOverlay")
	let fadeEffect = setInterval(function () {
		if (!fadeTarget.style.opacity) {
			fadeTarget.style.opacity = 1;
		}
		if (fadeTarget.style.opacity > 0) {
			fadeTarget.style.opacity -= 0.09;
		} else {
			clearInterval(fadeEffect);
			fadeTarget.remove();
		}
	}, 10);

	document.getElementById("navMenu").style.visibility = "visible"
	document.getElementById("pageBody").style.overflow = "visible"

})


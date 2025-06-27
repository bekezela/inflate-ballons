
const balloons = document.querySelectorAll('.balloon');

balloons.forEach(balloon => {
	balloon.addEventListener('mouseenter', () => {
		balloon.style.scale = 1.5;
	});

	balloon.addEventListener('mouseleave', () => {
		balloon.style.scale = 1;
	});
});

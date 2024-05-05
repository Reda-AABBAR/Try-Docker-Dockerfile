
function moveButton() {
	    var button = document.querySelector('.button');
	    var windowHeight = window.innerHeight;
	    var windowWidth = window.innerWidth;

	    var newTop = Math.floor(Math.random() * (windowHeight - 50));
	    var newLeft = Math.floor(Math.random() * (windowWidth - 100));

	    button.style.top = newTop + 'px';
	    button.style.left = newLeft + 'px';
}


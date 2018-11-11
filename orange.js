'use strict';
let orange = document.querySelectorAll('.orange')[0];
orange.onclick = function() {
	//this.style.cssText = 'width: 150px;height: 150px;';
	this.className = 'grad'
}
var numSquares = 9;
var sqrList = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#curColor");
var resultDisplay = document.querySelector("#rem");
var header = document.querySelector("#header");
var reset = document.querySelector("#reset");
var score = 0;
var total = 0;
var scoreDisplay = document.querySelector("#won");
var totalDisplay = document.querySelector("#total");
var clickcorrect = document.querySelector("#clickcorrect");
var clickwrong = document.querySelector("#clickwrong");

init();

function init() {
	setUpSquareBox();
	resetPage();
}

function setUpSquareBox() {
	for (var i = 0; i < sqrList.length; i++) {
		sqrList[i].addEventListener("click", function () {
			total++;
			resultDisplay.textContent = resultDisplay.textContent - 1;
			if (this.style.backgroundColor != pickedColor) {
				//alert("Wrong choice!");
				clickwrong.style.display = 'block';
				this.style.backgroundColor = "transparent";
				this.style.visibility = "hidden";
				var audio = new Audio('sounds/wrong.mp3');
				audio.play();
			}
			else {
				score++;
				//alert("Correct");
				clickcorrect.style.display = 'block';
				reset.textContent = "Play Again?";
				changeColors(pickedColor);
				var audio = new Audio('sounds/correct.mp3');
				audio.play();
				resetPage();

			}
			scoreDisplay.textContent = score;
			totalDisplay.textContent = total;
			if (resultDisplay.textContent <= 0) {
				document.getElementById('finalscore').textContent= score;
				document.getElementById('end').style.display='block';
			}
		});
	}
}


function resetPage() {
	var num = numSquares;

	var r1 = Math.floor(Math.random() * 256);
	var g1 = Math.floor(Math.random() * 256);
	var b1 = Math.floor(Math.random() * 256);
	pickedColor = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";


	for (var i = 0; i < num; i++) {
		var r=-100,g=-100,b=-100;
		var difference=20;
		while(r==-100 || (r<r1+difference && r>r1-difference) ) r = Math.floor(Math.random() * 256);
		while(g==-100 || (g<g1+difference && g>g1-difference) ) g = Math.floor(Math.random() * 256);
		while(b==-100 || (b<b1+difference && b>b1-difference) ) b = Math.floor(Math.random() * 256);
		var res = "rgb(" + r + ", " + g + ", " + b + ")";
		sqrList[i].style.display = "block";
		sqrList[i].style.visibility = "visible";
		sqrList[i].style.backgroundColor = res;
	}
	var rand = Math.floor(Math.random() * sqrList.length);
	sqrList[rand].style.backgroundColor = pickedColor;
	colorDisplay.textContent = pickedColor;
	reset.textContent = "SHUFFLE";
}



reset.addEventListener("click", function () {
	resetPage();
});


function changeColors(color) {
	header.style.backgroundColor = color;
	document.body.style.backgroundColor = color;
}



clickcorrect.addEventListener("click", function () {
	clickcorrect.style.display = 'none';
});

clickwrong.addEventListener("click", function () {
	clickwrong.style.display = 'none';
});
var colors = [];
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
				//resultDisplay.textContent = "Try Again!";
			}
			else {
				score++;
				//alert("Correct");
				//resultDisplay.textContent = "Correct !";
				clickcorrect.style.display = 'block';
				reset.textContent = "Play Again?";
				changeColors(pickedColor);
				resetPage();

			}
			scoreDisplay.textContent = score;
			totalDisplay.textContent = total;
			if (resultDisplay.textContent <= 0) {
				document.getElementById('finalscore').textContent= resultDisplay.textContent;
				document.getElementById('end').style.display='block';
			}
		});
	}
}


function resetPage() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < sqrList.length; i++) {
		if (colors[i]) {
			sqrList[i].style.display = "block";
			sqrList[i].style.visibility = "visible";
			sqrList[i].style.backgroundColor = colors[i];
		}
		else
			sqrList[i].style.display = "none";
	}
	reset.textContent = "SHUFFLE";
}



reset.addEventListener("click", function () {
	resetPage();
});


function changeColors(color) {
	header.style.backgroundColor = color;
	document.body.style.backgroundColor = color;
}

function pickColor() {
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var res = "rgb(" + r + ", " + g + ", " + b + ")";
		arr.push(res);
	}
	return arr;
}

clickcorrect.addEventListener("click", function () {
	clickcorrect.style.display = 'none';
});

clickwrong.addEventListener("click", function () {
	clickwrong.style.display = 'none';
});
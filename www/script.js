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
				alert("Wrong choice!");
				this.style.backgroundColor = "transparent";
				this.style.visibility = "hidden";
				//resultDisplay.textContent = "Try Again!";
			}
			else {
				score++;
				alert("Correct");
				//resultDisplay.textContent = "Correct !"
				reset.textContent = "Play Again?";
				changeColors(pickedColor);
				resetPage();

			}
			scoreDisplay.textContent = score;
			totalDisplay.textContent = total;
			if (resultDisplay.textContent <= 0) {
				window.setTimeout("alert('Over')", 700);
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
	//header.style.backgroundColor = "steelblue";
	//resultDisplay.textContent = "hi";
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
// declare vars
let colors = []
let selectedColor = ""


// get needed selectors
let headerH1 = document.querySelector("h1")
let selectedColorSpan = document.querySelector(".currColor")
let messageDiv = document.querySelector(".message")
let restartDiv = document.querySelector(".restart")
let squares = document.querySelectorAll(".square");


// set up game
resetHeader()
setBoard()


// assign colors to squares and add click listeners
for(let i = 0; i < squares.length; i++) {

	squares[i].style.backgroundColor = colors[i]

	squares[i].addEventListener("click", function() {

		if(this.style.backgroundColor == selectedColor) {
		// if clicked on target tile
			
			changeColors(selectedColor)
			messageDiv.textContent = "Correct!"
			restartDiv.textContent = "Play again!"

		} else {
		// if not clicked on target tile

			this.style.backgroundColor = "#333"
			messageDiv.textContent = "Not this tile!"
		}

	}) // end clickListener
} // end for


function changeColors(color) {
// changes colors of all tiles to one color

	for(let i = 0; i < squares.length; i++) {
	 	squares[i].style.backgroundColor = color;
	}

	headerH1.style.backgroundColor = color
}


function generateColors(number) {
// returns an array with $number items
// each item contains an rgb color value

	let outputObject = []

	for(let i = 0; i < number; i++) {

		outputObject.push("rgb(" + 
			Math.floor(Math.random() * 256) + ", " +
			Math.floor(Math.random() * 256) + ", " +
			Math.floor(Math.random() * 256) + ")"
		)

	}

	return outputObject
}


function pickColor() {
// returns a random item from the colors array
	return colors[Math.floor(Math.random() * colors.length)]	
}


function setBoard() {
// prepares colors and target tile for game
	colors = generateColors(6)
	selectedColor = pickColor()
	selectedColorSpan.textContent = selectedColor
}


function resetHeader() {
// resets header color and text
	headerH1.style.backgroundColor = "#333"
	restartDiv.textContent = "Get new colors"
	messageDiv.textContent = "Click a tile to start"
}


// assign click logic get new colors
restartDiv.addEventListener("click", () => {

	// prepare game
	resetHeader()
	setBoard()

	// reassign colors
	for(let i = 0; i< squares.length; i++) {
		squares[i].style.backgroundColor = colors[i]
	}


})

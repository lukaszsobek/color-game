let colors = generateColors(6)

// assign selected color and display it
let selectedColor = pickColor()
console.log(selectedColor)
selectedColorSpan = document.querySelector(".currColor")
selectedColorSpan.textContent = selectedColor


// assign colors to squares
let squares = document.getElementsByClassName("square");


// set up message var
let messageSpan = document.querySelector(".message")


for(let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]

	// add click logic to squares
	squares[i].addEventListener("click", function() {
		if(this.style.backgroundColor == selectedColor) {
			
			messageSpan.textContent = "Correct!"
			changeColors(selectedColor)

		} else {

			this.style.backgroundColor = "#333"
			messageSpan.textContent = "Try again!"
		}


	})
}

function changeColors(color) {
	for(let i = 0; i < squares.length; i++) {
	 	squares[i].style.backgroundColor = color;
	}

	let theH1 = document.querySelector("h1")
	theH1.style.backgroundColor = color
	
}

function generateColors(number) {

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
	return colors[Math.floor(Math.random() * colors.length)]
}


// assign click logic to new colors
let resetLink = document.querySelector(".restart a") 
resetLink.addEventListener("click", function() {
	colors = generateColors(6)
	selectedColor = pickColor()
	selectedColorSpan.textContent = selectedColor
	for(let i = 0; i< squares.length; i++) {
		squares[i].style.backgroundColor = colors[i]
	}
})

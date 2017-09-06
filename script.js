let colors = [
	"rgb(234, 132, 235)",
	"rgb(45, 111, 8)",
	"rgb(1, 234, 60)",
	"rgb(150, 26, 187)",
	"rgb(60, 26, 22)",
	"rgb(34, 50, 1)"
]

// assign selected color and display it
let selectedColor = colors[3]
selectedColorSpan = document.querySelector(".currColor")
selectedColorSpan.textContent = selectedColor


// assign colors to squares
let squares = document.getElementsByClassName("square");

for(let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]

	// add click logic to squares
	squares[i].addEventListener("click", function() {
		if(this.style.backgroundColor == selectedColor) {
			console.log("yes")
		} else {
			console.log("nope")
		}
	})
}


let numSquares = 6
let colors = []
let pickedColor
let squares = document.querySelectorAll(".square")
let colorDisplay = document.querySelector("#colorDisplay")
let messageDisplay = document.querySelector("#message")
let h1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset")
let modeButton = document.querySelectorAll(".mode")


init()

function init() {
    //modeButton event Listener
    setupModeButtons()
    setupSquares()
    reset()
}

function setupModeButtons() {
    for(let i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove("selected")
            modeButton[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent ==="Easy" ? numSquares = 3: numSquares = 6
            reset()
        })
    }  
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again?"
                changeColor(clickedColor)
                h1.style.backgroundColor = clickedColor
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}




function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares)
    //pick a new random color form array
    pickedColor = pickColor()
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor

    messageDisplay.textContent = ""
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.backgroundColor =colors[i]
        } else {
            squares[i].style.display = "none"
        }

    } 
    //change the h1 backgorund
    h1.style.backgroundColor = "steelblue"
    //reset the buttons text
    resetButton.textContent = "New Colors"
}


resetButton.addEventListener("click", function () {
    reset()
})



function changeColor(color) {
    //loop through all squares
    for(let i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num) {
    //make a array
    let arr = []
    //repeat num times
    for(let i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr
}

function randomColor() {
    //pick a red from 0 - 255
    let r = Math.floor(Math.random() * 256) 
    //pick a green from 0 - 255
    let g = Math.floor(Math.random() * 256) 
    //pick a blue from 0 - 255
    let b = Math.floor(Math.random() * 256) 
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
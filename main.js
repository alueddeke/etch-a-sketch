let color = "black";
let click = true;

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  //applying the css to the board directly from js
  //makes repeated Rows
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    /*square.addEventListener("dragstart", () => {
      square.addClassList.add("dragging");
    });*/
    square.style.backgroundColor = "white";
    square.style.border = "1px solid black";

    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    populateBoard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
    console.error("Invalid number of squares");
  }
}

function colorSquare() {
  //only color a square if click is true
  if (click) {
    //everytime we make a square, we make a function dedicated to that square
    //using "this"
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function reset() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

//listen for clicks in the body

//if click is true, set it to false
//if it is false, set it to true
//value if click, will be whatever click is not

//we don't want text to change when we click buttons

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Sketchin";
    } else {
      document.querySelector(".mode").textContent = "Mode: Not Sketchin";
    }
  }
});

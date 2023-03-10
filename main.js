let board = document.querySelector(".board");
//applying the css to the board directly from js
//makes repeated Rows
//
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i <= 256; i++) {
  let square = document.createElement("div");
  square.style.backgroundColor = "grey";
  square.style.border = "solid black";
  board.insertAdjacentElement("beforeend", square);
}

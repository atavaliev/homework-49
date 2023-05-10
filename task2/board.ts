const board = document.createElement('div');

const whiteSquare = "  ";
const blackSquare = "██";

let chessBoard = "";
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (i % 2 !== 0) {
            j % 2 !== 0 ? chessBoard += whiteSquare : chessBoard += blackSquare;
        } else {
            j % 2 !== 0 ? chessBoard += blackSquare : chessBoard += whiteSquare;
        }
    }
    chessBoard += "\n";
}
console.log(chessBoard)
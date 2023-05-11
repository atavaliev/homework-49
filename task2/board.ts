const whiteSquare:string = "  ";
const blackSquare:string = "██";
let chessBoard:string = "";

const drawBoard = (size:number = 8) => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i % 2 !== 0) {
                j % 2 !== 0 ? chessBoard += whiteSquare : chessBoard += blackSquare;
            } else {
                j % 2 !== 0 ? chessBoard += blackSquare : chessBoard += whiteSquare;
            }
        }
        chessBoard += "\n";
    }
    console.log(chessBoard);
}

drawBoard(); //by default size value = 8;
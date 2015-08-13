/**
 * Created by vgarg on 4/28/2015.
 */
var nQueen = (function () {
    var N = 8;

    function getBoardLayout(board) {
        var i, j;
        var result = ''
        for (i = 0; i < N; i++) {
            for (j = 0; j < N; j++) {
                result += board[i][j] + '\t';
            }
            result += '\n';
        }

        return result;
    }

    function canPlace(board, row, col) {
        var i, j;
        for (i = 0; i < col; i++) {
            if (board[row][i] == 1) {
                return false;
            }
        }

        for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 1) {
                return false;
            }
        }

        for (i = row, j = col; i < N && j >= 0; i++, j--) {
            if (board[i][j] == 1) {
                return false;
            }
        }

        return true;
    }

    function placeQueen(board, col) {
        if (col >= N) {
            return true;
        }
        var i;
        for (i = 0; i < N; i++) {
            if (canPlace(board, i, col)) {
                board[i][col] = 1;
                if (placeQueen(board, col + 1)) {
                    return true;
                }
                board[i][col] = 0;
            }
        }
        return false;
    }

    function createBoard(size) {
        var i, j, board = [];
        for (i = 0; i < size; i++) {
            var column = [];
            for (j = 0; j < size; j++) {
                column.push(0);
            }
            board.push(column);
        }
        return board;
    }

    function placeQueens(size) {
        N = size;
        this.board = createBoard(size);
        placeQueen(this.board, 0);        
    }

    return {
        board: [],
        placeQueens: function placeQueens(size) {
            placeQueens(size);
        },
        getPlacedQueens: function getPlacedQueens(size){
            placeQueens(size);
            return this.board;
        }
    }

})();
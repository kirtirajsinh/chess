class Game{
    constructor(thisPlayerIsPlayingAsWhite) {
        this.thisPlayerIsPlayingAsWhite = thisPlayerIsPlayingAsWhite // once initialized, this value should never change.
        this.chessBoard = this.makeStartingBoard() // the actual chessBoard
       
    }


    makeStartingBoard() {
    	//make the board orientation for the current player
    	if(this.thisPlayerIsPlayingAsWhite) {
    		//make chess orientation for white
    	}
    	else{
    		//make chess orientation for black
    	}
    }

    movePiece(pieceId, to){
    	//pieceId: string
    	// to: [x,y]
    }
}
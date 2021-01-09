import React from 'react'
import Game from '../model/chess'

class ChessGame extends React.Component{
	state = {
		gameState: new Game(this.props.isWhite),
		whiteKingInCheck: false,
		blackKingInCheck: false
	}

	render() {
		return {
			
		}
	}

}

export default ChessGame
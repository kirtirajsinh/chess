class ChessPiece{
    constructor(name,id,isAttacked,color){
        this.name=name //string
        this.color=color //white or black
        this.isAttacked=isAttacked //boolean(yes or no)
    }

    setSquare(){
        //assign this piece to a specific square
        //this.square=square
    }

    getSquare(){
        //get the current square this piece is on.
        //it is undefined if this piece isnt on board ie already attacked
        
    }
}
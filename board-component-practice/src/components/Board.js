import BoardHeader from "./BoardHeader";
import BoardRows from "./BoardRows";
import BoardFooter from "./BoardFooter";
import './Board.css'

const Board = () => {
  return (
    <div className="board">
      <BoardHeader />
      <BoardRows />
      <BoardFooter />
    </div>
  )
}

export default Board;

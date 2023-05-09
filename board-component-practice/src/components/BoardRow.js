import './BoardRow.css'

const BoardRow = ({ board }) => {
  return (
    <div className="board__row">
      <div className="board__first-column">{board.id}</div>
      <div className="board__second-column">{board.title}</div>
      <div className="board__third-column">{board.name}</div>
      <div className="board__fourth-column">{board.date}</div>
    </div>
  )
}

export default BoardRow;

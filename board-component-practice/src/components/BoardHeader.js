import './BoardHeader.css'

const BoardHeader = () => {
  return (
    <div className="board__header">
      <div className="board__first-column">No</div>
      <div className="board__second-column">제목</div>
      <div className="board__third-column">글쓴이</div>
      <div className="board__fourth-column">작성시간</div>
    </div>
  )
}

export default BoardHeader;

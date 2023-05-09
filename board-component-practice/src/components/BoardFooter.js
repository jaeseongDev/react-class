import './BoardFooter.css'

const BoardFooter = () => {
  return (
    <div className="board__footer">
      <input placeholder="Search" className="board__search-input"/>
      <button className="board__write-button">글쓰기</button>
    </div>
  )
}

export default BoardFooter;

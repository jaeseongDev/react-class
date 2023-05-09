import './App.css'

function App() {

  return (
    <div className="container">
      <h1>Q&A</h1>
      <div className="board">
        <div className="board__header">
          <div className="board__first-column">No</div>
          <div className="board__second-column">제목</div>
          <div className="board__third-column">글쓴이</div>
          <div className="board__fourth-column">작성시간</div>
        </div>
        <div className="board__row-container">
          <div className="board__row">
            <div className="board__first-column">1</div>
            <div className="board__second-column">친절한 대응 감사합니다!</div>
            <div className="board__third-column">익명</div>
            <div className="board__fourth-column">2021-01-26</div>
          </div>
          <div className="board__row">
            <div className="board__first-column">2</div>
            <div className="board__second-column">친절한 대응 감사합니다!</div>
            <div className="board__third-column">익명</div>
            <div className="board__fourth-column">2021-01-26</div>
          </div>
          <div className="board__row">
            <div className="board__first-column">2</div>
            <div className="board__second-column">친절한 대응 감사합니다!</div>
            <div className="board__third-column">익명</div>
            <div className="board__fourth-column">2021-01-26</div>
          </div>
        </div>
        <div className="board__footer">
          <input placeholder="Search" class="board__search-input" />
          <button className="board__write-button">글쓰기</button>
        </div>
      </div>
    </div>
  );
}

export default App;

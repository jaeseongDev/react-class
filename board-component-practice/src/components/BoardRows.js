import BoardRow from "./BoardRow";

const BoardRows = () => {
  const boards = [
    {
      id: 1,
      title: "친절한 대응 감사합니다!",
      name: "익명",
      date: "2021-01-26"
    },
    {
      id: 2,
      title: "친절한 대응 감사합니다!",
      name: "익명",
      date: "2021-01-26"
    },
    {
      id: 3,
      title: "친절한 대응 감사합니다!",
      name: "익명",
      date: "2021-01-26"
    }
  ];
  return (
    <div>
      <BoardRow board={boards[0]}/>
      <BoardRow board={boards[1]}/>
      <BoardRow board={boards[2]}/>
    </div>
  )
}

export default BoardRows;

import './App.css'
import BoardHeader from "./components/BoardHeader";
import BoardRows from "./components/BoardRows";
import BoardFooter from "./components/BoardFooter";
import Board from "./components/Board";

function App() {

  return (
    <div className="container">
      <h1>Q&A</h1>
      <Board />
    </div>
  );
}

export default App;

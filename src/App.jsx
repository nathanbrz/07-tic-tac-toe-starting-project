import Player from "./components/Player";
function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1:" symbol="X" />
          <Player name="Player 2:" symbol="O" />
        </ol>
        <p>gameboard</p>
      </div>
      <p>Log</p>
    </main>
  );
}

export default App;

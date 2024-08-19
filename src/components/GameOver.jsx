export default function GameOver({ winner, draw , onReset}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && !draw && <p>{winner} won!</p>}
      {!winner && draw && <p>Awn it's a draw</p>}
      <p>
        <button onClick={onReset}>Rematch!</button>
      </p>
    </div>
  );
}

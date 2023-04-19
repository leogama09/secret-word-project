import "./StartScreen.css";

const GameStart = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Click on the button below to start playing</p>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};

export default GameStart;
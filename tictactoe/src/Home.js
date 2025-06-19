import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';



function Home() {
  const navigate = useNavigate();

  function go3() {
    navigate('/tictactoe');
  }
  function go4() {
    navigate('/tictactoe4');
  }
  function go5() {
    navigate('/tictactoe5');
  }

  return (
    <>
      <h1>Welcome to our TicTacToe App!</h1>
      <h4>
        Within this app, we offer the classic 3x3 game, but we also offer modified versions like 4x4 and 5x5!
        Enjoy!
      </h4>
      
      <button onClick={go3}>3x3 Game</button>
      <button onClick={go4}>4x4 Game</button>
      <button onClick={go5}>5x5 Game</button>
    </>
  );
}

export default Home;


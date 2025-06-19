import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import TicTacToe4 from './Components/TicTacToe/TicTacToe4';
import TicTacToe5 from './Components/TicTacToe/TicTacToe5';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/tictactoe4" element={<TicTacToe4 />} />
        <Route path="/tictactoe5" element={<TicTacToe5 />} />

      </Routes>
    </Router>
  );
}

export default App;

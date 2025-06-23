import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import {Square} from './components/Square'
import {TURNS, winnerCombos} from './constants'
import { WinnerModal } from './components/WinnerModal'

function App() {

  const [turn, setTurn] = useState(() =>{
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.x;
  }) ;
  const [board, setBoard] = useState(() =>{
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });
  const [winner, setWinner] = useState(null);

  const checkWinner =(board)=>{
    for(const combo of winnerCombos){
      const [a,b,c] = combo;
      if(
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c] 
      ) {
        return board[a];
      }
    }
    return null;
  }

  const resetBoard = ()=>{
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  const updateBoard = (index)=>{
    if(board[index] == null && winner == null){
      //update board
      const newBoard = [...board];
      newBoard[index] = turn;
      const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
      setBoard(newBoard);
      setTurn(newTurn);

      //save game
      window.localStorage.setItem('board', JSON.stringify(newBoard));
      window.localStorage.setItem('turn', newTurn);


      //check winner
      const winner = checkWinner(newBoard);
      if(winner){
        confetti();
        setWinner(winner);
      }else if(checkEndGame(newBoard)){
        setWinner(false);
      }
    }
    
  }

  const checkEndGame = (board)=>{
    return board.every((cell)=>cell !== null);
  }

  return (<main className="board">
    <h1>Tic tac toe</h1>
    <button onClick={resetBoard}>Reset</button>
    <section className="game">
      {board.map((_, index)=>{
        return <Square key={index} index={index} updateBoard={updateBoard}>{board[index]}</Square>
      })}
    </section>
    <section className="turn"><Square isSelected={turn === TURNS.x}>{TURNS.x}</Square><Square isSelected={turn === TURNS.o}>{TURNS.o}</Square></section>
      <WinnerModal winner={winner} resetBoard={resetBoard}></WinnerModal>
  </main>)
}

export default App

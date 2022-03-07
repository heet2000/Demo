import React, { useState } from "react";
import "./Sudoku.css";
import {generateSudoku,checkSolution,shareURL,checkAnswer} from "./Sudoku1";
import produce from "immer";
import SudokuBoard from "./Sudokuboard";

const Sudoku = ({handleChangeGame}) => {
    const[state, setState] = useState(produce({}, () => ({sudoku: generateSudoku(),})));

  const handleChange = e => {
    setState(
      produce(state => {
        state.sudoku.rows[e.row].cols[e.col].value = e.value;
        if (!state.sudoku.solvedTime) {
          const solved = checkSolution(state.sudoku);

          if (solved) {
            state.sudoku.solvedTime = new Date();
            state.sudoku.shareURL = shareURL(state.sudoku);
          }
          const isCorrect = checkAnswer(
            state.sudoku.rows[e.row].cols[e.col].value,
            state.sudoku.rows[e.row].cols[e.col].rawindex,
            state.sudoku
          );
          if (isCorrect) {
            state.sudoku.rows[e.row].cols[e.col].answered = "yes";
          } 
          else 
            state.sudoku.rows[e.row].cols[e.col].answered = null;
        }
      })
    );
  };

  const solveSudoku = e => {
    setState(
      produce(state => {
        state.sudoku.rows.forEach(row =>
          row.cols.forEach(col => {
            if (!col.readonly) {
              col.value = state.sudoku.solution[col.row * 9 + col.col];
            }
          })
        );
      })
    );
  };

    return (
        <div container className="App">
          <header className="App-header">
              <h1>Sudoku</h1>
              <button onClick={()=> handleChangeGame('')} className="bg-yellow-300 w-36 p-1 ml-96 mr-1/2">Back</button> 
          </header>
          <SudokuBoard sudoku={state.sudoku} onChange={handleChange} />
          <button className="btn btn-yellow" onClick={solveSudoku}>
            Solve it automaticaly!
          </button>
        </div>
    );
}

export default Sudoku;

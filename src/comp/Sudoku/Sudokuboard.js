import React from "react";
import SudokuField from "./Sudokufield";
import Result from "./Result";

const SudokuBoard = (props) =>  {
    const { sudoku, onChange } = props;
    return (
      <div>
        {/* {!sudoku.solvedTime && <Timer start={sudoku.startTime} />} */}
        {sudoku.solvedTime && <Result sudoku={sudoku} />}
        <div>
          {sudoku.rows.map(row => (
            <div className="row" key={row.index}>
              {row.cols.map(field => (
                <SudokuField
                  field={field}
                  key={field.col}
                  onChange={onChange}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
}

export default SudokuBoard;

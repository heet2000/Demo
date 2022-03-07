import React from "react";

const Result = (props) => {
  // const copyURL = (e) => {
  //   e.preventDefault();
  //   let copyText = document.getElementById("share-url");
  //   copyText.select();
  //   copyText.setSelectionRange(0, 99999);
  //   document.execCommand("copy");
  // };

  const { sudoku } = props;
  console.log(sudoku);
  const elapsed = Math.floor((sudoku.solvedTime.getTime() - sudoku.startTime.getTime()) / 1000);
  const opponent = sudoku.challengerSolvedTime ? Math.floor( (sudoku.challengerSolvedTime.getTime() - sudoku.challengerStartTime.getTime()) / 1000) : null;
    return (
      <div>
        <h2 className="solved">You solved the sudoku in {elapsed} seconds.</h2>
        {opponent && <h3>Your opponent solved it in {opponent} seconds.</h3>}
        <p>
          Challenge a friend:
          <input
            className="share-url"
            type="text"
            id="share-url"
            value={sudoku.shareURL}
            readOnly={true}
          />
        </p>
      </div>
    );
}

export default Result;
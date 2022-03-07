import React, { useState,useEffect } from "react";

const Timer = (props) => {
  const[state,setState] = useState({
    elapsed: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState({
        elapsed: Math.floor(
          (new Date().getTime() - props.start.getTime()) / 1000
        )
      });
    });

    return () => delete interval;
  }, []);

  // componentDidMount() {
  //   interval = setInterval(() => {
  //     setState({
  //       elapsed: Math.floor(
  //         (new Date().getTime() - props.start.getTime()) / 1000
  //       )
  //     });
  //   });
  // }

  // componentWillUnmount() {
  //   delete this.interval;
  // }

    const { elapsed } = state;
    return (
      <div>
        <h2>
          Time: {parseNumber(elapsed / 3600)} :{" "}
          {parseNumber((elapsed % 3600) / 60)} : {parseNumber(elapsed % 60)}{" "}
        </h2>
      </div>
    );
  }


const parseNumber = (n) => {
  n = parseInt(n);
  return n < 10 ? `0${n}` : n;
}

export default Timer;

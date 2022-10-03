import React, { useEffect, useState } from "react";
import FloatingSquare from "./FloatingSquare";

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const FloatingSquareLoader = () => {
  const floatingSquares: any[] = [];
  const [squareCount, squareCountSet] = useState(0);

  for (let i = 0; i < squareCount; i++) {
    floatingSquares.push(
      <FloatingSquare
        key={i}
        size={randomNumber(100, 200)}
        height={randomNumber(0, 90)}
        offset={`${(i / squareCount) * 100}%`}
      />
    );
  }
  useEffect(() => {
    let num = Math.round(0.0000015 * (window.innerWidth + 1400) ** 2);
    squareCountSet(0);
  }, []);

  return <>{floatingSquares}</>;
};

export default FloatingSquareLoader;

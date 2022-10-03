import React, { useEffect, useState } from "react";

const Hexagons = () => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  const setHexagons = () => {
    setRows(Math.ceil(window.innerHeight / 60));
    setCols(Math.ceil(window.innerWidth / 60));
  };

  useEffect(() => {
    setHexagons();
    if (!window) return;
    addEventListener("resize", () => setHexagons());
  }, []);

  const hexagon = () => {
    return (
      <div className="hexagon aspect-[1/1.1547] h-24 relative z-10">
        <div className="inset-1 bg-background-secondary/20 hexagon absolute hover:bg-accent/5 transition-all ease-in-out hover:duration-[0ms] duration-[5s]"></div>
      </div>
    );
  };
  return (
    //(4 * 1.547 / 2 - .4)
    <div className="absolute -top-12 left-0">
      {[...Array(rows)].map((x, y) => {
        return (
          <div
            className="flex"
            key={y}
            style={{
              transform: `translate(-${(y % 2) * 1.547 * 1.67}rem, -${1.54 * y
                }rem)`,
            }}
          >
            {[...Array(cols)].map((e, i) => hexagon())}
          </div>
        );
      })}
    </div>
  );
};

export default Hexagons;

import React, { useEffect, useState } from "react";
import Hexagon from "./Hexagon";

const Hexagons = () => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  const init: number[] = [];
  const [activated, setActivated] = useState(init);
  let activatedList: number[] = [];

  const setHexagons = () => {
    setRows(Math.ceil(window.innerHeight / 60));
    setCols(Math.ceil(window.innerWidth / 60));
  };

  useEffect(() => {
    setHexagons();
    if (!window) return;
    addEventListener("resize", () => setHexagons());
  }, []);

  const verifyIndex = (index: number) => {
    if (activated.includes(index))
      return false;

    if (activatedList.includes(index))
      return false;

    if (index < 0)
      return false;

    if (index > cols * rows)
      return false;

    return true;
  }

  const updateActivated = (index: number, col: number) => {
    if (!verifyIndex(index))
      return;

    setActivated(current => [...current, index])
    activatedList.push(index)

    setTimeout(() => {
      setActivated(current =>
        current.filter(i => {
          return i !== index;
        }),
      );
    }, 200)


    setTimeout(() => {
      expand(index, col);
    }, 100)
  }

  const expand = (index: number, col: number) => {
    updateActivated(index - 1, col);
    updateActivated(index + 1, col);
    updateActivated(index - cols, col - 1);
    updateActivated(index + cols, col + 1);

    if (col % 2) {
      updateActivated(index - cols - 1, col - 1);
      updateActivated(index + cols - 1, col + 1);
    } else {
      updateActivated(index - cols + 1, col - 1)
      updateActivated(index + cols + 1, col + 1)
    }
  }


  const hexagonClick = (index: number, col: number) => {
    updateActivated(index, col)
  }

  return (
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
            {[...Array(cols)].map((e, i) => {
              const index = y * cols + i;
              return (
                <Hexagon index={index} col={y} activated={activated.includes(index)} click={hexagonClick} />
              )
            }
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Hexagons;

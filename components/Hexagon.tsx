import { useState } from "react";

interface hexagonProps {
  index: number,
  activated: boolean,
  click: Function,
  col: number
}

const Hexagon = (props: hexagonProps) => {

  return (
    <div className="hexagon aspect-[1/1.1547] h-24 relative z-10" onClick={() => props.click(props.index, props.col)} >
      <div className={`
      ${!props.activated ? 'bg-background-secondary/20' : 'bg-accent/10'} 
      inset-1 hexagon absolute transition-all ease-in-out 
      hover:bg-accent/5

      `}></div>

    </div>
  );

};

export default Hexagon;


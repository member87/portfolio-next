import React, { useState } from "react"; // let's also import Component
import { useSpring, animated, easings } from "react-spring";

interface FloatingSquareProps {
  size: number;
  height: number;
  offset: string;
}

const FloatingSquare = (props: FloatingSquareProps) => {
  const speed = props.size ** 2;
  const distance = 120 - props.height;
  const multi = 120 / distance;

  const divUp = useSpring({
    from: { bottom: `${props.height}%`, left: props.offset },
    to: { bottom: "120%" },
    loop: {
      delay: 0,
      reset: true,
      from: {
        bottom: `-20%`,
      },
      config: {
        duration: speed,
      },
    },
    config: {
      duration: speed / multi,
    },
  });

  const roundAnim = useSpring({
    from: {
      borderRadius: "25%",
      rotateZ: 0,
      width: props.size,
      height: props.size,
    },
    to: [
      { borderRadius: "40%", rotateZ: 360 },
      { borderRadius: "5%", rotateZ: 720 },
    ],
    loop: {
      delay: 0,
      reset: true,
      from: {
        borderRadius: "5%",
        rotateZ: 0,
      },
    },
    config: {
      duration: props.size ** 1.63,
    },
  });

  return (
    <animated.div
      style={divUp}
      className="absolute z-30 opacity-20 pointer-events-none"
    >
      <animated.div
        style={roundAnim}
        className={`w-16 h-16 border border-accent z-30 overflow-hidden`}
      >
        <div className="w-full h-full bg-background-secondary contrast-[1000] saturate-[100] brightness-[2]"></div>
      </animated.div>
    </animated.div>
  );
};

export default FloatingSquare;

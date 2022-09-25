import React, { useState } from 'react'; // let's also import Component
import { useSpring, animated, easings } from 'react-spring'

interface FloatingSquareProps {
  size: number,
  delay: number,
  offset: string
}

const FloatingSquare = (props: FloatingSquareProps) => {

  const divUp = useSpring({
    from: { bottom: "-20%", left: props.offset },
    to: { bottom: "120%" },
    loop: {
      delay: 0,
      reset: true
    },
    config: {
      duration: props.size ** 2
    },
    delay: props.delay
  })

  const roundAnim = useSpring({
    from: { borderRadius: "0%", rotateZ: 0, width: props.size, height: props.size },
    to: [
      { borderRadius: "40%", rotateZ: 360 },
      { borderRadius: "0%", rotateZ: 720 },
    ],
    loop: {
      delay: 0,
      reset: true
    },
    config: {
      duration: props.size ** 1.8,
      //easing: easings.easeInOutQuart,
    },
    delay: props.delay,
    pause: false,
  })



  return (
    <animated.div style={divUp} className="absolute z-0">
      <animated.div style={roundAnim} className="w-16 h-16 bg-background-secondary opacity-40"></animated.div>
    </animated.div>
  )
}

export default FloatingSquare;



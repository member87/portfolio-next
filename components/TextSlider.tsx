import React, { useState } from 'react'; // let's also import Component
import { useSpring, animated, easings } from 'react-spring'

interface TextSliderProps {
  text: String,
  delay: number
}

const TextSlider = (props: TextSliderProps) => {
  const [textShow, setTextShow] = useState(false);

  const divAnimation = useSpring({
    from: {
      left: "0%",
      right: "100%"
    },
    to: [
      { right: "0%" },
      { left: "100%" }
    ],
    delay: props.delay,
    onStart: {
      left: () => setTextShow(true)
    },
    config: {
      duration: 500,
      easing: easings.easeInOutCubic
    }
  })


  return (
    <div>
      <div className='relative inline-block'>
        <animated.div style={divAnimation} className="h-full bg-accent absolute"></animated.div>
        <div className={(textShow ? 'opacity-100' : 'opacity-0') + " px-4"}>{props.text}</div>
      </div>
    </div>
  )
}

export default TextSlider;



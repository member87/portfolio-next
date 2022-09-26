import React, { useState, useRef, useEffect } from 'react'; // let's also import Component
import { useSpring, animated, easings } from 'react-spring'

type BadgeProps = {
  url: string,
  child: number
};


const Badge = (props: BadgeProps) => {

  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  const [anim, api] = useSpring(() => ({
    from: {
      translateY: -20,
      opacity: 0,
    },
    config: {
      duration: 250
    },
  }));


  useEffect(() => {

    const observer = new IntersectionObserver((entires) => {
      if (entires[0].isIntersecting) {
        setTimeout(() => {
          api.start({
            to: {
              opacity: 1,
              translateY: 0,
            }
          })
        }, props.child * 25);
      }
      setVisible(true)
    })
    if (containerRef.current) observer.observe(containerRef.current)
  }, [containerRef, api, props.child])



  return (
    <span ref={containerRef} className="hover:scale-110 duration-150">
      {visible && (
        <animated.img src={props.url} style={anim} />
      )}
    </span>
  )
}
export default Badge;

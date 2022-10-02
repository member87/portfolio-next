import React, { useRef, useEffect } from "react";
import Hexagons from "@/components/Hexagons";

type BackgroundProps = {
  children: React.ReactNode;
};

const Background = (props: BackgroundProps) => {
  const gradient = useRef<HTMLDivElement>(null);
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addEventListener("mousemove", (event) => {
      if (!border.current) return;

      let box = border.current.getBoundingClientRect();
      border.current.style.left = event.clientX - box.width / 2 + "px";
      border.current.style.top =
        event.clientY - box.height / 2 + window.scrollY + "px";
    });
  }, [gradient, border]);

  return (
    <div className="bg-background relative overflow-hidden">
      <div className="h-screen -top-1 flex flex-col bg-background justify-center items-center background-pattern relative overflow-hidden z-10">
        {props.children}
        <Hexagons />
      </div>

      <div
        className="background-border absolute w-screen aspect-square"
        ref={border}
      ></div>
    </div>
  );
};

export default Background;

import React, { useRef, useEffect } from "react";

type BackgroundProps = {
  children: React.ReactNode;
};

const Background = (props: BackgroundProps) => {
  const gradient = useRef<HTMLDivElement>(null);
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addEventListener("mousemove", (event) => {
      if (!gradient.current || !border.current) return;

      let box = gradient?.current?.getBoundingClientRect();
      gradient.current.style.left = event.clientX - box.width / 2 + "px";
      gradient.current.style.top =
        event.clientY - box.height / 2 + window.scrollY + "px";

      box = border.current.getBoundingClientRect();
      border.current.style.left = event.clientX - box.width / 2 + "px";
      border.current.style.top =
        event.clientY - box.height / 2 + window.scrollY + "px";
    });
  }, [gradient, border]);

  return (
    <div className="bg-background relative overflow-hidden">
      <div className="h-screen -top-1 flex flex-col bg-background justify-center items-center background-pattern relative overflow-hidden z-10">
        <div
          className=" background-gradient absolute w-full aspect-square"
          ref={gradient}
        ></div>
        {props.children}
      </div>

      <div
        className="background-border absolute w-screen aspect-square"
        ref={border}
      ></div>
    </div>
  );
};

export default Background;

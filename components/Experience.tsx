import React, { useState, useRef, useEffect } from "react"; // let's also import Component
import { useSpring, animated, easings } from "react-spring";

type ExperienceProps = {
  logo: string;
  name: string;
  start: string;
  end: string;
  title: string;
  url: string;
  children: JSX.Element | JSX.Element[]
};

const Experience = (props: ExperienceProps) => {

  return (
    <a href={props.url} className="hover:shadow-2xl duration-150 transition-all">
      <div className="flex items-center gap-6 bg-background p-8 rounded-lg shadow mx-2">
        <img src={props.logo} width="100px" />
        <div className="flex flex-col">
          <div className="font-bold text-2xl mb-1">{props.name} <span className="font-normal">- {props.title}</span></div>
          <div>{props.start} - {props.end}</div>

          <div className="flex gap-2 flex-wrap text-3xl pt-2">{props.children}</div>
        </div>
      </div>
    </a>
  )
};
export default Experience;

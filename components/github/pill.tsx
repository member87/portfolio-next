import React, { Component } from "react"; // let's also import Component

type PillProps = {
  text: string;
};

export default class Pill extends Component<PillProps, {}> {
  constructor(props: PillProps) {
    super(props);
  }

  render() {
    return (
      <span className="px-2 py-1 mr-2 mb-2 text-sm bg-accent/50 rounded-full shadow inline-block text-xs">
        {this.props.text}
      </span>
    );
  }
}

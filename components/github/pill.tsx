import React, { Component } from 'react'; // let's also import Component

type PillProps = {
  text: string
}

export default class Pill extends Component<PillProps, {}> {
  constructor(props: PillProps) {
    super(props)
  }

  render() {
    return (
      <span className='px-2 py-1 mr-2 mb-2 text-sm bg-background rounded-full shadow inline-block'>{this.props.text}</span>
    )
  }
}

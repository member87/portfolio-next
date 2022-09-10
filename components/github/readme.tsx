import React, { Component } from 'react'; // let's also import Component
import Link from 'next/link'
import { marked } from "marked";

type ReadmeProps = {
  project: string,
};

type ReadmeState = {
  readme: string
}


export default class Readme extends Component<ReadmeProps, ReadmeState> {
  constructor(props: ReadmeProps) {
    super(props)
    this.state = {
      readme: "",
    }
  }


  componentDidMount() {
    fetch('/api/github/readme', {
      method: "POST",
      body: JSON.stringify({
        project: this.props.project
      })
    })
      .then(async resp => {
        const body = (await resp.json()).text;
        this.setState({
          readme: marked(body)
        })
      })
  }

  render() {
    return (
      <>
        <div className="prose min-w-full border-2 border-background p-10 rounded prose-invert" dangerouslySetInnerHTML={{ __html: this.state.readme }}>
        </div>
      </>
    )
  }
}

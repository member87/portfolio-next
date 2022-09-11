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
        <div className="prose min-w-full p-0 rounded prose-invert md:p-10 md:border-2 md:border-background" dangerouslySetInnerHTML={{ __html: this.state.readme }}>
        </div>
      </>
    )
  }
}

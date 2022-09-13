import React, { Component } from 'react'; // let's also import Component
import Link from 'next/link'
import { marked } from "marked";
import Image from 'next/image'


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
    const renderer = new marked.Renderer();

    renderer.image = (src, title, alt) => {
      if (!src?.startsWith("http"))
        src = `https://github.com/member87/${this.props.project}/raw/HEAD/${src}`
      console.log(src)
      return `<div class="shadow"><Image src=${src} alt=${alt} /></div>`

    }

    marked.setOptions({
      renderer: renderer
    })


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

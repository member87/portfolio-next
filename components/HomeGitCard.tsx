import React, { Component } from 'react'; // let's also import Component
import Link from 'next/link'

type HomeGitProps = {
  project: string,
  invert: boolean
};

type HomeGitState = {
  description: string,
  stars: number,
  forks: number,
  language: string,
}


export default class HomeGitCard extends Component<HomeGitProps, HomeGitState> {
  constructor(props: HomeGitProps) {
    super(props)
    this.state = {
      description: "Loading...",
      stars: 0,
      forks: 0,
      language: ""
    }
  }

  componentDidMount() {
    fetch('/api/github/info', {
      method: "POST",
      body: JSON.stringify({
        project: this.props.project
      })
    })
      .then(async resp => {
        const json = (await resp.json()).text;
        this.setState({
          description: json.description,
          stars: json.stargazers_count,
          forks: json.forks_count,
          language: json.language
        })
      })
  }

  render() {
    return (
      <div className={`${this.props.invert ? "bg-background" : "bg-background-secondary"} p-5 flex flex-col`}>
        <div className="flex flex-wrap">
          <a href={`https://github.com/member87/${this.props.project}`} className="flex-auto hover:underline underline-offset-8">
            <h4 className="text-xl mb-1">{this.props.project}</h4>
          </a>
          <div className={`${this.props.invert ? "bg-background-secondary" : "bg-background"} text-paragraph text-sm rounded-full px-3 pt-1`}>
            <div className={`w-2 h-2 mr-2 rounded-full inline-block bg-${this.state.language}`}></div>
            {this.state.language}
          </div>
        </div>
        <p className="text-paragraph flex-auto py-4">{this.state.description}</p>

        <div className="grid grid-cols-2">
          <span>
            <i className="fa-solid fa-star mr-2"></i>
            <span className="text-paragraph">{this.state.stars}</span>
          </span>
          <span>
            <i className="fa-solid fa-code-merge mr-2"></i>
            <span className="text-paragraph">{this.state.forks}</span>
          </span>
        </div>
      </div>
    )
  }
}

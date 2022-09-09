import React, { Component } from 'react'; // let's also import Component

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
          <h4 className="text-xl flex-auto mb-1">{this.props.project}</h4>
          <span className={`${this.props.invert ? "bg-background-secondary" : "bg-background"} text-paragraph text-sm rounded-full px-3 pt-1`}>{this.state.language}</span>
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

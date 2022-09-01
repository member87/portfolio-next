import React, { Component } from 'react'; // let's also import Component

type HomeGitProps = {
  project: string
};

type HomeGitState = {
  description: string,
  stars: number,
  forks: number,
}


export default class HomeGitCard extends Component<HomeGitProps, HomeGitState> {
  constructor(props: HomeGitProps) {
    super(props)
    this.state = {
      description: "Loading...",
      stars: 0,
      forks: 0
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
          forks: json.forks_count
        })
      })
  }

  render() {
    return (
      <div className="bg-background-secondary p-5 flex flex-col">
        <h4 className="text-xl">{this.props.project}</h4>
        <p className="text-paragraph flex-auto pb-4">{this.state.description}</p>

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

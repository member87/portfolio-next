import React, { Component } from 'react'; // let's also import Component
import Link from 'next/link'
import TextLoader from '@/components/TextLoader'

type HomeGitProps = {
  project: string,
  invert: boolean
};

type HomeGitState = {
  description: string,
  stars: number,
  forks: number,
  language: string,
  loaded: boolean
}


export default class HomeGitCard extends Component<HomeGitProps, HomeGitState> {
  constructor(props: HomeGitProps) {
    super(props)
    this.state = {
      description: "",
      stars: 0,
      forks: 0,
      language: "",
      loaded: false
    }
  }

  static defaultProps = {
    invert: false,
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
          language: json.language,
          loaded: true
        })
      })
  }

  render() {
    return (
      <div className={`${this.props.invert ? "bg-background" : "bg-background-secondary"} p-5 flex flex-col`}>
        <div className="flex flex-wrap">
          <Link href={`/view/${this.props.project}`}>
            <h4 className="flex-auto hover:underline underline-offset-8 text-xl mb-1 hover:cursor-pointer">{this.props.project}</h4>
          </Link>
          <div className={`${this.props.invert ? "bg-background-secondary" : "bg-background"} text-paragraph text-sm rounded-full px-3 flex items-center`}>
            <div className={`w-2 h-2 mr-2 rounded-full inline-block bg-${this.state.language}`}></div>
            {this.state.language}
          </div>
        </div>
        {this.state.loaded
          ? <p className="text-paragraph flex-auto py-4">{this.state.description}</p>
          : <div className="mt-5"><TextLoader /></div>
        }

        <div className="flex gap-4">
          <span>
            <i className="fa-solid fa-star mr-2"></i>
            <span className="text-paragraph">{this.state.stars} stars</span>
          </span>
          <span>
            <i className="fa-solid fa-code-merge mr-2"></i>
            <span className="text-paragraph">{this.state.forks} forks</span>
          </span>
        </div>
      </div>
    )
  }
}

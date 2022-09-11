import React, { Component } from 'react'; // let's also import Component
import Link from 'next/link'
import Pill from '@/components/github/pill'
import TextLoader from '@/components/TextLoader';

type SidebarProps = {
  project: string,
};

type SidebarState = {
  description: string,
  stars: number,
  forks: number,
  language: string,
  watchers: number,
  url: string,
  tags: string[],
  loaded: boolean,
}


export default class Sidebar extends Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props)
    this.state = {
      description: "Loading...",
      stars: 0,
      forks: 0,
      language: "",
      watchers: 0,
      url: "",
      tags: [],
      loaded: false,
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
          language: json.language,
          watchers: json.stargazers_count,
          url: json.homepage,
          tags: json.topics,
          loaded: true,
        })
      })
  }

  render() {
    return (
      <div className="row-start-1 lg:row-start-auto">
        <div>
          <div className="font-bold">Description</div>
          <div>{this.state.description}</div>
        </div>
        {this.state.url &&
          <div className="mt-6">
            <i className="fa-solid fa-link mr-2"></i>
            <a href={this.state.url} className="text-blue-500">{this.state.url}</a>
          </div>
        }
        <div className="mt-6">
          {this.state.tags.map(tag => (
            <Pill text={tag} key={tag} />
          ))}
        </div>
        <div className="mt-6 text-paragraph">
          <div>
            {!this.state.loaded
              ? <TextLoader />
              : <>
                <i className="fa-solid fa-star w-4 mr-2"></i>
                {this.state.stars} stars
              </>
            }
          </div>
          <div>
            {!this.state.loaded
              ? <TextLoader />
              : <>
                <i className="fa-solid fa-eye w-4 mr-2"></i>
                {this.state.watchers} watchers
              </>
            }
          </div>
          <div>
            {!this.state.loaded
              ? <TextLoader />
              : <>
                <i className="fa-solid fa-code-branch w-4 mr-2"></i>
                {this.state.forks} forks
              </>
            }
          </div>
        </div>

        <div className="mt-6">
          {!this.state.loaded
            ? <TextLoader />
            : <>
              <div className="bg-background text-paragraph text-sm rounded-full px-4 py-2 inline-block">
                <div className={`w-2 h-2 mr-2 rounded-full inline-block bg-${this.state.language}`}></div>
                {this.state.language}
              </div>
            </>
          }


        </div>
      </div>
    )
  }
}

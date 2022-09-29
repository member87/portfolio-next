import React, { Component } from "react"; // let's also import Component
import Link from "next/link";
import Pill from "@/components/github/pill";
import TextLoader from "@/components/TextLoader";
import Languages from "@/components/github/language";

type SidebarProps = {
  project: string;
};

type SidebarState = {
  description: string;
  stars: number;
  forks: number;
  language: string;
  watchers: number;
  url: string;
  tags: string[];
  loaded: boolean;
};

export default class Sidebar extends Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props);
    this.state = {
      description: "Loading...",
      stars: 0,
      forks: 0,
      language: "",
      watchers: 0,
      url: "",
      tags: [],
      loaded: false,
    };
  }

  componentDidMount() {
    fetch("/api/github/info", {
      method: "POST",
      body: JSON.stringify({
        project: this.props.project,
      }),
    }).then(async (resp) => {
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
      });
    });
  }

  render() {
    return (
      <div className="row-start-1 lg:row-start-auto">
        <div>
          <div className="font-bold">Description</div>
          <div className="text-sm">{this.state.description}</div>
        </div>
        {this.state.url && (
          <div className="mt-6">
            <i className="fa-solid fa-link mr-2"></i>
            <a href={this.state.url} className="text-blue-500">
              {this.state.url}
            </a>
          </div>
        )}
        <div className="mt-6">
          {this.state.tags.map((tag) => (
            <Pill text={tag} key={tag} />
          ))}
        </div>
        <div className="mt-6 text-paragraph text-sm">
          <div>
            {!this.state.loaded ? (
              <TextLoader />
            ) : (
              <>
                <i className="fa-solid fa-star w-4 mr-2"></i>
                {this.state.stars} stars
              </>
            )}
          </div>
          <div>
            {!this.state.loaded ? (
              <TextLoader />
            ) : (
              <>
                <i className="fa-solid fa-eye w-4 mr-2"></i>
                {this.state.watchers} watchers
              </>
            )}
          </div>
          <div>
            {!this.state.loaded ? (
              <TextLoader />
            ) : (
              <>
                <i className="fa-solid fa-code-branch w-4 mr-2"></i>
                {this.state.forks} forks
              </>
            )}
          </div>
        </div>

        <hr className="mt-6 border-background" />

        <div className="mt-6">
          {!this.state.loaded ? (
            <TextLoader />
          ) : (
            <>
              <div className="mb-4">Languages</div>
              <Languages project={this.props.project} />
            </>
          )}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react"; // let's also import Component
import Link from "next/link";
import TextLoader from "@/components/TextLoader";
import Languages from "@/components/github/language";

type HomeGitProps = {
  project: string;
  invert: boolean;
};

type HomeGitState = {
  description: string;
  stars: number;
  forks: number;
  language: string;
  loaded: boolean;
};

export default class HomeGitCard extends Component<HomeGitProps, HomeGitState> {
  constructor(props: HomeGitProps) {
    super(props);
    this.state = {
      description: "",
      stars: 0,
      forks: 0,
      language: "",
      loaded: false,
    };
  }

  static defaultProps = {
    invert: false,
  };

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
        loaded: true,
      });
    });
  }

  render() {
    return (
      <Link href={`/view/${this.props.project}`}>
        <div className="relative group hover:cursor-pointer">
          <span
            className={`${
              !this.props.invert ? "bg-background-secondary" : "bg-background"
            } absolute -inset-6 rounded-xl transition-all opacity-0 scale-95 group-hover:shadow group-hover:scale-100 group-hover:opacity-50 z-0`}
          ></span>
          <div className="relative z-10">
            <div className="flex flex-wrap">
              <h4 className="flex-auto font-semibold group-hover:underline underline-offset-8 text-xl mb-1">
                {this.props.project}
              </h4>
            </div>
            {this.state.loaded ? (
              <p className="text-paragraph flex-auto text-sm py-4">
                {this.state.description}
              </p>
            ) : (
              <div className="mt-5">
                <TextLoader />
              </div>
            )}
            <Languages project={this.props.project} />
          </div>
        </div>
      </Link>
    );
  }
}

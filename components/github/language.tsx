import React, { Component } from "react"; // let's also import Component

type LanguageProps = {
  project: string;
};

type LanguageState = {
  languages: string;
  count: number;
  json: Object;
};

export default class Languages extends Component<LanguageProps, LanguageState> {
  constructor(props: LanguageProps) {
    super(props);
    this.state = {
      languages: "",
      count: 0,
      json: {},
    };
  }

  componentDidMount() {
    fetch("/api/github/languages", {
      method: "POST",
      body: JSON.stringify({
        project: this.props.project,
      }),
    }).then(async (resp) => {
      const body = (await resp.json()).text;
      const json = JSON.parse(body);

      let count = 0;
      for (let key in json) {
        count += json[key];
      }

      this.setState({
        languages: body,
        json: json,
        count: count,
      });
    });
  }

  render() {
    return (
      <>
        <div className="w-full h-2 bg-accent rounded-full overflow-hidden flex mb-4">
          {Object.entries(this.state.json).map(([key, value]) => {
            return (
              <div
                key={key}
                className={`bg-${key} h-2`}
                style={{ width: (value / this.state.count) * 100 + "%" }}
              ></div>
            );
          })}
        </div>

        <div className="span text-xs">
          {Object.entries(this.state.json).map(([key, value]) => {
            return (
              <div key={key} className={`text-${key} inline-block mr-3 mb-2`}>
                <div
                  className={`w-2 h-2 bg-${key} rounded-full inline-block mr-1`}
                ></div>

                <span className="font-bold">{key} </span>
                <span className="text-paragraph">
                  {((value / this.state.count) * 100).toFixed(1)}%
                </span>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

import React, { Component } from 'react'; // let's also import Component

type HomeCardProps = {
  title: string,
  children: React.ReactNode
};

export default class HomeCard extends Component<HomeCardProps, {}> {
  render() {
    return (
      <div className="shadow my-5 p-5 bg-background rounded shadow md:p-10">
        <h3 className="text-2xl my-2">{this.props.title}</h3>
        {this.props.children}
      </div>
    )
  }
}

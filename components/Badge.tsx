import React, { Component } from 'react'; // let's also import Component

type BadgeProps = {
  url: string
};

export default class Badge extends Component<BadgeProps, {}> {
  render() {
    return <img src={this.props.url} />
  }
}

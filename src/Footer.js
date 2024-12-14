import { Component } from "react";

export default class Footer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>{this.props.footerText}</h1>
      </div>
    )
  }
}
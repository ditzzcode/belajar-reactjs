import React ,{ Component } from "react";

class InputFocus extends Component{
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount(){
    this.inputRef.current.focus();
  }

  render(){
    return (
      <div>
        <h2>fokus input dengan refs</h2>
        <input type="text" ref={this.inputRef}/>
      </div>
    )
  }
}

export default  InputFocus
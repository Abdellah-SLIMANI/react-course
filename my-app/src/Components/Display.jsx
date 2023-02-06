import { Component } from "react"
//The Display (function)
const Display = ({currency}) => {
    return <h1>The Currency is : {currency} </h1>
}

export default Display

//The display (Class)
class Displayy extends Component{
    render(){
      return(<h1>The Currency is : {this.props.currency} </h1>)
    }
  }
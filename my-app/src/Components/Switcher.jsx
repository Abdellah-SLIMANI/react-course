import { Component } from "react"
export default class Switcher extends Component{
    render(){
      return(<button onClick={this.props.handleCurrencyChange}>Switch Currencies! to {this.props.currency === "EURO" ? "DOLLAR" : "EURO"}</button>)
    }
  }
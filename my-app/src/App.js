import React from 'react'
import Display from './Components/Display'
import Switcher from './Components/Switcher'

//Currency converter (Euro to Dollar)
//The Currency is : ''''
// Button => when clicking it we will switch currencies bwttwen dollar and euro

export default class Converter extends React.Component{
  constructor(){
    super()
    this.state = {currency : "EURO", data: []}
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this)
  }

  handleCurrencyChange(){
    this.setState({currency: this.state.currency === "EURO" ? "DOLLAR" : "EURO"})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => this.setState({...this.state, data: json}))
  }

  render(){
    console.log("our STATE", this.state)
    return(
      <> 
        <Display 
          currency={this.state.currency}
          myname = "Abdellah"
        />
        <Switcher
          handleCurrencyChange={this.handleCurrencyChange}
          currency={this.state.currency}
        ><h1>AAAAA</h1><div>BBBBBBB</div></Switcher>
      </>
    )
  }
}

// 0 (counter)
//Button1 (+) => will increment the counter 
//Button2 (-) => will decrement the counter

//Presentational Comps => Only UI 
//Container Comps => Contains Presentational and business logic 
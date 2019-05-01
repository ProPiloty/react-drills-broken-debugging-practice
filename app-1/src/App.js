import React, { Component } from 'react'
import './App.css'

class App extends Component {

  constructor(){
    super();

    this.state = {
      input: '',
    }
  }

  handleInput(value) {
    this.setState({
      input: value
    })
  }

  render() {
    return (
      <div className="App">
        <input type='text' onChange={(e) => this.handleInput(e.target.value)} />
        <h1>{this.state.input}</h1>
      </div>
    )
  }
}

export default App;

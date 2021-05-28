// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleInputChange = (e) => this.setState({name: e.target.value})

  handleFormSubmit = (e) => {
    e.preventDefault()
    if(this.state.name !== "") {
      this.props.addBand(this.state)
      this.setState({name: ""})
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleInputChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput

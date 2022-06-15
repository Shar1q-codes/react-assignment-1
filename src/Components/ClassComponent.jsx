import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle : false
        }
    }
  render() {
    return (
      <>
      <button className='btn2' onClick={()=>this.setState({toggle: !this.state.toggle})}>To See Styling In Class Component </button>
      {this.state.toggle &&
      <div className='card1'>
        <h1>This is created using CLass Component </h1>
        <p id='pc'>This is done using external CSS </p>
        <p style={{color:'blue'}}>This is done using inline CSS</p>
      </div>
  }
      </>
    )
  }
}

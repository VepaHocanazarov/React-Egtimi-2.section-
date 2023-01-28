
import React, { Component } from 'react'

class Vepa extends Component {
  render() {
    console.log(this.props);
    const { başlik, açiklama } = this.props;
    return (
      <div>


        <h1>{başlik}</h1>
        <p>{açiklama}</p>


      </div>
    )
  }
}

export default Vepa;

import React, { Component } from 'react'

class Vepa extends Component {
  render() {
    console.log(this.props.newsData);
    const { title, description } = this.props.newsData;
    return (
      <div>


        <h1>{title}</h1>
        <p>{description}</p>


      </div>
    )
  }
}

export default Vepa;
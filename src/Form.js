
import React, { Component } from 'react'

 class Form extends Component {

    addButton()
    {
        console.log("hi");
    }
  render() {
    return (
      <div>
        <button onClick={this.addButton}>Ekle</button>
      </div>
    )
  }
}

export default Form;

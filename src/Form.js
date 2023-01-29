
import React, { Component } from 'react'

 class Form extends Component {

    constructor(props)  // Constructor ile binding yapma
    {
        super(props);
        // this.addButton = this.addButton.bind(this); // ==>> Aşagida Arrow function ile addnews'e binding yapdıgımız için buna gerek yok...
    };

    addButton() 
    {
        this.props.addnews();   // Arrow function ile binding yapma
        console.log("hi");
    }
  render() {
    return (
      <div>
        <button onClick={() => this.addButton () }>Ekle</button> 
      </div>
    )
  }
}

export default Form;

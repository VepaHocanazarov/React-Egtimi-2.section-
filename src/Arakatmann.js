import React, { Component } from 'react'
import Vepa from "./Vepa"
import PropTypes from "prop-types"

class Arakatmann extends Component {

  static propTypes=
  {
  dizim:PropTypes.number
  }
  render() {

    return (
      <div>

       {
          this.props.dizim.map(dizim=>
           <Vepa key = {dizim.id} başlik={dizim.title}  açiklama = {dizim.description}/>
           ) 
       }
        
      </div>
    )
  }
}

export default Arakatmann;

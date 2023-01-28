import React, { Component } from 'react'
import Vepa from "../../can/src/Vepa"

class Arakatmann extends Component {
  render() {
    return (
      <div>

       {
          this.props.dizim.map(dizim=>
           <Vepa  başlik={dizim.title}  açiklama = {dizim.description}/>
           ) 
       }
        
      </div>
    )
  }
}

export default Arakatmann;

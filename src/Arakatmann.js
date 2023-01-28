import React, { Component } from 'react'
import Vepa from "./Vepa"

class Arakatmann extends Component {
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

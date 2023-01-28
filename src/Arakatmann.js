import React, { Component } from 'react'
import Vepa from "./Vepa"
import PropTypes from "prop-types"

class Arakatmann extends Component {

  // static propTypes=
  // {
  // dizim:PropTypes.array, ------>>>>Eger class component kullanıyorsam static şekilde prop type atama yapabiliyoruz ancak functional ve diger componentlerde static kullanamıyoruz. 
  // name:PropTypes.number
  // }
  render() {

    return (
      <div>

        {
          this.props.name
        }

       {
          this.props.dizim.map(dizim=>
           <Vepa key = {dizim.id} başlik={dizim.title}  açiklama = {dizim.description}/>
           ) 
       }
        
      </div>
    )
  }
}

Arakatmann.propTypes =
{
  dizim: PropTypes.array,  // ----->>> class componentleri dışındaki componentlerde bu tür ptoptypes kullanırız.
  name: PropTypes.number
}

export default Arakatmann;



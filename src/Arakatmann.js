import React, { Component } from 'react'
import Vepa from "./Vepa"
import PropTypes from "prop-types";
import Form from "./Form";

class Arakatmann extends Component {

  // static propTypes=
  // {
  // dizim:PropTypes.array, ------>>>>Eger class component kullanıyorsam static şekilde prop type atama yapabiliyoruz ancak functional ve diger componentlerde static kullanamıyoruz. 
  // name:PropTypes.number
  // }

  static defaultProps =
  {
    name: "Hocanazarov"
  }


  render() {

    const elements = this.props.dizim.map(dizim=>
     <Vepa key = {dizim.id} newsData = {dizim}/> )
     

    return (
      <div>

        {
          this.props.name
        }

       {
          // this.props.dizim.map(dizim=>
          //  <Vepa key = {dizim.id} başlik={dizim.title}  açiklama = {dizim.description}/>  --> 2.yöntem
          //  ) 

          elements
       }

       <Form addnews = {this.props.addnews}/>
        
      </div>
    )
  }
}

// Arakatmann.defaultProps =
// {
//   name:"Hocanazarov"
// }

Arakatmann.propTypes =
{
  dizim: PropTypes.array.isRequired, // ----->>> class componentleri dışındaki componentlerde bu tür ptoptypes kullanırız.
  name: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired
  
}

export default Arakatmann;



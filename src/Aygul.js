import React, { Component } from 'react'
import PropTypes from "prop-types"

class Aygul extends Component {
  render() {

    const {isim,soyad} = this.props
    return (
      <div>

      <h2>{isim}</h2>
      <h2>{soyad}</h2>
        
      </div>
    )
  }
}

Aygul.propTypes =
{
  isim:PropTypes.string,
  soyad:PropTypes.string
}

export default Aygul


// Degişecek alanlar için functional componenti kullanamıyoruz. Burda sadece propusları gönderbiliyoruz fakat statesleri kullanamıyoruz 
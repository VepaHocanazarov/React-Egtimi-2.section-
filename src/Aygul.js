import React, { Component } from 'react'
import PropTypes from "prop-types"

class Aygul extends Component {

  state = {
    name: "Pratik state"
  }

  btnclick() {
    this.props.btnpratik();
    console.log("btn click yapildi");
  }

  addpratik() {
    console.log(this.state)
    this.setState({
      name: "set State Eklendi"
    })
  }

  render() {

    const { isim, soyad } = this.props
    return (
      <div>

        <h1>{this.state.name}</h1>
        
        <h2>{isim}</h2>
        <h2>{soyad}</h2>

        <button onClick={this.addpratik.bind(this)}>Ekle</button>

        {/* <button onClick={this.btnclick.bind(this)}>Ekle 2</button> */}

      </div>
    )
  }
}

Aygul.propTypes =
{
  isim: PropTypes.string,
  soyad: PropTypes.string
}

export default Aygul


// Degişecek alanlar için functional componenti kullanamıyoruz. Burda sadece propusları gönderbiliyoruz fakat statesleri kullanamıyoruz 
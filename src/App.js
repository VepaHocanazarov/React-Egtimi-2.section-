
import './App.css';
import { Component } from 'react';
import Aygul from './Aygul';
import Arakatmann from './Arakatmann';
import './Deneme.css';

const name = "Vepa";
    const lastname = "Hocanazarov"

    const dizim = [{
      id: 1,
      title: "Hiper",
      description: "React"
    },
    {
      id: 2,
      title: "Süper",
      description: "React Egitimi"
    },
    {
      id: 3,
      title: "Hiper Süper",
      description: "React'in Kendisi"
    },
    ]


class App extends Component {


  state = {
    name:"Aygül" 
     // State:Uygulama içinde degeri degişebilen degerleri tutan Javascript objesidir.
  }
 

  addnews() {

    console.log("Ekledim");

    dizim.push({
      id:4,
      title:"Muhteşem",
      description:"Muhteşem ötesi"
    });

    console.log(dizim)
  }

  btnpratik()
  {
    console.log("btn pratik tiklandi");
  }
  
  changeName ()
  {
    console.log(this.state)
    this.setState(
      {
        name : "Vepa"
      }
    )
    
  }

  render() {

    

    return (

      <div className="container">

        <h1> {this.state.name} </h1>

        <button onClick={this.changeName.bind(this)}>Degiştir</button>

        <Aygul isim={name} soyad={lastname} btnpratik = {this.btnpratik} />
        {/* <Arakatmann dizim={dizim} addnews={this.addnews} /> */}

      </div>

    );
  }
}


export default App;
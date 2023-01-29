
import './App.css';
import { Component } from 'react';
import Aygul from './Aygul';
import Arakatmann from './Arakatmann';
import './Deneme.css';


class App extends Component {

  addnews() {
    
    console.log("Ekledim");


  }

  render() {

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

    return (
      <div className="container">


        <Aygul isim={name} soyad={lastname} />
        <Arakatmann dizim={dizim} addnews={this.addnews} />

      </div>

    );
  }
}


export default App;
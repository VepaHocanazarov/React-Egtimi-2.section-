
import './App.css';
import { Component } from 'react';
import Aygul from './Aygul';
import Arakatmann from './Arakatmann';
import  './Deneme.css';


class App extends Component {
  render() {

    const dizim = [{
      id:1,
      title: "Hiper",
      description : "React"
    },
    {
      id:2,
      title: "Süper",
      description : "React Egitimi"
    },
    {
      id:3,
      title: "Hiper Süper",
      description : "React'in Kendisi"
    },
  ]

    return (
      <div className="container">
       

        <Aygul/>
        <Arakatmann dizim = {dizim}/>

      </div>

    );
  }
}


export default App;
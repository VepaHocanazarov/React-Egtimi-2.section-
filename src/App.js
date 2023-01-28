
import './App.css';
import { Component } from 'react';
import Aygul from './Aygul';
import Arakatmann from './Arakatmann';


class App extends Component {
  render() {

    const dizim = [{
      title: "Hiper",
      description : "React"
    },
    {
      title: "Süper",
      description : "React Egitimi"
    },
    {
      title: "Hiper Süper",
      description : "React'in Kendisi"
    },
  ]

    return (
      <div className="App">
        Merhaba Dünya

        <Aygul/>
        <Arakatmann dizim = {dizim}/>

      </div>

    );
  }
}


export default App;
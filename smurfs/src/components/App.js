import React, { Component } from "react";
import "./App.css";
import SmurfList from './smurfList'
import Form from './form'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>Add Smurfs to your village</h2>
        <Form />
        <h3 className="title">Smurf Village</h3>
        <SmurfList />
      </div>
    );
  }
}

export default App;

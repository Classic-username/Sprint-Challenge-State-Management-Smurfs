import React, { useState, useEffect } from "react";

import {connect} from 'react-redux'; //import connect to 'connect' this component to redux
import {addSmurf} from '../actions';



import "./App.css";
import FormikSmurfForm from "./FormikSmurfForm";


const App = (props) => {

  const [ newSmurf, setNewSmurf ] = useState({
    name: '',
    age: '',
    height: ''
  });




  useEffect()

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <FormikSmurfForm />
      </div>
    );
}

// export default App; 

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height,
    id: state.id
  }
}

export default connect(mapStateToProps, { addSmurf })(App)
import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from 'formik';
import {connect} from 'react-redux'; //import connect to 'connect' this component to redux
import {addSmurf} from '../actions';



import "./App.css";
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
        <Form>
          <Field type='text' name='name' placeholder='new smurf name' />
          <Field type='text' name='age' placeholder='new smurf age' />
          <Field type='text' name='height' placeholder='new smurf height (CM)' />
        </Form>
        <button>Add smurf!</button>
      </div>
    );
}

const FormikSmurfForm = withFormik({
  mapPropsToValues({name, age, height}){
    return {
      name: name || '',
      age: age || '',
      height: height || ''
    }
  },
  handleSubmit(values) {
    console.log(values)
  }
})()

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
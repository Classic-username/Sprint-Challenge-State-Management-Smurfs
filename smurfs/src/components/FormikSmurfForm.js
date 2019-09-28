import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

const SmurfForm = () => {
    return (
        <Form>
            <Field type='text' name='name' placeholder='new smurf name' />
            <Field type='text' name='age' placeholder='new smurf age' />
            <Field type='text' name='height' placeholder='new smurf height (CM)' />
            <button>Add smurf!</button>
        </Form>
    )
}

const FormikSmurfForm = withFormik({
    mapPropsToValues({name, age, height}){
      return {
        name: name || '',
        age: age || '',
        height: height || ''
      }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('required'),
        age: Yup.string().required('required'),
        height: Yup.string().required('required')
    }),
    handleSubmit(values, { setStatus, resetForm}) {
      console.log(values,'inside handlesubmit inside formkismurfform')
      
      Axios
        .post('http://localhost:3333/smurfs', values)
        .then(res => {
            console.log('inside axios.then', res)
            setStatus(res)
            resetForm()
        })
        .catch(err => console.log(err))
    }
  })(SmurfForm)

export default FormikSmurfForm;
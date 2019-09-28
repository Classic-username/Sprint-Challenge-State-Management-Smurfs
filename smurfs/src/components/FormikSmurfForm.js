import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

const SmurfForm = ({ errors, touched, values, status}) => {

    const [ smurf, setSmurf ] = useState([]);

    useEffect(() => {
        if(status) {
            setSmurf([...smurf, status])
        }
    }, [status])

    return (
        <Form>
            <Field type='text' name='name' placeholder='new smurf name' />
            {touched.name && errors.name && (
                <p>{errors.name}</p>
            )}
            <Field type='text' name='age' placeholder='new smurf age' />
            {touched.age && errors.age && (
                <p>{errors.age}</p>
            )}
            <Field type='text' name='height' placeholder='3-10 (CM)' />
            {touched.height && errors.height && (
                <p>{errors.height}</p>
            )}
            <button type='submit'>Add smurf!</button>
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
        name: Yup.string().required('Name is required'),
        age: Yup.string().required('Age is required'),
        height: Yup.string().required('Height is required')
    }),
    handleSubmit(values, { setStatus, resetForm}) {
      console.log(values,'inside handlesubmit inside formkismurfform')
      
      Axios
        .post('http://localhost:3333/smurfs', values)
        .then(res => {
            console.log('inside axios.then', res)
            setStatus(res.data)
            resetForm()
        })
        .catch(err => console.log(err))
    }
  })(SmurfForm)

export default FormikSmurfForm;
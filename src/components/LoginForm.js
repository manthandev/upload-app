import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import { Button } from "@chakra-ui/core";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function LoginForm () {
  const history = useHistory();
  const initialValues = {
    username: '',
    password: ''
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
  })

  const onSubmit = (values,submitProps) => {
    submitProps.resetForm()
    axios.post('http://localhost:4000/users/login', values)
    .then(response=>{
            console.log(response)
    })
       .catch(error=>{
           console.log(error)
       })
    }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form>
            <FormikControl
              control='input'
              type='text'
              label='Username'
              name='username'
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
           <Button className='formSubmit' variantColor="green" type='submit' disabled={!formik.isValid}>Submit</Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
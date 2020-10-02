import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import { Button,Heading } from "@chakra-ui/core";
import Axios from 'axios';
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
    .min(2, 'Too short')
    .max(10, 'Should be less than 10 characters.')
  })

  const onSubmit = (values,submitProps) => {
    submitProps.setSubmitting(false)  
    submitProps.resetForm()
    Axios.post('http://localhost:4000/users/login', values)
    .then(response => {
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            alert('Login Success!')
            history.push('./upload')
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error =>alert(error))
    }

  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form className="forms mt-5">
            <Heading className="form-head">Login to your account!</Heading>
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
            <Button className='mt-2' variantColor="blue" type='submit' disabled={!formik.isValid}>Login</Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import { Button, Heading } from "@chakra-ui/core";
import Axios from 'axios';
import { useHistory } from "react-router-dom";


function RegistrationForm () {
  const history = useHistory();
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
    .min(2, 'Too short')
    .max(10, 'Should be less than 10 characters.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
  })

  const onSubmit = (values,submitProps) => {
    submitProps.setSubmitting(false)
    submitProps.resetForm()
    Axios.post('http://localhost:4000/users/signup', values)
    .then(response=>{
        if(response.status === 200){
          alert('Registration Successful!')
          history.push('/login')
        }
      })
       .catch(error=>{alert(error) })
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
            <Heading className="form-head">Register your account!</Heading>
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
            <FormikControl
              control='input'
              type='password'
              label='Confirm Password'
              name='confirmPassword'
            />
           <Button className='mt-2' variantColor="blue" type='submit' disabled={!formik.isValid}>Signup</Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm;
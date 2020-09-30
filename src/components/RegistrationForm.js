import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import { Button } from "@chakra-ui/core";
import axios from 'axios';


function RegistrationForm () {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
  })

  const onSubmit = (values,submitProps) => {
    submitProps.setSubmitting(false)
    submitProps.resetForm()
    axios.post('https://localhost:3443/users/login', values)
        .then(response => {
            if (response.success) {
                localStorage.setItem('token', response.token);
                alert('Registration Successful !')
            }
             else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => alert(`Registration Failed: ${error.message}`))
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
              type='email'
              label='Email'
              name='email'
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
           <Button className='formSubmit' variantColor="green" type='submit' disabled={!formik.isValid}>Submit</Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm
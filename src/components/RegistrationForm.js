import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import { Button } from "@chakra-ui/core";
import axios from 'axios';
import { useHistory } from "react-router-dom";


function RegistrationForm () {
  const history = useHistory();
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
    axios.post('https://jsonplaceholder.typicode.com/posts', values)
    .then(response=>{
            console.log(response)
            history.push('/login')
            
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

export default RegistrationForm;
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
    username: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
  })

  const onSubmit = (values,submitProps) => {
    submitProps.setSubmitting(false)
    submitProps.resetForm()
    axios.post('http://localhost:4000/users/signup', values)
    .then(response=>{
        if(response.status === 200)
            alert('Registration Successful!')
            history.push('/login')
            
    })
       .catch(error=>{
           if(error)
           alert('Username exists!')
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
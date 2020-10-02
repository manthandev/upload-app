import React from 'react'
import { Field } from 'formik'
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/core'

function InputField (props) {
  const { label, name, ...rest } = props
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isRequired isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel className="form-label" htmlFor={name}>{label}</FormLabel>
          <Input id={name} {...rest} {...field} />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

export default InputField
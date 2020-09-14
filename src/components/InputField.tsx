import React, { InputHTMLAttributes } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/core';
import { useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  mb?: string | number;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  mb,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error} mb={mb}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} placeholder={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField;

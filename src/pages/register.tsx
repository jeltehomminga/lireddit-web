import * as React from 'react';
import { Formik, Form } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
  Button
} from '@chakra-ui/core';
import { Wrapper } from '../components/Wrapper';
import InputField from '../components/InputField';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={values => console.log(values)}>
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={4}>
              <InputField name='username' label='Username' />
              <InputField
                name='password'
                label='Password'
                type='password'
                autoComplete='new-password'
              />
              <Button
                type='submit'
                variantColor='teal'
                isLoading={isSubmitting}>
                register
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;

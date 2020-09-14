import { Button, Stack } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import * as React from 'react';
import InputField from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import { useMutation } from 'urql';

interface registerProps {}

const RegisterUser = `mutation RegisterUser($username: String!, $password: String!) {
    register(options: { username: $username, password: $password }) {
      errors {
        field
        message
      },user{
        id,
        username
      }
    }
  }`;

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useMutation(RegisterUser);
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async values => {
          const response = await register(values);
          return response;
        }}>
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

import { Button, Stack } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import * as React from 'react';
import InputField from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import { useLoginUserMutation } from '../generated/graphql';
import { mapError } from '../utils/mapErrors';

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginUserMutation();
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const { data } = await login({ options: values });
          if (data?.login.errors) setErrors(mapError(data.login.errors));
          else if (data?.login.user) router.push('/');
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
                login
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Login;

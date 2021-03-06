import { Button, Stack } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import * as React from 'react';
import InputField from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import { useRegisterUserMutation } from '../generated/graphql';
import { mapError } from '../utils/mapErrors';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterUserMutation();
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const { data } = await register(values);
          if (data?.register.errors) setErrors(mapError(data.register.errors));
          else if (data?.register.user) router.push('/');
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

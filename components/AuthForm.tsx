import { Box, Button, Divider, FormControl, FormErrorMessage, FormLabel, HStack, Input, Text } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { signIn } from 'next-auth/react';

type FormItem = {
  username: string,
  password: string,
}

type Props = {
	onSubmit: (obj : FormItem ) => void;
	children: ({ isSubmitting }: { isSubmitting: boolean }) => React.ReactNode;
};

function AuthForm({ onSubmit, children }: Props) {
	return (
		<Box>
      <Formik initialValues={{ username: "", password: "" }} validate={values => {
        const errors: {
          username?: string,
          password?: string,
        } = {}
        
        if (/[!@#$%^&*(),.?":{}|<>]/g.test(values.username)) {
          errors.username = "Karakter spesial tidak diperbolehkan."
        } else if (values.username.length < 4) {
          errors.username = "Minimal panjang karakter 5."
        }

        return errors;
      }} onSubmit={(values) => {
        onSubmit(values)
      }}>
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <FormControl isRequired isInvalid={!!errors.username && touched.username}>
              <FormLabel htmlFor='username'>Username</FormLabel>
              <Field as={Input} type="text" name="username"/>
              <FormErrorMessage fontSize="xs">{errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.password && touched.username}>
					    <FormLabel htmlFor='password'>Password</FormLabel>
              <Field as={Input} type="password" name="password"/>
              <FormErrorMessage fontSize="xs">{errors.password}</FormErrorMessage>
            </FormControl>
            {children({isSubmitting})}
          </Form>
        )}
      </Formik>
			<HStack my="2">
				<Divider />
				<Text fontSize="xs">ATAU</Text>
				<Divider />
			</HStack>
			<Button w="full" display="block" onClick={() => signIn('google')}>
				Masuk dengan Google
			</Button>
		</Box>
	);
}

export default AuthForm;

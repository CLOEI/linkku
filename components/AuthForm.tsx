import { Box, Button, Divider, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';

type FormItem = {
  username: string,
  password: string,
}

type Props = {
	onSubmit: (obj : FormItem) => void;
	children: React.ReactNode;
};

function AuthForm({ onSubmit, children }: Props) {
  const [formState, setFormState] = useState<FormItem>({} as FormItem)

  const handleChange = (e : React.ChangeEvent<HTMLFormElement>) => {
    setFormState({
      ...formState,
      [e.target.name] : e.target.value
    })
  }

	return (
		<Box>
			<form onSubmit={(e) => {
        e.preventDefault()
        onSubmit(formState)
      }} onChange={handleChange}>
				<FormControl isRequired>
					<FormLabel>Username</FormLabel>
					<Input type="text" name="username"/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Password</FormLabel>
					<Input type="password" name="password"/>
				</FormControl>
				{children}
			</form>
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

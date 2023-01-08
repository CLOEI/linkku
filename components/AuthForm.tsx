import { Box, Button, Divider, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import React from 'react';

type Props = {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	children: React.ReactNode;
};

function AuthForm({ onSubmit, children }: Props) {
	return (
		<Box>
			<form onSubmit={(e) => onSubmit(e)}>
				<FormControl isRequired>
					<FormLabel>Email</FormLabel>
					<Input type="email" />
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Password</FormLabel>
					<Input type="password" />
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

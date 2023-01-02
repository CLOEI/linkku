import { Button, Center, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, VStack, HStack, Divider, Flex, Text, InputGroup, InputRightElement } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import Head from 'next/head'
import { useState } from 'react'

function Login() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Center height="100vh">
      <Head>
        <title>Masuk | Linkku</title>
      </Head>
      <VStack>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email"/>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button type="submit" mt={4} ml="auto" display="block" colorScheme="blue">Masuk</Button>
        </FormControl>
        <HStack w="100%">
         <Divider/>
         <Text p={2}>ATAU</Text>
         <Divider/>
        </HStack>
        <Button size="lg" onClick={() => signIn("google")}>Lanjut dengan Google</Button>
      </VStack>
    </Center>
  )
}

export default Login
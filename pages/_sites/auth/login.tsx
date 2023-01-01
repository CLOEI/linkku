import { Button, Center } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import Head from 'next/head'
import React from 'react'

function Login() {
  return (
    <Center height="100vh">
      <Head>
        <title>Masuk | Linkku</title>
      </Head>
      <Button size="lg" onClick={() => signIn("google")}>Lanjut dengan Google</Button>
    </Center>
  )
}

export default Login
import { Button, Center, Text, Link } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import AuthForm from '../../../components/AuthForm'

function Signup() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <Head>
        <title>Linkku | Gabung</title>
      </Head>
      <Center minH="100vh">
        <AuthForm onSubmit={onSubmit}>
          <Button type="submit" display="block" ml="auto" my="2">Gabung</Button>
          <Text textAlign="center" fontSize="sm" my="4">Sudah punya akun? <Link href={process.env.NEXTAUTH_URL + "/signin"} color="teal">masuk</Link></Text>
        </AuthForm>
      </Center>
    </>
  )
}

export default Signup
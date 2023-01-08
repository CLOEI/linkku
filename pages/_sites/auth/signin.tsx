import { Button, Center, Link, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import AuthForm from '../../../components/AuthForm'

function Signin() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <Head>
        <title>Linkku | Masuk</title>
      </Head>
      <Center minH="100vh">
        <AuthForm onSubmit={onSubmit}>
          <Button type="submit" display="block" ml="auto" my="2">Masuk</Button>
          <Text textAlign="center" fontSize="sm" my="4">Belum punya akun? <Link href={process.env.NEXTAUTH_URL + "/signup"} color="teal">gabung</Link></Text>
        </AuthForm>
      </Center>
    </>
  )
}

export default Signin
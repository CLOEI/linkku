import { Button, Center, Link, Text } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import Head from 'next/head'
import React from 'react'
import AuthForm from '../../../components/AuthForm'

type FormItem = {
  username: string,
  password: string,
}

function Signin() {
  const onSubmit = (obj : FormItem) => {
    signIn("credentials", {
      username: obj.username,
      password: obj.password,
      // callbackUrl: process.env.NEXT_PUBLIC_APP_URL!
    })
  }

  return (
    <>
      <Head>
        <title>Linkku | Masuk</title>
      </Head>
      <Center minH="100vh">
        <AuthForm onSubmit={onSubmit}>
          {({ isSubmitting }: { isSubmitting: boolean }) => (
            <>
              <Button type="submit" display="block" ml="auto" my="2" disabled={isSubmitting}>Masuk</Button>
              <Text textAlign="center" fontSize="sm" my="4">Belum punya akun? <Link href={process.env.NEXTAUTH_URL + "/signup"} color="teal">gabung</Link></Text>
            </>
          )}
        </AuthForm>
      </Center>
    </>
  )
}

export default Signin
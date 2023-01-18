import { Button, Center, Text, Link } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useRef } from 'react'
import AuthForm from '../../../components/AuthForm'

type FormItem = {
  username: string,
  password: string,
}

function Signup() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const onSubmit = async (obj : FormItem) => {
    buttonRef.current!.disabled = true
    const req = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(obj)
    })

   if (req.status === 200) {
    window.location.href = process.env.NEXT_PUBLIC_APP_URL!
   }
  }

  return (
    <>
      <Head>
        <title>Linkku | Gabung</title>
      </Head>
      <Center minH="100vh">
        <AuthForm onSubmit={onSubmit}>
          <Button ref={buttonRef} type="submit" display="block" ml="auto" my="2">Gabung</Button>
          <Text textAlign="center" fontSize="sm" my="4">Sudah punya akun? <Link href={process.env.NEXTAUTH_URL + "/signin"} color="teal">masuk</Link></Text>
        </AuthForm>
      </Center>
    </>
  )
}

export default Signup
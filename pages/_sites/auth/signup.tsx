import { Button, Center, Text, Link, useToast } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import Head from 'next/head'
import AuthForm from '../../../components/AuthForm'
import { authOptions } from '../../api/auth/[...nextauth]'
import type { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'

type FormItem = {
  username: string,
  password: string,
}

function Signup() {
  const toast = useToast()

  const onSubmit = async (obj : FormItem) => {
    const req = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(obj)
    })

   if (req.status === 200) {
    toast({
      position: "bottom-right",
      title: "Akun dibuat.",
      description: "Akun kamu telah berhasil di buat!",
      isClosable: true,
      duration: 3000,
      status: "success",
    })
    signIn("credentials", {
      username: obj.username,
      password: obj.password,
      callbackUrl: process.env.NEXT_PUBLIC_APP_URL!
    })
   }
  }

  return (
    <>
      <Head>
        <title>Linkku | Gabung</title>
      </Head>
      <Center minH="100vh">
        <AuthForm onSubmit={onSubmit}>
          {({ isSubmitting }: { isSubmitting: boolean }) => (
            <>
              <Button type="submit" display="block" ml="auto" my="2" disabled={isSubmitting}>Gabung</Button>
              <Text textAlign="center" fontSize="sm" my="4">Sudah punya akun? <Link href="/signin" color="teal">masuk</Link></Text>
            </>
          )}
        </AuthForm>
      </Center>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);
  
  if (session) {
    return {
      props: {},
      redirect: {
        destination: process.env.NEXT_PUBLIC_APP_URL,
        permanent: false,
      }
    }
  }

  return {
    props : {}
  }
}

export default Signup
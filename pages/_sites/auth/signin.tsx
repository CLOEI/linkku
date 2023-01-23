import { Button, Center, Link, Text } from '@chakra-ui/react'
import { unstable_getServerSession } from 'next-auth'
import { signIn } from 'next-auth/react'
import Head from 'next/head'
import AuthForm from '../../../components/AuthForm'
import { authOptions } from '../../api/auth/[...nextauth]'
import type { GetServerSideProps } from 'next'

type FormItem = {
  username: string,
  password: string,
}

function Signin() {
  const onSubmit = (obj : FormItem) => {
    signIn("credentials", {
      username: obj.username,
      password: obj.password,
      callbackUrl: process.env.NEXT_PUBLIC_APP_URL!
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
              <Text textAlign="center" fontSize="sm" my="4">Belum punya akun? <Link href="/signup" color="teal">gabung</Link></Text>
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

export default Signin
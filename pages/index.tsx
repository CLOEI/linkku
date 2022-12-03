import { Button, Center, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'

import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const joinButton = () => router.push("/auth/join")
  const loginButton = () => router.push("/auth/login")

  return (
    <div>
      <Head>
        <title>Linkku | Bikin halaman personalisasimu dengan mudah</title>
      </Head>
      <Center h="100vh">
        <VStack spacing={4}>
          <Heading as="h1" size="4xl">Linkku</Heading>
          <Text>Buat halaman terpersonalisasimu dengan mudah</Text>
          <HStack>
            <Button colorScheme="blue" onClick={joinButton}>Mulai Secara Gratis</Button>
            <Button variant="outline" onClick={loginButton}>Login</Button>
          </HStack>
        </VStack>
      </Center>
    </div>
  )
}

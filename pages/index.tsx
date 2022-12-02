import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Linkku | Bikin halaman personalisasimu dengan mudah</title>
      </Head>
      <Center h="100vh">
        <VStack spacing={4}>
          <Heading as="h1" size="4xl">Linkku</Heading>
          <Text>Buat halaman dengan personalisasimu dengan mudah</Text>
          <Button>Mulai Secara Gratis</Button>
        </VStack>
      </Center>
    </div>
  )
}

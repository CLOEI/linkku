import { Button, Center, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'

import getDomain from '../utils/getDomain'

export default function Home() {
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
            <Button colorScheme="blue"><a href={`http://auth.${getDomain()}/join`}>Mulai Secara Gratis</a></Button>
            <Button variant="outline"><a href={`http://auth.${getDomain()}/login`}>Login</a></Button>
          </HStack>
        </VStack>
      </Center>
    </div>
  )
}

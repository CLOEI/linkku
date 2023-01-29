import { Alert, AlertIcon, Box, Button, Divider, Heading, HStack, VStack } from '@chakra-ui/react'
import { AiOutlineForm, AiOutlineHome, AiOutlineLink } from 'react-icons/ai'
import { IoIosTimer } from 'react-icons/io'
import { signOut } from 'next-auth/react'
import Head from 'next/head'
import TabButton from './TabButton'

function AppLayout({ children }: { children : React.ReactNode}) {
  const logout = () => signOut()

  return (
    <Box p="2" experimental_spaceY="2">
      <Head>
        <title>Linkku | Dashbor</title>
      </Head>
      <HStack justifyContent="space-between">
        <Heading as="h1">Linkku</Heading>
        <Button colorScheme="blue" onClick={logout}>Keluar</Button>
      </HStack>
      <Divider/>
      <Alert status='warning' variant='subtle'>
        <AlertIcon />
        Saat ini dalam tahap pembangunan. hasil akhir akan berbeda!
      </Alert>
      <HStack alignItems="flex-start" w="full">
        <VStack w="max">
          <TabButton icon={<AiOutlineHome/>} label="Utama" path="/"/>
          <TabButton icon={<AiOutlineForm/>} label="Microsite builder" path="/builder"/>
          <TabButton icon={<AiOutlineLink/>} label="Link shortener" path="/shortener"/>
          <TabButton icon={<IoIosTimer/>} label="Timeout redirect" path="/redirect"/>
        </VStack>
        { children }
      </HStack>
    </Box>
  )
}

export default AppLayout
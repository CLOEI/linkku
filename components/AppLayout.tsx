import { Alert, AlertIcon, Box, Button, Divider, Heading, HStack, IconButton, Tooltip, VStack } from '@chakra-ui/react'
import { AiOutlineForm, AiOutlineHome, AiOutlineLink } from 'react-icons/ai'
import { IoIosTimer } from 'react-icons/io'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'
import Head from 'next/head'
import React from 'react'

function AppLayout({ children }: { children : React.ReactNode}) {
  const router = useRouter();
  
  const homeButton = () => router.replace("/")
  const builderButton = () => router.replace("/builder")
  const shortenerButton = () => router.replace("/shortener")
  const redirectButton = () => router.replace("/redirect")
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
          <Tooltip hasArrow placement='right' label="Main">
            <IconButton icon={<AiOutlineHome/>} aria-label='Main' colorScheme={router.asPath === "/" ? "red": "gray"} onClick={homeButton}/>
          </Tooltip>
          <Tooltip hasArrow placement='right' label="Microsite builder">
            <IconButton icon={<AiOutlineForm/>} aria-label='Microsite builder' colorScheme={router.asPath === "/builder" ? "red": "gray"} onClick={builderButton}/>
          </Tooltip>
          <Tooltip hasArrow placement='right' label="Link shortener">
            <IconButton icon={<AiOutlineLink/>} aria-label='Link shortener' colorScheme={router.asPath === "/shortener" ? "red": "gray"} onClick={shortenerButton}/>
          </Tooltip>
          <Tooltip hasArrow placement='right' label="Timeout redirect">
            <IconButton icon={<IoIosTimer/>} aria-label='Timeout redirect' colorScheme={router.asPath === "/redirect" ? "red": "gray"} onClick={redirectButton}/>
          </Tooltip>
        </VStack>
        { children }
      </HStack>
    </Box>
  )
}

export default AppLayout
import { Box, Button, Center, Heading, Input, InputGroup, InputLeftAddon, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../../firebase"

function Join() {
  const [username, setUsername] = useState("")
  const [err, setError] = useState("")

  const checkExist = async (name: string) => {
    const docRef = doc(db, "usernames", name)
    const docSnap = await getDoc(docRef)

    return docSnap.exists()
  }

  const memoizeOnChange = useMemo(() => {
    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 0) {
        const res = await checkExist(e.target.value)
        if (res) {
          setError(`Username ${e.target.value} tidak tersedia.`)
        }
      } else {
        setError('')
      }
      setUsername(e.target.value)
    }
  
    const debounce = (func : typeof onChange) => {
      let timerId : NodeJS.Timeout
  
      return (arg: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => func(arg), 300)
      }
    }

    return debounce(onChange)
  }, [])

  return (
    <div>
      <Head>
        <title>Gabung | Linkku</title>
      </Head>
      <Center height="100vh">
        <VStack align="initial" spacing={4} p={4}>
          <Box>
            <Heading as="h1" size="xl">Bikin web terpersonalisasimu sekarang</Heading>
            <Text align="left">Bagikan halamanmu dengan mudah</Text>
          </Box>
          <Box>
            <InputGroup mb={2}>
              <InputLeftAddon children='linkku.cc/' />
              <Input type='text' placeholder='username' onChange={memoizeOnChange}/>
            </InputGroup>
            {err && <Text color="red">{err}</Text>}
          </Box>
          <Button size="lg" disabled={!(username.length > 0) || !!err}>Gabung</Button>
        </VStack>
      </Center>
    </div>
  )
}

export default Join
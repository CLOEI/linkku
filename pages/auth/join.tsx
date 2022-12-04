import { Box, Button, Center, Heading, Input, InputGroup, InputLeftAddon, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../../firebase"
import { useAuth } from '../../hooks/useAuth'

function Join() {
  const [username, setUsername] = useState("")
  const [err, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const auth = useAuth()
  const router = useRouter()

  const checkExist = async (name: string) => {
    if (name.length > 0) {
      const docRef = doc(db, "usernames", name)
      const docSnap = await getDoc(docRef)

      return docSnap.exists()
    }
  }

  const handleNext = () => {
    router.push("?usernameSubmitted=true")
  }

  const memoizeOnChange = useMemo(() => {
    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoading(true)
      const res = await checkExist(e.target.value.toLowerCase())
      setError("")
      if (res) {
        setError(`Username ${e.target.value} tidak tersedia.`)
      } 
      setUsername(e.target.value)
      setLoading(false)
    }
  
    const debounce = <T extends Function>(func : T, delay : number) => {
      let timerId : NodeJS.Timeout
  
      return (arg: any) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => func(arg), delay)
      }
    }

    return debounce(onChange, 300)
  }, [])

  return (
    <div>
      <Head>
        <title>Gabung | Linkku</title>
      </Head>
      {router.query?.usernameSubmitted && username ? (
        <Center height="100vh">
          <Button size="lg" onClick={auth?.signInWithGoogle}>Lanjut dengan Google</Button>
        </Center>
      ) : (
        <Center height="100vh">
          <VStack align="initial" spacing={6} p={6}>
            <Box>
              <Heading as="h1" size="xl">Bikin web terpersonalisasimu sekarang</Heading>
              <Text>Bagikan halamanmu dengan mudah</Text>
            </Box>
            <Box>
              <InputGroup mb={2}>
                <InputLeftAddon children='linkku.cc/' />
                <Input type='text' placeholder='username' onChange={memoizeOnChange}/>
              </InputGroup>
              {err && <Text color="red">{err}</Text>}
            </Box>
            <Button size="lg" disabled={!(username.length > 0) || !!err} isLoading={loading} onClick={handleNext}>Lanjut</Button>
            <Text align="center">Sudah punya akun? <Text as="span" decoration="underline" _hover={{ cursor: "pointer" }} onClick={() => router.push("/auth/login")}>Sign in</Text></Text>
          </VStack>
      </Center>
    )}
    </div>
  )
}

export default Join
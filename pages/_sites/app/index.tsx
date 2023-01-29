import React from 'react'
import { useSession } from 'next-auth/react'
import { Button, Heading, VStack, Stat, StatLabel, StatNumber, Card, CardBody, SimpleGrid} from '@chakra-ui/react'
import { AiOutlineRight } from "react-icons/ai"
import { useRouter } from 'next/router'
import AppLayout from '../../../components/AppLayout'

function Index() {
  const { data } = useSession()
  const router = useRouter();

  const builderButton = () => router.replace("/builder")
  const shortenerButton = () => router.replace("/shortener")
  const redirectButton = () => router.replace("/redirect")

  return (
    <AppLayout>
      <VStack w="full" alignItems="flex-start">
        <SimpleGrid minChildWidth="97px" w="full" spacing="1">
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Total link</StatLabel>
                <StatNumber>0</StatNumber>
              </Stat> 
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Total klik</StatLabel>
                <StatNumber>0</StatNumber>
              </Stat> 
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Total lihat</StatLabel>
                <StatNumber>0</StatNumber>
              </Stat> 
            </CardBody>
          </Card>
        </SimpleGrid>
        <Heading as="h2" fontSize="2xl">Akses cepat</Heading>
        <SimpleGrid columns={[1, 3]} w="full" spacing={2}>
          <Button size="lg" w="full" rightIcon={<AiOutlineRight/>} colorScheme="orange" onClick={builderButton}>Microsite builder</Button>
          <Button size="lg" w="full" rightIcon={<AiOutlineRight/>} colorScheme="purple" onClick={shortenerButton}>Link shortener</Button>
          <Button size="lg" w="full" rightIcon={<AiOutlineRight/>} colorScheme="teal" onClick={redirectButton}>Timeout redirect</Button>
        </SimpleGrid>
      </VStack>
    </AppLayout>
  )
}

export default Index
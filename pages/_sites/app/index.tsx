import React from 'react'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, FormControl, FormLabel, Heading, HStack, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Spinner, Stack, Text, useDisclosure} from '@chakra-ui/react'
import Link from 'next/link'
import { Field, Form, Formik } from 'formik'

function Index() {
  const { data } = useSession()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Head>
        <title>Linkku | Dashboard</title>
      </Head>
      <Box p="4">
        <HStack bgColor="gray.200" py="2" px="4" rounded="full">
          <Heading as="h1" fontSize="3xl"><Link href={process.env.NEXT_PUBLIC_URL!}>Linkku</Link></Heading>
        </HStack>
        <Alert status='error' rounded={["md", "full"]} my="2">
          <AlertIcon />
          <Box display={["block", "flex"]}>
            <AlertTitle>Saat ini situs dalam tahap pengembangan!</AlertTitle>
            <AlertDescription>Pengalaman akan terasa berbeda saat di tahap perilisan.</AlertDescription>
          </Box>
        </Alert>
        <Box px="2" experimental_spaceY="2"> 
          <Heading as="h2" fontSize="2xl">Daftar tautan</Heading>
          <Button w="full" onClick={onOpen}>Tambahkan tautan</Button>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tambahkan tautan</ModalHeader>
          <ModalCloseButton />
          <Formik initialValues={{ name: "", type: "microsite" }} onSubmit={values => {
            console.log(values)
          }}>
            {() => (
              <Form>
                <ModalBody>
                  <FormControl isRequired>
                    <FormLabel htmlFor='name'>Nama</FormLabel>
                    <InputGroup size='sm'>
                      <InputLeftAddon>linkku.cc/</InputLeftAddon>
                      <Field as={Input} type="text" name="name" placeholder="link" autocomplete="off"/>
                    </InputGroup>
                  </FormControl>
                  <FormControl mt="2">
                    <FormLabel htmlFor="tyoe">Tipe</FormLabel>
                    <RadioGroup defaultValue='microsite' name="type">
                      <Stack>
                        <Field as={Radio} value="microsite">Microsite builder</Field>
                        <Field as={Radio} value="redirwto" ml="0">Redirect with timeout</Field>
                        <Field as={Radio} value="redir">Redirect</Field>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost' type="submit">Kirim</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Index
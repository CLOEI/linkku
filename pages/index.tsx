import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, CardBody, CardHeader, Center, Grid, GridItem, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import { BsCash, BsFillEmojiHeartEyesFill, BsFillLightningChargeFill } from "react-icons/bs"
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkku | Buat halaman terpersonalisasimu dengan mudah</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center minH="100vh" flexDir="column">
        <Heading as="h1" size="4xl">Linkku</Heading>
        <Text my="4">Buat halaman terpersonalisasimu dengan mudah</Text>
        <HStack spacing="2">
          <Button as="a" colorScheme="blue" href={process.env.NEXTAUTH_URL! + "/signup"}>Mulai Secara Gratis</Button>
          <Button as="a" variant="outline" href={process.env.NEXTAUTH_URL! + "/signin"}>Masuk</Button>
        </HStack>
      </Center>
      <Center my="32">
        <Grid templateRows={["repeat(1, 1fr)", "repeat(2, 1fr)"]} templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={4} maxW="3xl" px={{ base: "4" }} alignItems="center">
          <GridItem rowSpan={2}>
            <Card>
              <CardHeader>
                <Icon as={BsCash} w={50} h={50} my="2"/>
                <Heading as="h3">Gratis</Heading>
              </CardHeader>
              <CardBody>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in lacinia ligula, vitae faucibus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum volutpat augue at nisi pellentesque sodales. Quisque sapien risus, imperdiet viverra elementum non, porta ut magna. Curabitur justo orci, rutrum ut bibendum a, suscipit in leo. Pellentesque tincidunt ac nisi at dictum. Pellentesque in euismod lorem. Donec tincidunt commodo lacus. Nulla at lacus leo. Aenean sed nisl hendrerit, dictum lectus a, ultrices est. Sed tellus augue, laoreet in elementum malesuada, ornare quis lacus.</Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              <CardHeader>
                <Icon as={BsFillEmojiHeartEyesFill} w={50} h={50} my="2"/>
                <Heading as="h3">Mudah</Heading>
              </CardHeader>
              <CardBody>
                <Text>In id elit sapien. Integer fermentum egestas dictum. Fusce iaculis, nunc vel condimentum gravida, odio dolor cursus enim, sagittis elementum urna diam sed enim. Suspendisse eleifend ac lectus a iaculis. Aliquam ac gravida lectus.</Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              <CardHeader>
                <Icon as={BsFillLightningChargeFill} w={50} h={50} my="2"/>
                <Heading as="h3">Cepat</Heading>
              </CardHeader>
              <CardBody>
                <Text>In id elit sapien. Integer fermentum egestas dictum. Fusce iaculis, nunc vel condimentum gravida, odio dolor cursus enim, sagittis elementum urna diam sed enim. Suspendisse eleifend ac lectus a iaculis. Aliquam ac gravida lectus.</Text>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </Center>
      <Center flexDir="column" my="32">
        <Heading size="3xl" my="10">FAQ</Heading>
        <Accordion allowToggle w={["xs", "lg", "xl"]}>
          <AccordionItem>
            <h3>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Section 1 title
                </Box>
                <AccordionIcon/>
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
      <Center my="10">
        <Text fontWeight="bold">Dibuat dengan 💖 oleh Cendy</Text>
      </Center>
    </>
  )
}

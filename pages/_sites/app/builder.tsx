import { Heading, Skeleton, VStack } from '@chakra-ui/react'
import React from 'react'
import AppLayout from '../../../components/AppLayout'

function Builder() {
  return (
    <AppLayout>
      <VStack w="full" alignItems="flex-start">
        <Heading as="h2" fontSize="2xl">Links</Heading>
        <Skeleton w="full" h="12"/>
        <Skeleton w="full" h="12"/>
        <Skeleton w="full" h="12"/>
        <Skeleton w="full" h="12"/>
      </VStack>
    </AppLayout>
  )
}

export default Builder
import { IconButton, Tooltip } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  icon: React.ReactElement,
  path: string,
  label: string
}

function TabButton({ icon, path, label }: Props) {
  const router = useRouter();
  /**
   * Probably an hacky fix.
   * I do this because waiting for router.isReady will ruin the user experience
   * You see, if we wait for router to be ready the page will flicker each time we switch page
   * 
   * What this doing is,
   * Ex : /_sites/app/
   * Than the result will be just "/"
   */
  const pathname = "/" + (router.pathname.split("/")[3] ? router.pathname.split("/")[3] : "")

  const onClick = () => router.replace(path)

  return (
    <Tooltip hasArrow placement='right' label={label}>
      <IconButton icon={icon} aria-label={label} colorScheme={pathname === path ? "red" : "gray"} onClick={onClick}/>
    </Tooltip>
  )
}

export default TabButton
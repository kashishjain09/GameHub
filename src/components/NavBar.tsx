// import React from 'react' 
import game from '../assets/game.avif';
import { HStack, Image, Text } from "@chakra-ui/react"

export const NavBar = () => {
  return (
    <HStack>
        <Image src={game} boxSize='50px' padding='5px'/>
        <Text>NavBar</Text>
    </HStack>
  )
}

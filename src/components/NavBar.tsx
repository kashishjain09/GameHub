// import React from 'react' 
import game2 from '../assets/game2.png';
import { HStack, Image} from "@chakra-ui/react"
import { ColorModeSwitch } from './ColorModeSwitch';

export const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={game2} boxSize='70px' padding='5px' borderRadius='10px'/>
        <ColorModeSwitch />
    </HStack>
  )
}

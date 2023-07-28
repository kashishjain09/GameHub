// import React from 'react' 
import game_hub_logo1 from '../assets/game_hub_logo1.jpg';
import { HStack, Image} from "@chakra-ui/react"
import { ColorModeSwitch } from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props{
  onSearch:(searchText:string) =>void;
}

export const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding='10px'>
        <Image src={game_hub_logo1} boxSize='75px' padding='5px' borderRadius='10px'/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

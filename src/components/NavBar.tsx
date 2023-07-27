// import React from 'react' 
import game2 from '../assets/game2.png';
import { HStack, Image} from "@chakra-ui/react"
import { ColorModeSwitch } from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props{
  onSearch:(searchText:string) =>void;
}

export const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding='10px'>
        <Image src={game2} boxSize='70px' padding='5px' borderRadius='10px'/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

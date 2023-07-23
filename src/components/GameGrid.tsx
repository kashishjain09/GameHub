 
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';

interface Props{
  selectedGenre:Genre |null;
}

export const GameGrid = ({selectedGenre}:Props) => {

    const {data,error,isLoading}=useGames(selectedGenre);
    const skeletons=[1,2,3,4,5,6];
    
  return (
    <> 
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding='10px' spacing={50}>
          {isLoading &&
           skeletons.map(skeleton=> <GameCardSkeleton key={skeleton}/>)}
            {data.map(game=> <GameCard key={game.id} game={game}></GameCard>)}
        </SimpleGrid>
    </>
  )
}

import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { PlatformIconList } from './PlatformIconList';
import { CriticScore } from './CriticScore';

    interface Props{
        game:Game
    }

const GameCard = ({game}:Props) => {
  return (
    <Card width='300px' borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
                <PlatformIconList platfroms={game.parent_platforms.map(p=> p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>
    </Card>
    )
}
export default GameCard;

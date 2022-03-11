import React, {useEffect,useState} from 'react';
import {Linking,Alert} from 'react-native';
import {Container,Text,Button,ButtonText,Image } from '../../src/styles';
import Icon from 'react-native-vector-icons/AntDesign'
import axios from 'axios';

const Character = ({navigation,route}) => {
    const [character,setCharacter] = useState();    
    const [like,setLike] = useState(false);
    async function getCharacter(){
        const result = await axios.get(`https://rickandmortyapi.com/api/character/${route.params.id}`, {});
        const { data } = result; 
        setCharacter(data);
    }

    const handlePress = async () => {
        const supported = await Linking.canOpenURL(`https://google.com/search?btnG=1&pws=0&q=${character.name}`);
        console.log("entrou aqui",supported)
        if (supported) {
          await Linking.openURL(`https://google.com/search?btnG=1&pws=0&q=${character.name}`);
        } else {
          Alert.alert(`Don't know how to open this URL: Google`);
        }
      }

    useEffect(() => {
        getCharacter()
    }, []);

    return (
        <Container>
            <Button 
            zIndex={10} 
            color="primary" 
            position="absolute" 
            left={20}
            top={50} 
            row={true}
            width={45}
            height={45}
            radius={50}
            onPress={() => navigation.goBack()}
            >    
                <Icon name="arrowleft" size={18} color="white" />
            </Button>

            <Container>
                    <Image width={421} height={480}  source={{uri: character && character.image}} />
            </Container>

            <Container
                justify="space-between">
                <Container 
                    height={75}
                    align="flex-start"
                    justify="flex-start"
                    padding={20}
                    paddingTop={30}
                >
                    <Text 
                        fontSize={24} 
                        weight={600}
                    >
                        {character && character.name}
                    </Text>
                </Container>

                <Container  position="absolute" top={30} left={175} row={true} >   
                    {
                        like ?  
                            <Icon onPress={() => {setLike(false)}} name="heart" size={24} /> 
                        : 
                            <Icon onPress={() => {setLike(true)}} name="hearto" size={24} />
                    }
                </Container>

                <Container 
                    row={true}
                    justify="space-between"
                    height={75}
                    >
                    <Container 
                        align="flex-start"
                        padding={20}
                    >
                        <Text fontSize={16} weight={500}>Species:</Text>
                        <Text fontSize={16} weight={600}>{character && character.species}</Text>
                    </Container>

                    <Container 
                        align="flex-start" 
                        padding={20}>
                        <Text fontSize={16} weight={500}>Gender: </Text>
                        <Text fontSize={16} weight={600}>{character && character.gender}</Text>
                    </Container>
                </Container>

                <Container 
                        align="flex-start" 
                        padding={20}
                        height={75}>
                        <Text fontSize={16} weight={500}>Location: </Text>
                        <Text fontSize={16} weight={600}>{character && character.location.name}</Text>
                </Container>

                <Container 
                    row={true}
                    justify="space-between"
                    height={75}>
                    <Container 
                        align="flex-start"
                        padding={20}
                    >
                        <Text fontSize={16} weight={500}>Origin:</Text>
                        <Text fontSize={16} weight={600}>{character && character.origin.name}</Text>
                    </Container>

                    <Container 
                        align="flex-start" 
                        padding={20}>
                        <Text fontSize={16} weight={500}>Status: </Text>
                        
                        {
                        character && character.status === 'Alive' ? 
                            <Text fontSize={16} weight={600} color='alive'>{character && character.status}</Text> 
                        : 
                        character && character.status === 'Dead' ? 
                            <Text fontSize={16} weight={600} color='dead'>{character && character.status}</Text>
                        : 
                        <Text fontSize={16} weight={600} color='unknown'>{character && character.status}</Text>
                        } 
                    </Container>
                </Container>
            
                <Button 
                    type="primary" 
                    height={55}
                    onPress={() => {
                        console.log("entrou aui");
                        handlePress();
                    }}
                >
                    <ButtonText fontSize={22} color="white">Buscar no google</ButtonText>
                </Button>
            </Container>
        </Container>
    );
};
export default Character;
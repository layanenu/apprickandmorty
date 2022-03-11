import React, {useState} from 'react';
import { Container, Text, Card, Image } from '../../styles'
import rick from '../../../assets/rick.png'
import { TouchableOpacity   } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const CharacterCard = ({character,navigation}) => {
    const [like,setLike] = useState(false);

    return ( 
      
        <Card  margin={9}  width={380} row={true}>
              <TouchableOpacity style={{zIndex: 1}} onPress={() => navigation.navigate('Character',{
                    id:  character.id
                })}>
                <Container
                    width={150}
                >
                    <Image width={150} height={150} source={{uri: character.image}} />  
                </Container>
            </TouchableOpacity>
            <Container
                color="white"
                height={150}
                align="flex-start"
                justify="space-between"
                padding={7}
                paddingTop={7}
                borderTopRightRadius={6}
                borderBottomRightRadius={6}
            >
             
          
                <Text fontSize={20} color="dark" >{character.name}</Text>
                <Text fontSize={16} color="dark" >Species:</Text>
                <Text fontSize={16} color="dark" >{character.species}</Text>
                <Text fontSize={16} color="dark" >Origin:</Text>
                <Text fontSize={16} color="dark" >{character.origin.name}</Text>
            
             

                <Container position="absolute" top={125} left={100} row={true} >    
                    {
                        like ?  
                            <Icon onPress={() => {setLike(false)}} name="heart" size={18} color="dark"/> 
                        : 
                            <Icon onPress={() => {setLike(true)}} name="hearto" size={18} color="dark"/>
                    }

                </Container>
            </Container>
          
        </Card>
    );
};

export default CharacterCard;
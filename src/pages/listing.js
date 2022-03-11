import React, {useEffect,useState} from 'react';
import {FlatList,Button} from 'react-native'  
import InputSearch from '../components/InputSearch';
import {Container, Title, Text} from '../../src/styles';
import CharacterCard from '../components/CharacterCard';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

const Listing = ({navigation}) => {
    const [characters,setCharacters] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [countCharacters, setCountCharacters] = useState(0);
    const [namePerson, setNamePerson] = useState();

    useEffect(() => {
        getCharacters()
    }, []);

    async function getCharacters(){
        try{
            if(loading) return;

            setLoading(true);
            const result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    
            const { data } = result;
    
            setCharacters([...characters,...data.results]);
            setCountCharacters(data.info.count);
            setPage(page + 1);
        }finally{
            setLoading(false);
        }
      
       
    }


    async function getFilterCharacters(){
        try{
            if(loading) return;
      
            setLoading(true);
            setPage(1);
            const result = await axios.get(`https://rickandmortyapi.com/api/character/?page=1&name=${namePerson}`);

            const { data } = result;
    
            setCharacters(data.results);
        }catch{
            setCharacters();
        }finally{
            setLoading(false);
        }
    }

    function FooterList({ load }){   
        if(!load) return null;

        return(
            <Container compact={10}>
                <ActivityIndicator size={25} color="#121212" />
            </Container>
        );
    };
    
        return (
        <>          
            <Container color="primary" justify="space-between" row={true} height={125} padding={20}>
                    <Title>Listagem</Title>
                    <Text color="white">{countCharacters} personagens</Text>
            </Container>
            <Container color="secundary" justify="space-between" paddingTop={40}>
                    <Container
                        position="absolute"
                        zIndex={10}
                        padding={15}
                        top={-28}
                        row={true}
                    >
                        <InputSearch 
                            loading={loading} 
                            onChangeText={(text) => setNamePerson(text)} 
                            onSubmit={() => getFilterCharacters()} 
                        />
                    </Container>

                    {characters && 
                        <FlatList 
                            data={characters}
                            keyExtractor={ character => String(character.id)}
                            renderItem={ (character) => <CharacterCard character={character.item}  navigation={navigation} loading={loading} /> }
                            onEndReached={getCharacters}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={ <FooterList load={loading} />}
                        />
                    }
                  
            </Container>
        </>
    );
};

export default Listing;



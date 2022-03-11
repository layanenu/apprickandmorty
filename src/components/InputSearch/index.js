import {Container, TextInput} from '../../styles';
import Icon from 'react-native-vector-icons/Entypo'
import {ActivityIndicator} from 'react-native';

const InputSearch = ({onChangeText,onSubmit,loading}) => (
    <>
    <Container 
        color="white" 
        height={50} 
        width={60}
        borderTopLeftRadius={6}
        borderBottomLeftRadius={6}>
        
        {
            loading 
            ?
                <ActivityIndicator size={25} color="#121212" />
            :
                <Icon name="magnifying-glass" size={25} onPress={() => onSubmit()} />
        }
          
    
    </Container>
    <TextInput
        placeholder="Busque por um personagem"
        background="white"
        height={50}
        onChangeText={text => {
            onChangeText(text)
        }}
        borderTopRightRadius={6}
        borderBottomRightRadius={6}/> 
    </>
  
);
export default InputSearch;
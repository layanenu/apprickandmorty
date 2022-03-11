import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import logo from '../../assets/logo.png';
import background from '../../assets/background.png';

import {Container, Button, ButtonText} from '../../src/styles';

const Home = ({navigation}) => {
    return ( 
        <Container justify="flex-end" color='blue'>
          <Container
            justify="space-around"
            padding={30}
            position="absolute"
            height={270}
            top={0}
            zIndex={9}
            >
            <Image source={logo} />

            <Button 
              radius={8} 
              type="primary" 
              position="absolute"
              left={38} 
              top={778}
              width={340}
              height={55}
              row={true}
              onPress={() => navigation.navigate('Listing')}
              >
              <ButtonText color="white" align="center" marginRight={15}>Prosseguir</ButtonText>
              <Icon name="arrowright" size={25} color="white" /> 
            </Button>

          </Container>
          <Image source={background} />
        </Container>
    );
};

export default Home;
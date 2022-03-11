import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home';
import Listing from '../pages/listing';
import Character from '../pages/character';

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                options={{headerShown: false}}
                name="Home"
                component={Home}
            />
            <Stack.Screen
                options={{headerShown: false}}
                name="Listing"
                component={Listing}
            />
            <Stack.Screen
                options={{headerShown: false}}
                name="Character"
                component={Character}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;
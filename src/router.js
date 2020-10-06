import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '.src/router';


import Home from './pages/Home';
import Detail  from './pages/Detail';
import Carrinho from './pages/Carrinho';
import Perfil from './pages/Perfil';
const Stack = createStackNavigator();


function Routes(){
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
             <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
             <Stack.Screen name="Carrinho" component={Carrinho} options={{headerShown: false}}/>
             <Stack.Screen name="Perfil" component={Perfil} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      ); 
}
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/Home';
import Detail  from './pages/Detail';
const Stack = createStackNavigator();


function Routes(){
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
             <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
             <Stack.Screen name="Carrinho" component={TelaCarrinho} options={{headerShown: false}}/>
             <Stack.Screen name="Perfil" component={TelaPerfil} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      ); 
}
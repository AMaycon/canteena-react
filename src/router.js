import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '.src/router';


import Home from './pages/Home';
import Detail  from './pages/Detail';
import Carrinho from './pages/Carrinho';
import Perfil from './pages/Perfil';
import Cadastro from './pages/Cadastro';

const Stack = createStackNavigator();


function Routes(){
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
             <Stack.Screen name="home" component={Home} options={{headerShown: false}} />
             <Stack.Screen name="carrinho" component={Carrinho} options={{headerShown: false}}/>
             <Stack.Screen name="perfil" component={Perfil} options={{headerShown: false}} />
             <Stack.Screen name="detail" component={Detail} options={{headerShown: false}} />
             <Stack.Screen name="cadastro" component={Cadastro} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      ); 
}

export default Routes;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home/index.js';
import Detail from '../pages/Detail/index.js';
import Carrinho from '../component/Carrinho/index.js';
import Perfil from '../pages/Perfil/index.js';
import Cadastro from '../pages/Cadastro/index.js';
import Vitrine from '../component/Vitrine/index.js';
import Doces from '../component/Produtos/doces.js';


const Stack = createStackNavigator();

// o nome atribuido será usado futuramente para navegar entre as as telas, será inserido em  onPress={() => navigation.navigate('nomedatela)

export default function Routes() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Doce">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
          <Stack.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
          <Stack.Screen name="Vitrine" component={Vitrine} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
          <Stack.Screen name="Doce" component={Doces} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    
  );
}
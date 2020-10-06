import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function Perfil({navigation}) {
    return (
      <View >
        <Text > Tela de perfil indefinida</Text>
        <Button  title="carrinho" onPress={() => navigation.navigate('Carrinho')}/>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      
    );
    
  }


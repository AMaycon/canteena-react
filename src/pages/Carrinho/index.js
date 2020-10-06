import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function Carrinho({ navigation }) {
     
    return (

      <View>
        <Text >Tela de carrinho indefinida</Text>
        <Button  title="perfil" onPress={() => navigation.navigate('Perfil')}/>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>   
    );
    
  }

  
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    /*  clicou=() =>{
        Alert.alert('logado com sucesso','parabéns');
          }*/
     return (
      <View >

        
       <TextInput placeholder="Digite seu CPF"/>
       <TextInput   secureTextEntry= {true}  placeholder="Digite sua senha"  />
    
      <Button title='Carrinho'   onPress={() => navigation.navigate('Carrinho')}/>
    
      <Button title='Perfil'  onPress={() => navigation.navigate('Perfil')}/>
    
     
    </View>
        
      );
      
    }

    
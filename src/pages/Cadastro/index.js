import React from 'react';
import { View,Button, TextInput,Text } from 'react-native';
import styles from './styles'


export default function Cadastro({ navigation}) {
  return (
    <View style={styles.container} >
      <Text>Realize seu cadastro para disfrutar </Text>
      <TextInput  placeholder="Digite seu nome completo"  focusedColor='blue' defaultColor='grey'/>
      <TextInput placeholder="Digite seu CPF" focusedColor='blue' defaultColor='grey' />
      <TextInput placeholder="Digite seu e-mail nome@provedor.com" focusedColor='blue' defaultColor='grey'/>
      <TextInput placeholder="Digite sua senha" focusedColor='blue' defaultColor='grey' />
       <TextInput placeholder="Repita sua senha" focusedColor='blue' defaultColor='grey'/>
      <Button title='Cadastrar' onPress={() => navigation.navigate('Home')} />
      <Button title='Limpar' onPress={() => navigation.navigate('Detail')}/>
    </View>
  );
}
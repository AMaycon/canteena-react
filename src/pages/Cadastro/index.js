import * as React from 'react';
import { View,Button } from 'react-native';
import styles from './styles'
import InputOutline from 'react-native-input-outline';


export default function Cadastro({ navigation}) {
  return (
    <View style={styles.container} >
      <InputOutline  placeholder="Digite seu nome completo"  focusedColor='blue' defaultColor='grey'/>

      <InputOutline placeholder="Digite seu CPF" focusedColor='blue' defaultColor='grey' />
      <InputOutline placeholder="Digite seu e-mail nome@provedor.com" focusedColor='blue' defaultColor='grey'/>
      <InputOutline  placeholder="Digite sua data de nascimento **/**/****" focusedColor='blue' defaultColor='grey'/>
      <InputOutline placeholder="Digite sua senha" focusedColor='blue' defaultColor='grey' />
       <InputOutline placeholder="Repita sua senha" focusedColor='blue' defaultColor='grey'/>
      

      <Button title='Cadastrar' onPress={() => navigation.navigate('Home')} />
      <Button title='Limpar' onPress={() => navigation.navigate('')} />
    </View>
  );
}
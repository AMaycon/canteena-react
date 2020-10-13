import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Cadastro({ }) {
  return (
    <View style={styles.telalogin} >
      <TextInput style={styles.entrada} placeholder="Digite seu nome completo" />
      <TextInput style={styles.entrada} secureTextEntry={true} placeholder="Digite seu CPF" />
      <TextInput style={styles.entrada} secureTextEntry={true} placeholder="Digite seu e-mail nome@provedor.com" />
      <TextInput style={styles.entrada} placeholder="Digite sua data de nascimento **/**/****" />
      <TextInput style={styles.entrada} secureTextEntry={true} placeholder="Digite sua senha" />
      <TextInput style={styles.entrada} placeholder="Repita sua senha" />

      <Button title='Cadastrar' onPress={() => navigation.navigate('Home')} />
      <Button title='Limpar' onPress={() => navigation.navigate('')} />
    </View>
  );
}
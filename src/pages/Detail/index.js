import React, { useState } from 'react';
import { View, TouchableHighlight, TextInput, Text } from 'react-native';
import api from '../../services/api'


export default function Detail({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo ] = useState('');


  // async function handleSubmit() {

  //   const data = {
  //     nome: nome,
  //     email: email,
  //     senha: senha,
  //     tipo: tipo

  //   }

  //     if (nome !== '' && email !== '' && senha !== '' && tipo!=='') {
  //       const response = await api.post('/usuarios', data);
  //       alert("Usuário cadastrado com sucesso")
  //      navigation.navigate('Home') 
  //     }
  // }

  return (
    <View >
      <TextInput placeholder="Digite seu nome completo" onChange={e => setNome(e.target.value)} />
      <TextInput placeholder="Digite seu CPF" onChange={e => setEmail(e.target.value)} />
      <TextInput placeholder="Digite seu e-mail nome@provedor.com" onChange={e => setEmail(e.target.value)} />
      <TextInput placeholder="Digite sua senha" onChange={e => setSenha(e.target.value)} />
      <TextInput placeholder="tipo" onChange={e => setTipo(e.target.value)} />

      <View >
        <TouchableHighlight onPress={handleSubmit}>
          <Text>CADASTRAR</Text>
        </TouchableHighlight>
      </View>

    </View>
  )
}
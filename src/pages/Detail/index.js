import React, { useState } from 'react';
import { View, TouchableHighlight,TextInput, } from 'react-native';


// const [nome, setNome] = useState('');
// const [email, setEmail] = useState('');
// const [senha, setSenha] = useState('');

//  function handleSubmit() {

  // const data = {
  //   nome: nome,
  //   email: email,
  //   senha: senha,
  // }

  // if (nome !== '' && email !== '' && senha !== '') {
  //   const response =  api.post('/api/usuarios', data);

  //   response.status === 200 ? (navigation.navigate('Vitrine')) : (alert('Usuário ou senha inválidos!'))
  // }
// }


export default function Detail({ navigation }) {
  return (
    <View >
      <TextInput placeholder="Digite seu nome completo" focusedColor='blue' defaultColor='grey' onChange={e => setNome(e.target.value)} />
      <TextInput placeholder="Digite seu CPF" focusedColor='blue' defaultColor='grey' onChange={e => setEmail(e.target.value)} />
      <TextInput placeholder="Digite seu e-mail nome@provedor.com" focusedColor='blue' defaultColor='grey' onChange={e => setEmail(e.target.value)} />
      <TextInput placeholder="Digite sua senha" focusedColor='blue' defaultColor='grey' onChange={e => setSenha(e.target.value)} />
      <TextInput placeholder="Repita sua senha" focusedColor='blue' defaultColor='grey' onChange={e => setSenha(e.target.value)} />

      <View >
        <TouchableHighlight color="primary" /*onClick={handleSubmit}*/>
          <Text>CADASTRAR</Text>
        </TouchableHighlight>
      </View>

    </View>
  )
}
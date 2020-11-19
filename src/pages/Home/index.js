
import React, { useState } from 'react';
import {Image,View,TouchableHighlight,Text,TextInput} from 'react-native';

import styles from './styles'
import api from '../../services/api'

export default function Home({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit() {
    await api.post("/usuarios/login", {
      email,
      senha
    })
      .then((response) => {
        console.log(response.data)
        navigation.navigate("Vitrine")
        // const { token } = response.data
        // login(token)
        // navigation.push("admin/produtos")
      })
      .catch(err => console.log(err))
  }

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={require('../../img/iconehome.png')} />
        <Text style={styles.text} >Bem vindo a Canteena</Text>
      </View>

      <View style={styles.dados} >
        <TextInput
          style={styles.textoinput}
          onChangeText={(e) => setEmail(e)}
          placeholder="Digite seu E-MAIL"
        />
        <TextInput
          style={styles.textoinput}
          type="password"
          onChangeText={(e) => setSenha(e)}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />
      </View>
      <View style={styles.botoes} >
        <TouchableHighlight
          style={styles.botoeshome}
          onPress={handleSubmit}
        >
          <Text style={styles.texto}>ENTRAR</Text>
        </TouchableHighlight>

        <TouchableHighlight
          
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.texto}>CADASTRAR</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
import * as React from 'react';
import { Image, View, TouchableHighlight, SafeAreaView, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles'



export default function Home({ navigation }) {
  return (

    <SafeAreaView style={styles.container} >

      <View style={styles.header}>
        <Image source={require('../../img/iconehome.png')} />
        <Text style={styles.text} >Bem vindo a Canteena</Text>
      </View>

      <View style={styles.dados} >
        <TextInput style={styles.textoinput} placeholder="Digite seu CPF" />
        <TextInput style={styles.textoinput} secureTextEntry={true} placeholder="Digite sua senha" />
      </View>
      <View  style={styles.botoes} >
        <TouchableHighlight style={styles.botoeshome} onPress={() => navigation.navigate('Vitrine')}>
          <Text style={styles.texto}>ENTRAR</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.botoeshome}  onPress={() => navigation.navigate('Cadastro')} >
          <Text style={styles.texto}>CADASTRAR</Text>
        </TouchableHighlight>
      </View>



    </SafeAreaView>
  );
}


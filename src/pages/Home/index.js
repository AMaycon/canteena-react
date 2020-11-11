import * as React from 'react';
import { Image, View, Button, SafeAreaView, Text } from 'react-native';
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
        <TextInput placeholder="Digite seu CPF" />
        <TextInput secureTextEntry={true} placeholder="Digite sua senha" />
      </View>
      <View style={styles.botoeshome} >
        <Button title='ENTRAR' onPress={() => navigation.navigate('Vitrine')} />
        <Button title='CADASTRAR' onPress={() => navigation.navigate('Cadastro')} />
      </View>



    </SafeAreaView>
  );
}


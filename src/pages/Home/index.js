import * as React from 'react';
import { Image, View, Button, SafeAreaView, Text } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles'
import { Header } from "../../styles/cores";



export default function Home({ navigation }) {
  /*  clicou=() =>{
      Alert.alert('logado com sucesso','parabéns');
        }*/
  return (

    <SafeAreaView style={styles.container} >

      <View>
        <Header>
          <Image style={{ alignItems: "center", height: 100, width: 100 }} source={require('../../img/iconehome.png')} />
          <Text>Bem vindo a Canteena</Text>
        </Header>
      </View>
      <View style={styles.telalogin} >
        <TextInput style={styles.entrada} placeholder="Digite seu CPF" />
        <TextInput style={styles.entrada} secureTextEntry={true} placeholder="Digite sua senha" />
        <Button title='Carrinho' onPress={() => navigation.navigate('Carrinho')} />
        <Button title='Perfil' onPress={() => navigation.navigate('Perfil')} />
      </View>
      <View style={styles.telalogin} >
        <TextInput style={styles.entrada} placeholder="Digite seu CPF" />
        <TextInput style={styles.entrada} secureTextEntry={true} placeholder="Digite sua senha" />
        <Button title='Carrinho' onPress={() => navigation.navigate('Carrinho')} />
        <Button title='Perfil' onPress={() => navigation.navigate('Perfil')} />
      </View>
      <View style={styles.fixToText}>
        <Button
          title="carrinho"
          onPress={() => navigation.navigate('Carrinho')}
        />

        <TouchableHighlight style={styles.btnback}
          onPress={() => navigation.navigate('Vitrine')}>
          <Text>qualquer</Text>
        </TouchableHighlight>


        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}


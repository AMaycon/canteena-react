import * as React from 'react';
import { Image, View, Button, SafeAreaView, Text } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles'



export default function Home({ navigation }) {
  return (

    <SafeAreaView style={styles.container} >

      <View>
        <Image style={{ alignItems: "center", height: 100, width: 100 }} source={require('../../img/iconehome.png')} />
        <Text>Bem vindo a Canteena</Text>
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


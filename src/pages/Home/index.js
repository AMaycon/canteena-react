import * as React from 'react';
import { StyleSheet, View, Button, SafeAreaView, Text } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import Constants from 'expo-constants';


export default function Home({ navigation }) {
  /*  clicou=() =>{
      Alert.alert('logado com sucesso','parabéns');
        }*/
  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.telalogin} >
        <TextInput  style={styles.entrada} placeholder="Digite seu CPF" />
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
          onPress={() => navigation.goBack()}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
    marginTop: 15,
    
  },
  btnback: {
    fontSize: 64,
    borderRadius:50
  },
  entrada:{
    marginTop:8,
    marginBottom:9,
   
  },
  telalogin:{
    marginHorizontal:12
  }
});
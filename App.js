import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function App() {
  // o nome atribuido será usado futuramente para navegar entre as as telas, será inserido em  onPress={() => navigation.navigate('nomedatela)
  return(
    <View>
      <Tex>Telinha app</Tex>
    </View>
  )
}




function TelaPerfil({ navigation }) {
  return (
    <View >
      <Text > Tela de perfil indefinida</Text>
      <Button  title="carrinho" onPress={() => navigation.navigate('Carrinho')}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    
  );
  
}

function TelaCarrinho({ navigation }) {
 
      
  return (
    
    <View >
      <Text >Tela de carrinho indefinida</Text>
      <Button  title="perfil" onPress={() => navigation.navigate('Perfil')}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>   
  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb74d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input:{
    marginTop: 10,
    width:300,
    backgroundColor: '#FFF',
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 5,
    padding: 10,
    paddingBottom: 10
  },
 botaoLogin: {
   width: 300,
   height: 42,
   backgroundColor: '#3498db',
   marginTop: 10,
   borderRadius: 5,
   alignItems: 'center',
   justifyContent: 'center'
 },
 botaoCadastro: {
  width: 300,
  height: 42,
  backgroundColor: '#349825',
  marginTop: 10,
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center'
},
 btnLogin: {
fontSize: 16,
fontWeight:'bold',
color: '#fff'
 },
 btnCadastro: {
  fontSize: 16,
  fontWeight:'bold',
  color: '#fff',
     },

});


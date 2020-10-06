import React from 'react';
import { View } from 'react-native';

export default function Home({ navigation }) {
    /*  clicou=() =>{
        Alert.alert('logado com sucesso','parabéns');
          }*/
     return (
      <View style={styles.container}>
      <TextInput
       style={styles.input}
      placeholder="Digite seu CPF"
      />
       <TextInput
       style={styles.input}
       secureTextEntry= {true}
      placeholder="Digite sua senha"
      />
    
      <Button title='Carrinho' style={styles.botaoLogin}  onPress={() => navigation.navigate('Carrinho')}/>
    
      <Button title='Perfil' style={styles.botaoCadastro}  onPress={() => navigation.navigate('Perfil')}/>
    
     
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
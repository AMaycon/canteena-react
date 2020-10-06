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
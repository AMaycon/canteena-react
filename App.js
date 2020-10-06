import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '.src/router';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  // o nome atribuido será usado futuramente para navegar entre as as telas, será inserido em  onPress={() => navigation.navigate('nomedatela)
  return(
    <>
      <StatusBar style="auto" backgroundColor="#000" translucent={true}/>
      <Routes/>
    </>
  )
}












import React, { useState } from "react";
import {TouchableHighlight,Alert,Modal,StyleSheet,Text,View, Button,SafeAreaView,ScrollView   } from 'react-native';
import Constants from 'expo-constants';

export default function Perfil({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.Text}>foto </Text>
        <Text style={styles.Text} >email </Text>
        <Text style={styles.Text}>cpf </Text>
        <Text style={styles.Text}>alterar senha </Text>
      </ScrollView>
      <View style={styles.fixToText}>
        <Button style={styles.btncarrinho} 
          title="carrinho"
          onPress={() => navigation.navigate('Carrinho')}
        />
        <Button style={styles.btnback} 
          title="Botão qualquer"
          onPress={() => navigation.goBack()}
        />
        <Button style={styles.btnback} 
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
    scrollView: {
      backgroundColor: '#ffb74d',
      marginHorizontal: 2,
    },
        btncarrinho: {
      fontSize: 42,
    
    },
    btnback: {
      fontSize: 64,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 9,
      marginTop: 15
    },
    Text:
    {
      marginHorizontal:5,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
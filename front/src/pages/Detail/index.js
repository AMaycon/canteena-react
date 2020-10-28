import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TouchableOpacityBase, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Detail() {
  const vdoces = [
    { 'id': '11', 'nome': 'Bala', 'valor': '0.5', 'disponiveis': '1024', 'img': "https://images.vexels.com/media/users/3/152046/isolated/lists/85695cafa4b8d7604260c93663808f6e-icone-de-doces-embrulhados.png" },
    { 'id': '12', 'nome': 'chiclete', 'valor': '0.15', 'disponiveis': '352', 'img': "https://images.rappi.com.br/products/2092815412-1562018300.png?d=136x136" },
    { 'id': '13', 'nome': 'pirulito', 'valor': '0.25', 'disponiveis': '512', 'img': "https://images.vexels.com/media/users/3/200447/isolated/lists/7651aace85b73f44836662d6190ac9eb-cor-de-pirulito-de-carnaval.png" },
    { 'id': '14', 'nome': 'chocolate em barra', 'valor': '1.25', 'disponiveis': '256', 'img': "https://images.rappi.com.br/products/2092815470-1562018339.png?d=200x200&e=webp" },
    { 'id': '15', 'nome': 'bombom', 'valor': '0.75', 'disponiveis': '128', 'img': "https://images.rappi.com.br/products/2094042258-1585595140573.png?d=200x200&e=webp" },
  ]

  
    function aFilter() {
      setQuantidade(quantidade + 1), setTotal(quantidade * 2)

    }
    function aMap() {
      setQuantidade(quantidade + 1), setTotal(quantidade * 2)

    }
    function aReduce() {
      setQuantidade(quantidade + 1), setTotal(quantidade * 2)

    }
  



  return (
    <View style={styles.header} >
      <Text>  Este é oarray normal: </Text>

       
      <Text>   'id': '11', 'nome': 'Bala', 'valor': '0.5', 'disponiveis': '1024', 'img': "https://images.vexels.com/media/users/3/152046/isolated/lists/85695cafa4b8d7604260c93663808f6e-icone-de-doces-embrulhados.png" ,
     'id': '12', 'nome': 'chiclete', 'valor': '0.15', 'disponiveis': '352', 'img': "https://images.rappi.com.br/products/2092815412-1562018300.png?d=136x136" ,
     'id': '13', 'nome': 'pirulito', 'valor': '0.25', 'disponiveis': '512', 'img': "https://images.vexels.com/media/users/3/200447/isolated/lists/7651aace85b73f44836662d6190ac9eb-cor-de-pirulito-de-carnaval.png" ,
     'id': '14', 'nome': 'chocolate em barra', 'valor': '1.25', 'disponiveis': '256', 'img': "https://images.rappi.com.br/products/2092815470-1562018339.png?d=200x200&e=webp" ,
     'id': '15', 'nome': 'bombom', 'valor': '0.75', 'disponiveis': '128', 'img': "https://images.rappi.com.br/products/2094042258-1585595140573.png?d=200x200&e=webp" ,

      </Text>
      <View style={styles.botoesModal}>
        <Button title="map" color="red" onPress={() => { Remover() }} />
        <Button title="filter" color="blue" onPress={() => { Remover() }} />
        <Button title="reduce" color="green" onPress={() => { Remover() }} />
      </View>
      <Text>Disponíveis: </Text>
      <Text>SubTotal: </Text>
    </View>
  )
}
   



const styles = StyleSheet.create({
  scrollhor: {
    paddingVertical: "2%",
    paddingHorizontal: '2%',
    marginTop: '3%',
    marginBottom: "4%",
  },
  flat: {
    paddingVertical: "2%",
    paddingHorizontal: '2%',
    marginTop: '15%',
    marginBottom: "4%",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
    marginTop: 15
  },

  Text:
  {
    marginHorizontal: 5,
  },

  header: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 120,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#e3f2fd",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 160,
    height: 160,
    justifyContent: 'space-between',

  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  botoesModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: "15%",
    width: "80%",
    marginHorizontal: "8%",
    marginTop:"10%",
    marginVertical:"5%"

  },
});

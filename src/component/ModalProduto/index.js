import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles'
import api from '../../services/api'

const ModalProduto = ({ id, functionCloseModal }) => {

// Quando tu fizer a função de pegar o produtos pelo id esse código será necessário
  useEffect(() => {
      async function getProductById() {
        await api.get(`/produtos.details/${id}`)
            .then((response) => {
                console.log(response.data)
            })
            .catch(err => console.log(err))
      }
      getProductById()
  }, [])
  return (
    <View style={styles.container}>
        <Button title="Fechar" onPress={functionCloseModal} />
        <Text>Este é o id do produto escolhido: {id}</Text>
    </View>
  );
}

export default ModalProduto;
import * as React from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';

export default function Bebidas() {
 return (
  <TouchableOpacity>
  <Image
  source={require('../../../assets/imgbebidas/coca.png')} />
  <Text>
    Coca Cola
  </Text>
  <Text>
    R$5,00
  </Text>
</TouchableOpacity>
  );
}
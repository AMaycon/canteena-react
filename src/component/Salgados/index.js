import * as React from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';

export default function Salgados() {
    return (
        <TouchableOpacity>
           <Image
           source={require('../../../assets/imgsalgados')} />
        </TouchableOpacity>
    );
}
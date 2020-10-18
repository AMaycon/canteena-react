import React, { useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles'
import Produtos from '../../component/Produtos'
import { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Vitrine({ navigation }) {

    

    return (
        <Fragment>
            <SafeAreaView style={{ height:"15%", flex:0.5, backgroundColor: 'blue' }}/>
                <View>
                    <Produtos/>
                    
                </View>
                <View>
                    <Produtos/>
                    
                </View>
                <View>
                    <Produtos/>
                </View>
            <SafeAreaView style={{ marginTop:"75%", flex: 0.5, backgroundColor: 'red' }} />
        </Fragment>
    );
}
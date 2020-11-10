import React, { useEffect, useState } from "react";
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Bebidas from "../../component/Produtos/bebidas";
import Salgados from "../../component/Produtos/salgados";
import Doces from "../../component/Produtos/doces";
import { ScrollView } from "react-native-gesture-handler";


export default function Vitrine({ navigation }) {

    return (
        <>
            <ScrollView>

                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Doces />
                </View>

                <View>
                    <Bebidas />
                </View>
                <View>
                    <Salgados />
                </View>
            </ScrollView>
        </>
    );
}
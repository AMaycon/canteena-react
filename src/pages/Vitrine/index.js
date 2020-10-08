import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Bebidas from '../../component/Bebidas';
import Salgados from '../../component/Salgados';


export default function Vitrine({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text>vitrine</Text>
            </View>
            <ScrollView>
            <View>
                <Salgados/>
            </View>
            </ScrollView>
            <ScrollView>
            <View>
                <Bebidas/>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#555'
    }
});
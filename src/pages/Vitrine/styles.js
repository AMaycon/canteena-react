import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: "2%",
        paddingHorizontal: "2%",
        marginTop: Constants.statusBarHeight,
    },
    scrollhor: {
        paddingVertical: "2%",
        paddingHorizontal: '2%',
        marginTop: '3%',
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
    },
    botoesModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 9,
        marginTop: 15,
    },
});
export default styles;
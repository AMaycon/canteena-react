import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffb74d',
      marginTop: Constants.statusBarHeight,
    
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 9,
      marginTop: 15,
      
    },
    btnback: {
      fontSize: 64,
      borderRadius:50
    },
    entrada:{
      marginTop:8,
      marginBottom:9,
     
    },
    telalogin:{
      marginHorizontal:12
    }
  });

  export default styles;
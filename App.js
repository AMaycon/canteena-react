import 'react-native-gesture-handler';
import {AppLoading} from 'expo';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/router';


export default function App() {
  return(
    <>
      <StatusBar style="auto" backgroundColor="#000" translucent={true}/>
      <Routes/>
    </>
  );
}












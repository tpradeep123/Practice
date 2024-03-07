import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import counterStore from './src/Store';
import messaging from '@react-native-firebase/messaging';
export default function App() {

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const getToken=async()=>{
  const token = await messaging().getToken()
  console.log('token is :',token)
}

useEffect(() => {
  requestUserPermission()
  getToken()
}, [])

  return (
 
      <Provider store={counterStore}>
        <Routes />
      </Provider>
 
  );
}

import { View, Text } from 'react-native'
import React from 'react'

const Screen4 = () => {
  return (
    <View style={{flex:1}}>
        <View style={{backgroundColor:'pink',flex:2}}>
            <View style={{backgroundColor:'black',flex:2,margin:10}}></View>
            <View style={{backgroundColor:'lightblue',flex:1,margin:10}}></View>
            <View style={{backgroundColor:'green',flex:1,margin:10}}></View>
        </View>
        <View style={{backgroundColor:'red',flex:1}}></View>
        <View style={{backgroundColor:'blue',flex:1}}></View>
      
    </View>
  )
}

export default Screen4
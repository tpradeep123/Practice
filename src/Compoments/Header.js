import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{width:'100%',height:'30%',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Counter</Text>
    </View>
  )
}

export default Header
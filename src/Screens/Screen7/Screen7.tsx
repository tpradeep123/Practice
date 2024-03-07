
import { View, Text } from 'react-native'
import React, { FunctionComponent } from 'react'
import Card from './Card'


const Screen7 = () => {
  return (
    <View>
      <Text>Screen7</Text>
      <Card name={'pradeep'} mobile={23} email={'pr@gmail.com'} />
    </View>
  )
}

export default Screen7
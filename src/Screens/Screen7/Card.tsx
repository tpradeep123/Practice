import { View, Text } from 'react-native'
import React, { FunctionComponent, ReactElement } from 'react'
interface MyProps{
    name:string,
    email:string,
    mobile:number
}
const Card:FunctionComponent<MyProps> = ({email}:MyProps):ReactElement => {
  return (
    <View>
      <Text>{email}</Text>
    </View>
  )
}

export default Card
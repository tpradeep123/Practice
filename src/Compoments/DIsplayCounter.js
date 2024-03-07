import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const DIsplayCounter = () => {
    // const counter = useSelector(store=>store.counter)

    // const counterObj = useSelector(store=>store.counter)
    // const counter = counterObj.counterVal

    const {counterVal} = useSelector((store)=>store.counter)

  return (
    <View style={{width:'100%',height:'10%',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18,color:'#000'}}>counter current val : {counterVal}</Text>
    </View>
  )
}

export default DIsplayCounter
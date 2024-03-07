import { View, Text,Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import NavigationStrings from '../../Constant/NavigationStrings'
import { useNavigation } from '@react-navigation/native'
const {width,height} = Dimensions.get('window')
const Screen6 = () => {
  const navigation = useNavigation()
  const Header=()=>{
    return(
      <View style={{backgroundColor:'#E5E483',width:'100%',height:'6%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>TODO</Text>
        <Image source={require('../../Assets/search.png')} style={{width:20,height:20}}/>
      </View>
    )
  }

  const TaskCard=()=>{
    const [check,setCheck]= useState(false)
    return(
      <View style={{backgroundColor:'#E1AFD1',width:'97%',height:'6%',borderRadius:10,alignSelf:'center',flexDirection:'row',alignItems:'center',gap:10,paddingHorizontal:10}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>setCheck(!check)} style={{height:'50%',width:'7%',borderRadius:12,borderWidth:1,borderColor:'#000',alignItems:'center',justifyContent:'center'}}>
        {check ?       <Image source={require('../../Assets/check-mark.png')} style={{width:15,height:15}}/>
:null}
      </TouchableOpacity>
      <Text style={{fontSize:15,color:check?'#525252':'#000'}}>New Task</Text>
      </View>
    )
  }

  return (
  <View style={{flex:1}}>
  <Header/>
  <View style={{backgroundColor:'#AD88C6',width:'100%',height:'100%',padding:10}}>
   <TaskCard/>
   <TouchableOpacity onPress={()=>navigation.navigate(NavigationStrings.SCREEN6A)} style={{backgroundColor:'red',width:'15%',height:'7%',borderRadius:30,position:'absolute',bottom:80,right:0,right:20}}>
   </TouchableOpacity>
  </View>
  </View>
  )
}

export default Screen6
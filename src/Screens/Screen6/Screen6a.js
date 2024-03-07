import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Screen6a = () => {
    const Header=()=>{
        return(
          <View style={{backgroundColor:'#E5E483',width:'100%',height:'6%',flexDirection:'row',paddingHorizontal:15,alignItems:'center',gap:25}}>
            <Image source={require('../../Assets/back.png')} style={{width:15,height:15}}/>
            <Text style={{fontSize:20,fontWeight:'bold'}}>TODO</Text>
          </View>
        )
      }
      const [todo,setTodo]=useState('')
  return (
    <View style={{flex:1}}>
     <Header/>
     <View style={{backgroundColor:'#AD88C6',width:'100%',height:'100%',padding:15}}>
        <Text style={{fontSize:15,fontWeight:'bold'}}>What is to be done?</Text>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:'100%',justifyContent:'space-between',marginBottom:70}}>
        <View style={{width:'85%',borderBottomColor:'#A94438',borderBottomWidth:2}}>
        <TextInput placeholder='Enter task here'/>
        </View>
        <Image source={require('../../Assets/voice.png')} style={{width:22,height:22}}/>
        </View>
        <Text style={{fontSize:15,fontWeight:'bold'}}>Due date</Text>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:'100%',justifyContent:'space-between',marginBottom:70}}>
        <View style={{width:'85%',borderBottomColor:'#A94438',borderBottomWidth:2,paddingVertical:10}}>
        <Text>Date not set</Text>
        </View>
        <Image source={require('../../Assets/calendar.png')} style={{width:22,height:22}}/>
        </View>

        <Text style={{fontSize:15,fontWeight:'bold'}}>Add to list</Text>
        <View style={{width:'75%',padding:13,justifyContent:'center',justifyContent:'space-between',flexDirection:'row'}}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>Default</Text>
        <Image source={require('../../Assets/caret-down.png')} style={{width:22,height:22}}/>
        </View>
        
        <TouchableOpacity  style={{backgroundColor:'red',width:'15%',height:'7%',borderRadius:30,position:'absolute',bottom:80,right:0,right:20}}>
   </TouchableOpacity>
</View>
    </View>
  )
}

export default Screen6a
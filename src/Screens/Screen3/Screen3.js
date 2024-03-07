import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ImagePath from '../../Constant/ImagePath'
import * as Animatable from 'react-native-animatable';
import { useRoute } from '@react-navigation/native';
const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity);
export default function Screen3() {
  const route = useRoute()
  return (
    <View style={{flex:1,backgroundColor:'#ffbaba'}}>
      <View style={{marginTop:25,width:'100%',paddingHorizontal:10,flexDirection:'row',justifyContent:'center',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#FF3044',justifyContent:'center',alignItems:'center',}}>
          <Image source={ImagePath.BackIocn} style={{width:15,height:15,tintColor:'#fff'}}/>
        </View>
        <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#FF3044',justifyContent:'center',alignItems:'center',}}>
          <Image source={ImagePath.MoreIocn} style={{width:15,height:15,tintColor:'#fff'}}/>
        </View>
      </View>
      <View style={{width:'100%',height:'90%',position:'absolute',bottom:0}}>

      <Animatable.View style={{width:'100%',height:'80%',backgroundColor:'#fff',position:'absolute',bottom:0,borderTopRightRadius:30,borderTopLeftRadius:30}} animation={'slideInUp'}>
        <Animatable.Text animation={'slideInUp'} style={{marginTop:80,textAlign:'center',fontWeight:'500',fontSize:25}}>{route.params.data.title}</Animatable.Text>
        <Animatable.View animation={'slideInUp'} style={{width:'100%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15}}>
        <Text style={{marginTop:50,fontWeight:'500',fontSize:20}}>$ {route.params.data.price}</Text>
        <View style={{marginTop:50,flexDirection:'row',alignItems:'center'}}>

        <Text style={{fontWeight:'500',fontSize:20}}>4.2 </Text>
        <Image source={ImagePath.StarIocn} style={{width:15,height:15}}/>
        </View>

        </Animatable.View>
        <AnimatedButton style={{width:'90%',height:'8%',backgroundColor:'#FF3044',borderRadius:10,justifyContent:'center',alignItems:'center',alignSelf:'center',position:'absolute',bottom:20}}
animation={'slideInUp'}

activeOpacity={.5}
onPress={()=>navigation.navigate(NavigationStrings.SCREEN2)} 
>
<Text style={{fontSize:18,textAlign:'center',fontWeight:'500',color:'#fff'}}>GET STARTED</Text>
</AnimatedButton>
      </Animatable.View>
      <Animatable.Image animation={'zoomIn'} source={route.params.data.img} style={{width:150,height:150,alignSelf:'center',marginTop:60}}/>
      </View>
        
    </View>
  )
}

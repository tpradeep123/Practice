import React from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import ImagePath from '../../Constant/ImagePath';
import NavigationStrings from '../../Constant/NavigationStrings';
const {width,height} = Dimensions.get('window')
const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity)
export default function Screen1({navigation}) {
  return (
    <View style={{flex:1}}>
<Animatable.Image source={ImagePath.Food1Icon} style={{width:300,height:300,marginLeft:-50,marginTop:-50}}
animation={'zoomIn'}
duration={1400}
/>        
<Animatable.Image source={ImagePath.Food2Icon} style={{width:200,height:200,marginRight:-70,marginTop:-50,alignSelf:'flex-end'}}
animation={'zoomIn'}
duration={1400}
/>        
<Animatable.Image source={ImagePath.AppIocn} style={{width:100,height:100,alignSelf:'center'}}
animation={'zoomIn'}
duration={1400}
/> 
<Animatable.Text style={{fontSize:35,fontWeight:'900',textAlign:'center',marginTop:10}} 

animation={'zoomIn'}
duration={1400}
>

    MyFoodApp
</Animatable.Text>

<AnimatedButton style={{width:width*0.9,height:height*0.07,backgroundColor:'#FF3044',borderRadius:10,justifyContent:'center',alignItems:'center',alignSelf:'center',position:'absolute',bottom:20}}
animation={'zoomIn'}
duration={1400}
activeOpacity={.3}
onPress={()=>navigation.navigate(NavigationStrings.SCREEN2)} 
>
<Text style={{fontSize:20,textAlign:'center',fontWeight:'500',color:'#fff'}}>GET STARTED</Text>
</AnimatedButton>
    </View>
  )
}

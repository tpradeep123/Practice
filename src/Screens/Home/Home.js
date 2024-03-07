import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import NavigationStrings from '../../Constant/NavigationStrings';
const {width, height} = Dimensions.get('window');
const Home = ({ navigation }) => {
  // const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  // const onChange = ({ window }) => {
  //   setDimensions(window);
  // };
  // useEffect(() => {
  //   Dimensions.addEventListener('change', onChange);

  //   return () => {
  //     Dimensions.removeEventListener('change', onChange);
  //   };
  // }, []);

  // const isPortrait = dimensions.height > dimensions.width;

  return (
    <View style={{ width: width, height: height, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationStrings.SCREEN1)}
        style={{
          width: width * 0.4,
          height: height * 0.1,
          backgroundColor: '#000',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationStrings.SCREEN4)}
        style={{
          width: width * 0.4,
          height: height * 0.1,
          backgroundColor: '#000',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:10
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationStrings.SCREEN5)}
        style={{
          width: width * 0.4,
          height: height * 0.1,
          backgroundColor: '#000',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:10
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Start 5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationStrings.SCREEN6)}
        style={{
          width: width * 0.4,
          height: height * 0.1,
          backgroundColor: '#000',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:10
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Start 6</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationStrings.SCREEN7)}
        style={{
          width: width * 0.4,
          height: height * 0.1,
          backgroundColor: '#000',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:10
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Start 7</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationStrings.SCREEN8)}
        style={{
          width: width * 0.4,
          height: height * 0.1,
          backgroundColor: '#000',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:10
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Start 8</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Home;

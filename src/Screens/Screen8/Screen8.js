import { View, Text, ScrollView, SafeAreaView, Image, FlatList,Dimensions, Alert } from 'react-native';
import React from 'react';
const {width,height} = Dimensions.get('window')
const Screen8 = () => {
  const data = [
    { id: 1, name: 'बिस्कुट' ,img:require('../../Assets/buscuit.png')},
    { id: 2, name: 'दाल' ,img:require('../../Assets/dal.png')},
    { id: 3, name: 'नमकीन' ,img:require('../../Assets/namkeen.png')},
    { id: 4, name: 'कॉस्मेटिक' ,img:require('../../Assets/cream.png')},
    { id: 5, name: 'मेवा' ,img:require('../../Assets/meva.png')},
    { id: 6, name: 'आटा/चावल' ,img:require('../../Assets/ata.png')},
    { id: 7, name: 'तेल' ,img:require('../../Assets/oil.png')},
    { id: 8, name: 'डिटर्जेंट' ,img:require('../../Assets/tide.png')},
    { id: 9, name: 'साबुन' ,img:require('../../Assets/soap.png')},
    { id: 10, name: 'बेबी केयर' ,img:require('../../Assets/diper.png')},
    { id: 11, name: 'masale' ,img:require('../../Assets/diper.png')},
    
  ];
// const masale= 'बेबी केयर'
// var myArray = masale.split('');
// console.log(myArray)
  const Header = () => {
    return (
      <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center', gap: 25,paddingVertical:20 }}>
        <Image source={require('../../Assets/menus.png')} style={{ width: 25, height: 25 }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Category</Text>
      </View>
    );
  };

  const Card = ({ item }) => {
    return (
      <View style={{ width: '30%', height: height*0.2, marginHorizontal: 7,marginVertical:15 }}>
        <View style={{ backgroundColor: '#EDEDD8', width: '100%', height: '80%', borderRadius: 10, alignSelf: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, justifyContent: 'center' }}>
          <Image source={item.img} style={{ width: '80%', height: '80%', alignSelf: 'center', resizeMode: 'contain' }} />
        </View>
        <Text style={{ alignSelf: 'center', fontSize: 15, color: '#000',marginVertical:4,letterSpacing:1 }}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f2eb' }}>
      <Header />
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({ item }) => {
          return <Card item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Screen8;

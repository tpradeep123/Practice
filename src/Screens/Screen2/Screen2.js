import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import ImagePath from '../../Constant/ImagePath';
import NavigationStrings from '../../Constant/NavigationStrings';
1;
const {width, height} = Dimensions.get('window');
const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity);
export default function Screen2({navigation}) {
  const Data = [
    {id: '1', img: ImagePath.Food1Icon, title: 'Masala Dosa', price: '200'},
    {id: '2', img: ImagePath.Food2Icon, title: 'Momos', price: '200'},
    {id: '3', img: ImagePath.Food3Icon, title: 'Rice', price: '200'},
    {id: '4', img: ImagePath.Food4Icon, title: 'Sandwich', price: '200'},
    {id: '5', img: ImagePath.Food5Icon, title: 'Egg Fry', price: '200'},
    {id: '6', img: ImagePath.Food2Icon, title: 'Momos', price: '200'},
  ];
  return (
    <View >
      <Animatable.View
        style={{
          width: width,
          height: height * 0.06,
          marginTop: 12,
          paddingHorizontal: 10,
        }}
        animation={'slideInUp'}
        duration={1000}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={ImagePath.MenuIocn}
              style={{width: 30, height: 30, marginRight: 15}}
            />
            <Text style={{fontSize: 23, fontWeight: '900', color: '#FF3044'}}>
              MyFoodApp
            </Text>
          </View>
          <View>
            <Image
              source={ImagePath.SearchIocn}
              style={{width: 30, height: 30}}
            />
          </View>
        </View>
      </Animatable.View>
      <View
        style={{
          width: width,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 15,
        }}>
        <Animatable.Text
          animation={'slideInUp'}
          duration={1050}
          style={{
            backgroundColor: '#FF3044',
            paddingHorizontal: 15,
            borderRadius: 7,
            paddingVertical: 5,
            color: '#fff',
            fontWeight: '500',
          }}>
          All
        </Animatable.Text>
        <Animatable.Text
          animation={'slideInUp'}
          duration={1100}
          style={{
            backgroundColor: '#FF3044',
            paddingHorizontal: 15,
            borderRadius: 7,
            paddingVertical: 5,
            color: '#fff',
            fontWeight: '500',
          }}>
          Pizza
        </Animatable.Text>
        <Animatable.Text
          animation={'slideInUp'}
          duration={1200}
          style={{
            backgroundColor: '#FF3044',
            paddingHorizontal: 15,
            borderRadius: 7,
            paddingVertical: 5,
            color: '#fff',
            fontWeight: '500',
          }}>
          Burger
        </Animatable.Text>
        <Animatable.Text
          animation={'slideInUp'}
          duration={1300}
          style={{
            backgroundColor: '#FF3044',
            paddingHorizontal: 15,
            borderRadius: 7,
            paddingVertical: 5,
            color: '#fff',
            fontWeight: '500',
          }}>
          Magii
        </Animatable.Text>
        <Animatable.Text
          animation={'slideInUp'}
          duration={1400}
          style={{
            backgroundColor: '#FF3044',
            paddingHorizontal: 15,
            borderRadius: 7,
            paddingVertical: 5,
            color: '#fff',
            fontWeight: '500',
          }}>
          Momos
        </Animatable.Text>
      </View>

      <FlatList
        data={Data}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <Animatable.View
              style={{
                width: '50%',
                height: 'auto',
                marginTop: 20,
                alignItems: 'center',
              }}
              animation={'slideInUp'}
              duration={1000 + index*100}>
              <Animatable.Image
                source={item.img}
                style={{width: 100, height: 100, marginTop: 10, zIndex: 1}}
                animation={'zoomIn'}
                duration={1000}
              />

              <AnimatedButton
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate(NavigationStrings.SCREEN3, {data: item})
                }
                style={{
                  width: '90%',
                  height: '70%',
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: '#FF3044',
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    marginTop: 50,
                    width: '100%',
                    textAlign: 'center',
                    color: '#fff',
                    fontWeight: '500',
                    fontSize: 18,
                  }}>
                  {item.title}
                </Text>
              </AnimatedButton>
              <View
                style={{
                  width: '90%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 50,
                  paddingHorizontal: 10,
                }}>
                <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>
                  Rs. {item.price}
                </Text>
                <View
                  style={{
                    backgroundColor: '#fff',
                    width: 25,
                    height: 25,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={ImagePath.CartIocn}
                    style={{width: 17, height: 17}}
                  />
                </View>
              </View>
            </Animatable.View>
          );
        }}
      />
    </View>
  );
}

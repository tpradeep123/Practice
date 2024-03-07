import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import { counterAction } from '../Store/Counter';
import { privacyAction } from '../Store/Privacy';

const Control = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const handleIncrement = () => {
    // dispatch({type: 'INCREMENT'});
    // console.log('Increment called', counterAction.increment())
    dispatch(counterAction.increment())
   
  };

  const handleDecrement = () => {
    // dispatch({type: 'DECREMENT'});
    // counterAction.decrement()
    dispatch(counterAction.decrement())
  };
  const handleAdd = () => {
    // dispatch({
    //   type: 'ADD',
    //   payload: {
    //     num: inputValue,
    //   },
    // });
    // setInputValue('')

    dispatch(counterAction.add({num:inputValue}))
  };
  const handleSubs = () => {
    // dispatch({
    //   type: 'SUBSTRACT',
    //   payload: {
    //     num: inputValue,
    //   },
    // });
    // setInputValue('')
    dispatch(counterAction.substract(inputValue))
  };

  const handlePrivacyToggle = () => {
    // dispatch({type: 'PRIVACY_TOGGLE'});
    dispatch(privacyAction.toggle())
  };
  return (
    <View style={{width: '100%', height: '20%'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly' ,paddingHorizontal: 20,}}>
        <TouchableOpacity
          onPress={handleIncrement}
          style={{
            width: 100,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#B784B7',
          }}>
          <Text style={{fontSize: 25}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDecrement}
          style={{
            width: 100,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E493B3',
          }}>
          <Text style={{fontSize: 25}}>--</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePrivacyToggle}
          style={{
            width: 100,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fdc500',
          }}>
          <Text style={{fontSize: 20,color:'black'}}>Privacy</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            backgroundColor: '#BFD8AF',
            width: 100,
            height: 50,
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="enter"
            style={{paddingHorizontal: 20}}
            onChangeText={text => setInputValue(text)}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          onPress={handleAdd}
          style={{
            width: 100,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#80BCBD',
          }}>
          <Text style={{fontSize: 20}}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubs}
          style={{
            width: 100,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#DED0B6',
          }}>
          <Text style={{fontSize: 20}}>SUBS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Control;

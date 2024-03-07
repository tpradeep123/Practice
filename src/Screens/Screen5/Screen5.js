import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../Compoments/Header'
import DIsplayCounter from '../../Compoments/DIsplayCounter'
import Control from '../../Compoments/Control'
import { useSelector } from 'react-redux'
import PrivacyMessage from '../../Compoments/PrivacyMessage'

const Screen5 = () => {
  const privacy = useSelector(store=>store.privacy)
  return (
    <View>
<Header/>
{privacy ? <PrivacyMessage/> :<DIsplayCounter/> }

<Control/>
    </View>
  )
}

export default Screen5
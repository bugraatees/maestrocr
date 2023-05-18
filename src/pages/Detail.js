import React from 'react'
import { Text, View } from 'react-native'

function Detail ({ route }){ 
  const{title} = route.params
  return (
    <View>
      <Text style={{fontSize:20}}> {JSON.stringify(title)}</Text>
    </View>
  )
}

export default Detail
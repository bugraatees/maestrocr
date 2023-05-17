import React, { useState , useEffect} from 'react'
import {SafeAreaView, Text, View } from 'react-native'
import axios from 'axios'

function Detail(id){

  async function fetchData(){
    const response = await axios.GET('https://www.lenasoftware.com/api/v1/en/maestro/1')
    console.log(id)
  }
  useEffect(()=> {
    fetchData();  
  }, [])

  return (
    <SafeAreaView style={{flex:1,}}>
      <View style={{margin: 10,}}>
       <Text style={{fontSize:18, fontWeight:'600'}}>{id.content}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Detail

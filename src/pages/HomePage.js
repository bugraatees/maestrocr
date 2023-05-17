import React, {useState, useEffect} from 'react'
import { SafeAreaView, ActivityIndicator, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import axios from 'axios';

function HomePage(){
    const[loading, setLoading] = useState(false)
    const[liste, setListe ] = useState([]);

    async function fetchData(){
        setLoading(true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
        setLoading(false)
        setListe(response.data)
    }
    useEffect(()=> {
      fetchData();  
    }, [])

  return (
    <SafeAreaView style={{flex:1,}}>
     <View style={{backgroundColor:'#00adff'}}> 
      <Text style = {{fontSize:30, textAlign:'center', color:'#00171c'}}>MAESTROCR</Text>
     </View>
     <View>
        {loading ? ( 
        <ActivityIndicator size="large" />) : (
        <FlatList 
        keyExtractor={item => item.id}
        data={liste}
        renderItem={({item}) =>
        <View style={{borderWidth:1, borderColor:'#bdbdbd'}}>
          <TouchableOpacity>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        </View>
        }
        />
        )}
     </View>
    </SafeAreaView>
  )
}

export default HomePage

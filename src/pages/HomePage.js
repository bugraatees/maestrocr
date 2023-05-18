import React, {useState, useEffect} from 'react'
import { SafeAreaView, ActivityIndicator, Text, View, FlatList, Image, Dimensions, TouchableOpacity, RefreshControl, Button } from 'react-native'
import axios from 'axios';

function HomePage(props){
    const[loading, setLoading] = useState(false)
    const[liste, setListe ] = useState([]);
    const[refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
  
    async function fetchData(){
        setLoading(true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
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
        keyExtractor={(item) => item.id}
        data={liste}
        renderItem={({item}) =>
        <View style={{ borderWidth:1, borderColor:'#bdbdbd', borderRadius:20}}>
           {/* refreshControl={
             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          } */}
          <TouchableOpacity onPress={() => props.navigation.navigate('Detail', {id:item.id, title:item.title})}>
            <Image style={{width:Dimensions.get('window').width/1, height:Dimensions.get('window').height /3}} source={require('../images/1.jpg')} />
            <Text style={{margin:5}}>{item.body}</Text>
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

import React, {useState, useEffect} from 'react'
import { SafeAreaView, ActivityIndicator, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
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
        const response = await axios.get('https://www.lenasoftware.com/api/v1/en/maestro/1');
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
        data={liste}
        renderItem={({item}) =>
        <View style={{borderWidth:1, borderColor:'#bdbdbd', flex:1}}>
           refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
          <TouchableOpacity>
            <Text style={{color:'red'}}>{item.title}</Text>
          </TouchableOpacity>
        </View>
        }
        />
        )}
        <View style={{ borderWidth:1, borderColor:'#bdbdbd', borderRadius:20}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Detail', {id})}>
           <Image style={{width:Dimensions.get('window').width/1, height:Dimensions.get('window').height /3}} source={require('../images/1.jpg')} />
           <View style={{margin:5}}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>Automating the Change Request Process: A must-have for IT Projects</Text>
            <Text>Automating the Change Request Process: A must-have for IT Projects</Text>
              <View style={{flexDirection:'row'}}>
               <Text style={{color:'red', fontSize:18}}>totalReadingTime : </Text>
               <Text style={{ fontSize:18}}>-16</Text>
              </View>
           </View> 
          </TouchableOpacity>
        </View>
     </View>
    </SafeAreaView>
  )
}

export default HomePage

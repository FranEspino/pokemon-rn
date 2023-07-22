import React, { useEffect, useState } from 'react'
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import Icon from 'react-native-vector-icons/Ionicons';
import PokemonFavorite from '../components/PokemonFavorite/PokemonFavorite';

const storage = new MMKV();

const Favorites = drawer => {
  const [favorites, setFavorites] = useState([])
  
  useEffect(()=>{
    if(storage.getString('pokemon') != null){
      const pokemonString = storage.getString('pokemon') 
      const pokemonJson = JSON.parse(pokemonString)
      setFavorites(pokemonJson)
    }
  },[storage])
  
  const goToDetail = url => {
    drawer.navigation.navigate('PokemonDetail', {url});
  };

  return (
    <View  style={{paddingBottom: 60}}>

        <View style={{backgroundColor:"#252525", flexDirection: 'row', alignItems: 'center', padding: 12}}>
          <TouchableOpacity
          style={{marginLeft: 10 }}>
            <Icon
              name="menu"
              size={30}
              color="#fff"
              onPress={() => drawer.navigation.toggleDrawer()}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, marginLeft: 16 ,fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>
          Pokemones  Favoritos
          </Text>
        </View>
     
       
        <FlatList 
        numColumns={2}
        contentContainerStyle={{alignItems:'center'}}
        data={favorites}
        renderItem={({item}) => (
          <PokemonFavorite
          name={item.name}  
          img={item.img}
          onPress={() => goToDetail(item.url)}

          />
        )}
        keyExtractor={item => item.name}
        />
      


        </View>
  )
}

export default Favorites
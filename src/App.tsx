import { View, Text, SafeAreaView, Image, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Card from './components/card_component'
import music_data from './data.json'
import SearchBar from './components/searchbar_component/SearchBar'

const App = () => {

  const renderSong = ({item} : any) => <Card song={item} /> 

  const renderSeperator = () => <View style = {styles.seperatorStyle} />

  const handleSearch = (text : any) => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

     return currentTitle.indexOf(searchedText) > - 1;
    });

    setList(filteredList);
  }

  const [list,setList] = useState(music_data);

  return (

    <SafeAreaView style = {styles.container}>
      
      <SearchBar onSearch={handleSearch} />

   <FlatList
   keyExtractor={item => item.id}
   renderItem={renderSong}
   data={list}
   ItemSeparatorComponent={renderSeperator}
   />
  
  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex :1,
  },

  seperatorStyle : {
    borderWidth : 1,
    borderColor : '#e0e0e0',
  }

})

export default App
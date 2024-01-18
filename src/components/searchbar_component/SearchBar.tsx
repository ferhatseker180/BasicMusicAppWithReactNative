import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const SearchBar = (props : any) => {

    

  return (
    <View style = {styles.container}>
      
      <TextInput
      placeholder='Search...' 
      placeholderTextColor= 'white'
      onChangeText={props.onSearch}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'lightcoral',
        margin : 8,
        padding : 2,
        borderRadius : 5,
    }
})

export default SearchBar
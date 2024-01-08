import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post from '../Components/Post'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Post/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      header:{
        marginTop: 50,
      }
})
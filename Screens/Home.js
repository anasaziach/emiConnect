import { View, Text,StatusBar } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{ flex: 1, marginTop:StatusBar.currentHeight }}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

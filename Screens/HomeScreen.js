import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
// import {Login} from './Login';

const HomeScreen = (props) => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>HomeScreen</Text>
          <TouchableOpacity
              onPress={() => 
                  props.setScreen('Login')
              }>
              <View style={styles.btn}>
                  <Text style={styles.btnText}>Log Out</Text>
              </View>
          </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 27,
        fontWeight: '500',
        color: '#23297a',
        marginBottom: 6,
        textAlign: 'left',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#23297a',
        borderColor: '#23297a',
    },
})
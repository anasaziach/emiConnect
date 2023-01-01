import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {COLORS,SHADOWS,SIZES,FONTS} from '../constants'
export const BackButton = ({imgUrl,handlePress,...props}) => {
  return (
    <TouchableOpacity
      style={{
        width:40,
        height:40,    
        alignItems:'center',
        justifyContent:'center',
        borderRadius:SIZES.extraLarge,    
        // backgroundColor:'#fff',
        // ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
      >
      <Image source={imgUrl} left={10} top={20} tintColor="black" resizeMode="contain" style={{width:40, height:40, marginLeft:20 }}/>
    </TouchableOpacity>
  )
}
export const RectButton = ({icon,text,handlePress,...props}) => {
  return (
    <TouchableOpacity
      style={{
            
        borderRadius:SIZES.extraLarge,  
        flexDirection:'row', 
        justifyContent:'flex-start', 
        // backgroundColor:'#fff',
        alignItems:'center',
        ...props,
      }}
      onPress={handlePress}
      >
        <Image source={icon}  resizeMode="contain" style={{width:30, height:30,marginTop:20 }}/>
        
        <Text style={{color:'white',fontWeight:'bold',marginLeft:20,marginTop:20}}>
          {text}
        </Text>
    </TouchableOpacity>
  )
}
// require('../assets/icons/left.png'



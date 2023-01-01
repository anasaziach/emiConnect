import React from 'react';
import { SafeAreaView, FlatList, Text, View ,StatusBar,Image,StyleSheet} from 'react-native';
import { FocusedStatusBar } from '../Component';
import {BackButton,RectButton} from '../Component/Button';
import { COLORS, NFTData, assets,SHADOWS,SIZES,FONTS } from '../constants';

const Settings = (props) => {
  const styles = StyleSheet.create({
  line: {
    height: 1,
    width: '90%',
    backgroundColor: 'grey',
    marginTop:20
  }});
  

  return (
    <View style={{ height:"100%" }}>
      <View style={{backgroundColor:'#292F3F',height:"100%" }}>
        <View >
          <BackButton imgUrl={assets.left} />
          <View style={{flexDirection:'column',justifyContent:'flex-start',marginLeft:30}}>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
              <Image source={require('../assets/images/nft01.png')}  
              style={{width:80, height:80 ,borderRadius:70,marginLeft:30,marginTop:20}}/>
              <Text style={{color:'#fff',fontWeight:'bold',marginLeft:20}}>Meryem Boukhdimi</Text>              
            </View>
            <View style={ styles.line } />
            <RectButton icon={assets.profile} text={'Profile'} handlePress={()=>props.setScreen('Profil')} />
            <RectButton icon={assets.addFriend} text={'InviteFiends'} handlePress={()=>props.setScreen('Profil')} />
            <View style={ styles.line } />
            <RectButton icon={assets.notification} text={'Notifications'} handlePress={()=>props.setScreen('Notification')} />
            <RectButton icon={assets.adress} text={'Address'} handlePress={()=>props.setScreen('Profile')} />
            <RectButton icon={assets.bookmark} text={'Saved Items'} handlePress={()=>props.setScreen('Profile')} />
            <RectButton icon={assets.chat} text={'Chats'} handlePress={()=>props.setScreen('Profile')} />          
            <View style={ styles.line } />
            <RectButton icon={assets.language} text={'Language'} handlePress={()=>props.setScreen('Profile')} />          
            <RectButton icon={assets.help} text={'Help'} handlePress={()=>props.setScreen('Profile')} />          
            <RectButton icon={assets.logout} text={'Logout'} handlePress={()=>props.setScreen('Profile')} />            
          </View>
        </View>
        <View style={{flex:1}}>
          
        </View>
      </View>
    </View>
  );
};

export default Settings;

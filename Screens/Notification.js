import {useState ,React} from 'react';
import { SafeAreaView, FlatList, Text, View ,Switch,StatusBar,Image,StyleSheet} from 'react-native';
import { FocusedStatusBar } from '../components';
import {BackButton,RectButton} from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS, NFTData, assets,SHADOWS,SIZES,FONTS } from '../constants';


const Notification = () => {
  const navigation= useNavigation(); 
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={{ flex: 1, marginTop:StatusBar.currentHeight }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1,backgroundColor:'#292F3F' }}>
        <View >
          <BackButton imgUrl={assets.left} handlePress={()=>navigation.navigate('Settings')}/>
          <View style={{flexDirection:'column',justifyContent:'flex-start',marginLeft:30,marginTop:30}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <RectButton icon={null} text={'Messages Notifications'} handlePress={()=>navigation.navigate('Profile')} />  
                 
              <Switch style={{marginTop:20,marginRight:20}}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled} /> 
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <RectButton icon={null} text={'Email Notifications'} handlePress={()=>navigation.navigate('Profile')} />  
                 
              <Switch style={{marginTop:20,marginRight:20}}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled} /> 
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <RectButton icon={null} text={'Clubs Notifications'} handlePress={()=>navigation.navigate('Profile')} />  
                 
              <Switch style={{marginTop:20,marginRight:20}}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled} /> 
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <RectButton icon={null} text={'Posts Notifications'} handlePress={()=>navigation.navigate('Profile')} />  
                 
              <Switch style={{marginTop:20,marginRight:20}}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled} /> 
            </View>
          
          </View>
          
        </View>
        <View style={{flex:1}}>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

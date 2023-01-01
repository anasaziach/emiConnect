import * as React from 'react';
import { View,Text, SafeAreaView, StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native';
import Home from "./Screens/Home2";
import Profil from './Screens/Profil';
import BottomTabNavigator from './Component/BottomTabNavigator';
import UploadImage from './Screens/addPost';
import UseSocket from './Global/UseSocket';
import Chat from './Screens/ChatOverview';
import {Context,ContextContainer} from './Global/ContextFile';
import Message from './Screens/Message';
import Contact from './Screens/Contact';
import AuthScreen from './Screens/AuthScreen';
import SpalshScreenAddStoryOrPost from './Screens/SpalshScreenAddStoryOrPost';
import AddStory from './Screens/AddStory';
import HomeScreen from './Screens/HomeScreen';
import { OnboardingScreen, Register } from './Screens';
import Login from './Screens/Login';
import Register2 from './Screens/Register2';
import Settings from './Screens/Settings';




export default App = (props)=>{
    const {idSrc,setIdSrc,idDest,setIdDest} = React.useContext(Context);
    const {joinRoom,leaveRoom,sendMessage,response,newMessage,comment,comts,addStory,newStory,setNewStory} = UseSocket(1);
    const [refresh,setRefresh] = React.useState(false);
return(
<View style={{height:'100%'}}>
        {props.screen == "Home"  ? <Home sendComment={comment} coments={comts} refresh={refresh} setRefresh={setRefresh} newStory={newStory} setNewStory={setNewStory}/>:false}
        {props.screen == "Profil"  ? <Profil/>:false}
        {props.screen == "Upload"  ? <UploadImage setScreen={props.setScreen} idSrc={idSrc}/>:false}
        {props.screen == "Auth"  ? <AuthScreen setScreen={props.setScreen}/>:false}
        {props.screen == "msg" ?<Message setScreen={props.setScreen} join={joinRoom} leaveRoom={leaveRoom} send={sendMessage}/>:false}
        {props.screen == "chat" ?<Chat setScreen={props.setScreen} message={response} newMessage={newMessage}/>:false}
        {props.screen == "contact" ?<Contact setScreen={props.setScreen} join={joinRoom} message={response}/>:false}
        {props.screen == "addSOrP" ?<SpalshScreenAddStoryOrPost setScreen={props.setScreen} />:false}
        {props.screen == "addStory" ?<AddStory setScreen={props.setScreen} idSrc={idSrc} addStory={addStory} />:false}
        {props.screen == "HomeScreen" ?<HomeScreen setScreen={props.setScreen}/>:false}
        {props.screen == "onBoardingScreen" ?<OnboardingScreen setScreen={props.setScreen}/>:false}
        {props.screen == "Login" ?<Login setScreen={props.setScreen}/>:false}
        {props.screen == "Register2" ?<Register2 setScreen={props.setScreen}/>:false}
        {props.screen == "Register" ?<Register setScreen={props.setScreen}/>:false}
        {props.screen == "Settings" ?<Settings setScreen={props.setScreen}/>:false}
    {props.screen!="Upload" && props.screen!="addStory" && props.screen!="onBoardingScreen" && props.screen!="Login"&& props.screen!="Register2" &&
     props.screen!="Register2" && props.screen!="onBoardingScreen" && props.screen!="Login"? 
     <BottomTabNavigator setScreen={props.setScreen} setRefresh={setRefresh}/>:false}

</View>
)}
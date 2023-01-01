import * as React from 'react';
import InstaStory from 'react-native-insta-story';
import { View,Text, SafeAreaView, StyleSheet,Image, TouchableOpacity, ScrollView, Touchable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../CSS/HomeCSS';
import Test from './Comments';
import axios from 'axios';
import { Ipv4 } from '../Global/Ipv4';





export default App = (props)=>{
const [dataHome,setDataHome]=React.useState();
const [dataStories,setDataStories]=React.useState();
const [existStories,setExistStories] = React.useState(0)
const [test,setTest] = React.useState(0);
const [pp,setPath] = React.useState();

const [showComments,setShowComments] = React.useState(false);
const [idPost,setIdPost] = React.useState();//if the comment button is clicked , we should know which post we're talking about
const Post=(props)=>{
  return(
    <>
    <View style={styles.PostContainer}>
      <View style={styles.BlockPost}>
      <TouchableOpacity onPress={()=>{
        reportAUser(props.data.user.id)
        console.log("user with id = "+props.data.user.id+" has been reported")
      }}>
          <Image source={require("../assets/block.png")} style={styles.blockBtn} />
        </TouchableOpacity>
      </View>
      <View style={styles.PostPicContainer}>
        <Image source={{uri : props.data.imageList[0].path}} style={styles.PostPic}/>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>{props.data.status}</Text>
      </View>
      <View style={styles.PostReaction}>
        <View style={{flexDirection:"row",width:"50%"}}>
          <Image style={styles.profilPic} source={require("../assets/profil1.jpg")} />
          <View style={{justifyContent:"center"}}>
            <Text style={styles.username}>{props.data.user.nom} {props.data.user.prenom}</Text>
            <Text style={styles.location}>Temara</Text>
          </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"flex-end",width:"50%",alignItems:"center"}}>
          <TouchableOpacity style={[styles.ReactionBtn,styles.firstReactionBtn]}>
            <Image source={require("../assets/heart.png")} style={styles.likeIcon} />
          </TouchableOpacity>
          <Text style={styles.likesCount}>100</Text>
          <TouchableOpacity style={styles.ReactionBtn} onPress={()=>{
            setIdPost(props.data.id)
            props.setShowComments(1)
          }}>
            <Image source={require("../assets/comment.png")} style={styles.likeIcon} />
          </TouchableOpacity>
          <Text style={styles.commentsCount}>{props.data.nbComment}</Text>
        </View>
      </View>
    </View>
    </>
  )
}
const FetchHomeData=()=>{
  axios.get("http://"+Ipv4+":8080/api/fetchDataHome",
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json'
      }
    })
    .then((res)=>{
      setDataHome(res.data)
      setTest(1)
    })
}
const FetchStories=()=>{
  axios.get("http://"+Ipv4+":8080/api/fetchAllStories",
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json'
      }
    })
    .then((res)=>{
      setDataStories(res.data)
      setExistStories(1)
    })
}
const reportAUser=(idUser)=>{
  axios.post("http://"+Ipv4+":8080/api/reportAUser",
  {
    idUser:idUser
  },
  {
    headers:{
      'Content-Type': 'application/json',
      'Accept':'application/json'
    }
  })
}

React.useEffect(()=>{
  FetchStories()
  FetchHomeData()
  props.setRefresh(false)
},[props.coments,props.refresh])

return(
<View style={{height:'100%',zIndex:0 }}>
  <SafeAreaView style={styles.header}>
    <Text style={styles.title}>EmiConnect</Text>
    <TouchableOpacity style={styles.Btn} onPress={()=>FetchHomeData()}>
      <Image source={require("../assets/notification.png")} style={styles.cameraIco}/>
    </TouchableOpacity>
  </SafeAreaView>
  <ScrollView showsVerticalScrollIndicator={false}>
    {/* {existStories==1 ? console.log(dataStories):false} */}
  {existStories==1 ? 
  <InstaStory data={dataStories}
    duration={10}
    customSwipeUpComponent={
    <View>
      <Text style={{color:"#ffff",fontWeight:"bold"}}>Swipe</Text>
    </View>
    }
    avatarTextStyle={{color:'#fff'}}
    unPressedBorderColor={'#ff8000'}/>:false}
    { 
    test==1 && dataHome.map((item,index)=>{
      return(
        <Post data={item} key={index} setShowComments={setShowComments} />
      )})}
    {showComments? <Test setShowComments={setShowComments} showComments={showComments} idPost={idPost} comment={props.sendComment} coments={props.coments}/>:false}
  </ScrollView>
  <StatusBar style='dark'/>
  </View>
)}
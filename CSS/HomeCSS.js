import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
      flexDirection:'row',
      height:100,
      // backgroundColor:'red',
      justifyContent:'space-between',
      alignItems:'center'
    },
    Btn: {
      margin:10,
      padding:5,
      borderRadius:50,
      backgroundColor:'#fff'
    },
    cameraIco: {
      height:35,
      width:35
    },
    title: {
      fontWeight:'bold',
      fontSize:24,
      marginLeft:18
    },
    PostContainer: {
      height:350,
      width:"95%",
      marginLeft:"2.5%",
      borderRadius:20,
      marginTop:10,
      borderWidth:2
    },
    BlockPost: {
      height:20,
      paddingRight:15,
      paddingTop:3
    },
    blockBtn: {
      height:15,
      width:15,
      alignSelf:"flex-end"
    },
    statusContainer: {
      height:30,
      // paddingLeft:10,
      // paddingTop:5
      // flexDirection:"row",
      // justifyContent:"space-between"
    },
    status: {
      fontSize:16,
      fontWeight:"bold"
    },
    PostReaction: {
      flexDirection:'row',
      alignItems:"center",
      height:60
    },
    profilPic: {
      height:40,
      width:40,
      borderRadius:50,
      margin:5,
      resizeMode:"contain"
    },
    username: {
      fontSize:16,
      fontWeight:"bold"
    },
    location: {
      fontSize:16,
      // fontWeight:"bold"
    },
    PostPicContainer: {
      height:230
    },
    PostPic: {
      width:"100%",
      height:"100%",
      borderRadius:20
    },
    firstReactionBtn: {
      marginLeft:"20%"
    },
    ReactionBtn: {
      // flexDirection:"row",
      // alignItems:"center"
    },
    LikeBtn: {
      height:35,
      width:35
    },
    likeIcon:{
      height:30,
      width:30,
      marginRight:5
    },
    likesCount: {
      left:-4,
      color:"black",
      right:10
    },
    CommentBtn: {
      height:30,
      width:30,
      marginRight:5
    },
    commentsCount: {
      left:-4,
      color:"black"
    },
    SaveBtn: {
      height:45,
      width:45
    },
    container: {
      flex: 1,
      margin: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0F7FA',
    },
    bottomNavigationView: {
      backgroundColor: '#fff',
      width: '100%',
      height: 400,
    },
    lastComments: {
      height:250,
    },
    commentInput: {
      width:"80%",
      height:40,
      marginLeft:"5%",
      borderWidth:2,
      borderRadius:10,
      paddingLeft:10,
      opacity:0.5,
      borderColor:"grey"
    },
    commentSec: {
      flexDirection:"row",
      // justifyContent:"space-between",
      alignItems:"center",
      width:"100%",
      height:30,
      paddingLeft:10
    }
  });
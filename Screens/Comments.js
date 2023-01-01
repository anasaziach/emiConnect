// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity , Image } from 'react-native';
//import basic react native components
import { BottomSheet } from 'react-native-btr';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { Context } from '../Global/ContextFile';
import { Ipv4 } from '../Global/Ipv4';

const App = (props) => {
  const [test,setTest]=useState(false)
  const [comment,setComments]=useState([])
  const {idSrc,setIdSrc,idDest,setIdDest} = React.useContext(Context);
  const [comt,setCmt]=React.useState()


  const toggleBottomNavigationView = () => {
    props.setShowComments(!props.showComments)
    setTest(!test)
  };
  React.useEffect(()=>{
    console.log("loaded again")
    fetchCommentsData()
  },[props.coments])
  const fetchCommentsData=()=>{
    axios.get("http://"+Ipv4+":8080/api/fetchAllCommentsByIdPost",
    {
      params:{
        idPost:props.idPost,
      }
    },
    {
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res)=>{
      setComments(res.data)
      setTest(1)
    })
  }
  const sendComment=()=>{
    props.comment(
      {
        idPost:props.idPost,
        idUser:idSrc,
        comment:comt
      }
    )
  }
  return (
        <BottomSheet
          visible={(props.showComments) ?true:false}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
        >
          <View style={styles.bottomNavigationView}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 20,
                  fontSize: 20,
                  letterSpacing:1,
                  fontWeight:"bold"
                }}>
                Comments
              </Text>
              <View style={styles.lastComments}>
                <ScrollView>
                  {comment.map((item,index)=>{
                    return(
                    <View style={styles.commentSec} key={index}>
                      <Text style={{fontWeight:"bold",fontSize:16}}>{item.user.nom} {item.user.prenom}</Text>
                      <Text style={{fontSize:14,marginLeft:10}}>{item.content}</Text>
                    </View>)
                  })}
                </ScrollView>
              </View>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                <TextInput placeholder='your comment' value={comt} onChangeText={(val)=>setCmt(val)} style={styles.commentInput}/>
                <TouchableOpacity onPress={()=>{
                  sendComment()
                  setComments([...comment,{
                    content:comt,
                    user:{
                      nom:"anas aziach"
                    }
                  }])
                  setCmt("")
                }}>
                  <Image source={require("../assets/send.png")} style={{height:30,width:35}} />
                </TouchableOpacity>
              </View>
            </View>
        </BottomSheet>
  );
};

export default App;

const styles = StyleSheet.create({
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
    zIndex:1
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

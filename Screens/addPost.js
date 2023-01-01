import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TextInput, SafeAreaView , Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


import axios from 'axios';
import { styles } from '../CSS/UploadImageCSS';
import BottomTabNavigatorPOST from '../Component/BottomTabNavigatorPOST';
import { Ipv4 } from '../Global/Ipv4';
import firebase, { storage } from '../Config/Config';
import { ref, uploadBytesResumable,getDownloadURL, uploadBytes } from 'firebase/storage';


export default function ImagePickerExample(props) {
  const [image, setImage] = useState(null);
  const [result,setResult] = React.useState("");
  const [status,setStatus] = React.useState();
  const [uploadState,setUploadState]=React.useState(0);
  const [loading,setLoading]=React.useState();
  
  
  const pickImageByLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 0.4,
    });

    if (!result.cancelled) {
       setResult(result);
    }
  };
  const Upload=async()=>{
    setLoading("wait please")
    const image = await fetch(result.uri);
    const blob = await image.blob();
    const filename = result.uri.substring(result.uri.lastIndexOf("/")+1);
    const storageRef = ref(storage,filename);
    const uploadTask =  uploadBytesResumable(storageRef, blob);
    uploadTask.on("state_changed",
    (snapshot)=>{

    },
    (error) => {
      // Handle unsuccessful uploads
      console.log("erreur")
    },
    () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL) => {
          // console.log("spring")
          axios.post("http://"+Ipv4+":8080/post", 
          {
            path:downloadURL,
            status:status,
            idUser:props.idSrc
          }, {
            headers: {
              'Content-Type': `application/json`,
            }
          })
          .then((res)=>{
            if(res.status==200) {
                setLoading("uploaded successfully , you can return to the home page")
                setUploadState(1)
            }
            else{
                setLoading("upload failed")
            }
          })
        });
      })
      
}

  return (<>
    <SafeAreaView style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <Image style={{height:30,width:30}}/>
      <Text style={styles.Title}>Post</Text>
      <TouchableOpacity onPress={()=>props.setScreen("Home")}>
        {uploadState==1 ?<Image source={require("../assets/clo.png")} style={{height:30,width:30,right:20}}/>:false}
      </TouchableOpacity>
    </SafeAreaView>
    <View style={{justifyContent:"center",height:"50%"}}>
      {result && <Image source={{ uri: result.uri }} style={styles.imagePicked} />}
    </View>
    <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}>{loading}</Text>
    <TextInput placeholder='enter a status' onChangeText={(val)=>setStatus(val)} style={styles.statusContainer}/>
    <BottomTabNavigatorPOST publish={Upload} pickImageByLibrary={pickImageByLibrary}/>
    </>
  );}
  
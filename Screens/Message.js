import * as React from 'react';
import { SafeAreaView, TextInput , TouchableOpacity , Text , View } from 'react-native';
import { styles } from '../CSS/MessageCSS';
import { Context } from '../Global/ContextFile';




export default App= (props)=>{
  const [message,setMessage]=React.useState();
  const {room, setRoom} = React.useContext(Context);
  const [msg, setMsg] = React.useState([]);
  const {idSrc,setIdSrc,idDest,setIdDest} = React.useContext(Context);
    
    React.useEffect(()=>{
      // props.join(room)
    },[])
    
    return(
        <>
        <SafeAreaView>
            <Text style={{fontSize:20,fontWeight:"bold"}}>test{props.message}</Text>
            <TextInput style={styles.messageContainer} placeholder="type your message" onChangeText={(val)=>setMessage(val)}/>
        </SafeAreaView>
        <TouchableOpacity 
        style={{
            width:"100%",
            borderWidth:2,
            marginTop:40,
            height:40,
            justifyContent:"center",
            backgroundColor:"red"
            }}
            onPress={()=>{props.send(
              {
                idSrc:idSrc,
                idDest:idDest,
                content:message
              })
            }}
            >
            <Text style={{textAlign:"center"}}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{
            width:"100%",
            borderWidth:2,
            marginTop:40,
            height:40,
            justifyContent:"center",
            backgroundColor:"red"
            }}
            onPress={()=>{
              setRoom("")
              props.setScreen('contact')
            }}
            >
            <Text style={{textAlign:"center"}}>leave</Text>
        </TouchableOpacity>
        </>
    )
}
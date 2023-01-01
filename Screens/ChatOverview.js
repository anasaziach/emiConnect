import * as React from 'react';
import { TouchableOpacity , Text, SafeAreaView } from 'react-native';
import { Context } from '../Global/ContextFile';
import axios from 'axios';
import { Ipv4 } from '../Global/Ipv4';

export default App=(props)=>{

  // variables
  const {idSrc,setIdSrc,idDest,setIdDest} = React.useContext(Context);
  const [discData,setDiscData]=React.useState();
  const [test,setTest]=React.useState(0);


  React.useEffect(()=>{
    alert("ok")
  },[props.newMessage])
  // functions
  const Discussion=(props)=>{
    return(
      <TouchableOpacity onPress={()=>{
        // setRoom(props.data.room)
        props.setScreen("msg")
      }} style={{height:100,marginTop:10,backgroundColor:"red"}}>
          <Text>user1</Text>
      </TouchableOpacity>
    )
  }
  const fetchDataDiscussion=(idUser)=>{
    axios.get("http://"+Ipv4+":8080/api/fetchDiscByIdUser",
    {
      params:
      {
        "idUser":idUser
      }
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json'
      }
    })
    .then((res)=>{
      setDiscData(res.data)
      setTest(1)
    })
  }
  React.useEffect(()=>{
    fetchDataDiscussion(idSrc)
  },[])
    return(
        <SafeAreaView style={{marginTop:100}}>
          {
            test==1 ? (discData.map((data,index)=>{
              return(<Discussion data={data} setScreen={props.setScreen} key={index}/>)})
              ):false}
          <TouchableOpacity style={{height:50,width:"100%",borderWidth:2,backgroundColor:"red",justifyContent:"center",alignItems:"center"}}
          onPress={()=>{props.setScreen("contact")}}>
            <Text>new message</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}
import * as React from 'react';
import { TouchableOpacity,Text, SafeAreaView, ScrollView } from 'react-native';
import { Context } from '../Global/ContextFile';
import { styles } from '../CSS/ContactCSS';
import axios from 'axios';
import { Ipv4 } from '../Global/Ipv4';

export default App=(props)=>{
    const [contactData,setContactData]=React.useState()
    const [test,setTest]=React.useState(0)
    const {idSrc,setIdSrc,idDest,setIdDest} = React.useContext(Context);
    const Contact=(props)=>{
        return(
            <TouchableOpacity onPress={()=>{
                // console.log("idDest is set to :"+props.data.id)
                setIdDest(props.data.id)
                props.setScreen("msg");
            }}
            style={styles.contactContainer}>
                <Text>{props.data.nom}</Text>
            </TouchableOpacity>
        )
    }
    const fetchContactData=()=>{
        axios.get("http://"+Ipv4+":8080/api/fetchContact",
    {
      params:
      {
        "idUser":idSrc
      }
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json'
      }
    })
    .then((res)=>{
        setContactData(res.data)
        console.log(res.data)
        setTest(1)
    })
    }
    React.useEffect(()=>{
        fetchContactData(idSrc)
        console.log("idSrc is set to"+idSrc)
    },[])
    return(
        <SafeAreaView>
           <ScrollView>
           {
            test==1 ? (contactData.map((data,index)=>{
              return(<Contact data={data} setScreen={props.setScreen} key={index}/>)})
              ):false}
            </ScrollView>
            <TouchableOpacity onPress={()=>{
                props.setScreen("chat");
            }}
            style={[styles.contactContainer,{backgroundColor:"blue"}]}>
                <Text>back to chat overview</Text>
            </TouchableOpacity>
            <Text style={{fontSize:20,fontWeight:"bold"}}>{props.message}</Text>
        </SafeAreaView>
    )
}
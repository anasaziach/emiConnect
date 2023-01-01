import * as React from 'react';
import { SafeAreaView, TextInput, TouchableOpacity , Text } from 'react-native';
import { Context } from '../Global/ContextFile';


export default App=(props)=>{
    const [id,setId]=React.useState();
    const {idSrc,setIdSrc,idDest,setIdDest} = React.useContext(Context);
    return(
        <SafeAreaView>
            <TextInput placeholder='enter your id' style={{height:100,borderWidth:2,width:"100%"}} onChangeText={(val)=>{setId(val)}}/>
            <TouchableOpacity onPress={()=>{
                setIdSrc(id),
                props.setScreen("Home")
            }}>
                <Text>enter</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
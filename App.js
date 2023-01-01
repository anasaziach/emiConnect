import * as React from 'react';
import Nav from './Nav';
import { Context, ContextContainer } from './Global/ContextFile';
import { LogBox } from 'react-native';



export default App = ()=>{
    // LogBox.ignoreAllLogs();
    const [screen , setScreen] = React.useState("Home");
return(
    <ContextContainer>
        <Nav screen={screen} setScreen={setScreen}/>
    </ContextContainer>
)}
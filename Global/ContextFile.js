import React from 'react';


const Context = React.createContext();
const ContextContainer =({children})=>{
  const [room,setRoom]=React.useState();
  const [idSrc,setIdSrc]=React.useState(1);
  const [idDest,setIdDest]=React.useState();
    return(
    <Context.Provider value={{room,setRoom,idSrc,setIdSrc,idDest,setIdDest}}>
        {children}
    </Context.Provider>
    )
}
export {ContextContainer,Context};
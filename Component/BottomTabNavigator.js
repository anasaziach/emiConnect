import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';


export default App=(props)=> {
    const [test,setTest] = React.useState(0);
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                position:"absolute",
                bottom:0,
                right:0,
                left:0,
                zIndex:12
            }}>
                <TouchableOpacity style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: 'rgba(128, 128, 128,0.9)',
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    bottom: 55,
                    zIndex: 7
                }} onPress={()=>{
                    console.log('presseshsdj')
                    props.setScreen("addSOrP")
                    setTest(1)
                    }}>
                        <View style={styles.button}>
                            <Image style={{ width: 30, height: 30,left:-5,top:-4 }}
                                resizeMode="contain"
                                 source={require("../assets/plus.png")} />
                        </View>
                </TouchableOpacity>
                <View style={styles.bottomTabContainer}>
                    <View style={styles.bottomTabBtn}>
                        <TouchableOpacity onPress={()=>{
                            setTest(0)
                            props.setRefresh(true)
                            props.setScreen("Home")}}>
                            <Image
                                style={{ width: 25, height: 25,alignSelf:"center" }}
                                source={require("../assets/home2.png")}
                            ></Image>
                            <Text style={styles.bottomTabBtnText}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.bottomTabBtnText,{justifyContent:'center',marginStart:10}]}>
                        <TouchableOpacity onPress={()=>{
                            setTest(0)
                            props.setScreen("chat")}}>
                            <Image
                                style={{  width: 25, height: 25 , alignSelf:"center" }}
                                source={require("../assets/chat.png")}
                            />
                            <Text style={styles.bottomTabBtnText}>chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.bottomTabBtnText,{justifyContent:'space-between',marginStart:55}]}>
                        <TouchableOpacity style={{top:4}}>
                            <Image
                                source={require("../assets/notif.png")}
                                style={{  width: 25, height: 25 , alignSelf:"center" }}
                                />
                            <Text style={styles.bottomTabBtnText}>Notif </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.bottomTabBtnText]}>
                        <TouchableOpacity onPress={()=>{
                            setTest(0)
                            props.setScreen("Settings")
                            }}>
                            <Image
                                source={require("../assets/settings.png")}
                                style={{  width: 25, height: 25,alignSelf:"center" }}/>
                                <Text style={styles.bottomTabBtnText}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,
    },
    bottomTabContainer: {
        position: 'absolute',
        backgroundColor: '#101C36',
        border: 2,
        radius: 3,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {

            height: 3, width: 3
        },
        x: 0,
        y: 0,
        bottom: 20,
        width: '85%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginLeft:"7.5%",
        borderRadius:20,
    },
    bottomTabBtnText: {
        justifyContent:'center',
        alignItems:'center',
        color:"#ffff"
    },
    bottomTabBtn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }


});
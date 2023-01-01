
var React = require('react-native');

var {StyleSheet, PixelRatio} = React;

var FONT_LABEL;
var FONT_FILTER;

if (PixelRatio.get() <= 2) {
  FONT_LABEL = 24; //large screen devices
}
else FONT_LABEL=14 //small devices

if (PixelRatio.get() <= 2) {
    FONT_FILTER = 20; //large screen devices
  }
  else FONT_FILTER=14 //small devices

export const styles = StyleSheet.create({
    backgroungPic: {
        width:"100%",
        height:500,
        zIndex:2
    },
    DetailsContainer: {
        zIndex:3,
        top:-300,
        height:"200%",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:"#fff"
    },
    userPicContainer: {
        top:-70,
        alignItems:"center"
    },
    userPic: {
        height:150,
        width:150,
        borderRadius:75,
        borderWidth:5,
        borderColor:"orange"
    },
    followCount: {
        flexDirection:"row",
        justifyContent:"space-around",
        top:-130
    },
    followers: {
        position:"absolute",
        left:"10%"
    },
    following: {
        position:"absolute",
        right:"10%"
    },
    fNumber: {
        fontWeight:"bold",
        fontSize:FONT_LABEL,
        textAlign:"center",
        color:"black"
    },
    fText: {
        fontWeight:"bold",
        fontSize:FONT_LABEL,
        color:"black"
    },
    Bio: {
        top:-50
    },
    BioText: {
        textAlign:"center",
        color:"black"
    },
    username: {
        fontWeight:"bold",
        fontSize:FONT_LABEL,
        marginBottom:10
    },
    BioStatus: {
        width:"80%",
        marginLeft:"10%",
        marginRight:"10%",
        fontSize:FONT_LABEL
    },
    InteractionWithUserContainer: {
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    InteractionWithUserBtn: {
        height:50,
        width:"35%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:18,
        // backgroundColor:"red"
    },
    FollowBtn: {
        backgroundColor:"black"
    },
    MessageBtn: {
        backgroundColor:"black"
    },
    InteractionWithUserTextBtnFollow: {
        fontSize:17,
        color:"black"
    },
    InteractionWithUserTextBtnMessage: {
        fontSize:17
    },
    postFilter: {
        flexDirection:"row",
        justifyContent:"center",
        marginTop:18
    },
    filterOption: {
    },
    allPost: {
        marginLeft:20
    },
    photoPost: {
        marginLeft:10
    },
    videoPost: {
        marginLeft:10
    },
    filerText: {
        fontSize:FONT_FILTER,
        color:"black"
    },
    post: {
        marginTop:20
    },
    firstLinePost: {
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    postPic1: {
        height:150,
        width:"45%"
    },
    postPic21: {
        height:71.25,
        width:"100%",
        marginBottom:7.5
    },
    postPic22: {
        height:71.25,
        width:"100%"
    }
})
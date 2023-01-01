import * as React from 'react';
import { View,Text,Image, ScrollView, TouchableOpacity } from 'react-native';
import BottomTabNavigator from '../Component/BottomTabNavigator';
import { styles } from '../CSS/ProfilCSS';
import { dataPost } from '../dataPost';


export default App =(props)=>{
    const [followStatus , setFollowStatus] = React.useState("Follow");
    
    const [screen , setScreen] = React.useState("Profil");
    return(
        <>
            <View style={styles.backgroundContainer}>
                <Image source={require("../assets/background.jpeg")} style={styles.backgroungPic} />
            </View>
            {/* <ScrollView style={styles.DetailsContainer}> */}
                <View style={styles.DetailsContainer}>
                    <View style={styles.userPicContainer}>
                        <Image source={require("../assets/profil1.jpg")} style={styles.userPic} />
                    </View>
                    <View style={styles.followCount}>
                        <View style={styles.followers}>
                            <Text style={styles.fNumber}>1K</Text>
                            <Text style={styles.fText}>Followers</Text>
                        </View>
                        <View style={styles.following}>
                            <Text style={styles.fNumber}>1K</Text>
                            <Text style={styles.fText}>Following</Text>
                        </View>
                    </View>
                    <View style={styles.Bio}>
                        <Text style={[styles.username,styles.BioText]}>@AZIACH</Text>
                        <Text style={[styles.BioStatus,styles.BioText]}>My name is Anas. I like dancing in the rain and travelling all around the world.</Text>
                    </View>
                    <View style={styles.InteractionWithUserContainer}>
                        {/* follow mean being notified each time this user post or update his status */}
                        <TouchableOpacity onPress={()=>setFollowStatus("Following")} style={[styles.InteractionWithUserBtn,styles.FollowBtn]}>
                            <Text style={styles.InteractionWithUserTextBtnFollow}>{followStatus}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.InteractionWithUserBtn,styles.MessageBtn]}>
                            <Text style={styles.InteractionWithUserTextBtnMessage}>Message</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.postFilter}>
                        <TouchableOpacity style={[styles.allPost,styles.filterOption]}>
                            <Text style={styles.filerText}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.photoPost,styles.filterOption]}>
                            <Text style={styles.filerText}>Photos</Text>    
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.videoPost,styles.filterOption]}>
                            <Text style={styles.filerText}>Videos</Text>    
                        </TouchableOpacity>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.firstLinePost}>
                            <Image source={{uri : dataPost.img1}} style={styles.postPic1}/>
                            <View style={{width:"45%",height:150}}>
                                <Image source={{uri: dataPost.img2}} style={styles.postPic21}/>
                                <Image source={{uri: dataPost.img3}} style={styles.postPic22}/>
                            </View>
                        </View>
                        <View style={styles.secondLinePost}>
                            
                        </View>
                    </View>
                </View>
                
    {/* <BottomTabNavigator setScreen={setScreen}/> */}
            {/* </ScrollView> */}
        </>
    )
}
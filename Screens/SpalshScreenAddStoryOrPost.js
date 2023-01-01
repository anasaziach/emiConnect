import * as React from 'react';
import { SafeAreaView , Text, View } from 'react-native';
import { styles } from '../CSS/AddSOrPcSS';
import { TouchableOpacity } from 'react-native';


export default App =(props)=>{
    return(
        <SafeAreaView>
            <Text style={styles.AddSOrP}>ADD</Text>
            <View style={styles.choiceContainer}>
                <TouchableOpacity style={[styles.choiceBtn,styles.storyBtn]} onPress={()=>props.setScreen("addStory")}>
                    <Text style={styles.choiceText}>Story</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.choiceBtn,styles.postBtn]} onPress={()=>props.setScreen("Upload")}>
                    <Text style={styles.choiceText}>Post</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
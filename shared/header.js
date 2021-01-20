import React from 'react';
import {StyleSheet,Text,View,Image,ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
 
export default function Header({title,navigation}){
    const openMenu = ()=>{
        navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
            <MaterialIcons style={styles.icon} name='menu' size={28} onPress={openMenu}/>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/> 
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1
    },
    icon:{
        position:'absolute',
        left:10
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10
    },
    headerTitle:{
        flexDirection:'row'
    }
})


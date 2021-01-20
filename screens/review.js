import React from 'react'
import {StyleSheet,View,Text, Button,Image} from 'react-native';
import {globalStyles,images} from '../styles/global'
import Card from '../shared/card';

export default function ReviewDetails({navigation,route}) {
   
    return (
       <View style={globalStyles.container}>
       <Card>
            <Text>{route.params.title}</Text>
           <Text>{route.params.body}</Text>
           <View style={styles.rating}>
                <Text>GameZone rating: </Text>
                <Image source={images.ratings[route.params.rating]}/>
           </View>
       </Card>
           
       </View>
    )
}

const styles=StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:'#eee'
    }
})
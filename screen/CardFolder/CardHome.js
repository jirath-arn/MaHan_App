import React from'react'
import {StyleSheet,Text,Image,TouchableOpacity, View, Dimensions} from 'react-native'

const Card = (props) => {
  return(
    <View style={styles.bder}>
         <TouchableOpacity style={styles.card}>
        <Image source={props.uri} style={styles.cardImage} />
        <View style={{marginTop:10}}>
        <Text style={styles.cardText}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
   

    );
  }  
const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const styles = StyleSheet.create({
  bder:{
    width: deviceWidth - 40,
    backgroundColor : 'white',
    height:200,
    borderRadius: radius,
    shadowColor:'#000',
    shadowOffset:{
      width:5,
      height:5,
    },
    shadowOpacity:0.75,
    shadowRadius:5,
    elevation:9,
    marginVertical:20,
    marginLeft: 20,
  },
 cardImage:{
   height:150,
   width: deviceWidth - 40,
   borderTopLeftRadius:radius,
   borderTopRightRadius:radius,
   opacity:0.9,
   alignContent:'center',
   alignSelf:'center',
},
  cardText:{
    fontSize:20,
    fontWeight:'800',
    textAlign:'center',
  }
})
export default Card;

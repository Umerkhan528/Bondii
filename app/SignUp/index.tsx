import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <View style={style.mainscreen}>
      <View style={style.screencontent}>
      <Text style={style.screencontenttitle}>Log in</Text>
      </View>
    </View>
  )
}

export default SignUp;

const style = StyleSheet.create({
    mainscreen: {
        flex:1,
        backgroundColor:"White",
    },
    screencontent: {
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },
    screencontenttitle:{
        fontSize:40.83,
        fontFamily:"Montserrat",
        fontWeight:"medium",
    },
});
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

const App = (props) => {
  const {navigation}=props;
  const ClickNe=()=>{
navigation.navigate('Login')
  }

  return (
 
    <View style={{backgroundColor:'#0C0F14',flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={ClickNe}>
      <Image  style={{width:270,height:225}} source={require('./images/Splash.png')} />
      </TouchableOpacity>
   
    </View>
  )
}

export default App

const styles = StyleSheet.create({})




   













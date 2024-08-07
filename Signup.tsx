import { Alert, Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';
//  const link_api = 'https://66613a1a63e6a0189fe8f009.mockapi.io/users'

const App = (props) => {
  const {navigation}=props;
  const Click=()=>{
  navigation.navigate('Login')
  }


 
  return (
    <KeyboardAvoidingView style={st.container}>
    <View style={st.container}>
         
      <Image style={st.img}
        source={require('./images/Splash.png')}

        //ảnh ra giữa khung
        resizeMode='center'
      />
      <Text style={st.textTitle}>WELCOM TO MY APP</Text>
      <Text style={st.textTitle1}>Register to Continue</Text>
  
      <TextInput style={st.input} placeholder='Name'
 placeholderTextColor='#828282'

      />
      <TextInput style={st.input} placeholder='Email'
 placeholderTextColor='#828282'

      />
      <TextInput style={st.input} placeholder='Password' //onChangeText={(txt)=>{setusername(txt)}}
 placeholderTextColor='#828282'

      />
      <TextInput style={st.input} placeholder='RePassword'  //onChangeText={(txt)=>{setpassword(txt)}}
        placeholderTextColor='#828282'
        secureTextEntry={true} />
        <TextInput style={st.input} placeholder='Phone'
 placeholderTextColor='#828282'

      />
      <TextInput style={st.input} placeholder='Address'
 placeholderTextColor='#828282'

      />

      <Pressable style={st.btnSingup} onPress={Click}>
        <Text style={{ fontSize: 14, fontWeight: '700',textAlign:'center',color:'white' }}>Register</Text>
      </Pressable>
      <Text style={st.text1}>You have an account? Click <Text style={st.text} onPress={Click}>Sign in</Text></Text>
   
   
    </View>
    </KeyboardAvoidingView>
  )
}

export default App

const st = StyleSheet.create({
  container: {
    backgroundColor: "#0C0F14",
    flex: 1,
    alignItems:'center',
    
    
  },
  img: {
    width: 142, height: 142,
    borderWidth: 5,
    borderRadius: 10,
    alignSelf: 'center'
  },
  textTitle: {
    fontFamily:'Poppins',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 10
  },
  textTitle1:{
    fontFamily:'Poppins',
    fontWeight: '700',
    fontSize: 12,
    color: '#828282',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    width: 348,
    height:48,
    fontFamily:'Poppins',
    fontWeight: '400',
    margin: 5,
    fontSize: 17,
    padding: 10,
    borderRadius: 8,
    
    color:'white',
    borderColor:'#252A32',

  },
  btnSingup :{
    borderWidth: 1,
    borderRadius:20,
    padding: 10,
    width: 348,
    height:57,
    justifyContent:'center',
    alignSelf: 'center',
    backgroundColor: '#D17842',
    marginTop:8
  },

  text:{
    fontFamily:'Poppins',
    fontSize: 12,
    color: '#D17842',
    fontWeight: '700',
  },
  text1:{
    fontFamily:'Poppins',
    fontSize: 12,
    color: '#828282',
    fontWeight: '700',
    alignSelf: 'center',
    marginTop:5
    
  
  }
})
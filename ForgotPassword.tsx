import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const ForgotPassword = (props) => {
  const {navigation}=props;
  const Click=()=>{
  navigation.navigate('Login')
  }
  return (
    <View style={st.container}>
      <Image style={st.img}
        source={require('./images/Splash.png')}

        //ảnh ra giữa khung
        resizeMode='center'
      />
      <Text style={st.textTitle}>WELCOM TO MY APP</Text>
      <Text style={st.textTitle1}>Forgot to Continue</Text>
      <TextInput style={st.input} placeholder='Email'
 placeholderTextColor='#828282'
      />
       <TextInput style={st.input} placeholder='Phone'
 placeholderTextColor='#828282'
      />
       <TextInput style={st.input} placeholder='Password'
        placeholderTextColor='#828282'
        secureTextEntry={true} />
         <TextInput style={st.input} placeholder='Repassword'
        placeholderTextColor='#828282'
        secureTextEntry={true} />
          <Pressable style={st.btnSingup} onPress={Click}>
        <Text style={{ fontSize: 14, fontWeight: '700',textAlign:'center',color:'white' }}>Logn in</Text>
      </Pressable>
    </View>
  )
}

export default ForgotPassword

const st = StyleSheet.create({
  img:{
    width: 142, height: 142,
    borderWidth: 5,
    borderRadius: 10,
    alignSelf: 'center'
  },
  container:{
    backgroundColor: "#0C0F14",
    flex: 1,
    alignItems:'center',
  },
  textTitle:{
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
  input:{
    borderWidth: 1,
    width: 348,
    height:48,
    fontFamily:'Poppins',
    fontWeight: '400',
    margin: 5,
    fontSize: 14,
    padding: 10,
    borderRadius: 8,
    borderColor:'#252A32',
  },
  btnSingup:{
    borderWidth: 1,
    borderRadius:20,
    padding: 10,
    width: 348,
    height:57,
    justifyContent:'center',
    alignSelf: 'center',
    backgroundColor: '#D17842',
    marginTop:8
  }
  
})
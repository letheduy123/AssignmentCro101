import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const GooglePassWord = (props) => {
  const {navigation}=props;
  const Click=()=>{
    navigation.navigate('Home')
  }
  return (
    <View>
        <View style={{width:390,height:340,borderRadius:20,alignSelf:'center',marginTop:150,backgroundColor:'#EEEEEE'}}>
      <Image style={st.img}
        source={require('./images/icongogle.png')}

        //ảnh ra giữa khung
        resizeMode='center'
      />
       <Text style={st.textTitle}>Sign in</Text>
      <Text style={st.textTitle1}>Register to Continue</Text>
      <TextInput style={st.input} placeholder='Password'
 placeholderTextColor='#828282'

      />
            <Text style={st.textTitle2}>Forgot password ?</Text>
            <Pressable style={{borderRadius:10,width:70,height:43,backgroundColor:'#0099CC',marginLeft:300,padding:6}} onPress={Click}>
        <Text style={{fontSize:20,alignSelf:'center',fontWeight:'700'}}>Next</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default GooglePassWord

const st = StyleSheet.create({
  img:{
    width: 80, height: 60,
    borderWidth: 5,
    borderRadius: 10,
    alignSelf: 'center',
    margin:10
  },
  textTitle: {
    fontFamily:'Poppins',
    fontSize: 27,
    color: '#0C0F14',
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 10
  },
  textTitle1:{
    fontFamily:'Poppins',
    fontWeight: '900',
    fontSize: 21,
    color: '#828282',
    marginBottom: 8,
    alignSelf: 'center',
  },
  textTitle2:{
    fontFamily:'Poppins',
    fontWeight: '900',
    fontSize: 21,
    color: '#0099CC',
    marginBottom: 10,
    marginLeft:22,
    marginTop:10
    
  },
  input: {
    borderWidth: 1,
    width: 370,
    height:48,
    fontFamily:'Poppins',
    fontWeight: '400',
    margin: 5,
    fontSize: 14,
    padding: 10,
    marginLeft:8,
    borderRadius: 8,
    borderColor:'#252A32',

  },
})
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const GoogleAcount = (props) => {
  const {navigation}=props;
  const Click=()=>{
    navigation.navigate('GooglePassWord')
  }
  return (
    <View>
      <View style={{width:390,height:500,borderRadius:20,alignSelf:'center',marginTop:60,backgroundColor:'#EEEEEE'}}>
      <Image style={st.img}
        source={require('./images/icongogle.png')}

        //ảnh ra giữa khung
        resizeMode='center'
      />
      <Text style={st.textTitle}>Sign in</Text>
      <Text style={st.textTitle1}>Register to Continue</Text>
      <TextInput style={st.input} placeholder='Email'
 placeholderTextColor='#828282'

      />
      <Text style={st.textTitle2}>Forgot email ?</Text>
      <Text style={st.textTitle3}>Not your computer? Use Guest mode to sign in privately</Text>
      <Text style={st.textTitle2}>Learn more</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={st.textTitle2}>Create account</Text>
      <Pressable style={{borderRadius:10,width:70,height:43,backgroundColor:'#0099CC',marginRight:20,padding:6}} onPress={Click}>
        <Text style={{fontSize:20,alignSelf:'center',fontWeight:'700'}}>Next</Text>
      </Pressable>
      </View>
      </View>
  
     
    </View>
  )
}

export default GoogleAcount

const st = StyleSheet.create({
  img:{
    width: 80, height: 60,
    borderWidth: 5,
    borderRadius: 10,
    alignSelf: 'center',
    margin:20
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
  textTitle3:{
    fontFamily:'Poppins',
    fontWeight: '600',
    fontSize: 20,
   
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
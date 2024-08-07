import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


const App = () => {
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <View style={st.container}>
      <Image style={st.img}
        source={require('./images/Splash.png')}

        //ảnh ra giữa khung
        resizeMode='center'
      />
      <Text style={st.textTitle}>WECOM TO CONTACT</Text>
      <TextInput style={st.input}
       placeholder='Fullname'
 placeholderTextColor='white'

      />
      <TextInput style={st.input} placeholder='Email'
 placeholderTextColor='white'

      />
      <TextInput style={st.input} placeholder='Phone'
 placeholderTextColor='white'

      />
      <TextInput style={st.input} placeholder=' Chủ đề'
        placeholderTextColor='white'
         />
        <TextInput style={st.inputContent} placeholder='Nội dung'
 placeholderTextColor='white'

      />
     
      <Pressable style={st.btn}>
        <Text style={{ fontSize: 20, fontWeight: 'bold',textAlign:'center',color:'white' }}>Gửi yêu cầu</Text>
      </Pressable>
      <Text style={st.text1}><Text style={st.text} >   Liên hệ:</Text>Trường FPT Polytechnic Cơ sở Hà Nội</Text>
      <Text style={st.text1}>   Cổng số 1, FPT Polytechnic,Nam Từ Liêm</Text>
      <Text style={st.text1}><Text style={st.text}>   SĐT:</Text>(024) 8582 0808 </Text>



    </View>
  )
}

export default App

const st = StyleSheet.create({
  container: {
    backgroundColor: "#0C0F14",
    flex: 1,
   

  
  },
  img: {
    width: 160, height: 80,
    alignSelf: 'center'
  },
  textTitle: {
    fontSize: 20,
    fontFamily:'Poppins',

    color: '#FFFFFF',
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 1
  },
  input: {
   borderColor:'white',
   borderWidth:1,
  
    width: '90%',
    height:48,
    margin: 6,
    marginLeft:20,
    padding: 10,
    borderRadius: 8,
    fontSize: 20,
    color:'white'

  },
  inputContent:{
    borderColor: 'white',
    borderWidth: 1,
    width: '90%',
    height:80,
    margin: 8,
    padding: 10,
    borderRadius: 15,
    fontSize: 20,
    marginLeft:20,color:'white'

  },
  btn :{
    
    borderWidth: 1,
    borderRadius:20,
    padding: 10,
    width: '50%',
    height:57,
    alignSelf: 'center',
    backgroundColor: '#D17842',
    marginTop:8,
    marginBottom:6
  },

  text:{
    fontWeight: '700',
    fontSize:20,
    color:"#D17842",
    marginTop:14
  },
  text1:{
    
    
    fontWeight: '400',
    marginTop:5,
    fontSize: 18,
  color:'white'
    
  
  }
})
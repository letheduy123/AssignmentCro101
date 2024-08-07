import { Alert, Image, KeyboardAvoidingView, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox/build/dist/BouncyCheckbox';
// import AsyncStorage from '@react-native-async-storage/async-storage';
//  const link_api = 'https://66613a1a63e6a0189fe8f009.mockapi.io/users'


const App = (props) => {
  const {navigation}=props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const Click=()=>{
    if (username === 'duy02' && password === '123') {
  navigation.navigate('Home')
    }else{
      setModalVisible(true);
    }
  }
 
  const Click2=()=>{
    navigation.navigate('Signup')
  }
  const Click3=()=>{
    navigation.navigate('ForgotPassword')
  }
  const Click4=()=>{
    navigation.navigate('GoogleAcount')
  }
  // const [username, setusername] = useState('');
  // const [password, setpassword] = useState('');
  // const doLogin=()=>{
  //   //kiểm tra hợp lệ
  //   if(username.length ==0){
  //     Alert.alert('Chưa nhập Username');return;
  //   }
  //   if(password.length ==0){
  //     Alert.alert('Chưa nhập password');return;
  //   }
  //   //fetch lấy dữ liệu
  //   let url_check_Login=`${link_api}?username=${username}`;
  //   fetch(url_check_Login)
  //   .then((res)=>{return res.json();})
  //   .then( async(res_login)=>{
  //     if (res_login.length !=1) {
  //       Alert.alert("Sai username hoặc lỗi trùng dữ liệu");
  //       return;
        
  //     }else{
  //       //số lượng 1 bản ghi==> kiểm tra password
  //       let objU=res_login[0];
  //       if(objU.password !=password){
  //         Alert.alert("Sai pasword");
  //         return;
  //       }else{
  //         //luư thông tin vao stores
  //         try {
  //           await AsyncStorage.setItem('loginInfo',JSON.stringify(objU) );
  //           props.navigation.navigate('Home')
  //         } catch (e) {
  //          console.log(e);
       
           
  //         }
  //       }
  //     }
  //   })
  // }
 
  
  return (
    
    <View style={st.container}>
      
      <Image style={st.img}
        source={require('./images/Splash.png')}

        //ảnh ra giữa khung
        resizeMode='center'
      />
      <Text style={st.textTitle}>WELCOM TO MY APP</Text>
      <Text style={st.textTitle1}>Login to Continue</Text>

      <TextInput style={st.input} placeholder='Email Adressd' //onChangeText={(txt)=>{setusername(txt)}}
        placeholderTextColor='#828282'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput style={st.input} placeholder='Password' //onChangeText={(txt)=>{setpassword(txt)}}
        placeholderTextColor='#828282'
        secureTextEntry={true} 
        value={password}
        onChangeText={setPassword}
        />
        <View  style={{flexDirection:'row'}}>
        <View style={{flexDirection:'row'}}>
        <BouncyCheckbox style={{marginRight:1}}
         
        fillColor="#0eb9ef"
        unFillColor="#FFFFFF"
        />
        <Text style={{fontSize:17,fontWeight:600,color:'#828282',marginRight:186}}> Remember me</Text>
       
        </View>
    
        </View>
       
      
      <Pressable style={st.btnSingin} onPress={Click}>
        <Text style={{ fontSize: 14, fontWeight: '700', textAlign: 'center', color: 'white', fontFamily: 'Poppins' }}>Sign In</Text>
      </Pressable>
      <Pressable style={st.btngoogle} onPress={Click4}>
        <Image style={{ width: 15, height: 15, marginRight: 50 }} source={require('./images/google.png')} />
        <Text style={{ fontSize: 14, fontWeight: '800', textAlign: 'center', color: '#121212', fontFamily: 'Poppins' }}>Sign in with google</Text>
      </Pressable>

      <Text style={st.text1}>Don’t have account? Click <Text style={st.text} onPress={Click2}>Register</Text> </Text>
      <Text style={st.text1}>Forget Password? Click <Text style={st.text} onPress={Click3}>Reset</Text></Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={st.centeredView}>
          <View style={st.modalView}>
            <Text style={st.modalText}>Username or password faild !</Text>
            <Pressable
              style={[st.button, st.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={st.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     
    </View>
   
  )
}

export default App

const st = StyleSheet.create({
  container: {
    backgroundColor: "#0C0F14",
    flex: 1,
    alignItems: 'center',



  },
  img: {
    width: 142,
    height: 142,
    alignSelf: 'center'
  },
  textTitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 14
  },
  textTitle1: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 12,
    color: '#828282',
  },
  input: {
    borderWidth: 1,
    width: 348,
    height: 48,
    fontFamily: 'Poppins',
    fontWeight: '400',
    margin: 10,
    fontSize: 18,
    color:'white',
    
    padding: 10,
    borderRadius: 8,
    borderColor: '#252A32',



  },
  btnSingin: {

    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: 348,
    height: 57,
    alignSelf: 'center',
    backgroundColor: '#D17842',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  btngoogle: {
    borderWidth: 1,
    borderRadius: 20,

    width: 348,
    height: 57,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',



  },

  text: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',

    fontSize: 12,
    color: "#D17842"
  },
  text1: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#828282',
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 10,


  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
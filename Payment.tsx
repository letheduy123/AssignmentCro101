import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


const Payment = (props) => {
const {navigation}=props;
const Click1=()=>{
  navigation.navigate('Home')
}
  return (
    <View style={st.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={{ flexDirection:'row'}}>
            <Pressable style={{width:33,height:33,borderRadius:8,backgroundColor:'#383A3E',margin:10}}>
              <Image style={{width:'80%',height:'80%'}} source={ require('./images/back.png')}/>

            </Pressable>
            <Text style={st.text1}>Payment</Text>
          </View>
        
       <View style={st.container1}>
       <Text style={st.text2}>Credit Card</Text>
       <LinearGradient  style={st.gradient}   colors={['#262B33', '#0C0F14']}   start={{ x: 0, y: 1 }}  end={{ x: 1, y: 0 }}>
       <View style={st.container2}>
        <Image style={st.img} source={require('./images/pay.png')}/>
        <Text style={st.text3}>VISA</Text>
       </View>
       <Text style={st.text4}>3 8 9 7  8 9 2 3  6 7 4 5  4 6 3 8</Text>
       <View style={st.container2}>

       <View >
       <Text style={st.text5}>Expiry Date</Text>
       <Text style={st.text6}>Robert Evans</Text>
       </View>

       <View >
       <Text style={st.text7}>Card Holder Name</Text>
       <Text style={st.text8}>02/30</Text>
       </View>
       </View>
     
      
       </LinearGradient>
      
       </View>
       <Pressable style={st.btn1}>
        <View  style={st.container3}>
        <Image style={st.img1} source={require('./images/wallet.png')} />
        <Text style={st.text9}>Wallet</Text>
        </View>
       
        <Text style={{fontSize:19,fontWeight:'400',color:'white',marginRight:20}}>$ 100.50</Text>
        </Pressable> 

        <Pressable style={st.btn1}>
        <View style={st.container3}>
        <Image style={st.img1} source={require('./images/googlepay.png')} />
        <Text style={st.text9}>Google</Text>
        </View>
       
       
        </Pressable> 

        <Pressable style={st.btn1}>
        <View  style={st.container3}>
        <Image style={{width:25,height:25,marginLeft:18}} source={require('./images/amapay.png')} />
        <Text style={st.text9}>Amazon</Text>
        </View>
       
       
        </Pressable> 

        <Pressable style={st.btn1} >
        <View  style={st.container3}>
        <Image style={st.img1} source={require('./images/apple.png')} />
        <Text style={st.text9}>Apple</Text>
        </View>
       
        
        </Pressable> 
        <Text style={st.text10}>Price</Text>
          <View style={st.container4}>
            <Text style={st.text11}> <Text style={{ fontSize: 20, fontWeight: '600', fontFamily: 'Poppins', color: '#D17842' }}>$  </Text>420</Text>
            <Pressable style={st.btn} onPress={Click1}>
              <Text style={{ fontSize: 19, fontWeight: '600', alignSelf: 'center', marginTop: 10, color: 'white' }}>Pay from Credit Card</Text>
            </Pressable>
          </View>
       
        </ScrollView>
      </SafeAreaView>
      
       
    
 
 
       
    
      

    </View>
  )
}

export default Payment

const st = StyleSheet.create({
  container:{
    backgroundColor: "#0C0F14",
    flex: 1,
 
  },
  text1:{
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    margin:5,
    marginLeft:130,
    alignSelf:'center'
  },
  container1:{
    width: '95%', 
     height:241, 
     borderRadius:23,
     borderColor:'#D17842',
     borderWidth:1,
     alignSelf:'center' ,
     marginTop:10
  },
  text2:{
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    margin:10
  },
  container2:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  img:{
    margin:10,
    width:31,
    height:24,
    tintColor:'#D17842'
  },
  text3:{
    width:50,height:28,color:'#FFFF',fontFamily:'Poppins',fontSize:22,margin:10
  },
  text4:{
    fontSize:20,fontWeight:'600',marginTop:10,color:'#FFFFFF',alignSelf:'center',fontFamily:'Poppins'
  },
  text5:{
    fontFamily:'Poppins',color:'#FFFFFF',fontWeight:'400',fontSize:13,marginTop:15,marginLeft:20
  },
  text6:{
    fontFamily:'Poppins',color:'#FFFFFF',fontWeight:'500',fontSize:17,marginTop:10,marginLeft:20
  },
  text7:{
    fontFamily:'Poppins',color:'#FFFFFF',fontWeight:'400',fontSize:13,marginTop:15,marginRight:10
  },
  text8:{
    fontFamily:'Poppins',color:'#FFFFFF',fontWeight:'500',fontSize:17,marginTop:10,marginRight:10
  },
 btn1:{
  flexDirection:'row',justifyContent:'space-between',width:"95%",height:50,borderRadius:25,backgroundColor:'#262B33',alignSelf:'center',margin:10,alignItems:'center'
 },
 container3:{
  flexDirection:'row'
 },
 img1:{
  width:25,height:20,marginLeft:18
 },
 text9:{
  fontSize:19,fontWeight:'600',color:'white',marginLeft:20
 },
 text10:{
  fontSize: 15, fontWeight: '500', fontFamily: 'Poppins', color: '#AEAEAE', marginLeft: 60, marginTop: 30
 },
 container4:{
  flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20
 },
 text11:{
  fontSize: 24, fontWeight: '600', fontFamily: 'Poppins', color: '#FFFFFF', marginLeft: 25, marginTop: 10, alignSelf: 'center'
 },
  btn:{
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: 240,
    height: 70,
    backgroundColor: '#D17842',
    alignSelf: 'center'
  },
  gradient:{
    width: 320,
    height:186,
    borderRadius: 15,
  alignSelf:'center',
 
  }


})
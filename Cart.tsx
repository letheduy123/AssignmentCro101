import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
const link_api = 'https://66613a1a63e6a0189fe8f009.mockapi.io/Cart'
const Cart = (props) => {
  const {navigation}=props;
  const Click =()=>{
    navigation.navigate('Payment')
  }
  const [dsUser, setDsUser] = useState([]);
  const getList = async () => {
    try {
      let res = await fetch(link_api); // lấy du lieu từ API
      let arrU = await res.json();  // chuyển về thành đối tượng json
      setDsUser(arrU);

    } catch (error) {
      console.log(error);
    }
  }
  const RowList = (props)=>{
    console.log(props); // log để xem thuộc tính
    return (
      <LinearGradient style={st.gradient1} colors={['#262B33', '#0C0F14']}   start={{ x: 0, y: 1 }}  end={{ x: 1, y: 0 }}>
       
       <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Image style={{marginTop:10,borderRadius:10}} source={{uri: props.u.image}} width={100}
              height={100}/>
              <View>
              <Text style={{fontSize:17,fontWeight:'400' ,fontFamily:'Poppins',color:'white',marginBottom:10}}>
          {props.u.name } 
          
         </Text>
         <Text style={st.text4}>With Steamed Milk</Text>
         <View style={{flexDirection:'row',justifyContent:'space-around'}}>
         <Pressable style={st.pressable1}>
         <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>
         
         {props.u.variable}
          </Text>
         </Pressable>
         
         <Text style={{fontSize:17,fontWeight:'400' ,fontFamily:'Poppins',color:'white',marginTop:7}}>
        $ {props.u.price } 
          
         </Text>
        
         </View>
         <View style={st.container6}>
        <Pressable style={st.pressable4}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>-</Text>
</Pressable>
<Text style={{width:50,height:30,borderWidth:1,borderColor:'#D17842',borderRadius:7,fontSize:16,fontWeight:'600',fontFamily:'Poppins',color:'white',alignSelf:'center',padding:3,backgroundColor:'#0C0F14',marginRight:40}}>     1</Text>
<Pressable style={st.pressable5}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>+</Text>
</Pressable>
        </View>
              </View>
              


        
      </View>
     
      </LinearGradient>
    
    )
  }
  React.useEffect( ()=>{
    getList(); // gọi hàm lấy danh sách
  },[]);  
  //------ xóa dòng


  return (
    <View style={st.container}>
      <SafeAreaView>
        <ScrollView>
        <View style={st.row}>
        <Image style={st.img1}
          source={require('./images/cafe.jpg')}
        />
        <Text style={st.textTitle}>Favorites</Text>
        <Image style={st.img1}
          source={require('./images/people.png')}
        />
      </View>
      <LinearGradient  style={st.gradient}   colors={['#262B33', '#0C0F14']}   start={{ x: 0, y: 1 }}  end={{ x: 1, y: 0 }}>
       <View style={st.container2}>
        <Image style={st.img} source={require('./images/coffee1.png')}/>
        <View>
        <Text style={st.text3}>Cappuccino</Text>
        <Text style={st.text4}>With Steamed Milk</Text>
        <Pressable style={st.pressable}>
          <Text style={{fontSize:12,fontWeight:'500',color:'#AEAEAE',marginTop:10}}>Medium Roasted</Text>
        </Pressable>
       </View>
      
        </View>
        <View style={st.container3}>
<Pressable style={st.pressable1}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>S</Text>
</Pressable>
<Text style={{fontSize:16,fontWeight:'600',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}><Text style={{fontSize:16,fontWeight:'600',color:'#D17842',fontFamily:'Poppins',alignSelf:'center'}}>$</Text>  4.20</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>-</Text>
</Pressable>
<Text style={{width:50,height:30,borderWidth:1,borderColor:'#D17842',borderRadius:7,fontSize:16,fontWeight:'600',fontFamily:'Poppins',color:'white',alignSelf:'center',padding:3,backgroundColor:'#0C0F14'}}>     1</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>+</Text>
</Pressable>

        </View>

        <View style={st.container3}>
<Pressable style={st.pressable1}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>M</Text>
</Pressable>
<Text style={{fontSize:16,fontWeight:'600',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}><Text style={{fontSize:16,fontWeight:'600',color:'#D17842',fontFamily:'Poppins',alignSelf:'center'}}>$</Text>  4.20</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>-</Text>
</Pressable>
<Text style={{width:50,height:30,borderWidth:1,borderColor:'#D17842',borderRadius:7,fontSize:16,fontWeight:'600',fontFamily:'Poppins',color:'white',alignSelf:'center',padding:3,backgroundColor:'#0C0F14'}}>     1</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>+</Text>
</Pressable>

        </View>

        <View style={st.container3}>
<Pressable style={st.pressable1}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>L</Text>
</Pressable>
<Text style={{fontSize:16,fontWeight:'600',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}><Text style={{fontSize:16,fontWeight:'600',color:'#D17842',fontFamily:'Poppins',alignSelf:'center'}}>$</Text>  4.20</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>-</Text>
</Pressable>
<Text style={{width:50,height:30,borderWidth:1,borderColor:'#D17842',borderRadius:7,fontSize:16,fontWeight:'600',fontFamily:'Poppins',color:'white',alignSelf:'center',padding:3,backgroundColor:'#0C0F14'}}>     1</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>+</Text>
</Pressable>

        </View>
       </LinearGradient>
       <LinearGradient style={st.gradient1} colors={['#262B33', '#0C0F14']}   start={{ x: 0, y: 1 }}  end={{ x: 1, y: 0 }}>
       <View style={st.container4}>
       <Image style={st.img2} source={require('./images/coffee1.png')}/>

<View>
<Text style={st.text3}>Cappuccino</Text>
        <Text style={st.text4}>With Steamed Milk</Text>
        <View style={st.container5}>
        <Pressable style={st.pressable3}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>L</Text>
</Pressable>
<Text style={{fontSize:16,fontWeight:'600',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center',marginRight:30}}><Text style={{fontSize:16,fontWeight:'600',color:'#D17842',fontFamily:'Poppins'}}>$</Text>  4.20</Text>

        </View>
        <View style={st.container6}>
        <Pressable style={st.pressable4}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>-</Text>
</Pressable>
<Text style={{width:50,height:30,borderWidth:1,borderColor:'#D17842',borderRadius:7,fontSize:16,fontWeight:'600',fontFamily:'Poppins',color:'white',alignSelf:'center',padding:3,backgroundColor:'#0C0F14',marginRight:40}}>     1</Text>
<Pressable style={st.pressable5}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>+</Text>
</Pressable>
        </View>
</View>
</View>
       </LinearGradient>

       <LinearGradient style={st.gradient1} colors={['#262B33', '#0C0F14']}   start={{ x: 0, y: 1 }}  end={{ x: 1, y: 0 }}>
       <View style={st.container4}>
       <Image style={st.img2} source={require('./images/coffee2.png')}/>

<View>
<Text style={st.text3}>Robusta Bean</Text>
        <Text style={st.text4}>From Africa</Text>
        <View style={st.container5}>
        <Pressable style={st.pressable3}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>250 gm</Text>
</Pressable>
<Text style={{fontSize:16,fontWeight:'600',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center',marginRight:30}}><Text style={{fontSize:16,fontWeight:'600',color:'#D17842',fontFamily:'Poppins'}}>$</Text>  4.20</Text>

        </View>
        <View style={st.container6}>
        <Pressable style={st.pressable4}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>-</Text>
</Pressable>
<Text style={{width:50,height:30,borderWidth:1,borderColor:'#D17842',borderRadius:7,fontSize:16,fontWeight:'600',fontFamily:'Poppins',color:'white',alignSelf:'center',padding:3,backgroundColor:'#0C0F14',marginRight:40}}>     1</Text>
<Pressable style={st.pressable5}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>+</Text>
</Pressable>
        </View>
</View>
</View>
       </LinearGradient>

       <LinearGradient style={st.gradient2} colors={['#262B33', '#0C0F14']}   start={{ x: 0, y: 1 }}  end={{ x: 1, y: 0 }}>
       <View style={st.container4}>
       <Image style={st.img2} source={require('./images/coffee2.png')}/>

<View>
<Text style={st.text3}>Robusta Bean</Text>
        <Text style={st.text4}>From Africa</Text>
        <Pressable style={st.pressable}>
          <Text style={{fontSize:12,fontWeight:'500',color:'#AEAEAE',marginTop:10}}>Medium Roasted</Text>
        </Pressable>


</View>

</View>
<View style={st.container3}>
<Pressable style={st.pressable1}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>250gm</Text>
</Pressable>
<Text style={{fontSize:16,fontWeight:'600',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}><Text style={{fontSize:16,fontWeight:'600',color:'#D17842',fontFamily:'Poppins',alignSelf:'center'}}>$</Text>  4.20</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>-</Text>
</Pressable>
<Text style={{width:50,height:30,borderWidth:1,borderColor:'#D17842',borderRadius:7,fontSize:16,fontWeight:'600',fontFamily:'Poppins',color:'white',alignSelf:'center',padding:3,backgroundColor:'#0C0F14'}}>     1</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>+</Text>
</Pressable>

        </View>
        <View style={st.container3}>
<Pressable style={st.pressable1}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>300gm</Text>
</Pressable>
<Text style={{fontSize:16,fontWeight:'600',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}><Text style={{fontSize:16,fontWeight:'600',color:'#D17842',fontFamily:'Poppins',alignSelf:'center'}}>$</Text>  4.20</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>-</Text>
</Pressable>
<Text style={{width:50,height:30,borderWidth:1,borderColor:'#D17842',borderRadius:7,fontSize:16,fontWeight:'600',fontFamily:'Poppins',color:'white',alignSelf:'center',padding:3,backgroundColor:'#0C0F14'}}>     1</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>+</Text>
</Pressable>

        </View>
        <View style={st.container3}>
<Pressable style={st.pressable1}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>1kg</Text>
</Pressable>
<Text style={{fontSize:16,fontWeight:'600',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}><Text style={{fontSize:16,fontWeight:'600',color:'#D17842',fontFamily:'Poppins',alignSelf:'center'}}>$</Text>  4.20</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>-</Text>
</Pressable>
<Text style={{width:50,height:30,borderWidth:1,borderColor:'#D17842',borderRadius:7,fontSize:16,fontWeight:'600',fontFamily:'Poppins',color:'white',alignSelf:'center',padding:3,backgroundColor:'#0C0F14'}}>     1</Text>
<Pressable style={st.pressable2}>
  <Text style={{fontSize:16,fontWeight:'500',color:'#FFFFFF',fontFamily:'Poppins',alignSelf:'center'}}>+</Text>
</Pressable>

        </View>
       </LinearGradient>
       <FlatList 
        data={ dsUser }
        renderItem={ ({item}) => <RowList u = {item} />   }
        keyExtractor={ item => item.id }
        />
       <Text style={{ fontSize: 15, fontWeight: '500', fontFamily: 'Poppins', color: '#AEAEAE', marginLeft: 60, marginTop: 30 }}>Price</Text>
          <View style={st.container8}>
            <Text style={{ fontSize: 24, fontWeight: '600', fontFamily: 'Poppins', color: '#FFFFFF', marginLeft: 25, marginTop: 10, alignSelf: 'center' }}> <Text style={{ fontSize: 20, fontWeight: '600', fontFamily: 'Poppins', color: '#D17842' }}>$  </Text>420</Text>
            <Pressable style={st.btn} onPress={Click}>
              <Text style={{ fontSize: 19, fontWeight: '600', alignSelf: 'center', marginTop: 10, color: 'white' }}>Add to Cart</Text>
            </Pressable>
          </View>

     
    
   
      
      

    

        

    
        </ScrollView>
      </SafeAreaView>
     
    
    </View>
  )
}

export default Cart

const st = StyleSheet.create({
  container:{
    backgroundColor: "#0C0F14",
    flex: 1,
  },
  container1:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  img:{
    width: 100,
     height: 100,
    borderRadius: 10,
marginTop:18
  
  },
  img2:{
    width: 100,
     height: 100,
    borderRadius: 10,
marginTop:18
  
  },
  container2:{
flexDirection:'row',
justifyContent:'space-around'
  },
  container8:{
    flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 
  },
  gradient:{
    width:390,
    height:255,
    borderRadius:23,
    alignSelf:'center'
  },
  gradient1:{
    width:390,
    height:155,
    marginTop:20,
    borderRadius:23,
    alignSelf:'center'
  },
  gradient2:{
    width:390,
    height:255,
    marginTop:20,
    borderRadius:23,
    alignSelf:'center'
  },
  text3:{
  marginTop:15,
  marginRight:150,
    fontSize:16,
    marginBottom:10,
    fontWeight:'400',
    fontFamily:'Poppins',color:'#FFFF'
  },
  text4:{
    fontSize:13,
    fontWeight:'400',
    color:'#AEAEAE',
    fontFamily:'Poppins',
    marginBottom:10
  },
  pressable:{
width:110,
height:40,
backgroundColor:'#252A32',
borderRadius:10,alignItems:'center'
  },
  container3:{
    flexDirection:'row',
justifyContent:'space-around',
marginTop:8
  },
  container4:{
    flexDirection:'row',
    justifyContent:'space-around',
   
  },
  container5:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  container6:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:10
  },
  pressable1:{
    width:72,
    height:35,
    borderRadius:10,
    backgroundColor:'#0C0F14',
    marginRight:20,
    padding:6
  },
  pressable3:{
    width:72,
    height:35,
    borderRadius:10,
    backgroundColor:'#0C0F14',
    marginRight:80,
    padding:5
  },
  pressable2:{
    width:30,
    height:30,
    borderRadius:7,
    backgroundColor:'#D17842',
    padding:3,
   
  
  },
  pressable5:{
    width:30,
    height:30,
    borderRadius:7,
    backgroundColor:'#D17842',
    padding:3,
    marginRight:10
  
  },
  pressable4:{
    width:30,
    height:30,
    borderRadius:7,
    backgroundColor:'#D17842',
    padding:3,
    marginRight:40
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
  textTitle: {
    fontSize: 24,
    color: '#FFFF',
    fontWeight: '600',
    alignSelf: 'center',
    fontFamily: 'Poppins',
    marginBottom: 14,
    marginTop:10
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  img1: {
    width: 40, height: 40,
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 15,
    margin: 10
  },

})
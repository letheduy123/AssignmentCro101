import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
const link_api = 'https://6667d853f53957909ff57771.mockapi.io/Detail'
const Detail = (props) => {
  const [dsUser, setDsUser] = useState([]); // khai báo state để lưu ds
  const getList = async ()=>{
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
    <View style={{backgroundColor:'#0C0F14'}}>
      <Image source={{uri: props.u.image}} width={410}
            height={400} borderRadius={10}/>

<View style={st.title}>
            <View >
              <Text style={st.text} >{props.u.name }</Text>
              <Text style={st.text1} >With Steamed Milk</Text>
              <View style={st.container1}>
                <Image style={{ width: 30, height: 25, marginLeft: 18, marginTop: 20 }} source={require('./images/star.png')} />
                <Text style={{ fontSize: 25, color: 'white', fontFamily: 'Poppins', marginLeft: 18, marginTop: 20 }} >4.5  <Text style={{ fontSize: 15, color: 'white', fontFamily: 'Poppins' }}>(6879)</Text></Text>
              </View>
            </View>
            {/*  */}

            <View>
              <View style={{ flexDirection: 'row', margin: 6 }}>
                <View style={st.container2}>
                  <Image style={{ width: 30, height: 25, alignSelf: 'center', marginTop: 5 }} source={require('./images/fee.png')} />
                  <Text style={{ fontSize: 10, color: '#AEAEAE', alignSelf: 'center', marginTop: 5 }}>Coffee</Text>
                </View>
                <View style={st.container3}>
                  <Image style={{ width: 28, height: 28, alignSelf: 'center', marginTop: 5 }} source={require('./images/milk.png')} />
                  <Text style={{ fontSize: 10, color: '#AEAEAE', alignSelf: 'center', marginTop: 5 }}>Milk</Text>
                </View>

              </View>
              <View style={st.container4}>
                <Text style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: 15, color: '#AEAEAE', marginTop: 15, textAlign: 'center' }}>Medium Roasted</Text>
              </View>
            </View>

          </View>
          <Text style={st.textTitlecon}>Description</Text>
          <Text numberOfLines={3} style={st.textTitlecon1}>  - 
          {props.u.content}.</Text>
          <Text style={{fontSize: 21, color: '#AEAEAE', fontWeight: '600', marginBottom: 20,marginTop:10,marginLeft:18}}>Size</Text>
          <Pressable style={st.container5}>
            <Text style={{ borderColor: '#D17842', borderWidth: 1, borderRadius: 7, width: 70, height: 40, color: '#D17842', textAlign: 'center', padding: 10, backgroundColor: '#141921' }}>S</Text>
            <Text style={{ borderWidth: 1, borderRadius: 7, width: 70, height: 40, color: 'white', textAlign: 'center', padding: 10, backgroundColor: '#141921' }}>M</Text>
            <Text style={{ borderWidth: 1, borderRadius: 7, width: 70, height: 40, color: 'white', textAlign: 'center', padding: 10, backgroundColor: '#141921' }}>L</Text>
          </Pressable>
          <Text style={{ fontSize: 15, fontWeight: '500', fontFamily: 'Poppins', color: '#AEAEAE', marginLeft: 60, marginTop: 30 }}>Price</Text>
          <View style={st.container6}>
            <Text style={{ fontSize: 24, fontWeight: '600', fontFamily: 'Poppins', color: '#FFFFFF', marginLeft: 25, marginTop: 10, alignSelf: 'center' }}> <Text style={{ fontSize: 20, fontWeight: '600', fontFamily: 'Poppins', color: '#D17842' }}>$  </Text>{props.u.price}</Text>
            <Pressable style={st.btn} onPress={Click}>
              <Text style={{ fontSize: 19, fontWeight: '600', alignSelf: 'center', marginTop: 10, color: 'white' }}>Add to Cart</Text>
            </Pressable>
          </View>
      

       
    </View>
  )
}

React.useEffect( ()=>{
  getList(); // gọi hàm lấy danh sách
},[]); 
  const {navigation}=props;
  const Click =()=>{
    navigation.navigate('Cart')
  }
  return (
    <View style={st.container}>
      <SafeAreaView>
        <ScrollView >


          <Image style={st.img}
            source={require('./images/cafe.jpg')}
          />
          <View style={st.title}>
            <View >
              <Text style={st.text} >Cappuccino</Text>
              <Text style={st.text1} >With Steamed Milk</Text>
              <View style={st.container1}>
                <Image style={{ width: 30, height: 25, marginLeft: 18, marginTop: 20 }} source={require('./images/star.png')} />
                <Text style={{ fontSize: 25, color: 'white', fontFamily: 'Poppins', marginLeft: 18, marginTop: 20 }} >4.5  <Text style={{ fontSize: 15, color: 'white', fontFamily: 'Poppins' }}>(6879)</Text></Text>
              </View>
            </View>
            {/*  */}

            <View>
              <View style={{ flexDirection: 'row', margin: 6 }}>
                <View style={st.container2}>
                  <Image style={{ width: 30, height: 25, alignSelf: 'center', marginTop: 5 }} source={require('./images/fee.png')} />
                  <Text style={{ fontSize: 10, color: '#AEAEAE', alignSelf: 'center', marginTop: 5 }}>Coffee</Text>
                </View>
                <View style={st.container3}>
                  <Image style={{ width: 28, height: 28, alignSelf: 'center', marginTop: 5 }} source={require('./images/milk.png')} />
                  <Text style={{ fontSize: 10, color: '#AEAEAE', alignSelf: 'center', marginTop: 5 }}>Milk</Text>
                </View>

              </View>
              <View style={st.container4}>
                <Text style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: 15, color: '#AEAEAE', marginTop: 15, textAlign: 'center' }}>Medium Roasted</Text>
              </View>
            </View>

          </View>




          <Text style={st.textTitlecon}>Description</Text>
          <Text numberOfLines={3} style={st.textTitlecon1}>Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.</Text>
          <Text style={{fontSize: 21, color: '#AEAEAE', fontWeight: '600', marginBottom: 20,marginTop:10,marginLeft:18}}>Size</Text>
          <Pressable style={st.container5}>
            <Text style={{ borderColor: '#D17842', borderWidth: 1, borderRadius: 7, width: 70, height: 40, color: '#D17842', textAlign: 'center', padding: 10, backgroundColor: '#141921' }}>S</Text>
            <Text style={{ borderWidth: 1, borderRadius: 7, width: 70, height: 40, color: 'white', textAlign: 'center', padding: 10, backgroundColor: '#141921' }}>M</Text>
            <Text style={{ borderWidth: 1, borderRadius: 7, width: 70, height: 40, color: 'white', textAlign: 'center', padding: 10, backgroundColor: '#141921' }}>L</Text>
          </Pressable>
          <Text style={{ fontSize: 15, fontWeight: '500', fontFamily: 'Poppins', color: '#AEAEAE', marginLeft: 60, marginTop: 30 }}>Price</Text>
          <View style={st.container6}>
            <Text style={{ fontSize: 24, fontWeight: '600', fontFamily: 'Poppins', color: '#FFFFFF', marginLeft: 25, marginTop: 10, alignSelf: 'center' }}> <Text style={{ fontSize: 20, fontWeight: '600', fontFamily: 'Poppins', color: '#D17842' }}>$  </Text>420</Text>
            <Pressable style={st.btn} onPress={Click}>
              <Text style={{ fontSize: 19, fontWeight: '600', alignSelf: 'center', marginTop: 10, color: 'white' }}>Add to Cart</Text>
            </Pressable>
          </View>
          <FlatList 
        data={ dsUser }
        renderItem={ ({item}) => <RowList u = {item} />   }
        keyExtractor={ item => item.id }
        />


        </ScrollView>
      </SafeAreaView>
    </View>


  )
}

export default Detail

const st = StyleSheet.create({
  container: {
    backgroundColor: "#0C0F14",
    flex: 1,

  },
  img: {
    width: '100%', height: 350,
    borderRadius: 10,
    alignSelf: 'center',
    margin: 5
  },
  title: {
    width: '100%', height: 148,
    borderRadius: 10,
    borderColor: '#D17842',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text:{
    fontSize: 28, color: 'white', fontFamily: 'Poppins', marginLeft: 18, marginTop: 17 
  },
  text1:{
    fontSize: 15, color: 'white', fontFamily: 'Poppins', marginLeft: 18, fontWeight: '500' 
  },
  container1:{
    flexDirection: 'row', alignItems: 'center'
  },
  container2:{
    width: 55, height: 55, backgroundColor: '#141921', margin: 10, borderRadius: 10 
  },
  container3:{
    width: 55, height: 55, backgroundColor: '#141921', margin: 10, borderRadius: 10
  },
  container4:{
    width: 125, height: 55, backgroundColor: '#141921', borderRadius: 10, marginLeft: 21
  },
  container5:{
    flexDirection: 'row', justifyContent: 'space-around', 
  },
  container6:{
    flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 
  },
  textTitle: {
    fontSize: 30,
    color: '#1A5276',
    fontWeight: '500',
    alignSelf: 'center',
    marginBottom: 20
  },
  textTitlecon: {
    fontSize: 21,
    color: '#AEAEAE',
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 14,
    fontFamily: 'Poppins'
  },
  textTitlecon1: {
    fontSize: 17,
    color: 'white',
    fontWeight: '400',
    marginTop: 10,
    marginLeft: 14,
    fontFamily: 'Poppins'
  },
  tien: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'red'
  },
  btn: {

    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: 240,
    height: 70,
    backgroundColor: '#D17842',
    alignSelf: 'center'
  }

})
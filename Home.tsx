import { Alert, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
const link_api = 'https://66613a1a63e6a0189fe8f009.mockapi.io/Product'
const App = (props) => {
  const { navigation } = props;
  const Click = () => {
    navigation.navigate('Detail')
  }
  const Click2 = () => {
    navigation.navigate('ListSanPham')
  }
  const Click3 = () => {
    navigation.navigate('AddSP')
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
  const RowList = (props) => {
    console.log(props); // log để xem thuộc tính
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ backgroundColor: '#252A32', margin: 10, width: 190, height: 250, borderRadius: 20, alignItems: 'center', flex: 1 }}>

          <Image style={{ width: 126, height: 126, borderRadius: 10, margin: 10 }} source={require('./images/coffe4.png')} width={100}
            height={100} />

          <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Poppins', fontWeight: '400', marginTop: 1 }}>
            {props.u.name}

          </Text>
          <Text style={st.textTitlecon}>With Steamed Milk</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, fontFamily: 'Poppins', fontWeight: '800', color: 'white',marginTop:8 }}>
              $   {props.u.price}
            </Text>
            <Pressable style={{ width: 50, height: 30, backgroundColor: '#D17842', borderRadius: 7, padding: 3, marginLeft:35, marginTop: 4 }}>
              <Text style={{ alignSelf: 'center', fontSize: 15 }}>Delete </Text>
            </Pressable>
          </View>

        </View>
        <View style={{ backgroundColor: '#252A32', margin: 10, width: 190, height: 250, borderRadius: 20, alignItems: 'center', flex: 1 }}>

          <Image style={{ width: 126, height: 126, borderRadius: 10, margin: 10 }} source={require('./images/coffee1.png')} width={100}
            height={100} />

          <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Poppins', fontWeight: '400', marginTop: 1 }}>
            {props.u.name}

          </Text>
          <Text style={st.textTitlecon}>With Steamed Milk</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, fontFamily: 'Poppins', fontWeight: '800', color: 'white',marginTop:8 }}>
              $   {props.u.price}
            </Text>
            <Pressable style={{ width: 50, height: 30, backgroundColor: '#D17842', borderRadius: 7, padding: 3, marginLeft:35, marginTop: 4 }}onPress={()=>DeleteRow(props.u.id)}>
              <Text style={{ alignSelf: 'center', fontSize: 15 }}>Delete </Text>
            </Pressable>
          </View>
        </View>
      </View>

    )
  }
  React.useEffect(() => {
    getList(); // gọi hàm lấy danh sách
  }, []);

  const DeleteRow = async (id)=>{
    try {
      // đợi xóa
      await fetch(link_api + "/" + id , { method:'DELETE'});
      Alert.alert("Đã xóa thành công");
      // có thể gọi hàm getList để lấy lại danh sách hoặc xóa trực tiếp ở state dsUser
      getList();

    } catch (error) {
      
    }
  }
  return (
    <View style={st.container}>
      <SafeAreaView>
        <ScrollView>

          <View style={st.row}>
            <TouchableOpacity onPress={Click2}>
              <Image style={st.img}
                source={require('./images/cafe.jpg')}
              />
            </TouchableOpacity>
<TouchableOpacity onPress={Click3}>
<Image style={st.img}
              source={require('./images/people.png')}
            />
</TouchableOpacity>
           
          </View>
          <Text style={st.textTitle}>Find the best{'\n'}coffe for your</Text>
          <TextInput style={st.input} placeholder='Find to here'
            placeholderTextColor='#1A5276'

          />
          <View style={st.container1}>
            <Text style={{ fontSize: 17, fontWeight: '600', color: '#D17842', margin: 17, }}>All</Text>
            <Text style={st.textTitle1}>Cappuccino</Text>
            <Text style={st.textTitle1}>Espresso</Text>
            <Text style={st.textTitle1}>Americano</Text>
          </View>
          <Text style={{ color: '#FFFF', fontSize: 20, fontWeight: 700, marginLeft: 20 }}>Buy multiple</Text>
          <View style={st.containerTong}>

            <View style={st.container2}>
              <TouchableOpacity onPress={Click}>
                <Image style={st.img1}
                  source={require('./images/cafe.jpg')}
                />
              </TouchableOpacity>

              <Text style={st.textTitlecon}>Cappuccino</Text>
              <Text style={st.textTitlecon}>With Steamed Milk</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={st.textTitlecon1}><Text style={st.tien}>$</Text>  13.0</Text>
                <Pressable style={st.btn}>
                  <Text style={{ alignSelf: 'center', fontSize: 23 }}> + </Text>
                </Pressable>
              </View>
            </View>

            <View style={st.container2}>
              <TouchableOpacity onPress={Click}>
                <Image style={st.img1}
                  source={require('./images/trasua.jpg')}
                />
              </TouchableOpacity>

              <Text style={st.textTitlecon}>Cappuccino</Text>
              <Text style={st.textTitlecon}>With Foam</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={st.textTitlecon1}><Text style={st.tien}>$</Text>  17.0</Text>
                <Pressable style={st.btn}>
                  <Text style={{ alignSelf: 'center', fontSize: 23 }}> + </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <Text style={{ color: '#FFFF', fontSize: 18, fontWeight: '500', marginLeft: 20 }}>Coffee beans</Text>
          <View style={st.containerTong}>
            <View style={st.container2}>
              <TouchableOpacity onPress={Click}>
                <Image style={st.img1}
                  source={require('./images/coffe4.png')}
                />
              </TouchableOpacity>

              <Text style={st.textTitlecon}>Robusta Beans</Text>
              <Text style={st.textTitlecon}>Medium Roasted</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={st.textTitlecon1}><Text style={st.tien}>$</Text>  10.0</Text>
                <Pressable style={st.btn}>
                  <Text style={{ alignSelf: 'center', fontSize: 23 }}> + </Text>
                </Pressable>
              </View>
            </View>
            <View style={st.container2}>
              <Image style={st.img1}
                source={require('./images/coffe3.png')}
              />
              <Text style={st.textTitlecon}>Cappuccino</Text>
              <Text style={st.textTitlecon}>With Steamed Milk</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={st.textTitlecon1}><Text style={st.tien}>$</Text>  20.0</Text>
                <Pressable style={st.btn}>
                  <Text style={{ alignSelf: 'center', fontSize: 23 }}> + </Text>
                </Pressable>
              </View>
            </View>

          </View>
          <Text style={{ color: '#FFFF', fontSize: 20, fontWeight: 700, marginLeft: 20 }}>New product</Text>
          <View style={st.containerTong}>
            <View style={st.container2}>
              <Image style={st.img1}
                source={require('./images/coffee2.png')}
              />
              <Text style={st.textTitlecon}>Cappuccino</Text>
              <Text style={st.textTitlecon}>With Steamed Milk</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={st.textTitlecon1}><Text style={st.tien}>$</Text>  13.0</Text>
                <Pressable style={st.btn}>
                  <Text style={{ alignSelf: 'center', fontSize: 23 }}> + </Text>
                </Pressable>
              </View>
            </View>
            <View style={st.container2}>
              <Image style={st.img1}
                source={require('./images/coffee1.png')}
              />
              <Text style={st.textTitlecon}>Cappuccino</Text>
              <Text style={st.textTitlecon}>With Steamed Milk</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={st.textTitlecon1}><Text style={st.tien}>$</Text>  34.0</Text>
                <Pressable style={st.btn}>
                  <Text style={{ alignSelf: 'center', fontSize: 23 }}> + </Text>
                </Pressable>
              </View>
            </View>

          </View>
          <FlatList
            data={dsUser}
            renderItem={({ item }) => <RowList u={item} />}
            keyExtractor={item => item.id}
          />
     

        </ScrollView>
      </SafeAreaView>


    </View>

  )
}

export default App

const st = StyleSheet.create({
  container: {
    backgroundColor: "#0C0F14",
    flex: 1,

  },
  img1: {
    width: 126, height: 126,
    borderWidth: 5,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 5
  },
  textTitlecon: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: '400',
    marginLeft: 32,

    marginTop: 6


  },
  textTitlecon1: {
    fontSize: 25,
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: '600',
    marginLeft: 32,

    marginTop: 6
  },
  tien: {

    fontWeight: '600',
    fontSize: 25,
    color: '#D17842',
    fontFamily: 'Poppins'
  },



  textTitle: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 8
  },
  img: {
    width: 40, height: 40,
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 15,
    margin: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  input: {
    color: '#52555A',
    width: 370,
    height: 45,
    margin: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#141921',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500'


  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  textTitle1: {
    fontSize: 17,
    color: '#52555A',
    fontWeight: '600',

    margin: 17,


    marginBottom: 14

  },
  container2: {
    flex: 1, // Đặt độ rộng cho mỗi View bằng nhau
    height: 250,
    backgroundColor: '#252A32',
    width: 150,
    margin: 8,
    marginLeft: 5,
    borderRadius: 23
  },
  containerTong: {
    flexDirection: 'row', // Đặt các View con theo hàng ngang
    justifyContent: 'space-around',
  },
  btn: {
    width: 30,
    height: 30,
    backgroundColor: '#D17842',
    borderRadius: 7,

    marginRight: 14,
    marginTop: 10


  }
})
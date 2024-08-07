import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
const link_api = 'https://6667d853f53957909ff57771.mockapi.io/LoveProduct'
const LoveProduct = () => {
  const [dsUser, setDsUser] = useState([]);

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
    <View style={{backgroundColor:'#0C0F14',alignItems:'center'}}>
      <Image source={{uri: props.u.image}} width={410}
            height={400} borderRadius={10}/>
 <View style={st.title}>
              <View >
                <Text style={st.text} >  {props.u.name } </Text>
                <Text style={st.text1} >With Steamed Milk</Text>
                <View style={st.container5}>
                  <Image style={{ width: 30, height: 25, marginLeft: 18, marginTop: 20 }} source={require('./images/star.png')} />
                  <Text style={{ fontSize: 25, color: 'white', fontFamily: 'Poppins', marginLeft: 18, marginTop: 20 }} >4.5  <Text style={{ fontSize: 15, color: 'white', fontFamily: 'Poppins' }}>(6879)</Text></Text>
                </View>
              </View>
             

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
            <View style={st.container6}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#AEAEAE', marginLeft: 40, marginTop: 20 }}>Description</Text>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#FFFFFF', marginLeft: 40, marginTop: 5 }}>  {props.u.content}</Text>
            </View>
       

      
    </View>
  )
}
React.useEffect( ()=>{
  getList(); // gọi hàm lấy danh sách
},[]);  
  return (
    <View style={st.container}>
      <View style={st.row}>
        <Image style={st.img1}
          source={require('./images/cafe.jpg')}
        />
        <Text style={st.textTitle}>Favorites</Text>
        <Image style={st.img1}
          source={require('./images/people.png')}
        />
      </View>

      <SafeAreaView>
        <ScrollView>
          <View style={st.container1}>
            <Image style={st.img}
              source={require('./images/cafe.jpg')}
            />
            <View style={st.title}>
              <View >
                <Text style={st.text} >Cappuccino</Text>
                <Text style={st.text1} >With Steamed Milk</Text>
                <View style={st.container5}>
                  <Image style={{ width: 30, height: 25, marginLeft: 18, marginTop: 20 }} source={require('./images/star.png')} />
                  <Text style={{ fontSize: 25, color: 'white', fontFamily: 'Poppins', marginLeft: 18, marginTop: 20 }} >4.5  <Text style={{ fontSize: 15, color: 'white', fontFamily: 'Poppins' }}>(6879)</Text></Text>
                </View>
              </View>
             

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
            <View style={st.container6}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#AEAEAE', marginLeft: 40, marginTop: 20 }}>Description</Text>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#FFFFFF', marginLeft: 40, marginTop: 5 }}>Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.</Text>
            </View>
          </View>


          <View style={st.container1}>
            <Image style={st.img}
              source={require('./images/coffee1.png')}
            />
            <View style={st.title}>
              <View >
                <Text style={st.text} >Cappuccino</Text>
                <Text style={st.text1} >With Steamed Milk</Text>
                <View style={st.container5}>
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
            <View style={st.container6}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#AEAEAE', marginLeft: 40, marginTop: 20 }}>Description</Text>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#FFFFFF', marginLeft: 40, marginTop: 5 }}>Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.</Text>
            </View>
          </View>


          <View style={st.container1}>
            <Image style={st.img}
              source={require('./images/coffee2.png')}
            />
            <View style={st.title}>
              <View >
                <Text style={st.text} >Cappuccino</Text>
                <Text style={st.text1} >With Steamed Milk</Text>
                <View style={st.container5}>
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
            <View style={st.container6}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#AEAEAE', marginLeft: 40, marginTop: 20 }}>Description</Text>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#FFFFFF', marginLeft: 40, marginTop: 5 }}>Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.</Text>
            </View>
          </View>

          <View style={st.container1}>
            <Image style={st.img}
              source={require('./images/coffe3.png')}
            />
            <View style={st.title}>
              <View >
                <Text style={st.text} >Cappuccino</Text>
                <Text style={st.text1} >With Steamed Milk</Text>
                <View style={st.container5}>
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
            <View style={st.container6}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#AEAEAE', marginLeft: 40, marginTop: 20 }}>Description</Text>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#FFFFFF', marginLeft: 40, marginTop: 5 }}>Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.</Text>
            </View>
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

export default LoveProduct

const st = StyleSheet.create({
  container: {
    backgroundColor: "#0C0F14",
    flex: 1,

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
  container1: {
    width: '98%', height: 570,
    marginTop:40
  },
  title: {
    width: '100%', height: 148,
    borderRadius: 10,
    borderColor: '#D17842',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 28, color: 'white', fontFamily: 'Poppins', marginLeft: 18, marginTop: 17
  },
  text1: {
    fontSize: 15, color: 'white', fontFamily: 'Poppins', marginLeft: 18, fontWeight: '500'
  },
  container5: {
    flexDirection: 'row', alignItems: 'center'
  },
  container2: {
    width: 55, height: 55, backgroundColor: '#141921', margin: 10, borderRadius: 10
  },
  container3: {
    width: 55, height: 55, backgroundColor: '#141921', margin: 10, borderRadius: 10
  },
  container4: {
    width: 125, height: 55, backgroundColor: '#141921', borderRadius: 10, marginLeft: 21
  },
  container6: {
    width: '100%', height: 120, backgroundColor: '#141921', borderRadius: 10
  },
  textTitle: {
    fontSize: 24,
    color: '#FFFF',
    fontWeight: '600',
    alignSelf: 'center',
    fontFamily: 'Poppins',
    marginBottom: 14
  },
  img: {
    width: '100%', height: 300,
    borderWidth: 5,
    borderTopLeftRadius: 10, borderTopRightRadius: 10,
    alignSelf: 'center',

  },
  duy: {
    fontSize: 25,
    fontWeight: '400'
  },
  duy1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1A5276'
  }
})
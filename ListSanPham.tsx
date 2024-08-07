import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const DSDB=[
  {id:1,name:'Trà sữa',content:'Trà sữa là 1 loại thức uống kết hợp từ 2 nguyên liệu chính là trà và sữa. Mỗi loại trà sữa có sự khác nhau giữa nguồn gốc, nguyên liệu, tỷ lệ, cách pha, cũng như có bổ sung các thành phần phụ khác',photo:require('./images/trasua.jpg')},
  {id:2,name:'Cà phê',content:'Cà phê (gốc từ café trong tiếng Pháp) là một loại thức uống màu đen có chứa chất caffein, được sản xuất từ những hạt cà phê rang lên. Cà phê được sử dụng lần đầu tiên vào thế kỉ thứ 9, khi nó được khám phá ra từ vùng cao nguyên Ethiopia.',photo:require('./images/cafe.jpg')},
  {id:3,name:'Sữa tươi',content:'Sữa tươi là sữa của động vật như sữa bò, sữa dê, sữa cừu,… ở dạng nước và chưa được tiệt trùng hay khử trùng bởi các thiết bị xử lý nhiệt',photo:require('./images/milk.jpg')},
  {id:4,name:'Kem quế',content:'Món kem tươi trong mùa hè này vừa đảm bảo vệ sinh, vừa có thể thoải mái tự chế biến theo đúng hương vị, khẩu vị mà bạn yêu thích đều được, chắc chắn sẽ có được món kem ngon hợp khẩu vị của cả nhà.',photo:require('./images/kem.jpg')},
  {id:5,name:'Bánh trứng muối',content:'Bánh ở đây được làm theo phương thức truyền thống, kích thước nhỏ như chiếc cupcake, độ ngọt vừa phải, vỏ bánh được nướng vàng, hương vị thơm mùi trứng sữa và vị béo của trứng muối',photo:require('./images/trungmuoi.jpg')},
  {id:6,name:'Trà sữa',content:'Trà sữa là 1 loại thức uống kết hợp từ 2 nguyên liệu chính là trà và sữa. Mỗi loại trà sữa có sự khác nhau giữa nguồn gốc, nguyên liệu, tỷ lệ, cách pha, cũng như có bổ sung các thành phần phụ khác',photo:require('./images/trasua.jpg')},
  {id:7,name:'Trà sữa',content:'Trà sữa là 1 loại thức uống kết hợp từ 2 nguyên liệu chính là trà và sữa. Mỗi loại trà sữa có sự khác nhau giữa nguồn gốc, nguyên liệu, tỷ lệ, cách pha, cũng như có bổ sung các thành phần phụ khác',photo:require('./images/trasua.jpg')},
  {id:8,name:'Trà sữa',content:'Trà sữa là 1 loại thức uống kết hợp từ 2 nguyên liệu chính là trà và sữa. Mỗi loại trà sữa có sự khác nhau giữa nguồn gốc, nguyên liệu, tỷ lệ, cách pha, cũng như có bổ sung các thành phần phụ khác',photo:require('./images/trasua.jpg')},
  {id:9,name:'Cà phê',content:'Cà phê (gốc từ café trong tiếng Pháp) là một loại thức uống màu đen có chứa chất caffein, được sản xuất từ những hạt cà phê rang lên. Cà phê được sử dụng lần đầu tiên vào thế kỉ thứ 9, khi nó được khám phá ra từ vùng cao nguyên Ethiopia.',photo:require('./images/cafe.jpg')},
  {id:10,name:'Sữa tươi',content:'Sữa tươi là sữa của động vật như sữa bò, sữa dê, sữa cừu,… ở dạng nước và chưa được tiệt trùng hay khử trùng bởi các thiết bị xử lý nhiệt',photo:require('./images/milk.jpg')},



];
const CompItem =({sp}) =>{
  return(
<View style={st.container}>
  <Image style={st.img} source={sp.photo} />
  <View>
    <Text style={st.txt}>
      {sp.name}
    </Text>
    <Text 
      style={st.txt1}
     numberOfLines={2}>
      {sp.content}
    </Text>
  </View>
</View>
  )
}
const App = () => {
  return (
    <View>
      <SafeAreaView>
        <FlatList  
        style={st.list}
        data={DSDB}
        renderItem={({item}) =><CompItem sp={item}/>}
        keyExtractor={item =>item.id.toString}
        />
        
      </SafeAreaView>
     
    </View>
  )
}

export default App

const st = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 10,
    flex:1,
    alignItems: 'center',
backgroundColor:'#0C0F14'
  },
  img:{
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 20,
  },
  txt:{
    fontSize:23,
    fontWeight:'700',
    color:'#D17842',
    fontFamily: 'Poppins',
  },
  txt1:{
    fontSize:20,
    fontWeight:'500',
    color:'#828282',
    fontFamily: 'Poppins',
    width:Dimensions.get('window').width-60-20
  },

  list:{

  }

})
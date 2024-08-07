import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';

const link_api = 'https://66613a1a63e6a0189fe8f009.mockapi.io/Product'
const Add = () => {
    const [dsUser, setDsUser] = useState([]); // khai báo state để lưu ds
    //viết hàm lấy dữ liệu
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
          <View style={{backgroundColor:'#0C0F14'}}>
            
    
            <Text style={{  fontFamily: 'Poppins', fontWeight: '400', marginTop: 1 }}>
            {props.u.name}</Text>
            <Text style={{ fontWeight: '800',marginTop:8 }}>
                {props.u.price}
            </Text>
           
          </View>
        )
      }
    const [uname, setUname] = useState('');
    const [price, setPrice] = useState(0); 
    const SaveNew = async ()=>{
        try {
          // tạo đối tượng để thêm mới
          let tmpU = { name: uname, price: price }
          
          let res =  await fetch( link_api , {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(  tmpU  ),
              });
          let kq = res.json();
  
          Alert.alert("Thêm thành công" );
            getList(); // tải lại danh sách
  
        } catch (error) {
          Alert.alert("Lỗi thêm: "+ error.message )
        }
    }
  return (
    <View style={{ backgroundColor: "#0C0F14",
        flex: 1,
        alignItems: 'center',
    }}>
    
      <TextInput style={{width:'80%',height:50,padding:10,backgroundColor:'#252A32',margin:10,borderRadius:10,color:'#828282',fontSize:20}} placeholder='Nhập tên sản phẩm'
          onChangeText={setUname} />
      <TextInput style={{width:'80%',height:50,padding:10,backgroundColor:'#252A32',margin:10,borderRadius:10,color:'#828282',fontSize:20}} placeholder='Nhập giá'
          onChangeText={(txt)=>setPrice ( Number(txt) )  } />
   <Pressable  style={{width:'70%',height:50,backgroundColor:'orange',borderRadius:10,padding:12,alignItems:'center'}}onPress={SaveNew}>
    <Text style={{fontSize:20}}>ADD</Text>
   </Pressable>
   <FlatList
            data={dsUser}
            renderItem={({ item }) => <RowList u={item} />}
            keyExtractor={item => item.id}
          />
  
    </View>
  )
}

export default Add

const styles = StyleSheet.create({})
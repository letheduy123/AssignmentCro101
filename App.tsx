
import { Alert, Image, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';


import Login from './Login';
import Splash from './Splash';
import Signup from './Signup';
import Home from './Home';
import GoogleAcount from './GoogleAcount';
import GooglePassWord from './GooglePassWord';
import ForgotPassword from './ForgotPassword';
import Cart from './Cart';
import LoveProduct from './LoveProduct';
import Contact from './Contact';
import Detail from './Detail';
import ListSanPham from './ListSanPham';
import Payment from './Payment';
import Add from './Add';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const MyHeader = () => {
  return (<View style={{ height: 150, width: '100%', backgroundColor: 'green' }}>
    <Image style={{ width: 150, height: 100, alignSelf: 'center' }} source={require('./images/FPT_Polytechnic.png')}
      resizeMode='center' />

    <Text style={{ fontSize: 20, alignSelf: 'center' }}>Họ và tên:Lê Thế Duy</Text>
  </View>)
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
         <Drawer.Screen name="Home" component={TabNavigator} options={{ title: 'Trang chủ' }} />
         <Drawer.Screen name="Cart" component={Cart} options={{ title: 'Giỏ hàng' }} />
         <Drawer.Screen name="Contact" component={Contact} options={{ title: 'Liên hệ' }} />
         <Drawer.Screen name="Detail" component={Detail} options={{ title: 'Chi tiết' }} />
         <Drawer.Screen name="ListProduct" component={ListSanPham} options={{ title: 'Danh sách sản phẩm' }} />
         <Drawer.Screen name="LoveProduct" component={LoveProduct} options={{ title: 'Sản phẩm yêu thích' }} />
         <Drawer.Screen name="Payment" component={Payment} options={{ title: 'Thanh toán' }} />
         <Drawer.Screen name="Login" component={Login} options={{ title: 'Đăng xuất' }} />
      
         

    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <MyHeader />
      <DrawerItemList {...props} />
      <DrawerItem label="" onPress={() => {
        Alert.alert('Bạn click vào phần tử thêm')
        props.navigation.closeDrawer();
      }} />
    </DrawerContentScrollView>


  );
}
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Image source={require('./images/iconhome.png')} />;
          } else if (route.name === 'Cart') {
            return <Image source={require('./images/iconbag.png')} />;
          } else if (route.name === 'LoveProduct') {
            return <Image source={require('./images/iconLove.png')} />;
          } else if (route.name === 'Contact') {
            return <Image source={require('./images/iconbell.png')} />;
          }else if(route.name ==='Add'){
            return <Image source={require('./images/add-icon.png')} />;
          }
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: false }} />
      <Tab.Screen name="Cart" component={Cart} options={{ title: 'Cart', headerShown: false }} />
      <Tab.Screen name="LoveProduct" component={LoveProduct} options={{ title: 'LoveProduct', headerShown: false }} />
      <Tab.Screen name="Contact" component={Contact} options={{ title: 'Contact', headerShown: false }} />
      <Tab.Screen name="Add" component={Add} options={{ title: 'Add', headerShown: false }} />
     
  
    </Tab.Navigator>
  );
};

const App = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{ title: 'Splash' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup', headerShown: false }} />
        {/* <Stack.Screen name="Home" component={TabNavigator} options={{ title: 'Home', headerShown: false }} /> */}
        <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }} />
       
        <Stack.Screen name="GoogleAcount" component={GoogleAcount} options={{ title: 'Google Account', headerShown: false }} />
        <Stack.Screen name="GooglePassWord" component={GooglePassWord} options={{ title: 'Google Password', headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password', headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} options={{ title: 'Detail', headerShown: false }} />
        <Stack.Screen name="ListSanPham" component={ListSanPham} options={{ title: 'ListSanPham', headerShown: false }} />
        <Stack.Screen name="Payment" component={Payment} options={{ title: 'Payment', headerShown: false }} />
        {/* <Stack.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: false }} /> */}
        {/* <Stack.Screen name="Add" component={Add} options={{ title: 'Add', headerShown: false }} /> */}
      
      
     

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;

const styles = StyleSheet.create({});




// import { Alert, Image, StyleSheet, Text, View } from 'react-native';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

// import Login from './Login';
// import Splash from './Splash';
// import Signup from './Signup';
// import Home from './Home';
// import GoogleAcount from './GoogleAcount';
// import GooglePassWord from './GooglePassWord';
// import ForgotPassword from './ForgotPassword';
// import Cart from './Cart';
// import LoveProduct from './LoveProduct';
// import Contact from './Contact';
// import Detail from './Detail';
// import ListSanPham from './ListSanPham';
// import Payment from './Payment';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const MyHeader = () => {
//   return (
//     <View style={{ height: 150, width: '100%', backgroundColor: 'green' }}>
//       <Image style={{ width: 150, height: 100, alignSelf: 'center' }} source={require('./images/FPT_Polytechnic.png')} resizeMode='center' />
//       <Text style={{ fontSize: 20, alignSelf: 'center' }}>Họ và tên: Lê Thế Duy</Text>
//     </View>
//   );
// }

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <MyHeader />
//       <DrawerItemList {...props} />
//       <DrawerItem label="Phần tử thêm" onPress={() => {
//         Alert.alert('Bạn click vào phần tử thêm');
//         props.navigation.closeDrawer();
//       }} />
//     </DrawerContentScrollView>
//   );
// }

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           if (route.name === 'Home') {
//             return <Image source={require('./images/iconhome.png')} style={{ width: size, height: size, tintColor: color }} />;
//           } else if (route.name === 'Cart') {
//             return <Image source={require('./images/iconbag.png')} style={{ width: size, height: size, tintColor: color }} />;
//           } else if (route.name === 'LoveProduct') {
//             return <Image source={require('./images/iconLove.png')} style={{ width: size, height: size, tintColor: color }} />;
//           } else if (route.name === 'Contact') {
//             return <Image source={require('./images/iconbell.png')} style={{ width: size, height: size, tintColor: color }} />;
//           }
//         },
//         tabBarActiveTintColor: 'red',
//         tabBarInactiveTintColor: 'black',
//       })}
//     >
//       <Tab.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: false }} />
//       <Tab.Screen name="Cart" component={Cart} options={{ title: 'Cart', headerShown: false }} />
//       <Tab.Screen name="LoveProduct" component={LoveProduct} options={{ title: 'LoveProduct', headerShown: false }} />
//       <Tab.Screen name="Contact" component={Contact} options={{ title: 'Contact', headerShown: false }} />
//     </Tab.Navigator>
//   );
// };

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator initialRouteName="TabNavigator" drawerContent={(props) => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="TabNavigator" component={TabNavigator} options={{ title: 'Trang chủ' }} />
//       <Drawer.Screen name="Cart" component={TabNavigator} options={{ title: 'Giỏ hàng' }} />
//     </Drawer.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Splash'>
//         <Stack.Screen name="Splash" component={Splash} options={{ title: 'Splash', headerShown: false }} />
//         <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
//         <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup', headerShown: false }} />
//         <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
//         <Stack.Screen name="GoogleAcount" component={GoogleAcount} options={{ title: 'Google Account', headerShown: false }} />
//         <Stack.Screen name="GooglePassWord" component={GooglePassWord} options={{ title: 'Google Password', headerShown: false }} />
//         <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password', headerShown: false }} />
//         <Stack.Screen name="Detail" component={Detail} options={{ title: 'Detail', headerShown: false }} />
//         <Stack.Screen name="ListSanPham" component={ListSanPham} options={{ title: 'ListSanPham', headerShown: false }} />
//         <Stack.Screen name="Payment" component={Payment} options={{ title: 'Payment', headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});





// import { Alert, Image, StyleSheet, Text, View } from 'react-native';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

// import Login from './Login';
// import Splash from './Splash';
// import Signup from './Signup';
// import Home from './Home';
// import GoogleAcount from './GoogleAcount';
// import GooglePassWord from './GooglePassWord';
// import ForgotPassword from './ForgotPassword';
// import Cart from './Cart';
// import LoveProduct from './LoveProduct';
// import Contact from './Contact';
// import Detail from './Detail';
// import ListSanPham from './ListSanPham';
// import Payment from './Payment';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const TrangChu = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: 'yellow' }}>
//       <Home />

//     </View>
//   );
// }
// const GioHang = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'cyan' }}>
//       <Cart />
//     </View>
//   );
// }

// const MyHeader = () => {
//   return (
//     <View style={{ height: 150, width: '100%', backgroundColor: 'green' }}>
//       <Image style={{ width: 150, height: 100, alignSelf: 'center' }} source={require('./images/FPT_Polytechnic.png')} resizeMode='center' />
//       <Text style={{ fontSize: 20, alignSelf: 'center' }}>Họ và tên: Lê Thế Duy</Text>
//     </View>
//   );
// }

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <MyHeader />
//       <DrawerItemList {...props} />
//       <DrawerItem label="Phần tử thêm" onPress={() => {
//         Alert.alert('Bạn click vào phần tử thêm');
//         props.navigation.closeDrawer();
//       }} />
//     </DrawerContentScrollView>
//   );
// }

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           if (route.name === 'TabHome') {
//             return <Image source={require('./images/iconhome.png')} style={{ width: size, height: size, tintColor: color }} />;
//           } else if (route.name === 'TabCart') {
//             return <Image source={require('./images/iconbag.png')} style={{ width: size, height: size, tintColor: color }} />;
//           } else if (route.name === 'TabLoveProduct') {
//             return <Image source={require('./images/iconLove.png')} style={{ width: size, height: size, tintColor: color }} />;
//           } else if (route.name === 'TabContact') {
//             return <Image source={require('./images/iconbell.png')} style={{ width: size, height: size, tintColor: color }} />;
//           }
//         },
//         tabBarActiveTintColor: 'red',
//         tabBarInactiveTintColor: 'black',
//       })}
//     >
//       <Tab.Screen name="TabHome" component={Home} options={{ title: 'Home', headerShown: false }} />
//       <Tab.Screen name="TabCart" component={Cart} options={{ title: 'Cart', headerShown: false }} />
//       <Tab.Screen name="TabLoveProduct" component={LoveProduct} options={{ title: 'LoveProduct', headerShown: false }} />
//       <Tab.Screen name="TabContact" component={Contact} options={{ title: 'Contact', headerShown: false }} />
//     </Tab.Navigator>
//   );
// };

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator initialRouteName="TabNavigator" drawerContent={(props) => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="TabNavigator" component={TabNavigator} options={{ title: 'Trang chủ' }} />
//       <Drawer.Screen name="DrawerCart" component={Cart} options={{ title: 'Giỏ hàng' }} />
//     </Drawer.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Splash'>
//         <Stack.Screen name="Splash" component={Splash} options={{ title: 'Splash', headerShown: false }} />
//         <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
//         <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup', headerShown: false }} />
//         <Stack.Screen name="MainDrawer" component={DrawerNavigator} options={{ headerShown: false }} />
//         <Stack.Screen name="GoogleAcount" component={GoogleAcount} options={{ title: 'Google Account', headerShown: false }} />
//         <Stack.Screen name="GooglePassWord" component={GooglePassWord} options={{ title: 'Google Password', headerShown: false }} />
//         <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password', headerShown: false }} />
//         <Stack.Screen name="Detail" component={Detail} options={{ title: 'Detail', headerShown: false }} />
//         <Stack.Screen name="ListSanPham" component={ListSanPham} options={{ title: 'ListSanPham', headerShown: false }} />
//         <Stack.Screen name="Payment" component={Payment} options={{ title: 'Payment', headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
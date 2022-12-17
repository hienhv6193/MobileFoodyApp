import React from 'react';
import { StyleSheet, View } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeCustomer from '../views/Customer/HomeCustomer';
import Login from '../views/Customer/Form/Login';
import Register from '../views/Customer/Form/Register';
import Category from '../views/Customer/FoodCustomer/Category';
import CartScreen from '../views/Customer/FoodCustomer/CartScreen';
import Payment from '../views/Customer/FoodCustomer/Payment';
import NotifyScreen from '../views/Customer/Like/NotifyScreen'
import ChatScreen from '../views/Customer/Like/ChatScreen'
import Profile from '../views/Customer/Profile/Profile';
import Food from '../views/Customer/FoodCustomer/Food'
import DetailsProfile from '../views/Customer/Profile/DetailsProfile';
import LikeScreen from '../views/Customer/Like/LikeScreen';
import Introduce from '../views/Customer/Introduce';
import ShoppingCart from '../views/Customer/FoodCustomer/ShoppingCart';
import DetailPopUp from '../views/Customer/FoodCustomer/DetailPopUp';
import History from '../views/Customer/FoodCustomer/History';
import HomeAdmin from '../views/Admin/HomeAdmin';
import HomeAdminShop from '../views/Shop/HomeAdminShop'
import HomeCategory from '../views/Admin/Category/HomeCategory';
import AddCate from '../views/Admin/Category/AddCate';
import EditCate from '../views/Admin/Category/EditCate';

import HomeFood from '../views/Shop/Food/HomeFood';
import AddFood from '../views/Shop/Food/AddFood';
import EditFood from '../views/Shop/Food/EditFood';

import HomeDiscount from '../views/Shop/Discount/HomeDiscount';
import AddDiscount from '../views/Shop/Discount/AddDiscount';
import EditDiscount from '../views/Shop/Discount/EditDiscount';

const navOptionHandler = () => ({
    headerShown: false
})

function HomeDrawer() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="HomeCustomer"
            screenOptions={{
                drawerStyle: { backgroundColor: '#fff' },
                drawerLabelStyle: { color: '#000' },
                headerStyle: { backgroundColor: '#fff' },
                headerTintColor: '#000',
                drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FFF' },
                drawerActiveBackgroundColor: '#fff'
            }}
        >
            <Drawer.Screen name="Home" component={HomeTab} options={{
                title: "Trang chủ",
                drawerIcon: ({ size }) => <Ionicons name='home-outline' color='#000' size={size} />
            }} />
            <Drawer.Screen name="Login" component={Login} options={{
                headerShown:false,
                title: "Đăng nhập",
                drawerIcon: ({ size }) => <Icon name='users' color='#000' size={size} />
            }} />
            <Drawer.Screen name="Register" component={Register} options={{
                headerShown:false,
                title: "Đăng ký",
                drawerIcon: ({ size }) => <Icon name='address-card' color='#000' size={size} />
            }} />
            <Drawer.Screen name="Introduce" component={Introduce} options={{
                title: "Giới thiệu",
                drawerIcon: ({ size }) => <Icon name='info' color='#000' size={size} />
            }} />
            <Drawer.Screen name="HomeAdmin" component={HomeAdmin} options={{
                title: "Home Admin",
                drawerIcon: ({ size }) => <Icon name='info' color='#000' size={size} />
            }} />
             <Drawer.Screen name="HomeAdminShop" component={HomeAdminShop} options={{
                title: "Home Admin Shop",
                drawerIcon: ({ size }) => <Icon name='info' color='#000' size={size} />
            }} />
        </Drawer.Navigator>
    )
}

function HomeTab() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',

                elevation: 0,
                backgroundColor: '#eeeeee',
                height: 50,

                opacity: 0.8,
                paddingBottom: 20,
                ...styles.shadow
            }
        }} >
            <Tab.Screen name="HomeCustomer" component={HomeCustomer} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconView}>
                        <Ionicons name='home-outline' size={20} color='#000' style={{ color: focused ? '#1976d2' : '#000' }} />
                    </View>
                )
            }} />
            <Tab.Screen name="ShoppingCart" component={ShoppingCart} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconView}>
                        <Ionicons name='cart-outline' size={20} color='#000' style={{ color: focused ? '#1976d2' : '#000' }} />
                    </View>
                )
            }} />
            <Tab.Screen name="History" component={History} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconView}>
                        <Ionicons name='receipt-outline' size={20} color='#000' style={{ color: focused ? '#1976d2' : '#000' }} />
                    </View>
                )
            }} />
            <Tab.Screen name="Notify" component={NotifyScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconView}>
                        <Ionicons name='notifications-outline' size={20} color='#000' style={{ color: focused ? '#1976d2' : '#000' }} />
                    </View>
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconView}>
                        <Ionicons name='person-outline' size={20} style={{ color: focused ? '#1976d2' : '#000' }} />
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}

function Customer() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeCustomer" component={HomeDrawer} options={navOptionHandler} />
            <Stack.Screen name="Category" component={Category} options={navOptionHandler} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={navOptionHandler} />
            <Stack.Screen name="NotifyScreen" component={NotifyScreen} options={navOptionHandler} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={navOptionHandler} />
            <Stack.Screen name="Profile" component={Profile} options={navOptionHandler} />
            <Stack.Screen name="Food" component={Food} options={navOptionHandler} />
            <Stack.Screen name="DetailPopUp" component={DetailPopUp} options={navOptionHandler} />
            <Stack.Screen name="DetailsProfile" component={DetailsProfile} options={navOptionHandler} />
            <Stack.Screen name="LikeScreen" component={LikeScreen} options={navOptionHandler} />
            <Stack.Screen name="Introduce" component={Introduce} options={navOptionHandler} />
            <Stack.Screen name="Payment" component={Payment} options={navOptionHandler} />
        </Stack.Navigator>
    )
}

export default function TagView() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Customer} options={navOptionHandler} />
            <Stack.Screen name="HomeCategory" component={HomeCategory} options={navOptionHandler} />
            <Stack.Screen name="AddCate" component={AddCate} options={navOptionHandler} />
            <Stack.Screen name="EditCate" component={EditCate} options={navOptionHandler} />
            <Stack.Screen name="HomeFood" component={HomeFood} options={navOptionHandler} />
            <Stack.Screen name="AddFood" component={AddFood} options={navOptionHandler} />
            <Stack.Screen name="EditFood" component={EditFood} options={navOptionHandler} />
            <Stack.Screen name="HomeDiscount" component={HomeDiscount} options={navOptionHandler} />
            <Stack.Screen name="AddDiscount" component={AddDiscount} options={navOptionHandler} />
            <Stack.Screen name="EditDiscount" component={EditDiscount} options={navOptionHandler} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    iconView: {
        alignContent: 'center',
        justifyContent: 'center',
        top: 10,
    },
    btn: {
        backgroundColor: '#1976d2',
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 55 / 2,
        top: -15,
    },
    notiBtn: {
        color: '#fff'
    }
});
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground, } from "react-native";
import auth from "@react-native-firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-web";

const HomeAdmin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image source={{ uri:'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'  }} style={styles.foodImg} />
        <Text style={{marginLeft: 15, marginRight: 15, fontSize: 16, fontWeight: "600", width:'65%'}}>Admin</Text>
        <TouchableOpacity style={styles.logoutBtn}>
          <Ionicons name='log-out' size={24}/>
        </TouchableOpacity>
      </View>
      <ImageBackground
        // source={{uri: ''}}
        resizeMode='cover'
        style={styles.bgContainer}
      >
        <View style={styles.bgAdmin}>
            <Text style={{color: 'yellow',  fontSize: 36}}>Admin Shop</Text>
        </View>
        <View style={styles.contentAdmin}>
          <TouchableOpacity style={styles.contentItem} onPress={() => navigation.navigate('HomeFood')}>
            <Ionicons name='home' size={24}/>
            <Text style={{fontWeight: '800',}}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentItem} onPress={() => navigation.navigate('HomeDiscount')}>
            <Ionicons name='add-circle' size={24}/>
            <Text style={{fontWeight: '800',}}>Discount</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentItem}>
            <Ionicons name='pricetags' size={24}/>
            <Text style={{fontWeight: '800',}}>Discount</Text>
          </TouchableOpacity>
          
        </View>
      </ImageBackground>
    </View>
  );
};
export default HomeAdmin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
  },
  foodImg: {
    width: 40,
    height: 40,
    borderRadius: 40/2,
    marginLeft: 15,
    
  },
  logoutBtn: {
    flexWrap: 'wrap-reverse',
  },
  bgContainer: {
    flex: 9,
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  bgAdmin: {
    flex: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    margin: 20,
    borderRadius: 15,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  contentAdmin: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentItem: {
    width: '40%',
    height: '35%',
    margin: '5%',
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }

});

import React from 'react';
import {StyleSheet ,Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

// const items =[
//     {   id: 1, 
//         name: 'Drinks',
//         img: 'https://thecoffeeland.com/wp-content/uploads/2020/12/cafe-da.jpg',
//     },
//     {   id: 2, 
//         name: 'FastFood',
//         img: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/04/fastfood-la-gi.jpg',
//     },
//     {   id: 3, 
//         name: 'Noddles',
//         img: 'https://thumbs.dreamstime.com/b/noodle-bowl-dark-background-theme-food-photography-noodle-bowl-black-background-111843316.jpg',
//     },
// ]


const Category = ({navigation,}) => {
    return(
        <View style={styles.container}>
            <View style={styles.view}>
                <View style={{flex:1}} />
                    <Text style={styles.tk}>Danh mục món ăn</Text>
                <View style={{flex:1}} />
                <Ionicons  name='cart-outline' size={25} color='#000' style={{marginTop:17,paddingEnd:10}}/>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Food')}}>
                    <Image style={styles.imgCate} source={{uri:'https://thecoffeeland.com/wp-content/uploads/2020/12/cafe-da.jpg'}}/>
                    <Text style={{textAlign:'center',fontSize: 20}}>Drinks</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Food')}}>
                    <Image style={styles.imgCate} source={{uri:'https://cdn.cet.edu.vn/wp-content/uploads/2019/04/fastfood-la-gi.jpg'}}/>
                    <Text style={{textAlign:'center',fontSize: 20}}>FastFood</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Food')}}>
                    <Image style={styles.imgCate} source={{uri:'https://thumbs.dreamstime.com/b/noodle-bowl-dark-background-theme-food-photography-noodle-bowl-black-background-111843316.jpg'}}/>
                    <Text style={{textAlign:'center',fontSize: 20}}>Noddles</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        height: 55,
        backgroundColor: '#3325ff',
        flexDirection: 'row',
    },
    tk: {
        lineHeight: 55,
        color: 'white',
        fontSize: 20,
        color: 'black',
        fontWeight:'bold',
    },
    imgCate:{
        width:100,
        height:100,
        marginStart: 17,
        marginTop: 25,
    },
});
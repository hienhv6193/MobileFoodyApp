import { Platform, ImageBackground, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { postFood } from '../../../redux/actions/DiscountAction';

import React, { useState } from 'react';


const AddDiscount = ({
    navigation,
}) => {
    const db = useSelector(store => store.disccount)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [discount, setDiscount] = useState(0);
    const save = () => {
        let newFood = {
            TenGG: name,
            MucGG: discount
        }
        dispatch(postFood(newFood));
        navigation.navigate('HomeDiscount');
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row',width:'100%',justifyContent:'space-between'}}> 
                <TextInput  style={styles.txt} placeholder='Nhập mã mới' onChangeText={(val) => setName(val)}/>
                <TouchableOpacity style={styles.btn} onPress={() => save()}>
                    <Text>GO</Text>
                </TouchableOpacity>
                
            </View>
            <TextInput style={styles.txt1} placeholder='Mức giá' placeholderTextColor='gray' onChangeText={(val) => setDiscount(val)}/>
        </View>
    )
}

export default AddDiscount;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding:50
    },
    txt:{
        width:'70%',
        borderBottomWidth:1
    },
    btn:{
        backgroundColor:'#4caf50',
        color:'white',
        padding:6
    },
    txt1:{
        width:'30%',
        height:40,
        borderWidth:1,
        paddingLeft:5,
        marginTop:10,
        alignSelf:'flex-start'
    },
});
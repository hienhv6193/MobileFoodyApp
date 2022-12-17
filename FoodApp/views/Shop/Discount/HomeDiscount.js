import React from 'react';
import { Alert, StyleSheet, Text, View, Image, FlatList, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useState, useRef } from 'react';

import { fetchAllDiscount,deleteF } from '../../../redux/actions/DiscountAction';

const HomeDiscount = ({
    navigation,
}) => {
    const db = useSelector(store => store.disccount)
    const dispatch = useDispatch();
    
    const del = (docId) => {

        dispatch(deleteF(docId));
        
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        dispatch(fetchAllDiscount())
       
      
    }, []
    )
    const ItemComponent = ({ item }) => {
        return (
            <View style={{flexDirection:'row',padding:10,justifyContent:'space-around'}}>
                <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/736x/45/32/68/4532682cc46c07401e0d6d56d7fb6914.jpg' }} />
                <View>
                    <Text style={{ flexWrap: 'wrap', width: 200, color: 'red' }}>{item.TenGG}</Text>
                    <Text style={styles.txt}>{item.MucGG}VND</Text>
                    <View style={{   width: 200, marginTop: 25 }} >
                       
                        <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}>
                            <Text style={{textAlign: 'center', color: 'white' }} onPress={() => del(item.docId)}> Xoá  </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='stretch' style={styles.topBackground} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjtuScn0qKR1QnQgY7yB1Z5VsxcQ4l2Kq7qtCRXTGCMEAjJp2noanJv5DJ4YdlqVVs_E&usqp=CAU' }}>
                <Text style={styles.tittle}>sale Admin</Text>
                <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('AddDiscount')} >
                    <Text style={{ color: 'white' }} > Thêm giảm giá </Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.bottomView}>
                <FlatList

                    data={db.discs}
                    renderItem={ItemComponent}
                >

                </FlatList>

            </View>
        </View>
    )

}

export default HomeDiscount;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topBackground: {
        flex: 1,
        justifyContent: 'space-around',
        width: '100%',
        height: '80%',
        opacity: 0.75,
        flexDirection: 'row',
        paddingHorizontal: 30
    },
    tittle: {
        textTransform: 'uppercase',
        width: 170,
        fontSize: 45,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#4caf50',
        margin: 50
    },
    btnAdd: {
        backgroundColor: '#4caf50',
        height: 50,
        justifyContent: 'center',
        padding: 5,
        borderRadius: 5,
        marginTop: 100,
        marginRight: 10
    },
    bottomView: {

        backgroundColor: '#c8e6c9',
        paddingVertical: 15,
        flex: 2,
        width: '100%',

    },
    img: {
        height: 100,
        width: 100
    }, txt: {
        color: 'red',
        fontWeight: '700'
    }
});
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from 'react-native';
import { FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchAllFood, fetchSearchFood } from '../../../redux/actions/foodAction';


const Food = ({
    navigation, route
}) => {
    
    const db = useSelector((state) => state.foods);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const handleSeachFood = (key) => {
        dispatch(fetchSearchFood(key))
    }
    useEffect(() => {
        dispatch(fetchAllFood())
    }, []
    
    )
    
    const { productId } = route.params;
    const { productImg } = route.params;
    const { productName } = route.params;
    const [id, setId] = useState(productId);
   
    const MainComponent = ({ item }) => {
        return (
            item.MaDM == id ?
                <View style={styles.mainContent}>
                    <TouchableOpacity style={styles.mainContainer} onPress={() => { navigation.navigate('DetailPopUp',
                    {
                        foodId:item.docId,
                        foodName:item.TenMA,
                        foodPrice:item.Gia,
                        foodDes:item.MoTa,
                        foodImg:item.HinhMA,
                        foodCoupon:item.MaGG,
                        foodCount:item.Soluong
                    }
                    ) }} >
                        <Image source={{ uri: item.HinhMA }} style={styles.foodImg} />
                        <Text style={{ fontWeight: '700', fontSize: 16 }}>{item.TenMA} </Text>
                        <View style={styles.btnPrice}>
                            <Text style={{ textAlign: 'center', fontSize: 16 }}>{item.Gia} VND</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                :
                <View style={{ display: 'none' }}>
                </View>
        )
    }
    return (
        <View style={styles.foodContainer}>
            <View style={styles.foodHeader}>
                <ImageBackground source={{ uri: productImg }} resizeMode='cover' style={styles.headerImg}
                />

                <TouchableOpacity style={styles.btnBack} onPress={() => { navigation.goBack() }}>
                    <Ionicons
                        name='arrow-back-outline'
                        size={15}
                        color='#fff'

                    />
                </TouchableOpacity>

            </View>
            <View style={styles.foodMain}>
                <View style={styles.foodMenu}>
                    <Text style={{ fontSize: 20, fontWeight: '800' }}>{productName}</Text>
                </View>
                
               
                <FlatList
                    keyExtractor={item => item.MaMA}
                    numColumns={4}
                    data={db.foods}
                    renderItem={MainComponent}>

                </FlatList>

            </View>
        </View>
    )
}
export default Food;
const width = Dimensions.get('window').width - 30;
const styles = StyleSheet.create({
    foodContainer: {
        flex: 1
    },
    foodHeader: {
        flex: 2,

    },
    foodMain: {
        flex: 4,
        top: -20,
        width: '100%',
        height: '100%',
        borderRadius: 25,
        backgroundColor: '#FFF',
    },
    headerImg: {
        height: '100%',
        width: '100%',
        padding: 20,

    },
    foodMenu: {
        padding: 20
    },
    mainContent: {
        width: width / 2,
        padding: 15,
        paddingBottom: 30,
        marginLeft: 10,
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    },
    mainContainer: {
        width: '100%',
        borderRadius: 20,
    },
    foodImg: {
        width: '100%',
        height: 100,
        borderRadius: 20
    },
    btnPrice: {
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        height: 30,
        justifyContent: 'center'
    },
    btnBack: {
        width: 40,
        height: 40,
        borderRadius: 20,
        top: -200,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 25,
        backgroundColor: '#414146',
        opacity: 0.8
    },
    modalContainer: {
        width: '100%',
        height: '93%',
        backgroundColor: 'rgba(1,1,1,0.25)',
        paddingTop: '40%'

    },
    modalContent: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0
    },
    imgContainer: {
        width: '100%',
        height: 250,

    },
    titleContent: {
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    txtF: {
        padding: 5,
        fontSize: 16,
        fontWeight: '700'
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#414146',
        opacity: 0.8
    },
    cartBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 20,
        width: '60%',
        marginLeft: 30
    }
});
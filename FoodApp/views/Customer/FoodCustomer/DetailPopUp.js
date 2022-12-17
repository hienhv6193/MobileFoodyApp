import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Alert } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
    CART,
    CARTActions,
    RemoveCARTActions,
} from "../../../redux/actions/cartAction";

const Detail = ({
    navigation, route, item
}) => {
    const [showModal, setShowModal] = useState(true);
    const { foodId } = route.params
    const { foodDes } = route.params
    const { foodImg } = route.params
    const { foodName } = route.params
    const { foodPrice } = route.params
    const { foodCount } = route.params
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const Cart  = useSelector((state) => state.CartReducer);
    const tangGiamSL = (maSP, sl) => {
        let gioHangUpdate = [...Cart];
        let productFind = gioHangUpdate.find((product) => product.foodId === maSP);
        if (productFind) {
            productFind.Soluong += sl;
            if (productFind.Soluong < 1) {
                alert("Số lượng không đúng");
                productFind.Soluong -= sl;
            }
        }

        setCount({
            Cart: gioHangUpdate,
        });
    };
    const popUp = () => {
        setShowModal(false);
        navigation.goBack();
    }
    return (

        <Modal
            transparent={true}
            visible={showModal}
            animationType={'fade'}
            onRequestClose={() => setShowModal(false)}>
            <Pressable onPress={(evt) => evt.target == evt.currentTarget ? popUp() : setShowModal(true)} style={styles.modalContainer}>

                <View style={styles.modalContent}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>

                        <View style={styles.imgContainer}>
                            <Image style={styles.img} key={foodId} source={{ uri: foodImg }} />
                            <Text style={styles.txtF}>{foodName}    </Text>
                            <Text style={styles.txtF}>{foodPrice}Vnd   </Text>

                            <Text style={{ flexWrap: 'wrap', padding: 5 }}>{foodDes}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', top: -50, justifyContent: 'space-between', width: '90%' }}>
                    <View style={{ justifyContent: 'space-between', width: '40%', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.btn} onPress={() => { tangGiamSL(item.MaMA, 1); }}>
                            <Ionicons
                                name='add-outline'
                                size={15}
                                color='#fff'>
                            </Ionicons>
                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignSelf: 'center' }}>1</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => { tangGiamSL(item.MaMA, -1); }}>
                            <Ionicons
                                name='remove-outline'
                                size={15}
                                color='#fff'>
                            </Ionicons>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.cartBtn}>
                        <Text style={{ color: '#fff' }} onPress={() => { dispatch(CARTActions(item)); Alert.alert("Thêm món thành công"); }}>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('ShoppingCart') }}>
                        <Icon name='cart-plus' color='blue' size={30} />
                    </TouchableOpacity>
                </View>

            </Pressable>
        </Modal>
    );
}
export default Detail;
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
        backgroundColor: 'rgba(1,1,1,0.75)',
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
        width: '40%',
        marginLeft: 15
    }
});
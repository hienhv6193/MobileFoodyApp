import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {useState, useRef} from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-reanimated';

const History = ({
    params,
    }) =>{ 
        

    return(
        <View style={styles.container}>
            <View style={styles.nav}>
                <Text style={styles.title}>Lịch sử</Text>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.item}>
                    <View style={styles.contentSucceed}>
                        <TouchableOpacity style={{marginLeft: 15}}>
                            <View style={{flexDirection: 'row', marginBottom: 5, marginTop: 15,}}>
                                <Ionicons name='checkmark-circle' size={18}/>
                                <Text style={{marginLeft: 4, fontWeight: 'bold'}}>Đã giao</Text>
                                <Ionicons name='chevron-forward' size={18}/>
                                <Text>
                                    14/3/2022
                                </Text>
                            </View>
                            <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 10,}}>Product Name</Text>
                            <Text style={{fontSize: 12, marginBottom: 10,}}>100,000đ</Text>
                            
                        </TouchableOpacity>
                        <View style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}></View>
                        <TouchableOpacity style={{marginTop: 10, marginBottom: 10, alignItems: 'center', justifyContent: 'center', color: '#48D1CC'}}>Đặt lại</TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contentFailed}>
                    <TouchableOpacity style={{marginLeft: 15}}>
                        <View style={{flexDirection: 'row', marginBottom: 5, marginTop: 15,}}>
                            <Ionicons name='alert-circle' color={'red'} size={18}/>
                            <Text style={{marginLeft: 4, fontWeight: 'bold', color: 'red'}}>Đã Hủy</Text>
                            <Ionicons name='chevron-forward' size={18} color={'#A9A9A9'}/>
                            <Text style={{color: '#A9A9A9'}}>
                                14/3/2022
                            </Text>
                        </View>
                        <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 10, color: '#A9A9A9'}}>Product Name</Text>
                        <Text style={{fontSize: 12, marginBottom: 10, color: '#A9A9A9'}}>100,000đ</Text>
                        
                    </TouchableOpacity>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}></View>
                    <TouchableOpacity style={{marginTop: 10, marginBottom: 10, alignItems: 'center', justifyContent: 'center', color: '#48D1CC'}}>Đặt lại</TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default History;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nav: {
        flex: 1,
        backgroundColor: 'rgba(180, 180, 180, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyContainer: {
        flex: 9,
        backgroundColor: '#ccc'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    item:{
    },
    contentSucceed: {
        marginBottom: 15,
        backgroundColor: 'white'
    },
    contentFailed: {
        marginBottom: 15,
        backgroundColor: 'white',
    },
});

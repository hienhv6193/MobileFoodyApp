import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const LikeScreen = ({ navigation, }) => {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <TouchableOpacity style={styles.btnBack} onPress={() => { navigation.goBack() }}>
                    <Icon name='chevron-left' size={25} color='#fff' style={{ alignSelf: 'center' }} />
                </TouchableOpacity>
                <Text style={styles.ttcn}>Yêu thích</Text>
            </View>
            <View style={styles.detaillike}>
                <View style={styles.img}>
                    <Image source={{ uri: "https://cdn.netspace.edu.vn/images/2020/03/22/cach-nau-bo-kho-ngon-1-1024.jpg" }} style={styles.image} />
                </View>
                <View style={styles.detailfood}>
                    <Text style={{ fontSize: 20 }}>Bò kho</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                    </View>
                    <Text style={{ fontSize: 20 }}>45.000 VNĐ</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.detaillike}>
                <View style={styles.img}>
                    <Image source={{ uri: "https://cdn.netspace.edu.vn/images/2020/03/22/cach-nau-bo-kho-ngon-1-1024.jpg" }} style={styles.image} />
                </View>
                <View style={styles.detailfood}>
                    <Text style={{ fontSize: 20 }}>Bò kho</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                    </View>
                    <Text style={{ fontSize: 20 }}>45.000 VNĐ</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.detaillike}>
                <View style={styles.img}>
                    <Image source={{ uri: "https://cdn.netspace.edu.vn/images/2020/03/22/cach-nau-bo-kho-ngon-1-1024.jpg" }} style={styles.image} />
                </View>
                <View style={styles.detailfood}>
                    <Text style={{ fontSize: 20 }}>Bò kho</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                        <Icon name='star' size={17} color={'yellow'} />
                    </View>
                    <Text style={{ fontSize: 20 }}>45.000 VNĐ</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default LikeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    view: {
        height: 100,
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    btnBack: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        backgroundColor: '#333',
        opacity: 0.8
    },
    ttcn: {
        alignSelf: 'center',
        justifyContent: 'center',
        lineHeight: 55,
        color: 'white',
        fontSize: 25,
        marginLeft: 50
    },
    detaillike: {
        flexDirection: 'row',
        marginVertical: 20
    },
    image: {
        marginStart: 10,
        width: 120,
        height: 100,
    },
    detailfood: {
        marginStart: 25,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
});
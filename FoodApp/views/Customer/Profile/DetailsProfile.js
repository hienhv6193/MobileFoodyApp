import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailsProfile = ({ navigation, }) => {
    const [email, onChangeEmail] = useState('');
    const [number, onChangeNumber] = useState("");

    return (
        <View style={styles.detailprofileContainer}>
            <View style={styles.view}>
                <TouchableOpacity style={styles.btnBack} onPress={() => { navigation.goBack() }}>
                    <Icon name='chevron-left' size={25} color='#fff' style={{ alignSelf: 'center' }} />
                </TouchableOpacity>
                <Text style={styles.ttcn}>Thông tin cá nhân</Text>
            </View>
            <ScrollView>
                <View style={styles.item}>
                    <Text style={styles.text}>Họ và tên</Text>
                    <View style={styles.hideInput}>
                        <TextInput style={styles.textInside} placeholder='Nhập họ và tên' />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>Ngày sinh</Text>
                    <View style={styles.hideInput}>
                        <TextInput style={styles.textInside} placeholder='Nhập ngày sinh' />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>Giới tính</Text>
                    <View style={styles.hideInput}>
                        <TextInput style={styles.textInside} placeholder='Nhập giới tính'/>
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>Số điện thoại</Text>
                    <View style={styles.hideInput}>
                        <TextInput style={styles.textInside} placeholder='Nhập số điện thoại'
                            onChangeText={(text) => {
                                onChangeNumber(text);
                            }}
                            value={number}
                            keyboardType='numeric'
                        />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>Địa chỉ</Text>
                    <View style={styles.hideInput}>
                        <TextInput style={styles.textInside} placeholder='Nhập địa chỉ' />
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>Email</Text>
                    <View style={styles.hideInput}>
                        <TextInput style={styles.textInside} placeholder='Nhập Email'
                            onChangeText={(text) => {
                                onChangeEmail(text);
                            }}
                            value={email}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.btnchange}>
                    <Text style={styles.textBtn}>Thay đổi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnexit}>
                    <Text style={styles.textBtn}>Hủy</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
}

export default DetailsProfile;

const styles = StyleSheet.create({
    detailprofileContainer: {
        flex: 1,
    },
    view: {
        height: 70,
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    btnBack: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        backgroundColor: '#607d8b',
        opacity: 0.8
    },
    ttcn: {
        alignSelf: 'center',
        justifyContent: 'center',
        lineHeight: 55,
        color: 'white',
        fontSize: 25,
        marginLeft: 10
    },
    item: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
    },
    text: {
        width: '80%',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',

    },
    hideInput: {
        width: '80%',
        height: '45%',
        borderWidth: 1,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 10,
    },
    textInside: {
        marginLeft: 20,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    btnchange: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderRadius: 50 / 2,
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#FF7867',
    },
    btnexit: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderRadius: 50 / 2,
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#FF7867',
    },
    textBtn: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 12,
    },
});
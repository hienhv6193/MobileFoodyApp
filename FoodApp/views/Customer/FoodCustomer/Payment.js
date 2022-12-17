import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Payment = ({ navigation, }) => {
    return (
        <View style={styles.paymentContainer}>
            <View style={styles.view}>
                <TouchableOpacity style={styles.btnBack} onPress={() => { navigation.goBack() }}>
                    <Icon name='chevron-left' size={25} color='#fff' style={{ alignSelf: 'center' }} />
                </TouchableOpacity>
                <Text style={styles.ttcn}>Thanh toán</Text>
            </View>
            <View>
                <View style={styles.item}>
                    <Text style={styles.text}>Họ và tên</Text>
                    <View style={styles.hideInput}>
                        <Text style={styles.textInside}>Dat</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>Số điện thoại</Text>
                    <View style={styles.hideInput}>
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>Địa chỉ</Text>
                    <View style={styles.hideInput}>
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>Tổng cộng</Text>
                    <View style={styles.hideInput}>
                    </View>
                </View>

                <TouchableOpacity style={styles.btn1}>
                    <Text style={styles.textBtn}>Thanh toán</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.textBtn}>Hủy</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
export default Payment;

const styles = StyleSheet.create({
    paymentContainer: {
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
        marginLeft: 20,
        backgroundColor: '#607d8b',
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
    btn1: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#FFDD67',
    },
    btn2: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
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
import { Text, View, StyleSheet,Switch,Image } from 'react-native';
import React, { useState } from "react";

const NotifyScreen = ({ navigation, }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.noti}>
                <View style={styles.txtForm}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Nhận thông báo</Text>
                    <Text style={{fontSize: 12,}}>Các cập nhật mới về đơn hàng, khuyến mãi</Text>
                </View>
                <View style={styles.switch}>
                    <Switch
                        trackColor={{ false: "#767577", true: "rgb(156, 39, 176)" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <View style={styles.contentNotify}>
                <View style={styles.item}>
                    <Image source={{ uri:'https://thecoffeeland.com/wp-content/uploads/2020/12/cafe-da.jpg'  }} style={styles.foodImg} />
                    <View style={styles.contentItem}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                            Hoàn tất đơn hàng
                        </Text>
                        <Text style={{fontSize: 12,}}>
                            Chúc bạn ngon miệng. Đừng quên gửi đánh giá ngay nhé.
                        </Text>
                        <Text style={{fontSize: 10,}}>
                            11/11/2022 - 10:30
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default NotifyScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    noti: {
        width: '100%',
        height: '100%/2',
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
    },
    txtForm: {
        margin: 20
    },
    switch: {
        justifyContent: 'center',
        padding: 30,
    },
    contentNotify: {
        flex: 8,
    },
    foodImg: {
        width: 70,
        height: 70,
        margin: 20,
    },
    item: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
    },
    contentItem:{
        flexWrap: 'wrap',
        width: '70%',
        marginTop: 20,
        marginBottom: 20
    }
});
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';

const Introduce = ({ navigation, }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/ca/fb/15/cafb15772e44cd0b095ddfe38083132d.jpg' }} style={styles.img} />
        </View>
        <View style={styles.title}>
          <Text style={styles.subtitle}>Giới thiệu</Text>
        </View>
        <View style={styles.main1}>
          <View>
            <Text style={styles.header1}>Shoppe là gì?</Text>
            <Text style={styles.txt1}>Đây là dịch vụ giao đồ ăn nhanh tại Việt Nam.
              Đây là app để cho khách hàng tìm và đặt món ăn yêu thích.
              Bạn đặt đồ ăn chỉ với vài thao tác cơ bản.
            </Text>
          </View>
          <View>
            <Text style={styles.header1}>Làm thế nào để đặt đồ ăn</Text>
            <Text style={styles.txt1}>Sau đây là một số cách đơn giản để bạn có thể đặt đồ ăn</Text>
            <Text style={styles.txt1}>    1. Tìm kiếm đồ ăn hoặc quán ăn mà mình yêu thích</Text>
            <Text style={styles.txt1}>    2. Sau khi tìm kiếm xong sẽ chọn và đặt hàng</Text>
            <Text style={styles.txt1}>    3. Kiểm tra và Thanh toán</Text>
            <Text style={styles.txt1}>    4. Giao hàng</Text>
          </View>
          <View>
            <Text style={styles.header1}>Đặt đồ ăn rất đơn giản, nhanh chóng và an toàn</Text>
            <Text style={styles.txt1}>Nếu bạn có nhu cầu đặt đồ ăn thì có thể truy cập vào trang web Shoppe.vn.
              Đây là nơi khách hàng có thể trao đổi thông tin về món ăn hoặc sản phẩm muốn mua.
              Sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang, review công nghệ,
              mẹo làm đẹp, tin tức tiêu dùng và deal giá tốt bất ngờ.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
};

export default Introduce;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
  },
  img: {
    height: 150,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3d5afe',
  },
  main1: {
    flex: 6,
  },
  header1: {
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#3d5afe'
  },
  txt1: {
    fontSize: 18,
    textAlign: 'left',
    paddingLeft: 10,
    marginBottom: 2
  },
  header2: {
    fontSize: 18,
    textAlign: 'left',
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#111'
  },
});
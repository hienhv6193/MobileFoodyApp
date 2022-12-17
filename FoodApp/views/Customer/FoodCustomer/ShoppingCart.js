import {  Text, View, StyleSheet, Image, FlatList } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const items = [
    {
        name: 'Bánh mì thịt',
        img: 'https://th.bing.com/th/id/OIP.loYiGjWPI_X1qLtVFHGOsQHaE8?pid=ImgDet&rs=1',
        price: '30000',
        size: 'M',
        description: 'Bánh mì gia truyền',
        quantity: 0,
    },
    
    
]

const ShoppingCart = ({navigation,}) => { 
    const itemComponent=({item}) => {
        return (
            <LinearGradient style={styles.item} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FF7867', '#FFDD67']} >
                    {/* image */}  
                    <View style={styles.imgContainer}>
                        <Image source={{ uri: 'https://th.bing.com/th/id/OIP.loYiGjWPI_X1qLtVFHGOsQHaE8?pid=ImgDet&rs=1' }} style={styles.imgItem} />
                    </View> 

                    {/* content */}
                    <View style={styles.content}>
                        {/* name item */}
                        <Text style={{fontWeight: 'bold', color: 'white'}}>{item.name}</Text>
                        {/* size + price */}
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'white', marginRight: 15,}}>size: {item.size} </Text>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>{item.price} VNĐ</Text>
                        </View>
                        {/* description */}
                        <Text style={{flexWrap: 'wrap', height: 60, color: 'white'}}>{item.description}</Text>
                        {/* add + minus item */}
                        <View style={styles.addAndMinus}>
                            <TouchableOpacity style={styles.btnMinus}>
                                <Ionicons name='remove-circle-outline' color={'black'} size={24} />
                            </TouchableOpacity>
                            <View style={{justifyContent: 'center', alignItems: 'center', width: '33.3%'}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.quantity}</Text>
                            </View>
                            <TouchableOpacity style={styles.btnAdd}>
                                <Ionicons name='add-circle-outline' color={'black'} size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* icon delete */}
                    <TouchableOpacity style={styles.iconDelete}>
                        <Ionicons name='trash-outline' color={'black'} size={24} />
                    </TouchableOpacity>
            </LinearGradient>
        )
    }
    return(
        <View style={styles.storeInfoContainer}>
                {/* header */}
                
                <View style={styles.navbar}>
                    <LinearGradient style={styles.navbarTitle}  colors={['brown', '#FF7867']} >
                        <View style={styles.titleContent}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>ĐƠN HÀNG</Text>
                        </View>
                        
                    </LinearGradient>
                </View>
                
                {/* body */}
                
            <View style={styles.body}>
                <FlatList
                    data={items}
                    renderItem={itemComponent}
                >  
                </FlatList> 

                <View style={styles.paymentContainer}>
                    <TouchableOpacity style={styles.btnPay} onPress={() => {navigation.navigate('Payment')}}> 
                        <Text style={{color: 'black', fontWeight: 'bold'}}>THANH TOÁN</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* ------------------------------------------------------------------------ */}
            
        </View>

    )
}
    
export default ShoppingCart;

const styles = StyleSheet.create({
storeInfoContainer: {
    flex: 1,
},
navbar: {
    flex: 2,
},
body: {
    flex: 8,
    height: '90%',
    marginTop: 30,
},
navbarTitle: {
    height: '100%',
    margin: '5%',
    backgroundColor: 'red',
    borderRadius: 30,
},
options:{
    flexDirection: 'row',
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
},
titleContent:{
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
},
titleOption: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: "auto",
    height: '5%',
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 5,
},
item: {
    width: '90%',
    height: '85%',
    // backgroundColor: 'red',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
    borderTopLeftRadius: 30,
    borderBottomEndRadius: 30,
},  
imgItem: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 80/2,
},
imgContainer: {
    flex: 2.8,
    justifyContent: 'center',
   alignItems: 'center',
},
content: {
    flex: 6,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 5,
    paddingBottom: 5,
    height: '100%',
    flexWrap: 'wrap',
},  
iconDelete: {
    flex: 1.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomEndRadius: 30,
},
addAndMinus: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '70%',
    padding: 3,
    borderRadius: 30,
    bottom: 0,
},
btnMinus: {
    width: '33.3%',
    alignItems: 'center',
    justifyContent: 'center',
},
btnAdd: {
    width: '33.3%',
    alignItems: 'center',
    justifyContent: 'center',
},
paymentContainer: {
    bottom: 50,
    backgroundColor: 'white',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
},
btnPay: {
    height: '70%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD67',
    borderRadius: 20,
},

// btnCart: {
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
// },
});

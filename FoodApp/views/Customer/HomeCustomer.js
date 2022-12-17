import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { fetchAllCATEGORY, fetchSearchCATEGORY } from '../../redux/actions/categoryAction';

const delayExecution = (mls) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("ok"), mls);
    });
};
const HomeCustomer = ({ navigation }) => {
    const dbp = useSelector((state) => state.products);
    const dispatch = useDispatch();
    console.log(dbp)
    const [data, setData] = useState([]);

    const [search, setSearch] = useState("");
    const handleSeachCate = (key) => {
        if (key.length > 0) {
            dispatch(fetchSearchCATEGORY(key))
        }
        else {
            dispatch(fetchAllCATEGORY())
        }
    }

    useEffect(() => {
        dispatch(fetchAllCATEGORY())
        console.log(data)
    }, []

    )
    const HeaderComponent = () => {
        return (
            <View>
                <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FF7867', '#FFDD67']} >
                    <View style={styles.topContent}>
                        <View style={styles.topZone}>
                            <TouchableOpacity style={styles.avatar} onPress={() => { navigation.openDrawer() }}>
                                    <Ionicons name='apps-outline'
                                        color='#fff'
                                        size={19}
                                        />
                            </TouchableOpacity>
                            <Text style={{ fontWeight: '500', fontSize: 20 }}>Home</Text>
                            <TouchableOpacity style={styles.avatar}>
                                <Image source={{ uri: 'https://media.vov.vn/sites/default/files/styles/large/public/2021-11/dbruyne.jpeg' }} style={styles.img} />
                            </TouchableOpacity>

                        </View>
                        <Text style={styles.subTitle}>
                            Bạn đang đói? Chọn món và order thôi.
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput onChangeText={(Text) => setSearch(Text)} style={styles.searchBar} placeholder='Tìm kiếm' />
                            <TouchableOpacity
                                onPress={() => handleSeachCate(search)}
                                style={styles.search}
                            >
                                <Ionicons name='search-outline' size={24} style={{justifyContent: 'center', alignItems: 'center'}}/>
                            </TouchableOpacity>
                        </View>

                    </View>
                </LinearGradient>
                <Text style={{ textTransform: 'uppercase', fontWeight: '500', fontSize: 20, marginLeft: 25, textAlign: 'center' }}>menu</Text>
            </View>
        )
    }
    const MainComponent = ({ item }) => {
        return (
            <View style={styles.mainContent}>
                <TouchableOpacity key={item.MaDM} style={styles.mainContainer} onPress={() => { navigation.navigate('Food', { productId: item.MaDM, productImg: item.HinhDM, productName: item.TenDM }) }}>
                    <Image source={{ uri: item.HinhDM }} style={styles.thumbnail} />
                    <View style={styles.gametxt}>
                        <Text style={styles.cateTitle}>{item.TenDM} </Text>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.HomeContainer}>
            <FlatList
                data={dbp.categories}
                renderItem={MainComponent}
                ListHeaderComponent={HeaderComponent}
            ></FlatList>
        </View>
    )
}

export default HomeCustomer;

const styles = StyleSheet.create({
    HomeContainer: {
        backgroundColor: '#eeeeee',
        flex: 1,
        height: 'auto',
        width: '100%',
        borderRadius: 40
    },
    linearGradient: {
        width: '90%',
        height: 'auto',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 40,
        marginBottom: 10,
        marginTop: 20
    },
    topContent: {
        paddingTop: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 15
    },
    topZone: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '80%',
        paddingTop: 10
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 35 / 2,
        backgroundColor: '#17171C',
    },
    subTitle: {
        marginTop: '5%',
        flexWrap: 'wrap',
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    searchBar: {
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 30,
        width: '80%',
        height: 40,
        fontSize: 18,
        backgroundColor: '#fff',
        color: '#000',
        paddingLeft: 15,
    },
    search: {
        width:40,
        height: 40,
        fontSize: 10,
        color: 'black',
        backgroundColor: 'white',
        fontWeight: 'bold',
        marginTop: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    tagContent: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        width: '100%',
    },
    tagCT: {
        width: 'auto',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginLeft: 15
    },
    mainContent: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
        marginBottom: 20
    },
    mainContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        margin: 10,
    },
    thumbnail: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    gametxt: {
        flexDirection: 'column',
        padding: 10,
    },
    cateTitle: {
        color: '#000',
        justifyContent: 'center',
        width: 165,
        fontSize: 20,
        fontWeight: '600'
    },
    tagAllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    tagCate: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,

    },
    tagBtn: {
        flexDirection: 'row',
        width: 'auto',
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E3E3E4',
        backgroundColor: '#E3E3E4'
    }
});
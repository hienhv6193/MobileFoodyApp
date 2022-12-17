import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { fetchAllCATEGORY, fetchSearchCATEGORY } from '../../../redux/actions/categoryAction';

import { useEffect } from 'react';
const HomeCategory = ({ navigation, }) => {
    const db = useSelector(store => store.products)
    const dispatch = useDispatch();
    console.log(db)

    const [count, setCount] = useState(0);
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
        const a = db.categories.length
        setCount(a)
    }, []

    )
    const HeaderComponent = () => {
        return (
            <View style={styles.headerListComponent}>
                <Text style={styles.headerComponetTitle}>
                    Menu
                </Text>
            </View>
        )
    }
    const ItemComponent = ({ item }) => {
        return (
            <TouchableOpacity key={item.docId} style={styles.ItemComponent}
                onPress={() => {
                    navigation.navigate('EditCate',
                        {
                            cateId: item.MaDM, cateImg: item.HinhDM,
                            cateName: item.TenDM, cateDocId: item.docId
                        })
                }} >

                <View style={styles.Iteminfo}>
                    <Image source={{ uri: item.HinhDM }} style={styles.imgItem} />
                </View>
                <View style={styles.ItemDetail}>
                    <Text style={styles.nameTxt}>{item.TenDM}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.ListItemContainer}>
            <ImageBackground style={styles.background} resizeMode='cover' source={{ uri: 'https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png' }}>

                <View style={styles.leftHeader}>
                    <TextInput placeholder="Search" style={styles.inputText}
                        onChangeText={(text) => setSearch(text)}
                    />
                    <TouchableOpacity
                        onPress={() => handleSeachCate(search)}
                    >
                        <Text style={styles.search}>Tìm kiếm</Text>
                      
                    </TouchableOpacity>
                </View>

                <FlatList

                    numColumns={2}
                    data={db.categories}
                    ListHeaderComponent={HeaderComponent}
                    renderItem={ItemComponent}
                >

                </FlatList>
                <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('AddCate')}>
                    <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 40 }}>+</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
export default HomeCategory;
const width = Dimensions.get('window').width - 20;
const styles = StyleSheet.create({
    ListItemContainer: {
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    background: {
        flex: 1,
        padding: 20
    },
    btnAdd: {
        alignSelf: 'flex-end',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        opacity: 0.8
    },
    ItemComponent: {
        marginTop: 50,
        width: width / 2,
        padding: 5,

        borderColor: '#000',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 15,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgItem: {
        width: 120,
        height: 120,
        borderRadius: 20
    },
    ItemDetail: {
        textAlign: 'center',
        width: '70%'
    },
    nameTxt: {
        color: 'white',
        marginTop: 5,
        fontSize: 18,
        flexWrap: 'wrap'
    },
    priceTxt: {
        color: '#64b5f6',
        fontSize: 18
    },
    detailTxt: {
        color: 'black',
        fontSize: 15
    },
    rating: {
        color: '#f4511e'
    },
    headerComponetTitle: {
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        paddingTop: 10,

    },
    headerListComponent: {
        textAlign: 'center'
    },
    leftHeader: {
        width: "88%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: 50,
        marginTop: 10,
    },
    inputText: {
        justifyContent: "center",
        alignItems: "center",
        color: "#000",
        borderRadius: 50 / 2,
        borderColor: '#000',
        borderWidth: 2,
        width: "80%",
        height: 50,
        paddingLeft: "6%",
        fontSize: 20,
        fontWeight: "500",
        backgroundColor: 'white'
    },
    search: {
        fontSize: 20,
        color: 'black',
        paddingStart: 10,
        backgroundColor: 'white',
        fontWeight: 'bold',
    }

});
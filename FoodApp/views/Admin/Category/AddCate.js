import { Platform, ImageBackground, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getStorage, uploadString, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react';
import { firebase } from "../../../Config/firebase";
import * as ImagePicker from 'expo-image-picker'
import Ionicons from "react-native-vector-icons/Ionicons"
import { postCATEGORY } from '../../../redux/actions/categoryAction';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AddCate = ({
    navigation,
}) => {
    const dispatch = useDispatch();
    const db = useSelector((store) => store.products);

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [img, setImage] = useState("https://firebasestorage.googleapis.com/v0/b/demoagular1.appspot.com/o/Image%2Fimg-w-1669023292423.jpg?alt=media&token=e4547183-325b-4da0-a782-d8101b370f26");

    const save = () => {
        let newFood = {
            TenDM: name,
            MaDM: id,
            HinhDM: selectedImage.localURI,
        }
        dispatch(postCATEGORY(newFood));
        navigation.navigate('HomeCategory');
    }
    const [selectedImage, setSelectedImage] = useState({ localURI: img });
    const openImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({ base64: true });
        if (result.cancelled)
            return;

        let uri = result.uri;

        if (Platform.OS === 'web') {
            let base64code = result.base64;
            //upload
            await uploadBase64(base64code);
        } else {
            let uri = result.uri;
            //step1 -> convert uri --> blob
            const blobFile = await convertURI2BlobFile(uri);
            //step2 --> upload to cloud
            await uploadFile(blobFile);
        }
    };
    const convertURI2BlobFile = async (uri) => {
        const result = await new Promise((resolve, reject) => {
            let xmlRequest = new XMLHttpRequest();
            xmlRequest.onload = function () {
                resolve(xmlRequest.response);
            }
            xmlRequest.onerror = function () {
                reject(new TypeError("Request failed"));
            }
            xmlRequest.responseType = 'blob';
            xmlRequest.open("GET", uri, true);
            xmlRequest.send(null);
        })
        return result;
    }
    const uploadFile = async (blobFile) => {
        let imgname = 'img-android-' + new Date().getTime();
        //step2
        let storage = getStorage();
        let storageRef = ref(storage, `ImageCategory/${imgname}.jpg`);
        let metadata = { contentType: 'image/jpeg' }

        const uploadTask = uploadBytesResumable(storageRef, blobFile, metadata);
        uploadTask.on("state_changed",
            (snapshot) => { },
            (error) => { },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('downloadURL', downloadURL)
                    setImage({ localURI: downloadURL })
                })
            })
    }
    const uploadBase64 = async (base64code) => {
        let imgname = 'img-w-' + new Date().getTime();
        //step2
        let storage = getStorage();
        let storageRef = ref(storage, `ImageCategory/${imgname}.jpg`);
        let metadata = { contentType: 'image/jpeg' }
        uploadString(storageRef, base64code, 'base64', metadata).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log('downloadURL', downloadURL)
                setSelectedImage({ localURI: downloadURL });
            })
        })
    }

    return (
        <View style={styles.loginContainer}>
            <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png' }}
                resizeMode='cover'

                style={styles.bgContainer}
            >
                <View style={styles.view}>
                    <TouchableOpacity style={styles.btnBack} onPress={() => { navigation.goBack() }}>
                        <Icon name='chevron-left' size={25} color='#fff' />
                    </TouchableOpacity>
                </View>
                <Image source={{ uri: selectedImage.localURI }}
                    style={styles.img} />
                <Text style={styles.signinText}>
                    Thêm Danh Mục
                </Text>
                <View style={styles.formContainer}>

                    {/* check val */}
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Tên Danh Mục' style={styles.inputText} onChangeText={(val) => setName(val)} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Mã Danh mục' style={styles.inputText} onChangeText={(val) => setId(val)} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Hình ảnh' style={styles.inputText} value={selectedImage.localURI} />
                        <TouchableOpacity style={styles.btn} onPress={openImage}>
                            <Text style={{ color: 'white' }}>Chọn tệp hình ảnh</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => save()}>
                        <Text style={styles.btnTxt} >Thêm danh mục</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default AddCate;
const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    },
    view: {
        height: 70,
    },
    btnBack: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 10,
        opacity: 0.8,
    },
    logoLogin: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#d81b60',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    signinText: {
        color: '#d81b60',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
        color: '#FFF',

    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    inputContainer: {
        width: '70%',
        marginBottom: 10,
    },
    inputText: {
        borderBottomWidth: 2,
        borderBottomColor: '#d81b60',
        paddingVertical: 10,
        color: '#FFF',
        paddingLeft: 15,
        fontSize: 14
    },
    btn: {
        backgroundColor: '#d81b60',
        width: '70%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 50,
    },
    btnTxt: {
        color: '#FFF'
    },
    bgContainer: {
        flex: 1,
        alignItems: 'center',

    },

});

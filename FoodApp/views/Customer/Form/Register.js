import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Alert } from 'react-native';

const Register = ({
    navigation,
}) => {
    const[email,setEmail]=useState('')
    const[name,setName]=useState('')
    const[diaChi,setDiachi]=useState('')
    const[password,setPassword]=useState('')
    const auth = getAuth();

    const register=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }


    alert('Vui lòng thử lại')
  });
    }
    
    return (
        <View style={styles.loginContainer}>
            <ImageBackground 
                source={{uri: 'https://img.freepik.com/premium-photo/asian-tea-concept-cup-tea-teapot-with-green-tea-dry-leaves-view-from-space-text-dark-stone-background_76790-624.jpg?w=996'}}
                resizeMode='cover'
                style={styles.bgContainer}

            >
                <View style={styles.logoLogin}>
                    <Ionicons name='person' color='#FFF' size={36}/>
                </View>
                <Text style={styles.signinText}>    
                    Đăng ký
                </Text>
                <View style={styles.formContainer}>
                    {/* <View style={styles.inputContainer}>
                        <TextInput placeholder='Họ và tên' style={styles.inputText} onChangeText={(text) => {
                                setName(text)
                            }}
                          />
                    </View> */}
                    
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Email'onChangeText={(text) => {
                                setEmail(text)
                            }}
                           style={styles.inputText}/>
                    </View>

                    {/* <View style={styles.inputContainer}>
                        <TextInput onChangeText={(text) => {
                                setDiachi(text)
                            }}
                           placeholder='Địa chỉ' style={styles.inputText}/>
                    </View> */}
                    
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Mật khẩu' secureTextEntry={true} onChangeText={(text) => {
                                setPassword(text)
                            }}
                          style={styles.inputText}/>
                    </View>
                    {/* <View style={styles.inputContainer}>
                        <TextInput placeholder='Xác nhận mật khẩu' style={styles.inputText}/>
                    </View> */}
                    
                    <TouchableOpacity style={styles.btn} onPress={() => register()}>
                        <Text style={styles.btnTxt} >Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    },
    logoLogin: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        backgroundColor: '#d81b60',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
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
        paddingTop: 50,
    },
    inputContainer: {
        width: '70%',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    inputText: {
        borderBottomWidth: 3,
        borderBottomColor: '#d81b60',
        paddingVertical:10,
        color: '#000',
        borderRadius: 10,
        paddingLeft: 10,
    },
    btn: {
        backgroundColor: '#d81b60',
        width: '70%',
        height: 45,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,
        marginTop: 20,
    },
    btnTxt: {
        color: '#FFF'
    },
    bgContainer: {
        flex: 1,
        alignItems: 'center',
    },
    txtForgot : {
        marginTop: 20,
        marginLeft: 100,
        color: 'white',
        fontStyle: 'Underline'
    }
});
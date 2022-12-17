import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app'
import { firebaseConfig } from '../../../Config/firebase';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

const Login = ({ navigation, }) => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [code, setcode] = useState('')
    const [verificationm, setVerification] = useState(null)
    const recaptchaVerifier = useRef(null)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth();
    const send = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setVerification);
        setPhoneNumber('')
    }
    const confirm = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationm,
            code
        );
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setcode('')

            })
            .catch((error) => {
                alert(error)
            })
        navigation.navigate("HomeCategory")
    }
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                navigation.navigate("HomeCategory")
                // ...
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                    setValidPhone(false)
                    console.log('That email address is invalid!');
                }
            });
    }




    const [number, onChangeNumber] = useState("");
    const [isValidPhone, setValidPhone] = useState(true);

    const verifyPhoneNumber = (phone) => {
        let regex = RegExp(/([\+84|84|0]+(3|5|7|9|1[2|4|6|8]))+([0-9]{8})\b/);
        if (!phone) return true;
        if (regex.test(phone)) {
            return true;
        }
        return false;
    }

    return (
        <View style={styles.loginContainer}>
            <ImageBackground
                source={{ uri: 'https://img.freepik.com/premium-photo/asian-tea-concept-cup-tea-teapot-with-green-tea-dry-leaves-view-from-space-text-dark-stone-background_76790-624.jpg?w=996' }}
                resizeMode='cover'
                style={styles.bgContainer}

            >
                <View style={styles.logoLogin}>
                    <Ionicons name='person' color='#FFF' size={36} />
                </View>
                <Text style={styles.signinText}>
                    Sign In
                </Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Email' style={styles.inputText}
                            onChangeText={(text) => {
                                setEmail(text)
                            }}

                        />
                    </View>
                    <Text style={styles.inputValidate}>{isValidPhone ? '' : 'Email không tồn tại'}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Mật khẩu' style={styles.inputText} secureTextEntry={true} onChangeText={(text) => {
                            setPassword(text)
                        }} />
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => login()}>
                        <Text style={styles.btnTxt} >Đăng nhập</Text>
                    </TouchableOpacity>
                    <Text style={{marginTop:10,fontSize:18,color:'#fff',}}>- OR -</Text>
                    <Text style={styles.otpText}>
                        Login Use OTP
                    </Text>
                    <TextInput
                        onChangeText={setPhoneNumber}
                        keyboardType='phone-pad'
                        autoComplete='tel'
                        style={styles.textInput}
                    />
                    <TouchableOpacity style={styles.send} onPress={send}>
                        <Text style={styles.btnText}>
                            Send
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        onChangeText={setcode}
                        keyboardType='number-pad'
                        autoComplete='tel'
                        style={styles.textInput}
                    />
                    <TouchableOpacity style={styles.send} onPress={confirm}>
                        <Text style={styles.btnText}>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                    <FirebaseRecaptchaVerifierModal
                        ref={recaptchaVerifier}
                        firebaseConfig={firebaseConfig}
                    />
                    
                </View>
            </ImageBackground>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    },
    logoLogin: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
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
        paddingTop: 10,
    },
    inputContainer: {
        width: '80%',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    inputText: {
        borderBottomWidth: 3,
        borderBottomColor: '#d81b60',
        paddingVertical: 10,
        
        paddingLeft:5,
        borderRadius: 10,
    },
    inputValidate: {
        color: 'red',
        paddingVertical: 5,

    },
    btn: {
        backgroundColor: '#d81b60',
        width: '70%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    btnTxt: {
        color: '#FFF'
    },
    bgContainer: {
        flex: 1,
        alignItems: 'center',
    },
    txtForgot: {
        marginTop: 20,
        marginLeft: 100,
        color: 'white',
        fontStyle: 'Underline'
    },
    send:{
        padding:10,
        borderRadius:10,
        backgroundColor:'#3498db'
    },
    btnText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold'
    },
    otpText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        margin:20
    },
    textInput:{
        paddingBottom:10,
        paddingHorizontal:20,
        fontSize:18,
        borderBottomColor:'#fff',
        borderBottomWidth:2,
        marginBottom:20,
        textAlign:'center',
        color:'#fff'
    },
});
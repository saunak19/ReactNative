import { Image, StyleSheet, Text, TextInput, View, } from 'react-native'
import React from 'react'
import pattern from "../../assets/mainlogo.png"
import { head1, link, link2 } from '../comman/formcss'
import { head2 } from '../comman/formcss'
import { formgroup } from '../comman/formcss'
import { lable } from '../comman/formcss'
import { input } from '../comman/formcss'
import { button1 } from '../comman/button'


const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                {/* <Image style={styles.logo} source={pattern} /> */}
                <View style={styles.section1}>
                    <Image source={pattern} style={styles.logo} ></Image>
                    <Text style={styles.h1} onPress={() => navigation.navigate('welcome')}>Used2, Inc.</Text>
                    <Text style={styles.small1}>Buying and selling online</Text>
                </View>
                <View style={styles.section2}>
                    <Text style={head1}>Login</Text>
                    <Text style={head2}>Sign in to continue</Text>
                    <View style={formgroup}>
                        <Text style={lable}>Email</Text>
                        <TextInput style={input} placeholder='Enter Your Email'></TextInput>
                    </View>
                    <View style={styles.formgroup}>
                        <Text style={lable}>Password</Text>
                        <TextInput style={input} placeholder='Enter Your Password'></TextInput>
                    </View>
                    <View style={styles.fp}>
                        <Text style={link}>Forget Password</Text>
                    </View>
                    <Text style={button1}>Login</Text>
                    <Text style={link2}>Don't have an account?&nbsp; <Text style={link} onPress={() => navigation.navigate('signup')}>Create a new account</Text></Text>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        display: "flex",
    },
    logo: {
        height: 80,
        resizeMode: 'contain',
    },
    container1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: '100%'
    },
    section1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "48%",
    },
    h1: {
        color: "#fff",
        fontSize: 30,
        marginTop: 8,
        textAlign: "center"
    },
    small1: {
        color: "#fff",
        textAlign: "center"
    },
    section2: {
        display: "flex",
        backgroundColor: "#fff",
        width: "100%",
        height: "72%",
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        padding: 20
    },
    fp: {
        display: "flex",
        alignItems: "flex-end",
        marginHorizontal: 10,
        marginVertical: 5
    },
})
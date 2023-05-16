import { Image, ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native'
import React from 'react'
import pattern from "../../assets/welcome.jpg"
import { head1, link } from '../comman/formcss'
import { head2 } from '../comman/formcss'
import { formgroup } from '../comman/formcss'
import { lable } from '../comman/formcss'
import { input } from '../comman/formcss'
import { button1 } from '../comman/button'
import { link2 } from '../comman/formcss'
const Signup = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                {/* <Image style={styles.logo} source={pattern} /> */}

                <ScrollView style={styles.section2}>
                    <Text style={head1}>Create a New Account</Text>
                    <Text style={link2}>Already Registered? &nbsp;<Text style={link} onPress={() => navigation.navigate('login')}>Login here</Text></Text>
                    <View style={formgroup}>
                        <Text style={lable}>Name</Text>
                        <TextInput style={input} placeholder='Enter Your Name'></TextInput>
                    </View>
                    <View style={formgroup}>
                        <Text style={lable}>Email</Text>
                        <TextInput style={input} placeholder='Enter Your Email'></TextInput>
                    </View>
                    <View style={formgroup}>
                        <Text style={lable}>DOB</Text>
                        <TextInput style={input} placeholder='Enter Your Date of Birth'></TextInput>
                    </View>
                    <View style={formgroup}>
                        <Text style={lable}>Password</Text>
                        <TextInput style={input} placeholder='Enter Your Password'></TextInput>
                    </View>
                    <View style={formgroup}>
                        <Text style={lable}>Confirm Password</Text>
                        <TextInput style={input} placeholder='Confirm Your Password'></TextInput>
                    </View>
                    <View style={formgroup}>
                        <Text style={lable}>Address</Text>
                        <TextInput style={input} placeholder='Enter Your Address'></TextInput>
                    </View>

                    <Text style={button1}>Signup</Text>
                </ScrollView>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF",
        display: "flex",
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: '100%'
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
        height: "100%",
        padding: 15,
        marginBottom: 15
    },
    fp: {
        display: "flex",
        alignItems: "flex-end",
        marginHorizontal: 10,
        marginVertical: 5
    },
})
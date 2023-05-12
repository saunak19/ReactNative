import { Image, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import pattern from "../../assets/welcome.jpg"

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                {/* <Image style={styles.logo} source={pattern} /> */}
                <View style={styles.section1}>
                    <Image source={pattern} style={styles.logo} ></Image>
                </View>
                <View style={styles.section2}></View>
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
        display: "flex"
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    container1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: '100%'
    },
})
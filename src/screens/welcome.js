import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import pattern from "../../assets/welcome.jpg"
import { button1 } from '../comman/button';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                {/* <Text style={{ color: "#fff", fontSize: 20 }}>Welcome</Text> */}
                {/* <Image style={styles.logo} source={pattern} /> */}
                <Text style={button1}>Login</Text>
                <Text style={button1}>Signup</Text>
            </View>
        </View>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        display: "flex"
    },
    container1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: '100%'
    },
    logo: {
        width: 200,
        aspectRatio: 1
    }
})
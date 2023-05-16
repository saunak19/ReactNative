import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import pattern from "../../assets/welcomelogo.png"
import { button1 } from '../comman/button';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                {/* <Text style={{ color: "#fff", fontSize: 20 }}>Welcome</Text> */}
                <Image style={styles.logo} source={pattern} />
                <Text style={button1} onPress={() => navigation.navigate('login')}>Login</Text>
                <Text style={button1} onPress={() => navigation.navigate('signup')}>Signup</Text>
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
        height: '20%',
        resizeMode: 'contain',
        marginBottom: 50
    }
})
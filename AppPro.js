import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Welcome from "./src/screens/welcome";
import Login from "./src/screens/login";

const Todo = () => {
    return (
        <View style={styles.container}>
            {/* <Welcome /> */}
            <Login />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: 20
    }
});

export default Todo;
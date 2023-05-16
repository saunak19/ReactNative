import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Welcome from "./src/screens/welcome";
import Login from "./src/screens/login";
import Signup from "./src/screens/signup";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Todo = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="welcome" component={Welcome}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />
                <Stack.Screen name="login" component={Login}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />
                <Stack.Screen name="signup" component={Signup}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
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
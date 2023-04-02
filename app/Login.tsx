import { StyleSheet, TextInput, Pressable, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { useState } from "react";
import { useSignIn } from "@clerk/clerk-expo";
import { LinearGradient } from "expo-linear-gradient";
import { View as DefaultView } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

export default function Login() {
    const { signIn, setSession, isLoaded } = useSignIn();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {
        if (!isLoaded) return;

        try {
            const completeSignIn = await signIn.create({
                identifier: username,
                password,
            });

            await setSession(completeSignIn.createdSessionId);
        } catch (error) {
            console.error(error);
        }
    };

    const registerUser = () => {
        console.log("take to user registration");
    }

    return (
        <DefaultView style={styles.signUpContainer}>
            <LinearGradient
                // Background Linear Gradient
                style={styles.background}
                colors={['#FFBBE8', 'transparent']}
            />
            <DefaultView style={styles.loginForm}>
                <Text style={styles.loginCopyHeader}>Login</Text>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Username or Email</Text>
                    <DefaultView style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <DefaultView style={styles.inputIconContainer}>
                            <Ionicons name="ios-person" size={25} color="grey" style={styles.inputIcon} />
                        </DefaultView>
                        <TextInput
                            autoCapitalize="none"
                            value={username}
                            onChangeText={(username) => setUsername(username)}
                            placeholderTextColor={"#B5B5B5"}
                            placeholder="Username"
                            style={styles.input}
                        >
                        </TextInput>
                    </DefaultView>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <DefaultView style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <DefaultView style={styles.inputIconContainer}>
                            <Ionicons name="ios-key" size={25} color="grey" style={styles.inputIcon} />
                        </DefaultView>
                        <TextInput
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                            placeholder="Password"
                            placeholderTextColor={"#B5B5B5"}
                            secureTextEntry={true}
                            style={styles.input}
                        />
                    </DefaultView>
                </View>
                <LinearGradient
                    colors={['#92C5EB', '#FFBBE8']}
                    style={styles.loginGradientContainer}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                >
                    <TouchableOpacity onPress={loginUser}>
                        <Text style={[styles.loginButton, { textAlign: "center" }]}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
                <Text style={styles.text}>Not a user? Sign Up</Text>
            </DefaultView>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    signUpContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",   
        backgroundColor: "#FFBBE8",
    },
    loginForm: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",   
        backgroundColor: "#fff",
        height: "80%",
        width: "80%",
        borderRadius: 18,
    },
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        height: 300,
    },
    input: {
        width: "70%",
        height: 44,
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        borderColor: "#B5B5B5",
        borderWidth: 0,
        borderBottomWidth: 2,
        color: "black",
    },
    inputIconContainer: { 
        borderBottomWidth: 2, 
        borderColor: "#B5B5B5", 
        position: "relative", 
        top: 5,
    },
    inputIcon: {
        marginRight: 5,
    },
    inputView: {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
    },
    inputLabel: {
        fontSize: 16,
        color: "black",
        marginLeft: 25,
    },
    loginCopyHeader: {
        fontSize: 48,
        fontWeight: "800",
        color: "black",
        marginBottom: 72,
    },
    loginButton: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15,
        fontWeight: "600"
    },
    loginGradientContainer: { 
        borderRadius: 15, 
        marginTop: 72, 
        width: "70%",
        shadowOffset: {
            height: -49,
            width: 0,
        },
        shadowRadius: 10,
    },
});

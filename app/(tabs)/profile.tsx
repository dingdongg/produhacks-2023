import { View, Text, StyleSheet, Pressable } from "react-native";
import { useClerk } from "@clerk/clerk-expo";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Profile() {
    const { signOut } = useClerk();

    return (
        <View style={styles.profileContainer}>
            <LinearGradient
                    colors={['#92C5EB', '#FFBBE8']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.loginGradientContainer}
                >
                <TouchableOpacity onPress={() => signOut()} style={styles.profileButtons}>
                    <Ionicons name="ios-exit-outline" size={24} color="white" />
                    <Text style={[styles.loginButton]}>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
                    colors={['#92C5EB', '#FFBBE8']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.loginGradientContainer}
                >
                <TouchableOpacity style={styles.profileButtons}>
                    <Ionicons name="ios-settings-outline" size={24} color="white" />
                    <Text style={[styles.loginButton, { textAlign: "center" }]}>
                        Settings
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
                    colors={['#92C5EB', '#FFBBE8']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.loginGradientContainer}
                >
                <TouchableOpacity style={styles.profileButtons}>
                    <AntDesign name="staro" size={24} color="white" />
                    <Text style={[styles.loginButton, { textAlign: "center" }]}>
                        Subscription
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
                    colors={['#92C5EB', '#FFBBE8']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.loginGradientContainer}
                >
                <TouchableOpacity style={styles.profileButtons}>
                    <MaterialIcons name="contact-support" size={24} color="white" />
                    <Text style={[styles.loginButton, { textAlign: "center" }]}>
                        Support
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    loginButton: {
        paddingLeft: 15,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15,
        fontWeight: "600",
        color: "white",
    },
    loginGradientContainer: { 
        borderRadius: 15, 
        marginTop: 10, 
        width: "60%",
        shadowOffset: {
            height: -49,
            width: 0,
        },
        shadowRadius: 10,
    },
    profileButtons: { 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center",
    },
});
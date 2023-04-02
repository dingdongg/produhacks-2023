import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
    return (
        <View style={styles.profileContainer}>
            <Text style={{ color: "black" }}>
                your profile :o
            </Text>
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
});
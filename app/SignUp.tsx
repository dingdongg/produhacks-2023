import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function SignUp() {
    return (
        <View style={styles.signUpContainer}>
            <Text style={styles.text}>signup - wedfaergetghryjmuyuhewfrgthyjntyrgthfr</Text>
            <Text style={styles.text}>signup - password</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    signUpContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

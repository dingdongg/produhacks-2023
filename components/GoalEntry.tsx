import { Ionicons } from "@expo/vector-icons"
import { StyleSheet } from "react-native"
import { View, Text } from "react-native";

export default function GoalEntry({ description }: { description: string }) {
    return (
        <View style={styles.goalEntryContainer}>
            <Ionicons
                name="ios-person"
                size={25}
                color="grey"
                style={{ marginRight: 15 }}
            />
            <Text style={styles.goalTextBox}>
                { description }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
    goalEntryContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: 350,
        marginBottom: 30,
    },
    goalTextBox: {
        marginLeft: 5,
        maxWidth: 250,
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: "#dddddd",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.21,
        shadowRadius: 6.65,
        elevation: 9,
    },
});
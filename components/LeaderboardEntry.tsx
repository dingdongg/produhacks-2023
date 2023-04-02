import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LeaderboardEntry({ position, info }: { 
    position: number, 
    info: {
        name: string,
        moneySaved: number,
    } 
}) {
    const formatName = () => {
        const words = info.name.split(" ");
        return `${words[0]} ${words[1][0]}.`;
    }
    return (
        <View style={styles.entryContainer}>
            <Text style={{ textAlign: "center", fontSize: 16 }}>{ position + 1 }</Text>
            <Ionicons name="ios-person" size={28} color="grey" />
            <Text style={{ fontSize: 16 }}>{formatName()}</Text>
            <Text style={{ fontSize: 16 }}>$ {info.moneySaved}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    entryContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "80%",
        borderWidth: 0,
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity:  0.21,
        shadowRadius: 6.65,
        elevation: 9,
        padding: 15,
    },
});
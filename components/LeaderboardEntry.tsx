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
            <Text style={{ textAlign: "center", fontSize: 16 }}>{ position }</Text>
            <Ionicons name="ios-person" size={28} color="grey" />
            <Text style={{ fontSize: 16 }}>{formatName()}</Text>
            <Text style={{ fontSize: 16 }}>$ {info.moneySaved}</Text>
        </View>
    );
}

const shadowStyle = {
    width: 100,
    height: 100,
    color: "#000",
    border: 2,
    radius: 3,
    opacity: 0.2,
    x: 0,
    y: 3,
    style: { marginVertical: 5 },
};

const styles = StyleSheet.create({
    entryContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "80%",
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 15,
        marginBottom: 15,
        shadowOffset: shadowStyle,
        padding: 15,
    },
});
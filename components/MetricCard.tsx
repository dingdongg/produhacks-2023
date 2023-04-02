// import { View, Text } from "../components/Themed";
import { View, Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function MetricCard({ metric, value }: { metric: string, value: number }) {
    return (
        <View style={styles.metricCardContainer}>
            <View>
                <Text style={{ fontSize: 16, color: "orange" }}>{ value }</Text>
            </View>
            <Text style={{ fontSize: 16, color: "red" }} onPress={() => alert("pressed")}>{ metric }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    metricCardContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "blue",
        borderWidth: 2,
        width: "45%",
        height: "50%",
        margin: 5,
        borderRadius: 15,
    },
});
import { View, Text, TextProps } from "react-native";
import { StyleSheet } from "react-native";

export default function MetricCard({ metric, value }: { metric: string, value: number }) {
    return (
        <View style={styles.metricCardContainer}>
            <View>
                <Text style={{ color: "#9999FF", fontSize: 48 }}>{ value }</Text>
            </View>
            <Text style={{ fontSize: 16, color: "black" }} onPress={() => alert("pressed")}>{ metric }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    metricCardContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0,
        width: "45%",
        height: "50%",
        margin: 5,
        borderRadius: 15,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity:  0.21,
        shadowRadius: 6.65,
        elevation: 9
    },
});
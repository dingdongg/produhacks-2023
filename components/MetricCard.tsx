import { View, Text } from "../components/Themed";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function MetricCard({ metric }: { metric: string }) {
    return (
        <View style={styles.metricCardContainer}>
            <View>
                <MaskedView maskElement={<Text>{metric}</Text>}>
                    <LinearGradient
                        colors={['cadetblue', '#fabada']}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 0, y: 0.33 }}
                        style={{ flex: 1 }}
                    />
                </MaskedView>
            </View>
            <Text>{ metric }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    metricCardContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
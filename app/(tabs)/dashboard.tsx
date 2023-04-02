import { StyleSheet, Pressable } from 'react-native';

import { Text, View } from '../../components/Themed';
import { View as DefaultView } from "react-native";
import { useClerk } from "@clerk/clerk-react";
import MetricCard from '../../components/MetricCard';
import LeaderboardEntry from '../../components/LeaderboardEntry';

const mockLeaderboard = [
  {
    name: "John Smith",
    moneySaved: 123,
  },
  {
    name: "Ava Gandolf",
    moneySaved: 456,
  },
  {
    name: "Ethan Rodriguze",
    moneySaved: 789,
  },
  {
    name: "Samuel Park",
    moneySaved: 100,
  },
];

const myStats = {
  daysWithoutSmoking: 30,
  cigsNotSmoked: 20,
  moneySaved: 100,
  moneyReturned: 20,
};

export default function TabOneScreen() {

  const { signOut } = useClerk();

  return (
    <View style={styles.container}>
      <View style={styles.metricsContainer}>
        <DefaultView style={[styles.row, { alignItems: "flex-end" }]}>
          <MetricCard metric="days without smoking" value={myStats.daysWithoutSmoking} />
          <MetricCard metric="cigarettes not smoked" value={myStats.cigsNotSmoked} />
        </DefaultView>
        <DefaultView style={styles.row}>
          <MetricCard metric="$ saved and counting" value={myStats.moneySaved} />
          <MetricCard metric="returned from app" value={myStats.moneyReturned} />
        </DefaultView>
      </View>
      <View style={styles.leaderboardsContainer}>
        <Text style={{ color: "black" }}>Leaderboard</Text>
        {
          mockLeaderboard.map((entry, index) => (
            <LeaderboardEntry position={index} key={index} info={entry} />
          ))
        }
      </View>
      <Pressable onPress={() => signOut()}>
        <Text style={{ color: "black" }}>SIGN OUT</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  metricsContainer: {
    marginTop: -75,
    marginBottom: -50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    maxHeight: 650,
  },
  leaderboardsContainer: {
    marginBottom: 36,
  }
});

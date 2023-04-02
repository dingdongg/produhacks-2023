import { ScrollView, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import GoalEntry from '../../components/GoalEntry';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

const mockGoals = [
  {
    "description": "goal number 1",
  },
  {
    "description": "Quit smoking within six months and plan to manage cravings.",
  },
  {
    "description": "Attend weekly therapy sessions for three months to learn coping strategies.",
  },
  {
    "description": "Exercise for 30 minutes a day, five days a week, and switch to a healthier diet.",
  },
  {
    "description": "Save $50/week by reducing smoking expenses and redirect funds towards debt or savings.",
  },
  {
    "description": "Run a 5K within six months to build confidence and a sense of accomplishment.",
  },
  {
    "description": "goal number 1",
  },
  {
    "description": "Quit smoking within six months and plan to manage cravings.",
  },
  {
    "description": "Attend weekly therapy sessions for three months to learn coping strategies.",
  },
  {
    "description": "Exercise for 30 minutes a day, five days a week, and switch to a healthier diet.",
  },
  {
    "description": "Save $50/week by reducing smoking expenses and redirect funds towards debt or savings.",
  },
  {
    "description": "Run a 5K within six months to build confidence and a sense of accomplishment.",
  },
];

export default function TabTwoScreen() {

  const [addingGoal, setAddingGoal] = useState(false);
  const [description, setDescription] = useState("");

  const createGoal = () => {
    mockGoals.push({
      description,
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {mockGoals.map((goal, index) => (
          <GoalEntry key={index} description={goal.description} />
        ))}
      </ScrollView>
      {/* <TouchableOpacity onPress={createGoal}>
        {
          (addingGoal) 
            ? <TextInput value={description} onChangeText={(value) => setDescription(value)}/>
            : (
              <Text style={[{ textAlign: "center", color: "black" }]}>
                Add a new goal
              </Text>
            )
        }
      </TouchableOpacity> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  addGoalButton: {
    position: 'absolute',
    bottom: 150,
    backgroundColor: "white",
  },
});

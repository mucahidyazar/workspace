import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal !== "") {
      setCourseGoals(prevState => setCourseGoals([...prevState, { id: prevState.length.toString(), value: enteredGoal }]));
      setIsAddMode(false);
    }
  }

  const removeGoalHandler = (id) => {
    setCourseGoals(prevState => prevState.filter(goal => (
      goal.id !== id
    )))
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onRemoveGoal={removeGoalHandler} />
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 50,
    height: 300
  }
});

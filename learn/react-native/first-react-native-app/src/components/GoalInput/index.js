import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal
} from 'react-native';

const GoalInput = ({ onAddGoal, onCancel, visible }) => {

  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  const cancelHandler = () => {
    onCancel();
    setEnteredGoal("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="CANCEL" color="red" onPress={cancelHandler} /></View>
          <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    padding: 30
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    padding: 5,
    width: '100%'
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  }
})

export default GoalInput;
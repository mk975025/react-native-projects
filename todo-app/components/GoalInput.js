import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({
  addGoal,
  isVisible,
  onCancel,
  enteredGoalText,
  setEnteredGoalText,
  enteredGoalTitle,
  setEnteredGoalTitle,
}) {
  // const [enteredGoalTitle, setEnteredGoalTitle] = useState("");
  // const [enteredGoalText, setEnteredGoalText] = useState("");

  // function addGoal() {
  //   addGoalHandler(enteredGoalTitle, enteredGoalText);
  //   setEnteredGoalText("");
  //   setEnteredGoalTitle("");
  // }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.addMarginTop}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              style={styles.image}
              source={require("../assets/goal.png")}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter task title"
            placeholderTextColor={"white"}
            onChangeText={setEnteredGoalTitle}
            value={enteredGoalTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter task description"
            placeholderTextColor={"white"}
            onChangeText={setEnteredGoalText}
            value={enteredGoalText}
          />
          <View style={styles.btnContainer}>
            <Pressable style={styles.btn} title="Add task " onPress={addGoal}>
              <Text style={styles.btnText}>Add task</Text>
            </Pressable>
            <Pressable
              style={styles.btnCancel}
              title="Cancel "
              onPress={onCancel}
            >
              <Text style={styles.btnText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "center",
    width: "100%",
    paddingBottom: 30,
    backgroundColor: "#212529",
  },
  addMarginTop: {
    marginTop: 100,
  },
  input: {
    alignSelf: "center",
    width: 350,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "white",
    color: "white",
    marginBottom: 15,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#f8f9fa",
    marginTop: 15,
  },
  btnCancel: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#e03131",
    marginTop: 15,
  },
  btnText: {
    color: "#212529",
  },
  btnContainer: {
    alignSelf: "center",
    marginTop: 30,
    width: 350,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

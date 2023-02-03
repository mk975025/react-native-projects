import React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";

export default function GoalInput({ goalInputHandler, addGoalHandler }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter tasks"
        placeholderTextColor={"black"}
        onChangeText={goalInputHandler}
      />
      <Pressable style={styles.btn} title="Add task">
        <Text style={styles.btnText} onPress={addGoalHandler}>
          Add task
        </Text> 
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 80,
    paddingBottom: 30,
  },
  input: {
    width: "62%",
    padding: 10,
    borderWidth: 0.5,
    borderColor: "black",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#212529",
    marginLeft: 10,
  },
  btnText: {
    color: "#f8f9fa",
  },
});

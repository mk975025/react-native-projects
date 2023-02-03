import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, deleteGoalHandler, id }) {
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteGoalHandler.bind(undefined, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    borderRadius: 6,
    width: "90%",
    color: "#f8f9fa",
    backgroundColor: "#212529",
    alignSelf: "center",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: { padding: 8, color: "#f8f9fa" },
});

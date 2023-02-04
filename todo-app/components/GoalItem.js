import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, deleteGoalHandler, id }) {
  const currentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = 12 % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  console.log(currentTime);
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteGoalHandler.bind(undefined, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View>
          <Text style={styles.goalText}>{currentTime()}</Text>
        </View>
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

import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import GoalDescription from "./GoalDescription";

function currentTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = 12 % 12;
  hours = hours ? hours : 12; // 12 mod 12 is 0, if hours is falsy (is 0), then default to 12
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes} ${ampm}`;
}

export default function GoalItem({ title, text, deleteGoalHandler, id }) {
  const [toggleModal, setToggleModal] = useState(false);
  function handleModal() {
    setToggleModal((prevState) => !prevState);
  }
  // deleteGoalHandler.bind(undefined, id);
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteGoalHandler.bind(undefined, id)}
        onLongPress={handleModal}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text style={styles.goalText}>{currentTime()}</Text>
        </View>
        <Text style={styles.goalText}>{text}</Text>
        <Text style={styles.goalText}>{title}</Text>
      </Pressable>
      <GoalDescription
        visible={toggleModal}
        onCancel={handleModal}
      ></GoalDescription>
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

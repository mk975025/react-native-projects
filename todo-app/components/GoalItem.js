import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goal}>
      <Text style={{ color: "#f8f9fa" }}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    width: "90%",
    color: "#f8f9fa",
    backgroundColor: "#212529",
    alignSelf: "center",
  },
});

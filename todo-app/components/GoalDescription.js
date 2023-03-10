import React, { useContext } from "react";
import {
  View,
  Modal,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";

export default function GoalDescription(props) {
  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <View style={styles.editTaskContainer}>
        <View style={{ marginTop: 75 }}>
          <TextInput
            style={styles.input}
            placeholder="Edit task name"
            value={data.enteredGoalTitle}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Edit task description"
            value={data.enteredGoalText}
          ></TextInput>
          <View style={styles.btnContainer}>
            <Pressable style={styles.btn}>
              <Text>Update task</Text>
            </Pressable>
            <Pressable style={styles.btnCancel} onPress={props.onCancel}>
              <Text>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    alignSelf: "center",
    width: 350,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "white",
    color: "white",
    marginBottom: 15,
  },
  editTaskContainer: {
    backgroundColor: "#212529",
    marginTop: "auto",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "flex-start",
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
  btnContainer: {
    alignSelf: "center",
    marginTop: 30,
    width: 350,
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
});

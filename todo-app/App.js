import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.mainContainer}>
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
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "white",
          width: "90%",
          alignSelf: "center",
        }}
      ></View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goal}>
                <Text style={{ color: "#f8f9fa" }}>{itemData.item.text}</Text>
              </View>
            );
          }}
          style={styles.goals}
        >
          {/* {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goal}>
              <Text style={{ color: "#f8f9fa" }}>{goal}</Text>
            </View>
          ))} */}
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgb(186, 73, 73)",
  },
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
  goalsContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: "rgb(186, 73, 73)",
  },
  goals: {
    marginTop: 20,
    flex: 1,
  },
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

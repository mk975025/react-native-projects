import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export const editTasksContext = React.createContext();

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [enteredGoalTitle, setEnteredGoalTitle] = useState("");
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function addGoal() {
    addGoalHandler(enteredGoalTitle, enteredGoalText);
    setEnteredGoalText("");
    setEnteredGoalTitle("");
  }

  function addGoalHandler(enteredGoalTitle, enteredGoalText) {
    if (enteredGoalTitle === "") return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        title: enteredGoalTitle,
        text: enteredGoalText,
        key: Math.random().toString(),
      },
    ]);
    onToggleModal();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    });
  }

  function onToggleModal() {
    setToggleModal((prevState) => !prevState);
  }

  return (
    <editTasksContext.Provider value={data}>
      <View style={styles.mainContainer}>
        <View style={styles.addTaskContainer}>
          <Pressable
            title="Add new task"
            color="#212529"
            onPress={onToggleModal}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Add task</Text>
          </Pressable>
        </View>
        <GoalInput
          addGoalHandler={addGoalHandler}
          isVisible={toggleModal}
          onCancel={onToggleModal}
          enteredGoalText={enteredGoalText}
          setEnteredGoalText={setEnteredGoalText}
          enteredGoalTitle={enteredGoalTitle}
          setEnteredGoalTitle={setEnteredGoalTitle}
          addGoal={addGoal}
        />
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
                <GoalItem
                  title={itemData.item.title}
                  text={itemData.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                  id={itemData.item.key}
                />
              );
            }}
            style={styles.goals}
          ></FlatList>
        </View>
      </View>
    </editTasksContext.Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgb(186, 73, 73)",
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
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#212529",
    // marginLeft: 10,
  },
  btnText: {
    color: "#f8f9fa",
  },
  addTaskContainer: {
    width: 275,
    alignSelf: "center",
    paddingTop: 75,
    paddingBottom: 25,
  },
});

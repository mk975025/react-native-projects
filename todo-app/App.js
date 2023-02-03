import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
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
      <GoalInput addGoalHandler={addGoalHandler} isVisible={toggleModal} />
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
            {
              console.log(itemData.item);
            }
            return (
              <GoalItem
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

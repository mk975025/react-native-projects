import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

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
  return (
    <View style={styles.mainContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
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
});

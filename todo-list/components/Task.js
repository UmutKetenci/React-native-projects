import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Task = ({ text, deleteTask, index }) => {
  return (
    <View style={styles.task}>
      <Text style={styles.taskTitle}>{text ? text : "Fare"}</Text>
      <TouchableOpacity
        onPress={() => deleteTask(index)}
        style={styles.taskBtn}
      >
        <Text style={styles.taskBtnText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  task: {
    backgroundColor: "white",
    marginVertical: 3,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 25,
  },
  taskTitle: { fontSize: 20, letterSpacing: 1 },
  taskBtn: {
    backgroundColor: "red",
    width: 30,
    borderRadius: 50,
  },
  taskBtnText: {
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 40,
    color: "white",
  },
});

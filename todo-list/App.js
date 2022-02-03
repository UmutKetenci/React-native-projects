import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const addTask = () => {
    setList([...list, task]);
    setTask("");
    Keyboard.dismiss();
  };
  const deleteTask = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  return (
    /*Tasks*/
    <View style={styles.container}>
      {/*header*/}
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>TODO LIST</Text>
      </View>
      {/*List tasks*/}
      <View style={styles.itemContainer}>
        {list.map((singleTask, index) => {
          return (
            <Task
              key={index}
              text={singleTask}
              index={index}
              deleteTask={() => deleteTask(index)}
            ></Task>
          );
        })}
      </View>
      {/*enter new tasks*/}
      <View style={styles.inputContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.inputText}
            value={task}
            onChangeText={(text) => setTask(text)}
            placeholder="Enter your ToDo task"
          ></TextInput>
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={addTask} style={styles.inputBtn}>
          <Text style={styles.inputBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c5d0eb",
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  headerWrapper: { padding: 20 },
  header: { textAlign: "center", fontSize: 40, fontWeight: "bold" },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 100,
    width: "90%",
    marginHorizontal: 20,
  },
  inputText: {
    backgroundColor: "white",
    paddingVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    width: 200,
    borderColor: "blue",
    borderWidth: 1,
  },
  inputBtn: {
    backgroundColor: "#356df0",
    width: 50,
    borderRadius: 50,
  },
  inputBtnText: {
    fontSize: 40,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
});

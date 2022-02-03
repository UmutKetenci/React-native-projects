import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const openLink = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.yukyuk}>{count}</Text>

      <TouchableOpacity onPress={() => openLink()} style={styles.btn}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <Button
        title="Reset"
        style={styles.btn2}
        onPress={() => {
          setCount(0);
          setShow(true);
        }}
      ></Button>
      {show ? (
        <Text style={styles.tuktuk}>Counter is reset</Text>
      ) : (
        <Text></Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
  btn: {
    fontSize: 20,
    backgroundColor: "green",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 20,
    width: 200,
    alignItems: "center",
  },
  yukyuk: {
    fontSize: 30,
    height: 100,
    width: 100,
    textAlign: "center",
    marginTop: 0,
    textAlignVertical: "center",
    borderColor: "black",
    borderStyle: "dashed",
    borderWidth: 5,
    borderRadius: 50,
    alignSelf: "center",
  },
  tuktuk: {
    fontSize: 20,
    marginTop: 20,
    borderWidth: 1,
    padding: 3,
    borderRadius: 10,
    borderColor: "gray",
  },
});

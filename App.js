import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    setList([...list, task]);
    setTask("");
  };

  const handleRemove = (idx) => {
    setList(list.filter((_, index) => index !== idx));
  };
  console.log(list);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Enter your task"
          style={styles.input}
          onChangeText={setTask}
          value={task}
        />
        <Button
          title="Add task"
          onPress={() => handleAdd()}
          style={{ backgroundColor: "white" }}
        />
      </View>
      <View style={styles.list}>
        {list.map((val, idx) => (
          <View key={idx} style={styles.taskCard}>
            <Text style={{ fontSize: 18 }}>
              {idx + 1}. {val}
            </Text>
            <Button title="X" onPress={() => handleRemove(idx)} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f3f3f",
    alignItems: "center",
    gap: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: 250,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  list: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  taskCard: {
    width: "100%",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

type AddTaskProps = {
  onAddTask: (taskText: string) => void;
};

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [task, setTask] = useState<string>("");

  const handleAddTask = () => {
    const texto = task.trim();

    if (texto === "") {
      Alert.alert("Campo vazio", "Digite uma tarefa antes de adicionar.");
      return;
    }

    onAddTask(texto);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Adicionar" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#fff",
  },
});

export default AddTask;

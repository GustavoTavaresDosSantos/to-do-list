import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

type AddTaskRouteProp = RouteProp<RootStackParamList, "AddTask">;

type Props = {
  route: AddTaskRouteProp;
  navigation: any;
};

export default function AddTask({ route, navigation }: Props) {
  const { onAddTask } = route.params;
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAddTask = () => {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (trimmedTitle === "") {
      Alert.alert("Campo vazio", "Digite um título para a tarefa.");
      return;
    }

    onAddTask({ title: trimmedTitle, description: trimmedDescription });
    setTitle("");
    setDescription("");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Feather name="arrow-left" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Adicionar Tarefa</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Título (máx. 30 caracteres)"
          placeholderTextColor="#999"
          value={title}
          onChangeText={(text) => (text.length <= 30 ? setTitle(text) : null)}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descrição (opcional, máx. 500 caracteres)"
          placeholderTextColor="#999"
          value={description}
          onChangeText={(text) =>
            text.length <= 500 ? setDescription(text) : null
          }
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#eee",
    paddingTop: 32,
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    padding: 16,
  },
  input: {
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

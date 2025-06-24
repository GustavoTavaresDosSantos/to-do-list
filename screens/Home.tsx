import { View, Text, StyleSheet, FlatList } from "react-native";
import CardTask from "../components/CardTask";
import { useState } from "react";

const tarefas = [
  {
    id: "1",
    title: "When I met you in the summer",
    description: "To my heart beat sound",
    done: "",
  },
  {
    id: "2",
    title: "Na faixa de gaza",
    description: "Só homem bomba, na guerra é tudo ou nada",
    done: "",
  },
];

export default function Home() {
  const [selecionadas, setSelecionadas] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas}
        renderItem={({ item }) => (
          <CardTask title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  separator: {
    height: 12,
  },
});

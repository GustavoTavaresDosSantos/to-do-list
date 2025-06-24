import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import CardTask from "../components/CardTask";

interface Tarefa {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

export default function Home({ navigation }: { navigation: any }) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([
    {
      id: "1",
      title: "When I met you in the summer",
      description: "To my heart beat sound",
      done: false,
    },
    {
      id: "2",
      title: "Na faixa de gaza",
      description: "Só homem bomba, na guerra é tudo ou nada",
      done: false,
    },
  ]);

  const [selecionadas, setSelecionadas] = useState<string[]>([]);

  function toggleSelect(id: string) {
    if (selecionadas.includes(id)) {
      setSelecionadas(selecionadas.filter((item) => item !== id));
    } else {
      setSelecionadas([...selecionadas, id]);
    }
  }

  function selecionarTudo() {
    if (selecionadas.length === tarefas.length) {
      setSelecionadas([]);
    } else {
      setSelecionadas(tarefas.map((item) => item.id));
    }
  }

  function apagarSelecionadas() {
    setTarefas(tarefas.filter((item) => !selecionadas.includes(item.id)));
    setSelecionadas([]);
  }

  function marcarComoConcluidas() {
    setTarefas(
      tarefas.map((item) =>
        selecionadas.includes(item.id) ? { ...item, done: true } : item
      )
    );
    setSelecionadas([]);
  }

  const renderItem: ListRenderItem<Tarefa> = ({ item }) => (
    <CardTask
      title={item.title}
      description={item.description}
      isSelected={selecionadas.includes(item.id)}
      done={item.done}
      onSelect={() => toggleSelect(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.defaultHeader}>
        <Text style={styles.headerTitle}>Minhas Tarefas</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
          <Feather name="plus" style={styles.icon}></Feather>
        </TouchableOpacity>
      </View>
      <View style={styles.selectionHeader}>
        <TouchableOpacity onPress={selecionarTudo}>
          <Feather name="square" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={marcarComoConcluidas}>
          <Feather name="check" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={apagarSelecionadas}>
          <Feather name="trash" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
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
  defaultHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectionHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 24,
  },
  listContent: {
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 100,
  },
});

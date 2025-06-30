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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

interface Tarefa {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

export default function Home({ navigation }: Props) {
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

  type NovaTarefa = { title: string; description: string };

  function adicionarTarefa(nova: NovaTarefa) {
    const novaTarefa: Tarefa = {
      id: Math.random().toString(),
      title: nova.title,
      description: nova.description,
      done: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  }
  const renderItem: ListRenderItem<Tarefa> = ({ item }) => (
    <CardTask
      title={item.title}
      description={item.description}
      isSelected={selecionadas.includes(item.id)}
      done={item.done}
      onSelect={() => toggleSelect(item.id)}
      onPress={() =>
        navigation.navigate("Details", {
          title: item.title,
          description: item.description,
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.defaultHeader}>
        <Text style={styles.headerTitle}>Minhas Tarefas</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddTask", { onAddTask: adicionarTarefa })
          }
        >
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
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  separator: {
    height: 12,
  },
  defaultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  selectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#eee",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 24,
  },
  listContent: {
    paddingBottom: 40,
  },
});

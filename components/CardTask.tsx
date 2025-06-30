import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface CardTaskProps {
  title: string;
  description: string;
  isSelected: boolean;
  done: boolean;
  onSelect: () => void;
  onPress: () => void;
}

export default function CardTask({
  title,
  description,
  isSelected,
  done,
  onSelect,
  onPress,
}: CardTaskProps) {
  return (
    <View style={styles.container}>
      {/* Ícone de seleção */}
      <TouchableOpacity onPress={onSelect}>
        <Feather
          name={isSelected ? "check-square" : "square"}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Área que leva para detalhes */}
      <TouchableOpacity onPress={onPress} style={styles.textContainer}>
        <Text style={[styles.title, done && styles.done]}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  icon: {
    fontSize: 24,
    color: "gray",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
  done: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});

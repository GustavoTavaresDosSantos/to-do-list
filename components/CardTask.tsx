import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface CardTaskProps {
  title: string;
  description: string;
  isSelected: boolean;
  done: boolean;
  onSelect: () => void;
}

export default function CardTask({
  title,
  description,
  isSelected,
  done,
  onSelect,
}: CardTaskProps) {
  return (
    <TouchableOpacity>
      <Feather
        name={isSelected ? "check-square" : "square"}
        style={isSelected ? styles.iconDefault : styles.iconDefault}
      />
      <View>
        <Text style={[styles.title, done && styles.done]}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  iconSelected: {
    color: "green",
    fontSize: 24,
  },
  iconDefault: {
    color: "gray",
    fontSize: 24,
  },
  done: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});

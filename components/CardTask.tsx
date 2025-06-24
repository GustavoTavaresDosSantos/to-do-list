import { View, Text, StyleSheet } from "react-native";

type CardTaskProps = {
  title: string;
  description: string;
};

export default function CardTask({ title, description }: CardTaskProps) {
  return (
    <View style={styles.cardTask}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardTask: {
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
});

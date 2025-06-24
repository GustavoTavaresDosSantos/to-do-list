import { View, Text, StyleSheet, FlatList } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={[]}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});

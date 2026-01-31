import { View, Button, StyleSheet } from "react-native";

export default function Pagination({
  onPrev,
  onNext,
  prev = false,
  next = true,
}) {
  return (
    <View style={styles.container}>
      <Button title="Prev" onPress={onPrev} disabled={!prev} />
      <Button title="Next" onPress={onNext} disabled={!next} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
});

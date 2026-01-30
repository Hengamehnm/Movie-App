import { View, Button, Text } from "react-native";

export default function Pagination({ onPrev, onNext, prev, next }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8,
        alignItems: "center",
      }}
    >
      <Button title="Prev" onPress={onPrev} disabled={!prev} />
      <Button title="Next" onPress={onNext} disabled={!next} />
    </View>
  );
}

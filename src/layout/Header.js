import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header({ title }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.safeTop, { paddingTop: insets.top }]}>
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeTop: {
    backgroundColor: "#2c3e50", 
  },
  container: {
    height: 56,
    backgroundColor: "#2c3e50", 
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

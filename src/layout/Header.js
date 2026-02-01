import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../utils/colors";

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
    backgroundColor: colors.green,
  },
  container: {
    height: 56,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

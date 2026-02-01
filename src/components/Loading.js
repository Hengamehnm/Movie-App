import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { colors } from "../utils/colors";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="medium" />
      <Text style={styles.text}>Loading result</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    gap: 10,
  },
  text: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "600",
  },
});

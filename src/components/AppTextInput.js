import { useState } from "react";
import { View, StyleSheet, TextInput as RNTextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utils/colors";

export default function AppTextInput({ icon, error, ...otherProps }) {
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        focused && !error && styles.containerFocused,
        error && styles.containerError,
      ]}
    >
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} color={colors.text} />
      )}

      <RNTextInput
        style={styles.input}
        placeholderTextColor={colors.text}
        onFocus={() => setFocused(true)}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    gap: 10,
    borderColor: colors.border,
  },
  containerError: {
  borderColor: "red",
},
  containerFocused: {
    borderColor: colors.buttonBlue,
  },

  input: {
    flex: 1,
    color: colors.header,
    fontSize: 12,
    fontWeight: "500",
  },
});

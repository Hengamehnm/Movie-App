import { View, StyleSheet, TextInput as RNTextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../utils/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.text}
          style={styles.icon}
        />
      )}

      <RNTextInput
        style={styles.input}
        placeholderTextColor={colors.text}
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

    borderColor: colors.border,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: colors.header, 
    fontSize: 12,
    fontWeight: 500,
  },
});

export default AppTextInput;

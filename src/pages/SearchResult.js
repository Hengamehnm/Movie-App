import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";
import Dropdown from "../components/Dropdown";
import { colors } from "../utils/colors";

function RequiredLabel({ children }) {
  return (
    <View style={styles.labelRow}>
      <Text style={styles.label}>{children}</Text>
      <Text style={styles.required}>*</Text>
    </View>
  );
}

export default function SearchResult() {
  const [name, setName] = useState("");
  const [searchType, setSearchType] = useState("multi");

  return (
    <View style={styles.container}>
      <RequiredLabel>Search Movie/TV Show Name</RequiredLabel>

      <AppTextInput
        icon="magnify"
        placeholder="ie, James Bond, CSI"
        autoCorrect={false}
        spellCheck={false}
        onChangeText={(t) => {
          setName(t);
        }}
      />
      <RequiredLabel>Choose Search Type</RequiredLabel>
      <View style={styles.search}>
        <View>
          <Dropdown
            selected={searchType}
            list={["movie", "multi", "tv"]}
            onSelect={setSearchType}
          />
          <Text style={{ fontSize: 9 }}>Please Select a Search Type</Text>
        </View>
        <Pressable style={styles.btn}>
          <MaterialCommunityIcons
            name="magnify"
            size={20}
            color={colors.white}
            style={styles.icon}
          />
          <Text style={styles.btnText}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.buttonBlue,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    width: "30%",
    height: 40,
    justifyContent: "center",
  },
  btnText: {
    fontSize: 13,
    color: colors.white,
    textAlign: "center",
    fontWeight: "600",
  },
  container: {
    flex: 1,
    padding: 40,
    gap: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  labelRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  required: { color: "red", marginLeft: 2, fontSize: 14 },
  search: {
    flexDirection: "row",
    gap: 10,
  },
});

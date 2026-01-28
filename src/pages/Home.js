import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>TEST</Text>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

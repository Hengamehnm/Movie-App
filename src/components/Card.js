import { StyleSheet, Text, View } from "react-native";

export default function Card({ title, popularity, release }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>Popularity: {popularity}</Text>
      <Text>Release Date: {release}</Text>
      <Image src/>
    </View>
  );
}

const styles = StyleSheet.create({});

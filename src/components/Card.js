import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

export default function Card({ title, popularity, release, imageSrc }) {
  return (
    <View style={styles.container}>
      {imageSrc ? (
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${imageSrc}` }}
          style={styles.coverImage}
          resizeMode="cover"
        />
      ) : (
        <View />
      )}
      <View style={styles.info}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.text}>Popularity: {popularity}</Text>
        <Text style={styles.text}>Release Date: {release}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "10",
    padding: 10,
    borderBottomColor: colors.border,
    borderBottomWidth: "0.5",
  },

  coverImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  header: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.header,
  },
  info: {
    gap: "3",
  },
  text: {
    color: colors.text,
    fontSize: 11,
    fontWeight: "600",
  },
});

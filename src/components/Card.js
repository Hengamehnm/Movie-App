import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
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
        <Text style={[styles.header, { flexWrap: "wrap" }]}>{title}</Text>
        <Text style={styles.text}>Popularity: {popularity}</Text>
        <Text style={styles.text}>Release Date: {release}</Text>

        <Pressable
          style={styles.btn}
          onPress={() => {
            console.log(`${title} pressed`);
          }}
        >
          <Text style={styles.btnText}>More Details</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.buttonBlue,
    padding: 12,
    borderRadius: 5,
    width: "80%",
  },
  btnText: {
    fontSize: 13,
    color: colors.white,
    textAlign: "center",
    fontWeight: "600",
  },
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
    height: 110,
    marginRight: 10,
  },
  header: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.header,
  },
  info: {
    gap: "4",
    flex: 1,
  },
  text: {
    color: colors.text,
    fontSize: 11,
    fontWeight: "600",
  },
});

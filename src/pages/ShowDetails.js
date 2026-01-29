import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { API_KEY } from "../utils/constants";
import { colors } from "../utils/colors";

export default function ShowDetails({ route }) {
  const { id } = route.params;
  const [movie, setMovie] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
        );
        const data = await res.json();
        setMovie(data);
        navigation.setOptions({ title: data.title });
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie?.title}</Text>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`,
        }}
        resizeMode="cover"
        style={styles.coverImage}
      />
      <Text style={styles.overview}>{movie?.overview}</Text>
      <View style={styles.info}>
        <Text
          style={[
            { borderRightWidth: 1, paddingRight: 5, borderColor: colors.text },
            styles.text,
          ]}
        >
          Popularity: {movie?.popularity}
        </Text>
        <Text style={styles.text}>Release Date: {movie?.release_date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
    padding: 40,
    gap: 40,
  },
  coverImage: {
    width: 270,
    height: 270,
  },
  info: {
    flexDirection: "row",
    gap: 7,
  },
  overview: {
    color: colors.text,
    fontWeight: "500",
  },
  text: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.title,
  },
});

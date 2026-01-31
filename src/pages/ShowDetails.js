import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getDetails } from "../utils/getServices";
import { colors } from "../utils/colors";
import Loading from "../components/Loading";

export default function ShowDetails({ route }) {
  const { id, mediaType = "movie" } = route.params;
  const [movie, setMovie] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await getDetails(mediaType, id);
        setMovie(data);
        navigation.setOptions({ title: data?.title || data?.name });
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id, mediaType]);

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie?.title || movie?.name}</Text>

      {movie?.poster_path ? (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          }}
          resizeMode="cover"
          style={styles.coverImage}
        />
      ) : (
        <Text style={styles.text}>No poster available</Text>
      )}

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
        <Text style={styles.text}>
          Release Date: {movie?.first_air_date || movie?.release_date}
        </Text>
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

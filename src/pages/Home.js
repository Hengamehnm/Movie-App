import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import { getMovie } from "../utils/getServices";
import { colors } from "../utils/colors";
import Dropdown from "../components/Dropdown";

const Home = () => {
  const navigation = useNavigation();
  const [movie, setMovie] = useState([]);
  const [movieType, setMovieType] = useState("popular");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setMovie([]);
    setPage(1);
  }, [movieType]);
  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const data = await getMovie(movieType, page);
        setMovie((prev) => [...prev, ...(data?.results ?? [])]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, [movieType, page]);
  const goToShow = (id) => {
    navigation.navigate("ShowDetails", { id });
  };
  return (
    <ScrollView style={styles.container}>
      <Dropdown
        selected={movieType}
        list={["now_playing", "popular", "top_rated", "upcoming"]}
        onSelect={setMovieType}
      />
      {movie.map((m, index) => (
        <Card
          key={index}
          title={m.title}
          popularity={m.popularity}
          release={m.release_date}
          imageSrc={m.poster_path}
          onPressDetails={() => goToShow(m.id)}
        />
      ))}
      <View style={styles.btnWrapper}>
        {loading ? (
          <ActivityIndicator color={colors.green} size="large" />
        ) : (
          <Button title="Load More" onPress={() => setPage((p) => p + 1)} />
        )}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  btnWrapper: {
    marginBottom: 20,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

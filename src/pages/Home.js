import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getMovie } from "../utils/getServices";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [movieType, setMovieType] = useState("popular");
  const [page, setPage] = useState(1);
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getMovie(movieType, page);
        setMovie((prev) => [...prev, ...(data?.results ?? [])]);
      } catch (error) {
        console.log(error);
      }
    };
    loadMovies();
  }, [movieType, page]);
  return (
    <ScrollView style={styles.container}>
      {movie.map((m) => (
        <Card
          key={m.id}
          title={m.title}
          popularity={m.popularity}
          release={m.release_date}
          imageSrc={m.poster_path}
        />
      ))}
      <Button title="Load More" onPress={() => setPage((p) => p + 1)} />
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

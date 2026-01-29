import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getMovie } from "../utils/getServices";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [movieType, setMovieType] = useState("popular");
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getMovie(movieType);
        console.log(data.results);

        setMovie(data?.results ?? []);
      } catch (error) {
        console.log(error);
      }
    };
    loadMovies();
  }, [movieType]);
  return (
    <ScrollView style={styles.container}>
      {movie.map((m) => (
        <Card key={m.id} title={m.title} popularity={m.popularity} release={m.release_date}/>
      ))}
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

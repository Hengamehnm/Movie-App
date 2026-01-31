import { ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import Pagination from "../components/Pagination";
import { getMovie } from "../utils/getServices";
import { colors } from "../utils/colors";

const Home = () => {
  const navigation = useNavigation();

  const [movie, setMovie] = useState([]);
  const [movieType, setMovieType] = useState("popular");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMovie([]);
    setPage(1);
  }, [movieType]);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const data = await getMovie("movie", movieType, page);
        setMovie(data?.results ?? []);
      } catch (e) {
        console.log(e);
        setMovie([]);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [movieType, page]);

  const canPrev = page > 1;
  const visibleMovies = movie.slice(0, 10);
  return (
    <ScrollView style={styles.container}>
      <Dropdown
        selected={movieType}
        list={["now_playing", "popular", "top_rated", "upcoming"]}
        onSelect={setMovieType}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Pagination
            onPrev={canPrev ? () => setPage((p) => p - 1) : undefined}
            onNext={() => setPage((p) => p + 1)}
            prev={canPrev}
            next={true}
          />

          {visibleMovies.map((m) => (
            <Card
              key={m.id}
              title={m.title}
              popularity={m.popularity}
              release={m.release_date}
              imageSrc={m.poster_path}
              onPressDetails={() =>
                navigation.navigate("ShowDetails", {
                  id: m.id,
                  mediaType: "movie",
                })
              }
            />
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
});

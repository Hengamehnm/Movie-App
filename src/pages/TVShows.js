import { StyleSheet, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getMovie } from "../utils/getServices";
import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import { colors } from "../utils/colors";
import Pagination from "../components/Pagination";
import { ScrollView } from "react-native-gesture-handler";

export default function TVShows() {
  const navigation = useNavigation();

  const [tvShow, setTvShow] = useState([]);
  const [tvShowType, setTvShowType] = useState("popular");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTvShow([]);
    setPage(1);
  }, [tvShowType]);
  useEffect(() => {
    setLoading(true);
    const loadTvShows = async () => {
      try {
        const data = await getMovie("tv", tvShowType, page);
        setTvShow(data?.results ?? []);
      } catch (error) {
        console.log("falied getting tv show");
        setTvShow([]);
      } finally {
        setLoading(false);
      }
    };
    loadTvShows();
  }, [tvShowType, page]);
  const canPrev = page > 1;
  const visibleTvShows = tvShow.slice(0, 10);
  return (
    <ScrollView style={styles.container}>
      <Dropdown
        selected={tvShowType}
        list={["airing_today", "on_the_air", "popular", "top_rated"]}
        onSelect={setTvShowType}
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

          {visibleTvShows.map((t) => (
            <Card
              key={t.id}
              title={t.name}
              popularity={t.popularity}
              release={t.first_air_date}
              imageSrc={t.poster_path}
              onPressDetails={() =>
                navigation.navigate("ShowDetails", {
                  id: t.id,
                  mediaType: "tv",
                })
              }
            />
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

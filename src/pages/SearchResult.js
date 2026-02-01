import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../components/AppTextInput";
import Dropdown from "../components/Dropdown";
import Loading from "../components/Loading";
import { colors } from "../utils/colors";
import { searchMovieApi } from "../utils/getServices";
import Card from "../components/Card";
import { ScrollView } from "react-native-gesture-handler";
function RequiredLabel({ children }) {
  return (
    <View style={styles.labelRow}>
      <Text style={styles.label}>{children}</Text>
      <Text style={styles.required}>*</Text>
    </View>
  );
}
const SEARCH_TYPES = ["movie", "multi", "tv"];
export default function SearchResult() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [searchType, setSearchType] = useState("multi");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  async function searchMovie() {
    setLoading(true);
    try {
      const res = await searchMovieApi(searchType, name);
      setSearchResults(res?.results ?? []);
      setName("");
    } catch (error) {
      console.log("failed search", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <RequiredLabel>Search Movie/TV Show Name</RequiredLabel>

        <AppTextInput
          value={name}
          icon="magnify"
          placeholder="ie, James Bond, CSI"
          autoCorrect={false}
          spellCheck={false}
          onChangeText={setName}
        />
        <RequiredLabel>Choose Search Type</RequiredLabel>
        <View style={styles.search}>
          <View>
            <Dropdown
              selected={searchType}
              list={SEARCH_TYPES}
              onSelect={setSearchType}
            />
            <Text style={{ fontSize: 9 }}>Please Select a Search Type</Text>
          </View>
          <Pressable style={styles.btn} onPress={searchMovie}>
            <MaterialCommunityIcons
              name="magnify"
              size={20}
              color={colors.white}
              style={styles.icon}
            />
            <Text style={styles.btnText}>Search</Text>
          </Pressable>
        </View>
      </View>
      {loading ? (
        <Loading />
      ) : searchResults.length > 0 ? (
        searchResults.map((m, index) => (
          <Card
            key={index}
            title={m.title || m.name}
            popularity={m.popularity}
            release={m.release_date || m.first_air_date}
            imageSrc={m.poster_path}
            onPressDetails={() =>
              navigation.navigate("ShowDetails", {
                id: m.id,
                mediaType: m.media_type || searchType,
              })
            }
          />
        ))
      ) : (
        <Text
          style={{
            textAlign: "center",
            marginTop: 22,
            fontSize: 24,
            fontWeight: 700,
            color: colors.title,
          }}
        >
          Please Initiate a Search
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.buttonBlue,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    paddingHorizontal: 12,
    height: 35,
    marginBottom: 10,
    gap: 5,
    justifyContent: "center",
  },
  btnText: {
    fontSize: 13,
    color: colors.white,
    textAlign: "center",
    fontWeight: "600",
  },
  container: {
    flex: 1,
    padding: 40,
    gap: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 50,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  required: { color: "red", marginLeft: 2, fontSize: 14 },
  search: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
});

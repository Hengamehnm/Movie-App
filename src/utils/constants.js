import Constants from "expo-constants";

const extra =
  Constants.expoConfig?.extra ??
  Constants.manifest?.extra ??
  Constants.manifest2?.extra ??
  {};

export const URL = "https://api.themoviedb.org/3";
export const API_KEY = extra.TMDB_API_KEY;
export const ACCESS_TOKEN = extra.TMDB_ACCESS_TOKEN;

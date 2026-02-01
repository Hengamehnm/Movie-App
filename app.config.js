import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    ...(config.extra || {}),
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN,
  },
});
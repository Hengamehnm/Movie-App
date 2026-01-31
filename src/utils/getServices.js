import { ACCESS_TOKEN, URL } from "./constants";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};

export async function getMovie(media, type, page) {
  const url = `${URL}/${media}/${type}?language=en-US&page=${page}`;

  try {
    const res = await fetch(url, { method: "GET", headers });
    return await res.json();
  } catch (error) {
    console.log(`failed fetch ${media}`, error);
  }
}

export async function searchMovieApi(selected, searchInput) {
  const url = `${URL}/search/${selected}?query=${searchInput}&language=en-US&page=1`;

  try {
    const res = await fetch(url, { method: "GET", headers });
    return await res.json();
  } catch (error) {
    console.log("failed fetch movie", error);
  }
}

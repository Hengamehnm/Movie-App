import { ACCESS_TOKEN, URL } from "./constants";
export async function getMovie(type, page) {
  const url = `${URL}/movie/${type}?language=en-US&page=${page}`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("failed fetch movie", error);
  }
}

export async function searchMovieApi(selected, searchInput) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/${selected}?query=${searchInput}&language=en-US&page=1'`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      },
    );

    const data = await res.json();

    
    return data;
  } catch (error) {
    console.log("failed fetch movie", error);
  }
}

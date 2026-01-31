import { API_KEY, URL } from "./constants";

export async function getMovie(media, type, page) {
  const url = `${URL}/${media}/${type}?api_key=${API_KEY}&language=en-US&page=${page}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { accept: "application/json" },
    });
    return await res.json();
  } catch (error) {
    console.log(`failed fetch ${media}`, error);
  }
}

export async function searchMovieApi(selected, searchInput) {
  const url = `${URL}/search/${selected}?api_key=${API_KEY}&query=${searchInput}&language=en-US&page=1`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { accept: "application/json" },
    });
    return await res.json();
  } catch (error) {
    console.log("failed fetch search", error);
  }
}

export async function getDetails(mediaType, id) {
  const url = `${URL}/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { accept: "application/json" },
    });
    return await res.json();
  } catch (error) {
    console.log("failed fetch details", error);
  }
}

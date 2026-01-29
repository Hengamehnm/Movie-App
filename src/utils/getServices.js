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

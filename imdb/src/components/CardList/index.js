import React, { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "../Card";

const apiKey = "10d5452f34f29e61ebc8aa7549bd0ac7";
const baseURL = "https://api.themoviedb.org/3/search/movie";

function CardList() {
  const [filmList, setFilmList] = useState([]);

  async function fetchFilmList() {
    let { data } = await axios.get(baseURL, {
      params: { page: 1, query: "Fight Club", api_key: apiKey },
    });
    setFilmList(data.results);
  }

  useEffect(() => {
    fetchFilmList();
  }, []);
  return (
    <>
      {filmList &&
        filmList.map((film) => <Card key={film.id} title={film.title} />)}
    </>
  );
}

export { CardList };

import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://swapi.dev/api/films");
      const movies = result.data.results;
      const listItems = movies.map((movie) => (
        <Character
          key={movie.episode_id}
          movieTitle={movie.title}
          releaseDate={movie.release_date}
        />
      ));
      setData(listItems);
    };

    fetchData();
  }, []);

  return <ul>{data}</ul>;
}

export default App;

import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const Netflix = () => {

  const [user, setUser] = useState([]);
  const [movies, setMovies] = useState("");

  const handlesubmit = async () => {
    try {

      const res = await axios.get(`https://www.omdbapi.com/?apikey=7e4ecbd9&s=${movies}`);

      if (res.data.Response === "True") {
        setUser(res.data.Search);
      } else {
        alert("Movie not Found");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">

      <h1 className="title">Netflix Movie Search</h1>

      <div className="search">

        <input
          type="search"
          placeholder="Search Your Favourite Movie..."
          value={movies}
          onChange={(e) => setMovies(e.target.value)}
        />

        <button onClick={handlesubmit}>Search</button>

      </div>

      <div className="container">

        {user?.map((item) => (
          <div className="movie-card" key={item.imdbID}>

            <img src={item.Poster} alt="movie" />

            <h3>{item.Title}</h3>

            <p>{item.Year}</p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Netflix;
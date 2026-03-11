import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const Netflix = () => {

  const [user, setUser] = useState([]);
  const [movies, setMovies] = useState("");

  const handlesubmit = async () => {
    try {

      const res = await axios.get(`http://www.omdbapi.com/?apikey=7e4ecbd9&s=${movies}`);

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

      <h1>Welcome To Netflix</h1>

      <div className="search">

        <input
          type="search"
          placeholder="Enter Movie Name"
          value={movies}
          onChange={(e) => setMovies(e.target.value)}
        />

        <button onClick={handlesubmit}>Search</button>

      </div>

      <div className="container">

        {user?.map((item) => (
          <div className="movie-card" key={item.imdbID}>

            <h3>{item.Title}</h3>

            <img src={item.Poster} alt="movie" />

            <p>{item.Year}</p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Netflix;
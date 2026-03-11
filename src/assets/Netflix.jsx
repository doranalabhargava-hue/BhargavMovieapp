import React, { useState } from 'react'
import axios from 'axios'

const Netflix = () => {
    const [user, setUser] = useState([])
    const [movies, setMovies] = useState("")

    const handlesubmit = (e) => {
        axios.get("")
            .then(res => {
                setUser(user.data.search)
            })
    }
    return (
        <div>
            <h1>Welcome To The Netflix</h1>

            <input type="search"
                value={search}
                placeholder='Enter The Movie Name'
                onChange={(e) = setMovies(e.target.value)} />
            <button type="button" onClick={handlesubmit}>Serch</button>

            {
                user.map((item) => {
                    <div key={item.imdbID}>
                        <h1>{item.title}</h1>
                        <img src={item.Poster} width="150" alt="movie" />
                        <p>{item.year}</p>


                    </div>
                })
            }
        </div>
    )
}

export default Netflix
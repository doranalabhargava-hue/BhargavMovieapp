import React, { useEffect, useState } from 'react'
import axios from 'axios'

const movieapp = () => {
    const [user, setUser] = useState([])
    const [movie, setMovie] = useState()

    const handleSrech = (e) => {
    }
    useEffect(() => {
        axios.get("http://www.omdbapi.com/?apikey=7e4ecbd9&s=${movie}")
            .then(res => {
                setUser(user.data.search)
            })

    }, [])

    return (
        <div>
            <h1>Welcome To netflix</h1>

            <input type="search"
                placeholder='Enter The Movie Name'
                 value={movie}
                 onChange={(e)=>setMovie(e.target.value)} />
                 <button type="button" onChange={handleSrech}>Serch</button>

        </div>
    )
}

export default movieapp
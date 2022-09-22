import { React, useEffect, useState } from "react"

const URL = "https://www.omdbapi.com/?s=narnia&plot=full&apikey=691f9d40"
const reqData = () => fetch(URL).then((res) => res.json())

function App() {
    const [avengers, setAvengers] = useState([])
    const [film, setFilm] = useState("")

    useEffect(() => {
        const fetchMovie = () => {
            reqData()
                .then((res) => {
                    setAvengers(res.Search)
                })
                .catch((err) => console.log(err))
        }
        fetchMovie()
    }, [])

    console.log(avengers)

    function buttonSearch(e) {
        e.preventDefault()
        console.log(film)
    }

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <form onSubmit={buttonSearch}>
                <label>Masukan Movie</label>
                <input
                    type="text"
                    placeholder="film..."
                    onChange={(e) => setFilm(e.target.value)}
                ></input>
                <button type="submit">Submit</button>
            </form>
            {avengers.map((movies) => (
                <>
                    <li>{movies.Title}</li>
                    <li>{movies.Plot}</li>
                </>
            ))}
        </div>
    )
}

export default App

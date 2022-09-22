import { React, useState } from "react"
import { Button, Form } from "react-bootstrap"

function App() {
    const [film, setFilm] = useState("")
    const [movies, setMovies] = useState([])

    function buttonSearch(e) {
        e.preventDefault()

        const fetchMovie = () => {
            const URL = `https://www.omdbapi.com/?s=${film}&plot=full&apikey=691f9d40`
            fetch(URL)
                .then((res) => res.json())
                .then((res) => {
                    setMovies(res.Search)
                })
                .catch((err) => console.log(err))
        }

        fetchMovie()
    }

    return (
        <div className="App">
            <Form onSubmit={buttonSearch}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control
                        className="w-25"
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setFilm(e.target.value)}
                    />
                    <Button variant="primary" type="submit" className="h-25">
                        Search
                    </Button>
                </Form.Group>
            </Form>

            {movies.map((movies) => (
                <>
                    <li>{movies.Title}</li>
                </>
            ))}
        </div>
    )
}

export default App

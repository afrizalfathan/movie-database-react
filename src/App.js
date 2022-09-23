import { React, useState } from "react"
import { Button, Form } from "react-bootstrap"
import Cards from "./components/Cards"
import Modals from "./components/Modals"

function App() {
    const [film, setFilm] = useState("")
    const [movies, setMovies] = useState([])
    const [show, setShow] = useState(false)
    const [moviesDetail, setMoviesDetail] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // Fungsi untuk aktifkan tombol search
    function buttonSearch(e) {
        e.preventDefault()

        // fungsi untuk mengambil data dari omdbAPI
        const fetchMovie = () => {
            const URL = `https://www.omdbapi.com/?s=${film}&apikey=691f9d40`
            fetch(URL)
                .then((res) => res.json())
                .then((res) => {
                    setMovies(res.Search)
                })
                .then((res) => console.log(movies))
                .catch((err) => console.log(err))
        }

        fetchMovie()
    }

    const handleMovieDetail = (movies) => {
        handleShow()
        setMoviesDetail(movies)
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
                <Cards
                    movies={movies}
                    handleMovieDetail={handleMovieDetail}
                    show={show}
                    setShow={setShow}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    moviesDetail={moviesDetail}
                ></Cards>
            ))}

            <Modals
                show={show}
                handleClose={handleClose}
                moviesDetail={moviesDetail}
            ></Modals>
        </div>
    )
}

export default App

import { React, useState } from "react"
import { Button, Form } from "react-bootstrap"
import Cards from "./components/Cards"
import "./style/style.css"
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

        // fungsi untuk mengambil data dari omdbAPI dan untuk mencari movie
        const searchMovie = () => {
            const URL = `https://www.omdbapi.com/?s=${film}&apikey=691f9d40`
            fetch(URL)
                .then((res) => res.json())
                .then((res) => {
                    setMovies(res.Search)
                })
                .catch((err) => console.log(err))
        }

        searchMovie()
    }

    // fungsi untuk mengambil data film yang detail

    const handleMovieDetail = (moviesId) => {
        handleShow()
        const detailMovie = () => {
            const URL = `https://www.omdbapi.com/?i=${moviesId}&apikey=691f9d40`
            fetch(URL)
                .then((res) => res.json())
                .then((res) => {
                    setMoviesDetail(res)
                })
                .catch((err) => console.log(err))
        }

        detailMovie()
    }

    return (
        <div className="App">
            <h2 style={{ margin: `1% 0 1% 10%` }}>Movie Database</h2>
            <div className="form-container">
                <Form onSubmit={buttonSearch}>
                    <Form.Group
                        className="d-flex"
                        style={{ width: 35 + `rem`, margin: `0 0 2% 10%` }}
                    >
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            onChange={(e) => setFilm(e.target.value)}
                        />
                        <Button
                            variant="primary"
                            type="submit"
                            className="h-25"
                        >
                            Search
                        </Button>
                    </Form.Group>
                </Form>
            </div>
            <div className="movies-container">
                {movies.map((movies) => (
                    <Cards
                        key={movies.imdbID}
                        movies={movies}
                        handleMovieDetail={handleMovieDetail}
                        show={show}
                        setShow={setShow}
                        handleClose={handleClose}
                        handleShow={handleShow}
                        moviesDetail={moviesDetail}
                    ></Cards>
                ))}
            </div>

            <Modals
                show={show}
                handleClose={handleClose}
                moviesDetail={moviesDetail}
            ></Modals>
        </div>
    )
}

export default App

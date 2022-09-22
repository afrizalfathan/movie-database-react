import { React, useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"

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
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>

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

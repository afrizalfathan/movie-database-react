import { Card, Button } from "react-bootstrap"

const Cards = ({ movies, handleMovieDetail }) => {
    return (
        <>
            <div className="card-container d-flex">
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={movies.Poster} />
                    <Card.Body>
                        <Card.Title>{movies.Title}</Card.Title>
                        <Card.Text>{movies.Year}</Card.Text>
                        <Card.Text>{movies.Type}</Card.Text>
                        <Button
                            variant="primary"
                            onClick={handleMovieDetail.bind(
                                this,
                                movies.imdbID
                            )}
                        >
                            Show Detail
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Cards

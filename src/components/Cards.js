import { Card, Button } from "react-bootstrap"

const Cards = ({
    movies,
    handleMovieDetail,
    show,
    handleClose,
    moviesDetail,
}) => {
    return (
        <>
            <div className="card-container d-flex">
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={movies.Poster} />
                    <Card.Body>
                        <Card.Title>{movies.Title}</Card.Title>
                        <Card.Text>{movies.Plot}</Card.Text>
                        <Button
                            variant="primary"
                            onClick={handleMovieDetail.bind(this, movies)}
                        >
                            Go somewhere
                        </Button>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default Cards

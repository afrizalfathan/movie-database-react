import { Card, Button } from "react-bootstrap"

const Cards = ({ movies }) => {
    return (
        <div className="card-container d-flex">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={movies.Poster} />
                <Card.Body>
                    <Card.Title>{movies.Title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards

import { Modal, Button } from "react-bootstrap"

const Modals = ({ show, handleClose, moviesDetail }) => {
    return (
        <div className="modal-container">
            <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{moviesDetail.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex">
                    <img
                        src={moviesDetail.Poster}
                        style={{ marginRight: `30px` }}
                    />
                    <div className="detail-movies pl-4">
                        <p>
                            <b>Actors :</b> {moviesDetail.Actors}
                        </p>
                        <p>
                            <b>Released :</b> {moviesDetail.Released}
                        </p>
                        <p>
                            <b>Genre :</b> {moviesDetail.Genre}
                        </p>
                        <p>
                            <b>Plot : </b>
                            {moviesDetail.Plot}
                        </p>
                        <p>
                            <b>Metascore : </b> {moviesDetail.Metascore}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Modals

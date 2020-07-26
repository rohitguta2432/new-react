import React from 'react'
import { Modal,Button } from 'react-bootstrap'

function CategoryModal(props) {
   
    return (
        <div>
          <Modal 
        show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
         <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
        </div>
    )
}

export default CategoryModal

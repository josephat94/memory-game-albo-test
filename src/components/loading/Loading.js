import  Modal from "react-bootstrap/Modal"
import React from 'react';
import { Spinner } from "react-bootstrap";
const Loading =props=>{
const {show, text}= props;

    return(

        <Modal
        size="md"
        show={show}
       centered={true}
      >
        <Modal.Body className="d-flex justify-content-center align-items-center">

        <Spinner animation="border" className="mr-4" />
         {text}
        </Modal.Body>
      </Modal>

    )
}

export default Loading;
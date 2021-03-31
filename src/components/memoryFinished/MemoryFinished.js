import Modal from "react-bootstrap/Modal";
import React from "react";

import { Button } from "react-bootstrap/";
const MemoryFinished = (props) => {
  const { show, text } = props;

  return (
    <Modal size="md" show={show} centered={true}>
      <Modal.Body className="d-flex justify-content-center align-items-center pt-5 pb-5">
        <h2>{text}</h2>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={()=>{
            props.onReset();
        }}>Volver a jugar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MemoryFinished;

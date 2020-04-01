import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TeamviewerBtnImg from '../images/teamviewer-button.png';

const ModalWindow = (props) => {
  const { supportModal } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <Button id="support" color="primary" onClick={toggle}>{supportModal.modal_button_text}</Button>
      <Modal isOpen={modal} toggle={toggle} className="support-modal">
        <ModalHeader toggle={toggle}>{supportModal.title}</ModalHeader>
        <ModalBody>
          <div className="d-flex justify-content-between">
            <div>{supportModal.phone_title}: </div>
            <div className="d-flex flex-column">
              <div>
                <a href={`callto: ${supportModal.phone_number}`}>{supportModal.phone_number}</a>
              </div>
              <div>
                <a href={`callto: ${supportModal.mobile_phone_number}`}>{supportModal.mobile_phone_number}</a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>{supportModal.email_title}:</div>
            <div>
              <a href={`mailto: ${supportModal.email}`}>{supportModal.email}</a>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div><h6>{supportModal.subtitle}</h6></div>
          <div className="download-button">
            <a href="https://support.amblik.ee" target="_blank" rel="noopener noreferrer" alt={supportModal.button_text}>
              <img src={TeamviewerBtnImg} alt={supportModal.button_text} />
              <span>{supportModal.button_text}</span>
            </a>
          </div>
          <div>
            <a href="#">{supportModal.link_text}</a>
          </div>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}

export default ModalWindow;
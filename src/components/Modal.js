import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import TeamviewerBtnImg from "../images/teamviewer-button.png";

const ModalWindow = (props) => {
  const { supportModal } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <Button
        className="button-main button_support text-uppercase"
        onClick={toggle}
      >
        {supportModal.modal_button_text}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="support-modal">
        <ModalHeader toggle={toggle}>{supportModal.title}</ModalHeader>
        <ModalBody>
          <div className="d-flex justify-content-center mb-3">
            <div>
              {supportModal.phone_title}:<span>&nbsp;</span>
              <a href={`tel:${supportModal.phone_number.replace(/\s/g, "")}`}>
                {supportModal.phone_number}
              </a>
              <span>&nbsp;</span>
              <a
                href={`tel:${supportModal.mobile_phone_number.replace(
                  /\s/g,
                  ""
                )}`}
              >
                {supportModal.mobile_phone_number}
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              {supportModal.email_title}:<span>&nbsp;</span>
              <a href={`mailto: ${supportModal.email}`}>
                {" "}
                {supportModal.email}
              </a>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div>
            <h6>{supportModal.subtitle}</h6>
          </div>
          <div className="download-button">
            <a
              href={supportModal.teamviewer_support_link.url}
              target="_blank"
              rel="noopener noreferrer"
              alt={supportModal.button_text}
            >
              <img src={TeamviewerBtnImg} alt={supportModal.button_text} />
              <span>{supportModal.button_text}</span>
            </a>
          </div>
          <div>{supportModal.link_text}</div>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ModalWindow;

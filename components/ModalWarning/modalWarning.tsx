import { FC } from 'react';
import styles from './ModalWarning.module.scss';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface IProps {
  show: boolean;
  handleClick: () => void;
}

const ModalWarning: FC<IProps> = ({ show, handleClick }) => {
  return (
    <Modal show={show} onHide={handleClick} className={styles.modalContainer}>
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title>No Cheating</Modal.Title>
      </Modal.Header>
      <Modal.Body>Proceed to next Question</Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleClick}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWarning;

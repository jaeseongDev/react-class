import React from 'react';
import * as ReactDOM from 'react-dom'
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;

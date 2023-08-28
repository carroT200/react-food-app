import ReactDOM from 'react-dom';

import { Fragment } from 'react';

import classes from './Modal.module.css';

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide} />;
};

const portalElements = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onHide={props.onHide} />,
        portalElements
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElements
      )}
    </Fragment>
  );
};

export default Modal;

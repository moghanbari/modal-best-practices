const Modal = ({ show, onCloseButtonClick }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="body">
          Click on the close button to close the modal.
        </div>
        <div className="footer">
          <button onClick={onCloseButtonClick}>Close Modal</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

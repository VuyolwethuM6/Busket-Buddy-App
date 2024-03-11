import PropTypes from 'prop-types'; // Import PropTypes
import './Modal.css';

const Modal = ({ closeModal }) => {
  const handleOutsideClick = (event) => {
    if (event.target.id === 'myModal') {
      closeModal();
    }
  };

  return (
    <div id="myModal" className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Add Item</h2>
        <form id="addItemForm">
          <div className="form-group">
            <input type="text" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-group">
            <input type="text" id="description" required />
            <label htmlFor="description">Description</label>
          </div>
          <div className="form-group">
            <input type="number" id="quantity" required />
            <label htmlFor="quantity">Quantity</label>
          </div>
          <div className="form-group">
            <input type="number" id="price" step="0.01" required />
            <label htmlFor="price">Price</label>
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

// Prop validation
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Modal;

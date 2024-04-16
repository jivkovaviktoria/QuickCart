import React from 'react';
import ReactDOM from 'react-dom';

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'white', padding: '1em', maxWidth: '500px', width: '80%' }}>
                <h2>Confirm Delete</h2>
                <p>Are you sure you want to delete this item?</p>
                <button onClick={onDelete}>Yes, Delete</button>
                <button onClick={onClose}>No, Cancel</button>
            </div>
        </div>,
        document.body
    );
};

export default DeleteConfirmationModal;